import Image from "next/image";
import { FaTiktok, FaInstagram, FaFacebookF, FaGlobe, FaFileAlt } from "react-icons/fa";
import Button from "./Button";
import { OurWorksType } from "@/utils/types";

const iconMap = {
  TikTok: <FaTiktok className="text-white text-xl" />,
  Instagram: <FaInstagram className="text-white text-xl" />,
  Facebook: <FaFacebookF className="text-white text-xl" />,
  Web: <FaGlobe className="text-white text-xl" />,
  Brochure: <FaFileAlt className="text-white text-xl" />,
};

const OurWorksSection = ({button=true,ourWorks}:{button?:boolean,ourWorks:OurWorksType[]}) => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full py-24">
      <h1 className="sectionName">Our Works</h1>
      <h1 className="sectionHeader">Showcasing Results, Creativity & Impact</h1>
      <p className="text-base text-center max-w-2xl">From viral videos to standout designs, explore how we help brands grow and shine across every digital platform.</p>

      <div className="mt-16 columns-1 sm:columns-2 md:columns-3 gap-6 px-6 w-full max-w-7xl space-y-6">
        {ourWorks.map((item, index) => {
          const isVideo = item.type === "video";
          const thumb = isVideo
            ? item.image // use proper 9:16 thumbnail
            : item.image;

          return (
            <a
              key={index}
              href={`${item.link}`}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group block w-full break-inside-avoid"
            >
              <Image
                src={thumb}
                alt={item.title}
                width={400}
                height={700}
                className="rounded-2xl w-full object-cover"
              />
              {/* Icon bottom-left */}
              <div className="absolute bottom-3 left-3 bg-black/60 p-2 rounded-full">
                {iconMap[item.category]}
              </div>

              {/* Hover Text */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all flex flex-col justify-center items-center text-white p-4 text-center rounded-2xl">
                <h2 className="text-lg font-bold">{item.title}</h2>
                <p className="text-sm mt-2">{item.description}</p>
              </div>
            </a>
          );
        })}
      </div>
      <div className="mt-16">
        {
          button && (
            <Button link='ourworks' value='See More Works' />
          )
        }


      </div>

    </div>
  );
};

export default OurWorksSection;
