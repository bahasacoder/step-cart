import HeaderMenu from '@/components/blocks/hero/header-menu'
import type { NavigationSection } from '@/components/blocks/menu-navigation'

const navigationData: NavigationSection[] = [
  {
    title: 'About Us',
    href: '/about'
  },
  {
    title: 'Products',
    href: '#'
  },
  {
    title: 'Contact us',
    href: '/contact'
  },
  {
    title: 'Recipes',
    href: '#'
  },
  {
    title: 'Today\'s',
    href: '#'
  }
]



const StickyMenu = () => {
  return (
    <div className='overflow-x-hidden'>
      {/* Header Section */}
      <HeaderMenu navigationData={navigationData} />

    </div>
  )
}

export default StickyMenu
