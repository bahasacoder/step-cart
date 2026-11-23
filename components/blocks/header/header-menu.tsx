'use client'
import {
  cloneElement,
  createContext,
  isValidElement,
  useContext,
  useEffect,
  useState,
  type ReactElement,
  type ReactNode,
} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  CreditCardIcon,
  LogInIcon,
  MenuIcon,
  MinusIcon,
  PlusIcon,
  ShoppingBagIcon,
  ShoppingCartIcon,
  Trash2Icon,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import MenuDropdown from '@/components/blocks/menu-dropdown'
import MenuNavigation from '@/components/blocks/menu-navigation'
import type { NavigationSection } from '@/components/blocks/menu-navigation'
import { cn } from '@/lib/utils'
import PbcLogo from '@/public/assets/pbc-logo.svg'
import { formatIDR } from '@/actions/generalFunctions';
import { removeItemFromCart, onUpdateQuantity, increaseQuantity, decreaseQuantity, clearCart } from '@/lib/features/cart/cartSlice';
import { useAppSelector, useAppDispatch } from "@/lib/hooks";


type SheetContextValue = {
  open: boolean
  setOpen: (open: boolean) => void
}

const SheetContext = createContext<SheetContextValue | null>(null)

const useSheet = () => {
  const context = useContext(SheetContext)
  if (!context) throw new Error('Sheet components must be used within Sheet')
  return context
}

const Sheet = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(false)
  return (
    <SheetContext.Provider value={{ open, setOpen }}>
      {children}
    </SheetContext.Provider>
  )
}

type SheetControlProps = { asChild?: boolean; children: ReactNode }

const SheetTrigger = ({ asChild, children }: SheetControlProps) => {
  const { open, setOpen } = useSheet()
  if (asChild && isValidElement(children)) {
    const child = children as ReactElement<{ onClick?: (event: any) => void }>
    return cloneElement(child, {
      onClick: (event) => {
        child.props.onClick?.(event)
        setOpen(!open)
      },
    })
  }
  return <button onClick={() => setOpen(!open)}>{children}</button>
}

const SheetClose = ({ asChild, children }: SheetControlProps) => {
  const { setOpen } = useSheet()
  if (asChild && isValidElement(children)) {
    const child = children as ReactElement<{ onClick?: (event: any) => void }>
    return cloneElement(child, {
      onClick: (event) => {
        child.props.onClick?.(event)
        setOpen(false)
      },
    })
  }
  return <button onClick={() => setOpen(false)}>{children}</button>
}

