import Link from 'next/link';
import React from 'react'

const SocialMedia = ({name,icon,link}:{name:string, icon:React.ReactNode, link:string}) => {
  return (
    <div className="flex justify-center items-center rounded-full gap-2">
        <Link href={link} target='_blank' title={name} className='w-8 h-8 flex justify-center items-center btn-primary-bg btn-primary-text rounded-full p-2'>
            {icon}
        </Link>    
    </div>
  )
}

export default SocialMedia