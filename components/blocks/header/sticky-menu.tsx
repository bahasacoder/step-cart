import HeaderMenu from '@/components/blocks/header/header-menu'
import type { NavigationSection } from '@/components/blocks/menu-navigation'

const navigationData: NavigationSection[] = [
  {
    title: 'About Us',
    href: '/about'
  },
  {
    title: 'Products',
    href: '/products'
  },
  {
    title: 'Contact us',
    href: '/contact'
  },
  {
    title: 'Recipes',
    href: '/recipes'
  },
  {
    title: 'Today\'s',
    href: '#'
  }
]



const StickyMenu = () => {
  return (
    <div className='overflow-x-hidden pb-17.5'>
      {/* Header Section */}
      <HeaderMenu navigationData={navigationData} />

    </div>
  )
}

export default StickyMenu
