'use client'

import { useState } from 'react';
import { HiDotsVertical } from "react-icons/hi";
import { TbShare3 } from "react-icons/tb";
import { LuFlag } from "react-icons/lu";


const ChatReport = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
      setIsVisible(!isVisible);
    };
    return (
        <div className='relative z-50'>
            <button
                className='bg-custom_color_1000 w-8 h-8 flex items-center justify-center rounded-full'
                onClick={toggleVisibility}
            >
                <HiDotsVertical />
            </button>
            {isVisible && (
                <div className='bg-white w-[250px] p-2 rounded-xl absolute top-0 '>
                    <div className='hover:bg-bg_color text-xl p-2 rounded-lg flex items-center justify-between cursor-pointer'>
                        <h1 className='text-text_color font-medium'>Report</h1>
                        <LuFlag className='text-custom_color_1100  w-7 h-7' />
                    </div>
                    <div className='hover:bg-bg_color p-2 text-xl rounded-lg flex items-center justify-between cursor-pointer'>
                        <h1 className='text-text_color'>Share</h1>
                        <TbShare3 className='text-custom_color_1100 w-7 h-7' />
                    </div>
                </div>
            )}
        </div>
    )
}

export default ChatReport