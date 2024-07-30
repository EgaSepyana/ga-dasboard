import React, { useEffect } from 'react'

import { AiOutlineMenu } from 'react-icons/ai'
import { FiShoppingCart } from 'react-icons/fi'
import { BsChatLeft } from 'react-icons/bs'
import { RiNotification3Line } from 'react-icons/ri'

import { MdKeyboardArrowDown } from 'react-icons/md'
import { Tooltip } from 'react-tooltip'

import avatar from '../data/avatar.jpg'
import { Cart, Chat, Notification, UserProfile } from '.'
import { useStateContext } from '../context/ContextProvider'

const NavButton = ({ title, costumeFunc, icon, color, dotColor }) => (
  <>
    <Tooltip anchorSelect={`#${title}-tooltip`} content={title} place={'top'} style={{zIndex: '9999' , fontSize : '0.775rem' , padding: '4px 8px'}} />
    <button className='relative text-xl rounded-full p-3 hover:bg-light-gray' style={{color}} onClick={costumeFunc} type='button' id={`${title}-tooltip`}>
      <span className='absolute inline-flex rounded-full h-2 w-2 right-2 top-2' style={{backgroundColor : dotColor}} />
        {
          icon
        }
    </button>
  </>
)

const Navbar = () => {

  const { activeMenu, setActiveMenu , isClicked , setIsClicked , handleClick , screenSize , setScreenSize} = useStateContext()

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerHeight);
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize' , handleResize)
  }, [])

  useEffect(() => {
    console.log(screenSize)
    if (screenSize <= 900) {
      setActiveMenu(false)
    } else {
      setActiveMenu(true)
    }
  } , [screenSize])

  return (
    <div className='flex justify-between p-2 md:mx-6 relative'>
      <NavButton title="Menu" costumeFunc={()=> setActiveMenu((prevActiveMenu) => !prevActiveMenu)} color="blue" icon={<AiOutlineMenu />}/>
      <div className='flex'>
          <NavButton title="Menu" costumeFunc={()=> handleClick('cart')} color="blue" icon={<FiShoppingCart />}/>
          <NavButton title="Chat" dotColor="#03C9D7" costumeFunc={()=> handleClick('chat')} color="blue" icon={<BsChatLeft />}/>
          <NavButton title="Notification" dotColor="#03C9D7" costumeFunc={()=> handleClick('notification')} color="blue" icon={<RiNotification3Line />}/>
          <Tooltip anchorSelect='#Profile' content='Profile' place='bottom' style={{zIndex: '9999' , fontSize : '0.775rem' , padding: '4px 8px'}}></Tooltip>
          <div id='Profile' onClick={()=>handleClick('userProfile')} className='flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg'>
              <img className='rounded-full w-8 h-8' src={avatar}/>
              <p>
                <span className='text-gray-400 text-14'>Hi , </span> {' '}
                <span className='text-gray-400 font-bold ml-1 text-14'>Michael</span>
              </p>
              <MdKeyboardArrowDown className='text-gray-400 text-14'/>
          </div>
          {isClicked.cart && <Cart />}
          {isClicked.chat && <Chat />}
          {isClicked.notification && <Notification />}
          {isClicked.userProfile && <UserProfile />}
      </div>
    </div>
  )
}

export default Navbar