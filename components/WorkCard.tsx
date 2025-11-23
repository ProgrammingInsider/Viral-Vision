import { useState } from 'react';
import Image from 'next/image';
import { FaRegCalendarAlt } from 'react-icons/fa';
import Link from 'next/link';

const WorkCard = ({ item }: any) => {
  const [expanded, setExpanded] = useState(false);

  // Short preview = first paragraph only
  const shortDesc = item.desc[0];
  const fullDesc = item.desc.join('');

  return (
    <div className="bg-white border border-neutral-200 rounded-2xl">
      {/* Image */}
      <div className="w-full h-80 relative rounded-2xl overflow-hidden">
        <Image
          src={item.coverImage}
          alt={item.title}
          fill
          className="object-cover rounded-2xl overflow-hidden"
        />
      </div>

      <div className="p-5 flex flex-col gap-4">
        {/* Status */}

        <div className="flex justify-between items-start gap-4 mt-2">
          {/* Project status */}
          <span
            className={`px-3 py-1 rounded-full text-xs font-medium w-fit ${
              item.status === 'Completed'
                ? 'bg-green-100 text-green-700'
                : 'bg-yellow-100 text-yellow-700'
            }`}
          >
            {item.status}
          </span>

          {/* Country with Flag */}
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 relative">
              <Image
                src={item.flag}
                alt={`${item.country} flag`}
                fill
                className="object-contain rounded-sm"
              />
            </div>
            <span className="text-sm font-medium">{item.country}</span>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-xl font-semibold">{item.title}</h2>

        {/* Description */}
        <div className="text-sm text-gray-700 leading-relaxed">
          <div
            dangerouslySetInnerHTML={{
              __html: expanded ? fullDesc : shortDesc,
            }}
          />

          {/* See more / See less */}
          {item.desc.length > 1 && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="mt-2 text-blue-600 text-sm underline"
            >
              {expanded ? 'See less' : 'See more'}
            </button>
          )}
        </div>

        {/* Tags + Year */}
        <div className="flex items-center justify-between pt-2">
          <div className="flex flex-wrap gap-2">
            {item.tags.map((tag: string, index: number) => (
              <span
                key={index}
                className="text-xs bg-gray-200 px-2 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-2 text-gray-600 text-sm">
            <FaRegCalendarAlt />
            <span>{item.year}</span>
          </div>
        </div>

        {/* Redirect Button (optional) */}
        <div>
          {item.redirectLink && (
            <button className="mt-2">
              <Link
                href={item.redirectLink}
                target="_blank"
                className={`w-40 text-sm text-center font-bold btn btn-primary text-nowrap text-white btn-primary btn-primary-text`}
              >
                Visit Website
              </Link>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
