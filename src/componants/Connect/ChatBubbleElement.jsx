import React from 'react'

const ChatBubbleElement = () => {
    return (
        <div className="absolute bottom-20 md:top-0 xl:top-30 md:right-36 translate-x-24 w-28 md:w-60 xl:w-72 h-64">
            <img className="w-full h-auto" src="chatBubble.svg" alt="chat bubble" />
        </div>
    )
}

export default ChatBubbleElement
