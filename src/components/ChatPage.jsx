import React, { useState } from 'react';
import Sidebar from './SideBar'; // Correct import path for Sidebar

function ChatPage() {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');

  const sendMessage = () => {
    if (inputMessage.trim()) {
      setMessages([...messages, { text: inputMessage, sender: 'user' }]);
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: `This is an automated response for ${inputMessage}`, sender: 'bot' }
        ]);
        setInputMessage('');
      }, 1000);
    }
  };

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <header className="bg-gray-200 text-white flex p-3 justify-between py-4">
            <div className="leftheader flex gap-1">
            <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png " alt="" title="" className="w-8 " />
                <h1 className="text-2xl ms-1 text-black">People 1</h1>    
            </div>
            <div className="rigthheader flex">
                <ul className='flex gap-4'>
                    <li className='border-2 border-gray-500 p-1 hover:bg-gray-00  hover:scale-105 duration-200 rounded-md'><img src="https://cdn-icons-png.flaticon.com/512/3415/3415136.png" alt="" className="w-5 hover:cursor-pointer" /></li>
                    <li className='border-2 border-gray-500 p-1 hover:bg-gray-00 hover:scale-105 duration-200 rounded-md'><img src="https://cdn-icons-png.flaticon.com/512/5346/5346453.png" alt="" className="w-5 hover:cursor-pointer" /></li>
                    <li className='border-2 border-gray-500 p-1 hover:bg-gray-00 hover:scale-105 duration-200 rounded-md'><img src="https://cdn-icons-png.flaticon.com/512/7794/7794505.png" alt="" className="w-5 hover:cursor-pointer" /></li>
                </ul>
            </div>
        </header>
        <main className="flex flex-col flex-1 overflow-y-auto p-4 space-y-4 bg-gray-100">
          {messages.map((message, index) => (
            <div key={index} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`p-2 rounded-lg ${message.sender === 'user' ? 'bg-teal-300 text-gray-600' : 'bg-gray-300'}`}>
                {message.text}
              </div>
            </div>
          ))}
        </main>
        <footer className="bg-white p-4 relative flex space-x-2">
          <input 
            type="text" 
            value={inputMessage}  
            onChange={(e) => setInputMessage(e.target.value)}  
            onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
            placeholder="Type a message" 
            className="flex-1 w-full p-2 px-4 border rounded-2xl"
          />
          <button 
            onClick={sendMessage}
            className="bg-blue-500 absolute right-6 mt-0.5 text-white p-2 rounded-full "
          >
            <span>
            <img className='aspect-square w-5' src="https://cdn-icons-png.flaticon.com/512/3161/3161392.png" alt="" />

            </span>
          </button>
        </footer>
      </div>
    </div>
  );
}

export default ChatPage;
