import React from 'react';

function Sidebar({ users, onUserSelect }) {
  const searchIcon = 'https://cdn-icons-png.flaticon.com/512/11741/11741045.png';
  return (
    <aside className="md:w-1/4 stm:sticky md:max-h-screen stm:w-full stm:ms-10 overflow-auto no-scrollbar bg-gray-100 pt-0 p-4">
      <div>
        <div className="sticky top-0 bg-gray-100 p-1">
        <h2 className="text-xl font-semibold mb-4">Chats</h2>
        <div className="relative">
          <input type="text" id='searchBar' className="p-2 my-2 rounded-md w-full space-y-2" placeholder='Search Emoji' />
          <label htmlFor="searchBar">
            <img src={searchIcon} className='absolute w-6 h-6 right-2 top-4 my-auto hover:cursor-text' alt="search icon" />
          </label>
        </div>
        </div>

        <ul className="overflow-scroll">
          {users.map((user, index) => (
            <li key={index} className="p-2 bg-gray-50 rounded-sm my-0.5 cursor-pointer" onClick={() => onUserSelect(user)}>
              <div className='flex'>
                <img src={user.icon} className='w-9 h-9 m-0.5' alt="" />
                <div className="headchat flex justify-between w-full">
                  {user.name}
                  <p className='font-light text-sm text-gray-600'>1.35Pm</p>
                </div>
              </div>
              <div className="text-sm text-gray-800">
                {user.des}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;
