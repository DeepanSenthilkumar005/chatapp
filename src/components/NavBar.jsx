import React, { useState } from 'react';
import { RxDashboard } from 'react-icons/rx';
import { PiBriefcaseMetal } from "react-icons/pi";
import { IoChatbubbleOutline } from "react-icons/io5";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { BsClock } from "react-icons/bs";
import { AiOutlinePieChart } from "react-icons/ai";
import { AiOutlineSetting } from "react-icons/ai";

function NavBar() {
  const links = [
    { icon: <RxDashboard />, name: 'Dashboard' },
    { icon: <PiBriefcaseMetal />, name: 'Portfolio' },
    { icon: <IoChatbubbleOutline />, name: 'Messages' },
    { icon: <MdOutlineCalendarMonth />, name: 'Calendar' },
    { icon: <BsClock />, name: 'Clock' },
    { icon: <AiOutlinePieChart />, name: 'Analytics' },
    { icon: <AiOutlineSetting />, name: 'Settings' },
  ];

  const [show, setShow] = useState(true);

  return (
    <>
      <div 
        className={`h-screen flex bg-white shadow-md transition-all duration-700 ease-in-out`} 
        style={{ width: show ? '40px' : '150px' }}
      >
        <ul className='space-y-4 font-extrabold mt-3 p-2 mx-auto'>
          {links.map((link, index) => (
            <div key={index}> 
              <li className='hover:cursor-pointer p-2'>
                {index !== 0 ? (
                  <a className='flex' href="#">
                    <span className='mt-1'>{link.icon}</span>
                    {!show && <span className="ml-2 font-medium">{link.name}</span>}
                  </a>
                ) : (
                  <button className='flex' onClick={() => setShow(!show)}>
                    <span className='mt-1'>{link.icon}</span>
                    {!show && <span className="ml-2 font-medium">{link.name}</span>}
                  </button>
                )}
              </li>
            </div>
          ))}
        </ul>
      </div>
    </>
  );
}

export default NavBar;
