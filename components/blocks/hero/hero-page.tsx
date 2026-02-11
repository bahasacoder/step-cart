import HeaderMenu from './header-menu'
import HeroSection from './hero-section'
import type { NavigationSection } from '@/components/blocks/menu-navigation'

const navigationData: NavigationSection[] = [
  {
    title: 'About Us',
    href: '#'
  },
  {
    title: 'Products',
    href: '#'
  },
  {
    title: 'Contact us',
    href: '#'
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

const menudata = [
  {
    id: 1,
    img: 'https://cdn.shadcnstudio.com/ss-assets/template/landing-page/bistro/image-18.png',
    imgAlt: 'plate-1',
    userComment: 'Telur Ayam Kampungnya sangat segar dan rasanya lezat! Sangat direkomendasikan.',
    userAvatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-56.png'
  },
  {
    id: 2,
    img: 'https://cdn.shadcnstudio.com/ss-assets/template/landing-page/bistro/image-19.png',
    imgAlt: 'plate-2',
    userComment: 'DOC Anak ayam kampung.',
    userAvatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-46.png'
  },
  {
    id: 3,
    img: 'https://cdn.shadcnstudio.com/ss-assets/template/landing-page/bistro/image-20.png',
    imgAlt: 'plate-3',
    userComment: 'Every dish is crafted with care. This place never disappoints!',
    userAvatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-57.png'
  },
  {
    id: 4,
    img: 'https://cdn.shadcnstudio.com/ss-assets/template/landing-page/bistro/image-05.png',
    imgAlt: 'plate-4',
    userComment: 'Ayam Kampung frozennya berkualitas tinggi dan rasanya enak sekali!',
    userAvatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-58.png'
  },
  {
    id: 5,
    img: 'https://cdn.shadcnstudio.com/ss-assets/template/landing-page/bistro/image-20.png',
    imgAlt: 'plate-3',
    userComment: 'Ayam kampung 1 ekor berat 1 kg rasanya enak banget',
    userAvatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-57.png'
  }
]

const HeroPage = () => {
  return (
    <div className='overflow-x-hidden'>
      {/* Header Section */}
      <HeaderMenu navigationData={navigationData} />

      {/* Main Content */}
      <main className='flex flex-col pt-17.5'>
        <HeroSection menudata={menudata} />
      </main>
    </div>
  )
}

export default HeroPage
