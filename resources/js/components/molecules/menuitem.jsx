import React from 'react';
import { AiOutlineAppstore } from 'react-icons/ai';
import { BsFillGearFill } from 'react-icons/bs';
import MenuString from '../atoms/menustring';

const MenuItem = ({ menuitems, expandedMenuIds, toggleMenu }) => {

    return (
        <ul className="ml-4 mt-2">
            {menuitems.map((item, index) => (
                <li key={item.id}>
                    <div className="">
                        <MenuString menu={item} expandedMenuIds={expandedMenuIds}
                            toggleMenu={toggleMenu} />
                        {expandedMenuIds.includes(item.id) && item.childrens && (
                            <MenuItem menuitems={item.childrens} expandedMenuIds={expandedMenuIds}
                                toggleMenu={toggleMenu} />
                        )}
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default MenuItem;