const SheetContent = ({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) => {
  const { open, setOpen } = useSheet()
  if (!open) return null
  return (
    <div
      className='fixed inset-0 z-50 bg-black/50'
      role='presentation'
      onClick={() => setOpen(false)}
    >
      <section
        role='dialog'
        aria-modal='true'
        className={`bg-background fixed inset-y-0 right-0 ${className ?? ''}`}
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type='button'
          aria-label='Close cart'
          className='absolute right-4 top-4'
          onClick={() => setOpen(false)}
        >
          ×
        </button>
        {children}
      </section>
    </div>
  )
}

const SheetHeader = ({ children }: { children: ReactNode }) => (
  <div className='flex flex-col gap-1.5 p-4'>{children}</div>
)
const SheetTitle = ({ children, className }: { children: ReactNode; className?: string }) => (
  <h2 className={className}>{children}</h2>
)
const SheetDescription = ({ children }: { children: ReactNode }) => (
  <p className='text-muted-foreground text-sm'>{children}</p>
)
const SheetFooter = ({ children, className }: { children: ReactNode; className?: string }) => (
  <div className={className}>{children}</div>
)

type HeaderProps = {
  navigationData: NavigationSection[]
  className?: string
}

const HeaderMenu = ({ navigationData, className }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.items) ?? [];
  const totalItemsCount = cartItems.reduce(
    (total, item) => total + (Number(item.quantity) || 0),
    0
  );
  const subtotal = cartItems.reduce(
    (sum, item) => sum + (Number(item.hargaItem) || 0) * item.quantity,
    0
  )

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 z-50 h-18 w-full border-b transition-all duration-300',
        isScrolled ? 'bg-background shadow-md' : 'bg-transparent',
        className
      )}
    >
      <div className='mx-auto flex h-full max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8'>
        {/* Logo */}
        <Link href='/' className='flex items-center gap-3'>
          <Image src={PbcLogo} alt='PasarBone Logo' width={40} height={40} />
          <span className='text-primary text-[20px] font-semibold'>
            PasarBone
          </span>
        </Link>

        {/* Desktop Navigation */}
        <MenuNavigation
          navigationData={navigationData}
          className='max-lg:hidden [&_[data-slot="navigation-menu-list"]]:gap-1'
        />

        {/* Actions */}
        <div className='flex items-center gap-2 sm:gap-3'>
          <TooltipProvider>
            {/* Slide-Over Cart Drawer (Sheet) */}
            <Sheet>
              <Tooltip>
                <TooltipTrigger asChild>
                  <SheetTrigger asChild>
                    <Button
                      variant='outline'
                      size='icon'
                      className='relative rounded-full'
                    >
                      <ShoppingCartIcon className='size-4' />
                      <span className='sr-only'>Cart</span>

                      {/* Item Count Badge */}
                      {totalItemsCount > 0 && (
                        <span className='bg-primary text-primary-foreground absolute -top-1.5 -right-1.5 flex size-5 items-center justify-center rounded-full text-[11px] font-semibold'>
                          {totalItemsCount > 99 ? '99+' : totalItemsCount}
                        </span>
                      )}
                    </Button>
                  </SheetTrigger>
                </TooltipTrigger>
                <TooltipContent>Cart ({ totalItemsCount })</TooltipContent>
              </Tooltip>

              <SheetContent className='flex w-full flex-col sm:max-w-md'>
                <SheetHeader>
                  <SheetTitle className='flex items-center gap-2'>
                    <ShoppingBagIcon className='size-5' />
                    Keranjang Belanja ({totalItemsCount})
                  </SheetTitle>
                  <SheetDescription>
                    Periksa kembali barang belanjaan Anda sebelum melanjutkan ke
                    pembayaran.
                  </SheetDescription>
                </SheetHeader>

                {/* Cart Items List */}
                <div className='flex-1 overflow-y-auto py-4'>
                  {cartItems.length === 0 ? (
                    <div className='text-muted-foreground flex h-full flex-col items-center justify-center gap-2 text-center'>
                      <ShoppingCartIcon className='size-10 opacity-40' />
                      <p className='text-sm font-medium'>
                        Keranjang belanja masih kosong
                      </p>
                    </div>
                  ) : (
                    <ul className='divide-y'>
                      {cartItems.map((item) => (
                        <li
                          key={item.id}
                          className='flex items-center justify-between gap-4 py-3'
                        >
                          <div className='min-w-0 flex-1'>
                            <p className='truncate text-sm font-medium'>
                              {item.productName} <span className='text-muted-foreground text-xs'>({item.idList})</span>
                            </p>
                            <p className='text-muted-foreground text-xs'>
                            </p>
                            <p className='text-muted-foreground text-xs'>
                              {formatIDR(item.hargaItem ?? 0)}
                            </p>
                          </div>

                          {/* Quantity Controls */}
                          <div className='flex items-center gap-1.5'>
                            <Button
                              variant='outline'
                              size='icon'
                              className='size-7 rounded-full'
                              onClick={() => {
                                if (item.idList) dispatch(decreaseQuantity(item.idList));
                              }}
                            >
                              <MinusIcon className='size-3' />
                              <span className='sr-only'>Kurangi jumlah</span>
                            </Button>

                            <span className='w-6 text-center text-xs font-medium'>
                              {item.quantity}
                            </span>

                            <Button
                              variant='outline'
                              size='icon'
                              className='size-7 rounded-full'
                              onClick={() => {
                                if (item.idList) dispatch(increaseQuantity(item.idList));
                              }}
                            >
                              <PlusIcon className='size-3' />
                              <span className='sr-only'>Tambah jumlah</span>
                            </Button>

                            <Button
                              variant='ghost'
                              size='icon'
                              className='text-destructive hover:text-destructive size-7 rounded-full'
                              onClick={() => {
                                if (item.idList) dispatch(removeItemFromCart(item.idList));
                              }}
                            >
                              <Trash2Icon className='size-3.5' />
                              <span className='sr-only'>Hapus item</span>
                            </Button>
                          </div>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Drawer Footer */}
                {cartItems.length > 0 && (
                  <SheetFooter className='flex-col gap-3 border-t pt-4 sm:flex-col'>
                    <div className='flex items-center justify-between text-sm font-semibold'>
                      <span>Subtotal</span>
                      <span>{formatIDR(subtotal)}</span>
                    </div>
                    <SheetClose asChild>
                      <Button className='w-full rounded-full' asChild>
                        <Link href='/checkout'>Lanjut ke Checkout</Link>
                      </Button>
                    </SheetClose>
                  </SheetFooter>
                )}
              </SheetContent>
            </Sheet>

            {/* Checkout Button (Icon Only) */}
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant='outline'
                  size='icon'
                  className='rounded-full'
                  asChild
                >
                  <Link href='/checkout'>
                    <CreditCardIcon className='size-4' />
                    <span className='sr-only'>Checkout</span>
                  </Link>
                </Button>
              </TooltipTrigger>
              <TooltipContent>Checkout</TooltipContent>
            </Tooltip>

            {/* Mobile Login Button (Icon Only) */}
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  size='icon'
                  className='rounded-full sm:hidden'
                  asChild
                >
                  <Link href='/login'>
                    <LogInIcon className='size-4' />
                    <span className='sr-only'>Login</span>
                  </Link>
                </Button>
              </TooltipTrigger>
              <TooltipContent>Login</TooltipContent>
            </Tooltip>
          </TooltipProvider>

          {/* Desktop Login Button */}
          <Button className='rounded-full max-sm:hidden' asChild>
            <Link href='/login'>Login</Link>
          </Button>

          {/* Mobile Menu Dropdown */}
          <MenuDropdown
            align='end'
            navigationData={navigationData}
            trigger={
              <Button
                variant='outline'
                size='icon'
                className='rounded-full lg:hidden'
              >
                <MenuIcon className='size-4' />
                <span className='sr-only'>Menu</span>
              </Button>
            }
          />
        </div>
      </div>
    </header>
  )
}

export default HeaderMenu
