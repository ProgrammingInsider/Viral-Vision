import Image from 'next/image';
import { LuTarget } from 'react-icons/lu';

const Mission = () => {
  return (
    <div className="w-11/12 sm:w-72 mx-auto xl:flex xl:w-3xl h-auto xl:h-72 border-radius card-bg overflow-hidden box-shadow">
      <div className="h-44 xl:w-80 xl:h-full relative">
        <Image
          src="/images/mission.jpg"
          alt="Mission"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <h1 className="text-white text-3xl font-bold">Our Mission</h1>
        </div>
        <div className="absolute w-16 h-16 btn-primary-bg rounded-lg rotate-45 left-1/2 bottom-0 xl:-right-0 xl:top-1/2 xl:bottom-1/2 xl:left-full -translate-x-1/2 translate-y-1/2 xl:-translate-y-1/2 flex justify-center items-center">
          <span className="rotate-[-45deg] text-white text-xl font-bold">
            <LuTarget className="btn-primary-text text-4xl" />
          </span>
        </div>
      </div>
      <p className="p-4 mt-12 max-w-md xl:ml-12 xl:flex justify-center items-center">
        Empowering organizations with smart, flexible, and customized solutions
        that drive growth, efficiency, and long-term success.
      </p>
    </div>
  );
};

export default Mission;
