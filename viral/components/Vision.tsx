import Image from "next/image"
import { MdRemoveRedEye } from "react-icons/md";

const Vision = () => {
  return (
    <div className='w-11/12 sm:w-72 mx-auto xl:flex xl:w-3xl h-auto xl:h-72 border-radius card-bg overflow-hidden box-shadow'>
    <div className='h-44 xl:w-80 xl:h-full relative'>
        <Image
            src="/images/vision.jpg"
            alt="Vision"
            fill
            className='object-cover'
        />
        <div className='absolute inset-0 bg-black/60 flex items-center justify-center'>
            <h1 className='text-white text-3xl font-bold'>Our Vision</h1>
        </div>
        <div className="absolute w-16 h-16 btn-primary-bg rounded-lg rotate-45 left-1/2 bottom-0 xl:-right-0 xl:top-1/2 xl:bottom-1/2 xl:left-full -translate-x-1/2 translate-y-1/2 xl:-translate-y-1/2 flex justify-center items-center">
            <span className="rotate-[-45deg] text-white text-xl font-bold">
            <MdRemoveRedEye   className='btn-primary-text text-4xl' />
            </span>
        </div>


    </div>
    <p className='p-4 mt-12 max-w-md xl:ml-12 xl:flex justify-center items-center'>
    To become the most trusted and innovative digital marketing agency, empowering brands to go viral and achieve sustainable growth in a digital-first world.
    </p>
</div>
  )
}

export default Vision