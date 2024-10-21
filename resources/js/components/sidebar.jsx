import React, { useState } from 'react';
import { AiOutlineAppstore } from 'react-icons/ai';
import { BsFillGearFill } from 'react-icons/bs';
import { FaRegFolder } from 'react-icons/fa';
import { RiMenuUnfold4Line } from 'react-icons/ri';
import { TbAppsFilled } from 'react-icons/tb';
import { useRecoilState } from 'recoil';
import { toggleSidebar } from '../state/toggleSidebar';

const Sidebar = () => {
    const [activeMenu, setActiveMenu] = useState("")
    const [activeSubMenu, setActiveSubMenu] = useState("menus")
    const [toggleSidebarMenu, setToggleSidebarMenu] = useRecoilState(toggleSidebar)
    return (
        <div className="w-full lg:w-64 bg-gray-900 text-white flex flex-col">
            <div className="px-4 py-6 flex justify-between">
                <h2 className="text-3xl font-semibold">CLOIT</h2>
                <button onClick={() => setToggleSidebarMenu(!toggleSidebarMenu)}>
                    <RiMenuUnfold4Line className="text-3xl font-semibold" />
                </button>
            </div>
            <nav className="mt-10 p-4">
                <a onClick={() => setActiveMenu('system')} href="#" className={`px-4 py-4 flex flex-col text-gray-300 hover:bg-gray-800 ${activeMenu == 'system' ? 'bg-gray-800 font-bold rounded-md' : ''}`}>
                    <div className="menu flex items-center ">
                        <FaRegFolder className="text-xl mr-3" />
                        <span>Systems</span>
                    </div>
                    {activeMenu == 'system' && (
                        <div className="subMenu mt-4">
                            <div onClick={() => setActiveSubMenu('sc')} className={`flex p-4 mt-1 hover:bg-green-400 hover:rounded-md hover:text-black ${activeSubMenu == 'sc' ? 'bg-green-400 rounded-md text-black' : ''}`}>
                                <TbAppsFilled className="text-xl mr-3" />
                                <span>System Code</span>
                            </div>
                            <div onClick={() => setActiveSubMenu('properties')} className={`flex p-4 mt-1 hover:bg-green-400 hover:rounded-md hover:text-black ${activeSubMenu == 'properties' ? 'bg-green-400 rounded-md text-black' : ''}`}>
                                <TbAppsFilled className="text-xl mr-3" />
                                <span>Properties</span>
                            </div>
                            <div onClick={() => setActiveSubMenu('menus')} className={`flex p-4 mt-1 hover:bg-green-400 hover:rounded-md hover:text-black ${activeSubMenu == 'menus' ? 'bg-green-400 rounded-md text-black' : ''}`}>
                                <TbAppsFilled className="text-xl mr-3" />
                                <span>Menus</span>
                            </div>
                            <div onClick={() => setActiveSubMenu('api')} className={`flex p-4 mt-1 hover:bg-green-400 hover:rounded-md hover:text-black ${activeSubMenu == 'api' ? 'bg-green-400 rounded-md text-black' : ''}`}>
                                <TbAppsFilled className="text-xl mr-3" />
                                <span>API List</span>
                            </div>
                        </div>
                    )}
                </a>
                <a href="#" onClick={() => setActiveMenu('users')} className={`px-4 py-4 flex flex-col text-gray-300 hover:bg-gray-800 ${activeMenu == 'users' ? 'bg-gray-800 font-bold rounded-md' : ''}`}>
                    <div className="menu flex items-center ">
                        <BsFillGearFill className="text-xl mr-3" />
                        <span>Users & Group</span>
                    </div>
                </a>
                <a href="#" onClick={() => setActiveMenu('competition')} className={`px-4 py-4 flex flex-col text-gray-300 hover:bg-gray-800 ${activeMenu == 'competition' ? 'bg-gray-800 font-bold rounded-md' : ''}`}>
                    <div className="menu flex items-center ">
                        <BsFillGearFill className="text-xl mr-3" />
                        <span>Competition</span>
                    </div>
                </a>
            </nav>
        </div>
    );
}

export default Sidebar;
