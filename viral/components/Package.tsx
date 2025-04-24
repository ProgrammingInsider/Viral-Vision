import React from 'react'
import { FcCheckmark } from "react-icons/fc";

const Package = ({name, good_for, price, description, Projected_Growth}:{name:string, good_for:string, price:string, description: string[], Projected_Growth:string[]}) => {
  return (
    <div className="flex flex-col gap-8 justify-center w-full h-full p-6 sm:max-w-96 rounded-lg card-bg border-radius border col-span-1 box-shadow">
        <h1 className="text-lg sm:text-md heading-color font-black">{name}</h1>
        <p className="text-base">{good_for}</p>
        <pre className="text-xl font-bold heading-color mt-4">{price}</pre>

        <div>
            <h1 className="text-lg font-medium heading-color border-b border-b-gray-400 mt-4">Offers</h1>
            <ul className="mt-4 flex flex-col gap-3">
                {
                    description.map((item, index) => (
                        <li key={index} className='flex text-left w-full'><FcCheckmark className='font-extrabold text-xl' />&nbsp;<span>{item}</span></li>
                    ))
                }
            </ul>
        </div>
        <div>
            <h1 className="text-lg font-medium heading-color border-b border-b-gray-400">Projected Growth</h1>
            <ul className="mt-4 flex flex-col justify-start gap-3">
                {
                    Projected_Growth.map((item, index) => (
                        <li key={index} className='flex text-left w-full'><FcCheckmark className='font-extrabold text-xl w-8' />&nbsp;<span>{item}</span></li>
                    ))
                }
            </ul>
        </div>
        <button className="mt-4 px-2 py-3 mx-auto w-full btn btn-secondary btn-secondary-text cursor-pointer text-lg">Order Now</button>
    </div>
  )
}

export default Package