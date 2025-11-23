import Image from 'next/image';
import { serviceItemType } from '@/utils/types';

const Service = ({ service }: { service: serviceItemType }) => {
  return (
    <div className="sm:w-full mx-auto sm:max-w-96 border-radius card-bg h-auto overflow-hidden col-span-1 box-shadow">
      <div className="h-56 relative">
        <Image
          src={service.banner}
          alt={service.name}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <h1 className="text-white text-3xl font-bold text-center w-11/12">
            {service.name}
          </h1>
        </div>

        <div className="absolute w-16 h-16 btn-primary-bg rounded-lg rotate-45 left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 flex justify-center items-center">
          <span className="rotate-[-45deg] text-white text-xl font-bold">
            {service.icon}
          </span>
        </div>
      </div>

      <div className="p-4 flex flex-col gap-4 mt-12">
        <h1 className="heading-color font-extrabold text-center text-base h-12">
          {service.slogan}
        </h1>
        <p className="text-center h-52">{service.description}</p>
        <div className="h-2 sm:h-9 md:h-6 flex justify-start relative">
          <div className="h-24 w-24 absolute left-0 bottom-0 rounded-full font-black text-5xl btn-primary-bg btn-primary-text flex justify-center items-center -mb-10 -ml-10">
            {service.id}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
