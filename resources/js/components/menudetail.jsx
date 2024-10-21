import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { parentMenu } from '../state/parentMenu';
import { menulist } from '../state/menus';
import { rootMenu } from '../state/rootMenu';
import { isCreateMenu } from '../state/isCreateMenu';

const MenuDetail = () => {
    const [selectedParentMenu, setSelectedParentMenu] = useRecoilState(parentMenu)
    const [menuData, setMenuData] = useState({ name: '', parent_id: null, parent_name: '' });
    const [isCreateNewMenu, setIsCreateNewMenu] = useRecoilState(isCreateMenu)
    const [menus, setMenus] = useRecoilState(menulist);
    const [selectedMenu, setSelectedMenu] = useRecoilState(rootMenu);



    useEffect(() => {
        // Whenever the selectedParentMenu changes, update the parent_id in the menuData state.
        setMenuData({ ...menuData, parent_id: selectedParentMenu.id, parent_name: selectedParentMenu.name });
    }, [selectedParentMenu]);

    const addMenu = () => {
        axios.post('/api/menus', menuData).then(response => {
            setMenuData({ name: '', parent_id: null });
            setIsCreateNewMenu(false)
            axios.get(`/api/menus/${selectedMenu.id}`).then(response => {
                setSelectedMenu(response.data);
            });
        });
    };

    return (
        <div className="w-full lg:w-2/3 bg-white p-6 shadow-md rounded-lg mt-6 lg:mt-0 lg:ml-6">
            <h3 className="text-lg font-medium mb-4">Menu Details</h3>

            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Menu ID</label>
                <input
                    type="text"
                    value={selectedParentMenu.id || ''}
                    readOnly
                    className="mt-1 block w-full p-2 border border-gray-300 rounded"
                />
            </div>

            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Depth</label>
                <input
                    type="number"
                    value={selectedParentMenu.depth}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded"
                    readOnly
                />
            </div>

            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Parent Data</label>
                <input
                    type="text"
                    value={menuData.parent_name}
                    onChange={(e) => setMenuData({ ...menuData, parent_name: e.target.value })}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded"
                />
            </div>

            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                    onChange={(e) => setMenuData({ ...menuData, name: e.target.value })}
                    type="text"
                    value={menuData.name}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded"
                />
            </div>

            <button onClick={addMenu} className="w-full bg-blue-500 text-white py-2 rounded">Save</button>
        </div>
    );
}

export default MenuDetail;
