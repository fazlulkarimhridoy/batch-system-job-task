"use client";
import { Drawer } from "antd";
import { useState } from "react";
import "../CSS/Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  //   links for nav menu items
  const links = (
    <>
      <li className="text-red-500 cursor-pointer">Home</li>
      <li className="hover:text-red-500 hover:transition-all hover:duration-400 cursor-pointer">
        About Us
      </li>
      <li className="hover:text-red-500 hover:transition-all hover:duration-400 cursor-pointer">
        Pricing
      </li>
      <li className="hover:text-red-500 hover:transition-all hover:duration-400 cursor-pointer">
        Features
      </li>
    </>
  );

  //   showing drawer upon clicking the hamburger for small devices
  const showDrawer = () => {
    setOpen(true);
  };

  //   closing function for the drawer
  const onClose = () => {
    setOpen(false);
  };

  return (
    <header className="bg-white">
      <div className="mx-auto flex h-16 max-w-screen-2xl items-center gap-8 my-5 px-4 sm:px-6 lg:px-8">
        {/* header logo */}
        <div className="block text-teal-600 cursor-pointer">
          <span className="sr-only">Home</span>
          <svg
            width="117.000000"
            height="34.405396"
            viewBox="0 0 117 34.4054"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <desc>Created with Pixso.</desc>
            <defs>
              <clipPath id="clip101_233">
                <rect
                  id="Frame"
                  width="34.000000"
                  height="34.000000"
                  fill="white"
                  fill-opacity="0"
                />
              </clipPath>
            </defs>
            <path
              id="TM"
              d="M109.07 11.5L108.14 11.5L108.14 10.98L110.62 10.98L110.62 11.5L109.7 11.5L109.7 14L109.07 14L109.07 11.5ZM111.03 14L111.03 10.98L111.82 10.98L112.65 13.01L112.69 13.01L113.52 10.98L114.3 10.98L114.3 14L113.68 14L113.68 12.03L113.66 12.03L112.88 13.98L112.46 13.98L111.68 12.02L111.65 12.02L111.65 14L111.03 14Z"
              fill="#000000"
              fill-opacity="1.000000"
              fill-rule="evenodd"
            />
            <path
              id="Vector"
              d="M72.83 27.77L68.35 27.77L68.35 15.34L65.6 15.34L65.6 11.45L68.35 11.45L68.35 11.21Q68.35 8.77 69.53 7.26L69.53 7.26Q69.76 6.98 70.02 6.73Q70.11 6.65 70.2 6.57Q71.88 5.15 74.77 5.15Q75.67 5.15 76.36 5.29L76.36 9.12C75.98 9.06 75.65 9.03 75.37 9.03C73.68 9.03 72.83 9.76 72.83 11.21L72.83 11.45L76.33 11.45L76.33 15.34L72.83 15.34L72.83 27.77ZM58.61 9.99L63.1 9.99L63.1 5.5L58.61 5.5L58.61 9.99ZM78.63 27.77L83.11 27.77L83.11 18.98C83.11 17.77 83.45 16.83 84.13 16.17C84.81 15.49 85.69 15.16 86.79 15.16L88.19 15.16L88.19 11.27L87.24 11.27Q85.74 11.27 84.58 11.84C83.82 12.2 83.23 12.88 82.82 13.9L82.82 11.45L78.63 11.45L78.63 27.77ZM46.58 28.13C47.62 28.13 48.53 27.94 49.33 27.56C50.13 27.16 50.74 26.56 51.15 25.76L51.15 27.77L55.34 27.77L55.34 11.45L50.85 11.45L50.85 20.98C50.85 21.92 50.58 22.68 50.02 23.25C49.46 23.81 48.74 24.09 47.87 24.09C46.99 24.09 46.27 23.81 45.71 23.25C45.16 22.68 44.88 21.92 44.88 20.98L44.88 11.45L40.4 11.45L40.4 21.34Q40.4 24.14 41.73 25.96Q41.85 26.12 41.98 26.27Q42.35 26.69 42.79 27.02L42.79 27.02L42.79 27.02Q44.27 28.13 46.58 28.13ZM58.61 27.77L63.1 27.77L63.1 11.45L58.61 11.45L58.61 27.77ZM99.18 29.29C97.85 32.7 95.69 34.4 92.7 34.4C92.22 34.4 91.75 34.36 91.29 34.28C90.86 34.2 90.47 34.07 90.13 33.89L90.13 30.22C90.77 30.42 91.44 30.52 92.16 30.52C93.04 30.52 93.67 30.31 94.04 29.89C94.42 29.47 94.73 28.99 94.97 28.45L95.27 27.77L88.84 11.45L93.66 11.45L97.51 21.94L101.37 11.45L106.18 11.45L99.18 29.29Z"
              fill="#000000"
              fill-opacity="1.000000"
              fill-rule="evenodd"
            />
            <rect
              id="Frame"
              width="34.000000"
              height="34.000000"
              fill="#FF5F08"
              fill-opacity="0"
            />
            <g clip-path="url(#clip101_233)">
              <path
                id="Vector"
                d="M26.38 10.88C26.15 10.66 25.83 10.56 25.52 10.61C25.21 10.66 24.94 10.86 24.8 11.14C24.3 12.1 23.67 12.99 22.93 13.78C23 13.21 23.04 12.64 23.04 12.07C23.04 10.97 22.89 9.84 22.6 8.71C21.65 5 19.15 1.87 15.74 0.11C15.45 -0.05 15.09 -0.04 14.8 0.12C14.51 0.28 14.32 0.58 14.29 0.91C14.03 4.28 12.29 7.35 9.52 9.33C9.49 9.36 9.45 9.38 9.42 9.41C9.34 9.46 9.27 9.52 9.2 9.56C9.19 9.57 9.18 9.57 9.17 9.58C7.43 10.83 6 12.49 5.02 14.38C4.03 16.31 3.53 18.38 3.53 20.53C3.53 21.62 3.68 22.75 3.97 23.88C5.5 29.84 10.85 33.99 17 33.99C24.42 33.99 30.46 27.95 30.46 20.53C30.46 16.87 29.01 13.44 26.38 10.88Z"
                fill="#FF5555"
                fill-opacity="1.000000"
                fill-rule="nonzero"
              />
              <circle
                id="Ellipse"
                cx="16.000000"
                cy="20.000000"
                r="4.000000"
                fill="#FFFFFF"
                fill-opacity="1.000000"
              />
            </g>
          </svg>
        </div>

        <div className="flex flex-1 items-center justify-end md:justify-between">
          {/* header menu items */}
          <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-6 text-lg font-semibold">
              {links}
            </ul>
          </nav>

          {/* buttons */}
          <div className="flex items-center gap-4">
            {/* download button */}
            <div className="sm:flex sm:gap-4">
              <button className="block rounded-md bg-black px-3 py-1.5 md:px-8 md:py-4 text-lg font-medium text-white transition hover:bg-red-500">
                Download
              </button>
            </div>
            {/* hamburger menu showed only for small devices */}
            <button
              onClick={showDrawer}
              className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
            >
              <span className="sr-only">Toggle menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          {/* small device hamburger menu drawer */}
          <Drawer width={250} onClose={onClose} open={open}>
            <div className="flex flex-col items-start gap-3">
              <p className="text-red-500 text-lg font-bold cursor-pointer">
                Home
              </p>
              <p className="hover:text-red-500 text-lg font-bold hover:transition-all hover:duration-400 cursor-pointer">
                About Us
              </p>
              <p className="hover:text-red-500 text-lg font-bold hover:transition-all hover:duration-400 cursor-pointer">
                Pricing
              </p>
              <p className="hover:text-red-500 text-lg font-bold hover:transition-all hover:duration-400 cursor-pointer">
                Features
              </p>
            </div>
          </Drawer>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
