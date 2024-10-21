import React, { useEffect, useState } from 'react';
import MenuItem from './molecules/menuitem';
import MenuString from './atoms/menustring';
import { useRecoilState } from 'recoil';
import { rootMenu } from '../state/rootMenu';

const Menu = ({ menus }) => {
    const [expandedMenuIds, setExpandedMenuIds] = useState([]);
    const [selectedMenuId, setSelectedMenuId] = useState('');
    const [selectedMenu, setSelectedMenu] = useRecoilState(rootMenu);

    const handleSelectedMenu = (event) => {
        const selectedId = event.target.value;
        try {
            axios.get(`/api/menus/${selectedId}`).then(response => {
                setSelectedMenu(response.data);
            });
        } catch (error) {
            console.error("Error fetching menu data:", error);
        }
    }

    const toggleMenu = (id) => {
        setExpandedMenuIds((prev) =>
            prev.includes(id) ? prev.filter((menuId) => menuId !== id) : [...prev, id]
        );
    };

    const expandAllMenus = () => {
        const allMenuIds = getAllMenuIds(selectedMenu);
        setExpandedMenuIds(allMenuIds);
    };

    const collapseAllMenus = () => {
        setExpandedMenuIds([]);
    };

    const getAllMenuIds = (menu) => {
        let ids = [];
        if (menu) {
            ids.push(menu.id);
            if (menu.childrens) {
                menu.childrens.forEach((child) => {
                    ids = ids.concat(getAllMenuIds(child));
                });
            }
        }
        return ids;
    };

    return (
        <div className="w-full lg:w-1/3 bg-white p-6 shadow-md rounded-lg">
            <h3 className="text-lg font-medium mb-4">Menus</h3>
            {menus.length > 0 && (
                <select value={selectedMenuId}
                    onChange={handleSelectedMenu} className="w-full mb-4 p-2 border border-gray-300 rounded">
                    <option value="">Select Menu</option>
                    {menus.map((menu, index) => (
                        <option key={index} value={menu.id}>{menu.name}</option>
                    ))}
                </select>
            )}
            <div className="flex space-x-2">
                <button onClick={expandAllMenus} className="w-full bg-gray-200 text-gray-600 py-2 rounded">Expand All</button>
                <button onClick={collapseAllMenus} className="w-full bg-gray-200 text-gray-600 py-2 rounded">Collapse All</button>
            </div>

            <ul className='mt-4'>
                {selectedMenu && (
                    <li>
                        <MenuString menu={selectedMenu} expandedMenuIds={expandedMenuIds}
                            toggleMenu={toggleMenu} />
                        {expandedMenuIds.includes(selectedMenu.id) && selectedMenu.childrens && (
                            <MenuItem menuitems={selectedMenu.childrens} expandedMenuIds={expandedMenuIds}
                                toggleMenu={toggleMenu} />
                        )}
                    </li>
                )}
            </ul>
        </div>
    );
};

export default Menu;
