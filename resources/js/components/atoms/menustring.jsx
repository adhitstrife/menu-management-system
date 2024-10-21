import React from 'react';
import { FiPlus } from 'react-icons/fi';
import { useRecoilState } from 'recoil';
import { isCreateMenu } from '../../state/isCreateMenu';
import { parentMenu } from '../../state/parentMenu';

const MenuString = ({ menu, expandedMenuIds, toggleMenu }) => {
    const [isCreateNewMenu, setIsCreateNewMenu] = useRecoilState(isCreateMenu)
    const [selectedParentMenu, setSelectedParentMenu] = useRecoilState(parentMenu)

    const addNewMenu = (selectedMenu) => {
        setIsCreateNewMenu(true);
        setSelectedParentMenu(menu);
    };

    return (
        <div className='cursor-pointer flex items-center group'>
            <button onClick={() => toggleMenu(menu.id)} className='transform transition duration-300 mr-2'>
                {expandedMenuIds.includes(menu.id) ? '▼' : '▶'}
            </button>
            <span>{menu.name}</span>
            <button onClick={() => addNewMenu(menu)} className="bg-blue-500 hover:bg-blue-600 text-white rounded-full p-0.5 shadow-md focus:outline-none mx-2 invisible group-hover:visible">
                <FiPlus className="text-xl" />
            </button>
        </div>
    );
};

export default MenuString;
