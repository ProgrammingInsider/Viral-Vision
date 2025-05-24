import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Inspiration = () => {
  return (
    <div className='heading-bg py-4 md:py-8 flex gap-4 relative'>
        <Image src="/images/inspirationimage.jpg" alt="Inspiration" width={1000} height={500} className="absolute top-0 left-0 w-full h-full object-cover self-center opacity-20 z-10" />
        <div className="flex flex-col items-center justify-center w-full h-full py-24 z-20 gap-8">
            <h1 className="font-bold text-5xl text-white text-center px-3">Ready to Elevate Your Brand?</h1>
            <p className="text-base text-center text-white md:w-1/2 px-8">Let’s turn your digital vision into reality. Whether you’re starting fresh or scaling up, we’re here to help you grow with creativity,strategy, and results.</p>
            <div className='flex gap-8'>
                <h1 className='font-black text-3xl text-white'>+251924434904</h1>
                <Link href={'/contactus'} className='white border-radius heading-color font-bold bg-red-50 text-lg p-2 px-4'>Contact Us</Link>
            </div>
        </div>
    </div>
  )
}

export default Inspiration