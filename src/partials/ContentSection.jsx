import { InboxIcon, SparklesIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import Image01 from "/images/pexels-josh-sorenson.jpg";
import Image02 from "/images/pexels-josh-sorenson01.jpg";
import DrMyles from "/images/dr-myles-munroe.jpg";

export default function ContentSection() {
  return (
    <div className="relative overflow-hidden bg-white pt-16 pb-32">
      <div className="relative">
        <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
          <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
            <div>
              <div className="">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                  Grow closer to God
                </h2>
                <p className="mt-4 text-lg text-gray-500">
                  Restoration House Fellowship is not a just building structure,
                  it is us, the people who make up the church with opportunities
                  to stay connected. We create community through ministries
                  which allows us to feel and stay connected throughout the
                  week.
                </p>
              </div>
            </div>
            <div className="mt-8 border-t border-gray-200 pt-6">
              <blockquote>
                <div>
                  <p className="text-base text-gray-500">
                    &ldquo;Prayer is our invitation to God to intervene in the
                    affairs of earth. It is our request for Him to work His ways
                    in this world.&rdquo;
                  </p>
                </div>
                <footer className="mt-3">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0">
                      <img
                        className="h-6 w-6 rounded-full"
                        src={DrMyles}
                        alt="Dr Myles Munroe"
                      />
                    </div>
                    <div className="text-base font-medium text-gray-700">
                      Dr. Myles Munroe
                    </div>
                  </div>
                </footer>
              </blockquote>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0">
            <div className="-mr-48 pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
              <img
                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                src={Image01}
                alt="Praise"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-24">
        <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
          <div className="mx-auto max-w-xl px-6 lg:col-start-2 lg:mx-0 lg:max-w-none lg:py-32 lg:px-0">
            <div>
              <div>
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#174054]">
                  <SparklesIcon
                    className="h-8 w-8 text-white"
                    aria-hidden="true"
                  />
                </span>
              </div>
              <div className="mt-6">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                  Starting point{" "}
                </h2>
                <p className="mt-4 text-lg text-gray-500">
                  We believe that to know of God’s love deeply begins our
                  journey to grow into the people he’s called us to become.
                  Wherever you are in life, you will always have a next step to
                  take, as you grow.
                </p>
                <p className="mt-4 text-lg text-gray-500">
                  Join the RHF Community Group on Facebook.
                </p>
                <div className="mt-6">
                  <div>
                    <Link
                      className="btn text-white bg-[#174054] hover:bg-[#1d5977] w-full shadow-sm"
                      to="/"
                    >
                      Join The Community
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:col-start-1 lg:mt-0">
            <div className="-ml-48 pr-6 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0">
              <img
                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                src={Image02}
                alt="Praise and Worship"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
