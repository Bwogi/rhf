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

export default function About() {
  return (
    <div className="bg-white py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="sm:text-center">
          <h2 className="text-lg font-semibold leading-8 text-[#174054]">
            About Restoration House Fellowship, San Francisco, California
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our main goal is to help create a community of people growing
            together while celebrating the goodness of the Almighty God.
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            We believe that salvation is by grace alone through faith alone in
            Christ alone.
          </p>
        </div>

        <div className="mt-0 max-w-lg sm:mx-auto md:max-w-none">
          <div className="py-12">
            <h3 className="text-4xl text-[#174054] py-3">Core Values</h3>
            <p>
              Our values are meant to bring clarity to the things that matter
              most at Restoration House Fellowship. They guide how we achieve
              our mission and influence leadership decisions as well as daily
              ministry plans.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-x-12 md:gap-y-16">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-[50%] bg-[#174054] text-white sm:shrink-0">
                  <span>{feature.number}</span>
                </div>
                <div className="sm:min-w-0 sm:flex-1">
                  <p className="text-lg font-semibold leading-8 text-gray-900">
                    {feature.name}
                  </p>
                  <p className="mt-2 text-base leading-7 text-gray-600">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
