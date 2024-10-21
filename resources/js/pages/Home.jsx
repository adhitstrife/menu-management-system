import React, { useEffect, useState } from "react";
import Menu from "../components/menu";
import Sidebar from "../components/sidebar";
import MenuDetail from "../components/menudetail";
import { isCreateMenu } from "../state/isCreateMenu";
import { useRecoilState } from "recoil";
import { menulist } from "../state/menus";
import { toggleSidebar } from "../state/toggleSidebar";
import { RiMenuFold4Line } from "react-icons/ri";

const Home = () => {
    const [menus, setMenus] = useRecoilState(menulist);
    const [isCreateNewMenu, setIsCreateNewMenu] = useRecoilState(isCreateMenu)
    const [toggleSidebarMenu, setToggleSidebarMenu] = useRecoilState(toggleSidebar)


    useEffect(() => {
        axios.get('/api/menus').then(response => {
            setMenus(response.data);
        });
    }, []);

    useEffect(() => {
        console.log(menus)
    }, [menus])

    const updateMenu = (id, name) => {
        axios.put(`/api/menus/${id}`, { name }).then(response => {
            const updatedMenus = menus.map(menu => menu.id === id ? response.data : menu);
            setMenus(updatedMenus);
        });
    };

    const deleteMenu = (id) => {
        axios.delete(`/api/menus/${id}`).then(() => {
            setMenus(menus.filter(menu => menu.id !== id));
        });
    };

    return (
        <div className="flex flex-col lg:flex-row min-h-screen bg-gray-100">
            {/* Sidebar */}
            {toggleSidebarMenu ? (
                <Sidebar />
            ) : (
                <div className="px-4 py-6">
                    <button onClick={() => setToggleSidebarMenu(!toggleSidebarMenu)}>
                        <RiMenuFold4Line className="text-3xl font-semibold" />
                    </button>
                </div>
            )}

            {/* Main Content */}
            <div className="flex flex-1 flex-col lg:flex-row w-full p-6">
                <Menu menus={menus} />
                {isCreateNewMenu && (
                    <MenuDetail />
                )}
            </div>
        </div>
    );
};

export default Home;
