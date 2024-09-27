import React from 'react'
import Logo from "../assets/images/logo.svg"
import Profile from '../assets/images/profile-icon.svg'

function Header() {
    const navbarList = [
        {
            id: 1,
            title: "Movies",
            path: "#"
        },
        {
            id: 2,
            title: "Series",
            path: "#"
        },
        {
            id: 3,
            title: "Channels",
            path: "#"
        },
        {
            id: 4,
            title: "Music",
            path: "#"
        },
    ]
    return (
        <header className='py-5'>
            <div className='container mx-auto'>
                <div className='flex items-center justify-stretch'>
                    <div className='flex items-center space-x-[56px]'>
                        <a className='ml-[70px]' href="/">
                            <img src={Logo} alt="Site Logo" width={95} height={51} />
                        </a>
                        <ul className='flex items-center space-x-[44px]'>
                            {navbarList.map(item =>
                                <li key={item.id}>
                                    <a className='px-[23px] py-[10px] font-medium text-white text-[24px] leading-[27px]  ' href={`${item.path}`}>{item.title}</a>
                                </li>)
                            }
                        </ul>
                    </div>
                    <div className='flex items-center space-x-[19px] ml-[180px]'>
                        <input className='w-[334px] py-[17px] pl-[52px] search-input rounded-[8px] bg-[rgba(0,0,0,0.7)] outline-none placeholder:text-[#2F2F2F] text-white text-[24px] leading-[28px]  ' type="text" placeholder='Search' name="searching..." />
                        <button className='text-white text-[24px] flex items-center space-x-[8px] leading-[27px] font-medium'>
                            <img src={Profile} alt="Profile Icon" width={24} height={24} />
                            <span>Profile</span>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header