import React from "react";
import { Link } from "react-router-dom";
import Logo from "/images/restorationHouseMinistries-logo.png";

function SignIn() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/* Site header */}
      <header className="absolute w-full z-30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Site branding */}
            <div className="shrink-0 mr-4">
              {/* Logo */}
              <Link className="block group" to="/" aria-label="Cruip">
                {/* <svg
                  className="fill-blue-500 group-hover:fill-blue-600 transition duration-150 ease-in-out w-8 h-8"
                  width="32"
                  height="32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m7.799 4.47.325.434a19.264 19.264 0 0 0 4.518 4.204l.27.175-.013.257a17.638 17.638 0 0 1-.437 2.867l-.144.564a18.082 18.082 0 0 1-2.889 5.977c2.272.245 4.492.88 6.5 1.886 1.601.788 3.062 1.798 4.344 2.972l.142.135-.017.232a17.034 17.034 0 0 0 1.227 7.504l-.724.323c-1.555-2.931-4.113-5.287-7.19-6.632-3.075-1.351-6.602-1.622-9.857-.844-.822.194-1.532.094-2.146-.183a3.138 3.138 0 0 1-1.29-1.146l-.076-.133-.078-.154-.085-.201a2.893 2.893 0 0 1-.095-1.694c.174-.624.55-1.2 1.239-1.67 2.734-1.85 4.883-4.537 5.944-7.68.704-2.076.925-4.32.633-6.545l-.101-.647Zm4.674-.284.16.2a15.87 15.87 0 0 0 5.629 4.322c3.752 1.76 8.363 2.075 12.488.665.419-.14.78-.044 1.002.158l.106.12.066.11.026.063c.125.33.024.751-.4.994-3.404 1.905-5.92 5.05-6.98 8.573a13.967 13.967 0 0 0 .727 10.055l.241.484-.724.323c-.913-2.227-2.326-4.302-4.12-6.05l-.28-.262.026-.305a16.667 16.667 0 0 1 1.121-4.652l.206-.488c1.05-2.443 2.676-4.59 4.664-6.293-3.064.442-6.273.17-9.243-.858a19.036 19.036 0 0 1-4.072-1.93l-.204-.132.017-.322a18.337 18.337 0 0 0-.415-4.605l-.04-.17ZM10.957 0a18.125 18.125 0 0 1 1.424 3.792l.092.394-.174-.219A14.803 14.803 0 0 1 10.235.322L10.957 0ZM7.046 1.746c.277.725.494 1.463.653 2.206l.1.519-.012-.016a17.99 17.99 0 0 1-1.203-1.891l-.262-.495.724-.323Z" />
                </svg> */}
                <img src={Logo} alt="logo" className="h-[150px]" />
              </Link>
            </div>
          </div>
        </div>
      </header>
      {/* Page content */}
      <main className="grow bg-gray-50">
        <section>
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">
              {/* Page header */}
              <div className="max-w-3xl mx-auto text-center pb-12">
                <h1 className="h2 font-cabinet-grotesk">Welcome</h1>
              </div>
              {/* Form */}
              <div className="max-w-sm mx-auto">
                <form>
                  <div className="flex flex-wrap mb-4">
                    <div className="w-full">
                      <label
                        className="block text-gray-500 text-sm font-medium mb-1"
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="form-input w-full text-gray-800"
                        required
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap mb-4">
                    <div className="w-full">
                      <label
                        className="block text-gray-500 text-sm font-medium mb-1"
                        htmlFor="password"
                      >
                        Password
                      </label>
                      <input
                        id="password"
                        type="password"
                        className="form-input w-full text-gray-800"
                        required
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center justify-between mt-6">
                    <Link
                      className="btn text-orange-700 border border-orange-300 bg-white hover:bg-orange-100 w-full shadow-sm"
                      to="/signup"
                    ></Link>
                    <div className="ml-2">
                      <button className="btn-sm text-white bg-[#fea602 ] hover:bg-[#1d5977] shadow-sm">
                        Sign in
                      </button>
                    </div>
                  </div>
                </form>
                {/* <div className="flex items-center my-6">
                  <div
                    className="border-t border-gray-200 grow mr-3"
                    aria-hidden="true"
                  />
                  <div className="text-sm text-gray-500 italic">or</div>
                  <div
                    className="border-t border-gray-200 grow ml-3"
                    aria-hidden="true"
                  />
                </div>
                <form>
                  <div className="flex flex-wrap">
                    <div className="w-full">
                      <button className="btn-sm text-white bg-[#1D9BF0] hover:bg-[#1A90DF] w-full relative flex items-center">
                        <svg
                          className="fill-white opacity-80"
                          width="16"
                          height="13"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M16 1.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7C5.2 3.9 2.7 2.6 1.1.6c-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H0c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8Z" />
                        </svg>
                        <span className="flex-auto pl-16 pr-8 -ml-16">
                          Join with Twitter
                        </span>
                      </button>
                    </div>
                  </div>
                </form> */}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default SignIn;
