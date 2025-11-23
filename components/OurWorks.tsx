'use client';

import { OurWorksType } from '@/utils/types';
import WorkCard from './WorkCard';
import Button from './Button';

const OurWorksSection = ({
  button = true,
  ourWorks,
}: {
  button?: boolean;
  ourWorks: OurWorksType[];
}) => {
  return (
    <div className="flex flex-col items-center justify-center w-full py-24">
      <h1 className="sectionName">Our Works</h1>
      <h1 className="sectionHeader px-3">Showcasing Our Latest Projects</h1>
      <p className="text-base text-center max-w-2xl px-3">
        Real projects designed, developed and executed by our team.
      </p>

      <div className="mt-16 columns-1 md:columns-2 gap-6 px-4 max-w-7xl w-full space-y-12">
        {ourWorks.map((item) => (
          <div key={item.id} className="break-inside-avoid">
            <WorkCard item={item} />
          </div>
        ))}
      </div>
      {button && (
        <div className="mt-8">
          <Button link="ourworks" value="See More Works" />
        </div>
      )}
    </div>
  );
};

export default OurWorksSection;
