import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/navbar/logo_at_nav_bar.png";
import {
  BsDoorOpen,
  BsFillPersonDashFill,
  BsMoon,
  BsSun,
} from "react-icons/bs";

const Dashborad = ({ theme, setNavon, setTheme }) => {
  const [isClosed, setIsClosed] = useState(true);

  useEffect(() => {
    setNavon(false);
  }, []);

  return (
    <>
      <div>
        <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
          <div className="px-3 py-3 lg:px-5 lg:pl-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center justify-start">
                <button
                  onClick={() => {
                    setIsClosed(!isClosed);
                  }}
                  type="button"
                  className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      clipRule="evenodd"
                      fillRule="evenodd"
                      d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                    ></path>
                  </svg>
                </button>
                <Link to="/" className="flex ml-2 md:mr-24">
                  <img src={logo} className="h-8 mr-3" alt="FlowBite Logo" />
                  <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
                    Finance
                  </span>
                </Link>
              </div>
              <div className="flex items-center">
                <div className="flex items-center ml-3">
                  <div>
                    <button
                      type="button"
                      onClick={() => {
                        setTheme((prev) => {
                          if (prev === "dark") {
                            return "light";
                          } else {
                            return "dark";
                          }
                        });
                      }}
                      className="flex dark:text-white text-lg text-gray-800 "
                      aria-expanded="false"
                    >
                      {theme === "dark" ? <BsSun /> : <BsMoon />}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>

        <aside
          className={`fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform  ${
            isClosed && "-translate-x-full"
          } bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700`}
        >
          <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
            <ul className="space-y-2 font-medium">
              <li>
                <button className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                  <div>
                    <BsFillPersonDashFill />
                  </div>
                  <span className="ml-3">Dashboard</span>
                </button>
              </li>
              <li>
                <button className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                  <div>
                    <BsDoorOpen />
                  </div>
                  <span className="flex-1 ml-3 whitespace-nowrap">
                    Sign Out
                  </span>
                </button>
              </li>
            </ul>
          </div>
        </aside>

        <div className="p-4 sm:ml-64 min-h-screen ">
          <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
                <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
              </div>
              <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
                <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
              </div>
              <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
                <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashborad;
