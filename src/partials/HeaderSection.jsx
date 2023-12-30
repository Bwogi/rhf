import { Link } from "react-router-dom";
export default function HeaderSection() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-16 px-6 sm:py-24 lg:px-8">
        <div className="text-center">
          <h2 className="text-lg font-semibold text-[#174054]">
            New Here? Welcome to Restoration House Fellowship, San Francisco, CA
          </h2>
          <p className="mt-1 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Let's connect with you.
          </p>
          <p className="mx-auto mt-5 max-w-xl text-xl text-gray-500">
            We want to connect with you and help you in any way we can. Whether
            you just want to know more about our church, how to serve the Lord,
            want to share your story join the community today.
          </p>
          {/* <div className='mt-5'>
                  <Link className=" text-white bg-[#174054] hover:bg-[#1d5977] shadow-sm rounded-xl py-2 px-4" to="/signup">
                    Connect Now
                  </Link>
                </div> */}
        </div>
      </div>
    </div>
  );
}
