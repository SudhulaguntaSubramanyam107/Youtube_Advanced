import React from 'react';

const ChatMessage = ({name , message}) => {
  return (
    <div className='flex items-center shadow-sm'>
         <img className="h-8 cursor-pointer"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb2F1sRrmj0rFgZyVmC8yBgXxyccFRJf7LPQ&s"
              alt="profile-icon"/>
        <span className='font-bold p-2'>{name}</span>
        <span>{message}</span>
    </div>
  )
}

export default ChatMessage