import React from 'react';

function Sidebar() {
  const searchIcon = 'https://cdn-icons-png.flaticon.com/512/11741/11741045.png'
  return (
    <aside className="md:w-1/4 stm:hidden bg-gray-100 p-4">
      <div>
        <h2 className="text-xl font-semibold mb-4">Chats</h2> 
        <div className="relative">
        <input type="text" id='searchBar' className="p-2 my-2 rounded-md w-full space-y-2" placeholder='Search Emoji' />
        <label htmlFor="searchBar">
          <img src={searchIcon} className='absolute w-6 h-6 right-2 top-4 my-auto hover:cursor-text' alt="" />
        </label>
        </div>
        <ul className="space-y-2">
            <li className='text-xl font-semibold'>Pinned</li>
          <li className="p-2 bg-gray-600 text-white rounded-lg cursor-pointer">People 1</li>
          <li className="p-2 bg-gray-300 rounded-lg cursor-pointer">People 2</li>
          <li className="p-2 bg-gray-300 rounded-lg cursor-pointer">People 3</li>
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;
