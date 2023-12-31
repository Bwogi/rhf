import {
  BoltIcon,
  DevicePhoneMobileIcon,
  GlobeAltIcon,
  ScaleIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Growth",
    description:
      "We are life-long learners. We embrace the unknown and uncomfortable.",
    number: 1,
  },
  {
    name: "Grit",
    description:
      "We love what we do. We positively persevere through any obstacle.",
    number: 2,
  },
  {
    name: "Servant Leadership",
    description:
      "We follow the platinum rule. (Love people like God loves them). We lead from the bottom up, not the top down.",
    number: 3,
  },
  {
    name: "Honor",
    description:
      "We have a reputation worthy of respect. We make other people feel respected.",
    number: 4,
  },
];
const stats = [
  { label: "Transactions every 24 hours", value: "44 million" },
  { label: "Assets under holding", value: "$119 trillion" },
  { label: "New users annually", value: "46,000" },
];

export default function About() {
  return (
    // <div className="bg-white py-24 sm:py-32 lg:py-40">
    //   <div className="mx-auto max-w-7xl px-6 lg:px-8">
    //     <div className="sm:text-center">
    //       <h2 className="text-lg font-semibold leading-8 text-[#077CB5]">About Restoration House Fellowship, San Francisco, California</h2>
    //       <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our main goal is to help create a community of people growing together while celebrating the goodness of the Almighty God.</p>
    //       <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
    //       We believe that salvation is by grace alone through faith alone in Christ alone.
    //       </p>
    //     </div>

    //     <div className="mt-0 max-w-lg sm:mx-auto md:max-w-none">
    //     <div className='py-12'>
    //         <h3 className='text-4xl text-[#077CB5] py-3'>Core Values</h3>
    //         <p>Our values are meant to bring clarity to the things that matter most at Restoration House Fellowship. They guide how we achieve our mission and influence leadership decisions as well as daily ministry plans.</p>
    //     </div>
    //       <div className="grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-x-12 md:gap-y-16">
    //         {features.map((feature) => (
    //           <div key={feature.name} className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
    //             <div className="flex h-12 w-12 items-center justify-center rounded-[50%] bg-[#077CB5] text-white sm:shrink-0">
    //                 <span>{feature.number}</span>
    //             </div>
    //             <div className="sm:min-w-0 sm:flex-1">
    //               <p className="text-lg font-semibold leading-8 text-gray-900">{feature.name}</p>
    //               <p className="mt-2 text-base leading-7 text-gray-600">{feature.description}</p>
    //             </div>
    //           </div>
    //         ))}
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="mx-auto -mt-12 max-w-7xl px-6 sm:mt-0 lg:px-8 xl:-mt-8">
      <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Our mission
        </h2>
        <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
          <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
            <p className="text-xl leading-8 text-gray-600">
              Our mission is to spread God's love across families, communities,
              cities, and nations. Committed to the transformative power of
              God's Word, Faith, and prayer, we impact lives with love, focusing
              on healing and transformation in families, communities, cities,
              and nations.
            </p>
            <div className="mt-10 max-w-xl text-base leading-7 text-gray-700">
              <p>
                Restoration House Ministries emerged from a dedicated community
                meeting in homes, rooted in Acts 2 Principles. Beginning in
                Pittsburg, California, we've expanded to cities like Antioch,
                Brentwood, Oakley, Concord, Walnut Creek, American Canyon,
                Stockton, Vacaville, Sacramento, and Fairfield.
              </p>
              <p className="mt-10">
                Our dedicated focus extends to shaping a changed and transformed
                future generation, recognizing the pivotal role of children,
                youth, and young adults as the foundation of our church,
                community, and the nations.
              </p>
            </div>
          </div>
          <div className="lg:flex lg:flex-auto lg:justify-center">
            {/* <dl className="w-64 space-y-8 xl:w-80">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col-reverse gap-y-4">
                  <dt className="text-base leading-7 text-gray-600">
                    {stat.label}
                  </dt>
                  <dd className="text-5xl font-semibold tracking-tight text-gray-900">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl> */}
          </div>
        </div>
      </div>
    </div>
  );
}
