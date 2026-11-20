'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  CreditCardIcon,
  LogInIcon,
  MenuIcon,
  ShoppingCartIcon,
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

type HeaderProps = {
  navigationData: NavigationSection[]
  className?: string
}

const HeaderMenu = ({ navigationData, className }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false)

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
            {/* Cart Button (Icon Only) */}
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant='outline'
                  size='icon'
                  className='rounded-full'
                  asChild
                >
                  <Link href='/cart'>
                    <ShoppingCartIcon className='size-4' />
                    <span className='sr-only'>Cart</span>
                  </Link>
                </Button>
              </TooltipTrigger>
              <TooltipContent>Cart</TooltipContent>
            </Tooltip>

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
