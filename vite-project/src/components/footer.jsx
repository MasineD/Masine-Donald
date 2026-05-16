import React from 'react'
import { FaHandsHelping } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='flex items-center justify-center gap-4 text-lg min-h-[15vh] bg-gradient-to-b from-transparent via-primary to-highlight'>
        <FaHandsHelping />
        <p className='animate-pulse'>Thank you for you time. Highly appreciated</p>
        <FaHandsHelping />
    </div>
  )
}

export default Footer
