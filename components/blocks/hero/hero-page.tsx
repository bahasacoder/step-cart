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
    userAvatar: 'https://cdn.jsdelivr.net/gh/free-whiteboard-online/Free-Erasorio-Alternative-for-Collaborative-Design@caf3b27229a7a6040fd0da2db8d6acce5ef66604/uploads/2026-02-11T13-25-48-236Z-r4v4clqxn.jpg'
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
    userComment: 'Anak ayam kampung asli untuk pemelihaaraan lanjutan.',
    userAvatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-57.png'
  },
  {
    id: 4,
    img: 'https://cdn.shadcnstudio.com/ss-assets/template/landing-page/bistro/image-05.png',
    imgAlt: 'plate-4',
    userComment: 'Ayam Kampung frozen berkualitas tinggi dan rasanya enak sekali!',
    userAvatar: 'https://cdn.jsdelivr.net/gh/free-whiteboard-online/Free-Erasorio-Alternative-for-Collaborative-Design@3bc973a2d28cbc2cbd694b3aa776be9ce23dab27/uploads/2026-02-11T13-31-06-114Z-yuktmis7e.jpg'
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
