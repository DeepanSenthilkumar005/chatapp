import React from 'react';

function Sidebar() {
  const searchIcon = 'https://cdn-icons-png.flaticon.com/512/11741/11741045.png'
  const recieverIcon='https://mattfarley.ca/img/mf-avatar.svg';
  const peoples=['Revahty 1','Revahty 2','Revahty 3','Revahty 4','Revahty 5','Revahty 6','Revahty 7']
  const des='Hi,I am having a doubt on profile screen'
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
        <ul className="">
          {peoples.map((people,index)=>(
            <li key={index} className="p-2 bg-gray-50  rounded-sm my-0.5 cursor-pointer">
              <div className='flex'>
              <img src={recieverIcon} className='w-9 h-9 m-0.5' alt="" />
              <div className="headchat flex justify-between w-full">
              {people}
              <p  className='font-light text-sm text-gray-600'>1.35Pm</p>
              </div>
              </div>
              <div className="text-sm text-gray-800">
                {des}
              </div>
              
              </li>

          ))
          }
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;
