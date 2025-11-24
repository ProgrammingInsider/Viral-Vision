// import Image from 'next/image';

// const PartnersData = [
//   {
//     name: 'Lansel Trading PLC',
//     description: 'A company distributes chemicals and office materials',
//     logo: '/images/partners/lansel.png',
//   },
//   {
//     name: 'Hisense',
//     description: 'A company that manufactures electronics and home appliances.',
//     logo: '/images/partners/hisense.png',
//   },
//   {
//     name: 'Unicorn Ranch',
//     description:
//       'Unicorn Ranch is a London-based digital product studio built on deep technical expertise and a holistic approach to solving complex business challenges',
//     logo: '/images/partners/Unicorn-Ranch.svg',
//   },
//   {
//     name: 'Dehydron',
//     description:
//       'Dehydron provides a modern and effective approach to managing excessive sweating through safe, reliable iontophoresis technology.',
//     logo: '/images/partners/dehydron.png',
//   },
//   {
//     name: 'Mayflower Consulting',
//     description:
//       'Mayflower Consulting is an Albania-based immigration and recruitment agency dedicated to helping individuals and families pursue life-changing opportunities abroad particularly in Canada. ',
//     logo: '/images/partners/mayflower-consulting.svg',
//   },
//   {
//     name: 'Mieraf Production',
//     description: 'A company that produces and distributes media content.',
//     logo: '/images/partners/mieraf.jpg',
//   },
//   {
//     name: 'Pharez',
//     description:
//       'A company that provides digital marketing and advertising services.',
//     logo: '/images/partners/pharez.png',
//   },
// ];

// const Partners = () => {
//   return (
//     <div className="relative overflow-hidden py-24 section-two-bg">
//       <h1 className="sectionName text-center">Our Partners</h1>
//       <h2 className="sectionHeader text-center px-3">
//         Trusted by Industry Leaders
//       </h2>
//       <p className="text-base text-center max-w-2xl mx-auto px-3">
//         We’re proud to collaborate with brands that inspire growth, innovation,
//         and excellence.
//       </p>

//       {/* Scrolling Container */}
//       <div className="mt-16 overflow-hidden w-full relative h-32">
//         {/* Cloud Edges */}
//         <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white/80 to-transparent z-10 pointer-events-none" />
//         <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white/80 to-transparent z-10 pointer-events-none" />

//         <div className="flex animate-scroll-slow gap-4 w-max hover:[animation-play-state:paused] px-4">
//           {PartnersData.concat(PartnersData).map((item, index) => (
//             <div
//               key={index}
//               className="relative w-60 h-30 flex-shrink-0 card-bg box-shadow border border-color rounded-2xl p-4 group cursor-pointer overflow-hidden"
//             >
//               <Image
//                 src={item.logo}
//                 alt={item.name}
//                 width={240}
//                 height={120}
//                 className="object-contain w-full h-24 mx-auto"
//               />
//               <div className="absolute inset-0 bg-white/90 backdrop-blur-md flex flex-col justify-center items-center text-center p-4 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
//                 <h3 className="text-lg font-bold heading-color mb-2">
//                   {item.name}
//                 </h3>
//                 <p className="text-sm paragraph-color">{item.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Partners;

import Image from 'next/image';

const PartnersData = [
  { name: 'Lansel Trading PLC', logo: '/images/partners/lansel.png' },
  { name: 'Hisense', logo: '/images/partners/hisense.png' },
  { name: 'Unicorn Ranch', logo: '/images/partners/Unicorn-Ranch.svg' },
  { name: 'Dehydron', logo: '/images/partners/dehydron.png' },
  {
    name: 'Mayflower Consulting',
    logo: '/images/partners/mayflower-consulting.svg',
  },
  { name: 'Mieraf Production', logo: '/images/partners/mieraf.jpg' },
  { name: 'Pharez', logo: '/images/partners/pharez.png' },
];

const Partners = () => {
  return (
    <div className="relative py-24 section-two-bg">
      <h1 className="sectionName text-center">Our Partners</h1>
      <h2 className="sectionHeader text-center px-3">
        Trusted by Industry Leaders
      </h2>
      <p className="text-base text-center max-w-2xl mx-auto px-3">
        We’re proud to collaborate with brands that inspire growth, innovation,
        and excellence.
      </p>

      {/* Small Screen: Static Grid */}
      <div className="mt-16 grid grid-cols-2 gap-6 px-4 sm:hidden">
        {PartnersData.map((partner, index) => (
          <div
            key={index}
            className="flex items-center justify-center p-4 bg-white border border-gray-200 rounded-2xl shadow-md"
          >
            <Image
              src={partner.logo}
              alt={partner.name}
              width={120}
              height={120}
              className="object-contain w-4/5 h-24"
            />
          </div>
        ))}
      </div>

      {/* Medium & Large Screen: Scrolling Marquee */}
      <div className="mt-16 hidden sm:block overflow-hidden w-full relative h-36">
        {/* Gradient edges */}
        <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white/80 to-transparent z-10 pointer-events-none" />

        <div className="flex animate-scroll-slow gap-4 w-max hover:[animation-play-state:paused] px-4">
          {PartnersData.concat(PartnersData).map((partner, index) => (
            <div
              key={index}
              className="relative w-60 flex-shrink-0 bg-white border border-gray-200 rounded-2xl p-4 shadow-md flex items-center justify-center"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={240}
                height={120}
                className="object-contain w-full h-24 mx-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
