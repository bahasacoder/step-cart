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
    img: 'https://cdn.jsdelivr.net/gh/free-whiteboard-online/Free-Erasorio-Alternative-for-Collaborative-Design@caf3b27229a7a6040fd0da2db8d6acce5ef66604/uploads/2026-02-11T13-25-48-236Z-r4v4clqxn.jpg',
    imgAlt: 'plate-1',
    userComment: 'Telur Ayam Kampung segar dengan rasanya lezat! Sangat direkomendasikan.',
    userAvatar: 'https://cdn.jsdelivr.net/gh/free-whiteboard-online/Free-Erasorio-Alternative-for-Collaborative-Design@caf3b27229a7a6040fd0da2db8d6acce5ef66604/uploads/2026-02-11T13-25-48-236Z-r4v4clqxn.jpg'
  },
  {
    id: 2,
    img: 'https://cdn.jsdelivr.net/gh/free-whiteboard-online/Free-Erasorio-Alternative-for-Collaborative-Design@17adf2502b9a3c1995a663317fff7025a21a66c1/uploads/2026-02-11T13-58-09-796Z-x74stcxze.jpg',
    imgAlt: 'plate-2',
    userComment: 'DOC Anak ayam kampung.',
    userAvatar: 'https://cdn.jsdelivr.net/gh/free-whiteboard-online/Free-Erasorio-Alternative-for-Collaborative-Design@17adf2502b9a3c1995a663317fff7025a21a66c1/uploads/2026-02-11T13-58-09-796Z-x74stcxze.jpg'
  },
  {
    id: 3,
    img: 'https://cdn.jsdelivr.net/gh/free-whiteboard-online/Free-Erasorio-Alternative-for-Collaborative-Design@8fe9291f11e9c09d575be26f7e91f69d21f77e4c/uploads/2026-02-11T13-59-39-333Z-uwnn3v0st.jpg',
    imgAlt: 'plate-3',
    userComment: 'Anak ayam kampung asli untuk pemelihaaraan lanjutan.',
    userAvatar: 'https://cdn.jsdelivr.net/gh/free-whiteboard-online/Free-Erasorio-Alternative-for-Collaborative-Design@8fe9291f11e9c09d575be26f7e91f69d21f77e4c/uploads/2026-02-11T13-59-39-333Z-uwnn3v0st.jpg'
  },
  {
    id: 4,
    img: 'https://cdn.jsdelivr.net/gh/free-whiteboard-online/Free-Erasorio-Alternative-for-Collaborative-Design@3bc973a2d28cbc2cbd694b3aa776be9ce23dab27/uploads/2026-02-11T13-31-06-114Z-yuktmis7e.jpg',
    imgAlt: 'plate-4',
    userComment: 'Ayam Kampung frozen berkualitas tinggi dan rasanya enak sekali!',
    userAvatar: 'https://cdn.jsdelivr.net/gh/free-whiteboard-online/Free-Erasorio-Alternative-for-Collaborative-Design@3bc973a2d28cbc2cbd694b3aa776be9ce23dab27/uploads/2026-02-11T13-31-06-114Z-yuktmis7e.jpg'
  },
  {
    id: 5,
    img: 'https://cdn.jsdelivr.net/gh/free-whiteboard-online/Free-Erasorio-Alternative-for-Collaborative-Design@843c257eb10ec413f439b015bf51b4833b6e1fe4/uploads/2026-02-11T14-02-47-007Z-twl21bx45.jpg',
    imgAlt: 'plate-3',
    userComment: 'Ayam kampung 1 ekor berat 1 kg rasanya enak banget',
    userAvatar: 'https://cdn.jsdelivr.net/gh/free-whiteboard-online/Free-Erasorio-Alternative-for-Collaborative-Design@843c257eb10ec413f439b015bf51b4833b6e1fe4/uploads/2026-02-11T14-02-47-007Z-twl21bx45.jpg'
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
