import Image from 'next/image';
import React from 'react';
import { IoDiamondOutline } from 'react-icons/io5';

const CoreValues = () => {
  return (
    <div className="w-11/12 mx-auto sm:w-72 border-radius card-bg h-auto overflow-hidden col-span-1 box-shadow">
      <div className="h-44 relative">
        <Image
          src="/images/corevalues.jpg"
          alt="Core Values"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <h1 className="text-white text-3xl font-bold">Core Values</h1>
        </div>
        <div className="absolute w-16 h-16 btn-primary-bg rounded-lg rotate-45 left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 flex justify-center items-center">
          <span className="rotate-[-45deg] text-white text-xl font-bold">
            <IoDiamondOutline className="btn-primary-text text-4xl" />
          </span>
        </div>
      </div>
      <ul className="p-4 flex flex-col gap-4 mt-12">
        <li>
          <b className="font-black heading-color">Excellence</b> – We deliver
          the highest quality in every solution.
        </li>
        <li>
          <b className="font-black heading-color">Innovation</b> – We embrace
          fresh ideas to solve your biggest challenges.
        </li>
        <li>
          <b className="font-black heading-color">Integrity</b> – We work with
          honesty and transparency.
        </li>
        <li>
          <b className="font-black heading-color">Customer-First</b> – Your
          needs shape our solutions.
        </li>
        <li>
          <b className="font-black heading-color">Accountability</b> – We stand
          by our work, every step of the way.
        </li>
        <li>
          <b className="font-black heading-color">Collaboration</b> – We partner
          closely with you to ensure success.
        </li>
      </ul>
    </div>
  );
};

export default CoreValues;
