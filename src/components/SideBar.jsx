import React from 'react';

function Sidebar() {
  return (
    <aside className="md:w-1/4 md:flex sm:hidden bg-gray-200 p-4">
      <div>
        <h2 className="text-xl font-semibold mb-4">Chats</h2>
        <input type="text" className="p-2 my-2 rounded-md w-full space-y-2" placeholder='Search Emoji' />
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
