import React, { useState } from 'react';
import Sidebar from './SideBar';
import NavBar from './NavBar';
import { IoMicOutline } from "react-icons/io5";
import { BsEmojiSmile } from "react-icons/bs";
import { AiOutlinePaperClip } from 'react-icons/ai';

function ChatPage() {
  const userIcon = 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png';
  const recieverIcon = 'https://mattfarley.ca/img/mf-avatar.svg';
  const phoneIcon = "https://cdn-icons-png.flaticon.com/512/3415/3415136.png";
  const videoIcon = 'https://cdn-icons-png.flaticon.com/512/5346/5346453.png';
  const menuIcon = 'https://cdn-icons-png.flaticon.com/512/7794/7794505.png';
  const sentIcon = 'https://cdn-icons-png.flaticon.com/512/3161/3161392.png';
  const micIcon = <IoMicOutline />;
  const pinIcon = <AiOutlinePaperClip />;
  const emojiIcon = <BsEmojiSmile />;

  const [messages, setMessages] = useState([]);
  const [showList, setShowList] = useState(false);
  const [inputMessage, setInputMessage] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);
  const [showMobile,setShowMobile]=useState(false);

  const users = [
    { id: 1, name: 'Revahty 1', icon: recieverIcon, des: 'Hi, I am having a doubt on profile screen' },
    { id: 2, name: 'Revahty 2', icon: recieverIcon, des: 'Can you help me with my project?' },
    { id: 3, name: 'Revahty 3', icon: recieverIcon, des: 'Let’s meet up this weekend?' },
    { id: 4, name: 'Revahty 4', icon: recieverIcon, des: 'I need assistance with my assignment' },
    { id: 5, name: 'Revahty 5', icon: recieverIcon, des: 'Can we discuss the project details?' },
    { id: 6, name: 'Revahty 6', icon: recieverIcon, des: 'I’ve sent you the files you requested' },
    { id: 7, name: 'Revahty 7', icon: recieverIcon, des: 'Could you review my code?' },
    { id: 8, name: 'Revahty 8', icon: recieverIcon, des: 'Do you have a moment to talk?' },
    { id: 9, name: 'Revahty 9', icon: recieverIcon, des: 'Let’s schedule a meeting next week' },
    { id: 10, name: 'Revahty 10', icon: recieverIcon, des: 'Any updates on the project status?' },
];


  const sendMessage = () => {
    if (inputMessage.trim()) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: inputMessage, sender: 'user', time: new Date().toLocaleTimeString() }
      ]);
      setInputMessage('');
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: `This is an automated response for ${inputMessage}`, sender: 'bot', time: new Date().toLocaleTimeString() }
        ]);
      }, 1000);
    }
  };

  return (
    <div className="flex h-screen">
      <NavBar />
      <Sidebar className='no' users={users} onUserSelect={setSelectedUser} />
      <div className="flex  stm:hidden ms-10 flex-col flex-1">
        <header className="text-white flex p-3 justify-between py-4">
          <div className="leftheader flex justify-between gap-1">
            {selectedUser ? (
              <div className='flex'>
                <img src={selectedUser.icon} alt="usericon" className="w-8" />
                <h1 className="text-2xl ms-3 text-black">{selectedUser.name}</h1>
              </div>
            ) : (
              <div className='flex'>
                <img src={userIcon} alt="usericon" className="w-8" />
                <h1 className="text-2xl ms-3 text-black">Revahty 1</h1>
              </div>
            )}
            <div className='my-auto ms-8'>
              <ul className='md:flex stm:hidden gap-3 text-gray-400'>
                <li className='hover:cursor-pointer hover:scale-110 duration-200 hover:text-gray-600 hover:underline'>Chat</li>
                <li className='hover:cursor-pointer hover:scale-110 duration-200 hover:text-gray-600 hover:underline'>Files</li>
                <li className='hover:cursor-pointer hover:scale-110 duration-200 hover:text-gray-600 hover:underline'>Media</li>
              </ul>
            </div>
          </div>
          <div className="rigthheader flex">
            <ul className='flex gap-4'>
              <li className='border-2 border-gray-500 p-1 hover:scale-105 duration-200 rounded-md'>
                <img src={phoneIcon} alt="Phone Icon" className="w-5 hover:cursor-pointer" /></li>
              <li className='border-2 border-gray-500 p-1 hover:scale-105 duration-200 rounded-md'>
                <img src={videoIcon} alt="videoIcon" className="w-5 hover:cursor-pointer" /></li>
              <li className='border-2 border-gray-500 p-1 hover:scale-105 duration-200 rounded-md'>
                <img src={menuIcon} alt="MenuIcon" className="w-5 hover:cursor-pointer" /></li>
            </ul>
          </div>
        </header>
        <main className="flex flex-col flex-1 overflow-y-auto p-4 no-scrollbar space-y-4 bg-white">
          {messages.map((message, index) => (
            <div key={index} className={`flex ${message.sender === 'user' ? 'justify-end stm:ms-3 md:ms-6' : 'justify-start stm:me-3 md:me-6'}`}>
              <img
                src={message.sender !== 'user' ? recieverIcon : userIcon}
                alt={message.sender === 'user' ? 'User Avatar' : 'Bot Avatar'}
                className="w-7 h-7 my-auto me-2"
              />
              <div className={`p-2 rounded-lg ${message.sender === 'user' ? 'bg-teal-300 text-gray-600' : 'bg-gray-300'}`}>
                <div className="w-full flex justify-between text-gray-400">
                  <div>{message.sender}</div>
                  <div>{message.time}</div>
                </div>
                {message.text}
              </div>
            </div>
          ))}
        </main>
        <footer className="bg-white bottom-0 p-4 relative flex space-x-2">
          <button
            onClick={() => setShowList(!showList)}
            className="bg-transparent absolute left-9 mt-0.5 text-white p-2 rounded-full"
          >
            <span className='text-black'>
              {emojiIcon}
            </span>
          </button>
          <button
            className="bg-transparent absolute left-16 mt-0.5 text-white p-2 rounded-full"
          >
            <span className='text-black'>
              {pinIcon}
            </span>
          </button>
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
            placeholder="Type a message"
            className="flex-1 ps-20 w-full p-2 px-4 border rounded-2xl"
          />
          <button
            onClick={sendMessage}
            className="bg-teal-700 absolute right-6 mt-0.5 text-white p-2 rounded-full"
          >
            <span>
              {micIcon}
            </span>
          </button>
        </footer>
      </div>
    </div>
  );
}

export default ChatPage;
