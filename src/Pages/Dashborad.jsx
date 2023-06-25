import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/navbar/logo_at_nav_bar.png";

import { useQuery } from "react-query";
import {
  BsDoorOpen,
  BsMoon,
  BsSun,
  BsDownload,
  BsUpload,
} from "react-icons/bs";
import { FaBtc, FaUserAlt } from "react-icons/fa";

export const Dashborad = ({ theme, setNavon, setTheme }) => {
  const [total, setTotal] = useState(0);
  const [user, setUser] = useState({});
  const { isLoading, error, data } = useQuery({
    queryKey: ["user"],
    queryFn: () =>
      fetch(`https://api.heavisidefinance.online/user`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }).then((res) => res.json()),
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && !data) {
      // navigate to login
      navigate("/login");
    }

    if (!isLoading && data) {
      setUser(data.user);
      setTotal(data.user.balance);
    }
  }, [isLoading, data]);

  const [isClosed, setIsClosed] = useState(true);
  const navigateDeposite = useNavigate();
  const navigateWithdraw = useNavigate();
  useEffect(() => {
    setNavon(false);
  }, []);

  return (
    <>
      {/* Header  */}
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
                  className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
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
                    Heaviside Finance
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

        {/* sidebar  */}

        <aside
          className={`fixed top-0 left-0 z-40 w-64 lg:w-56 h-screen pt-20 transition-transform  ${
            isClosed && "-translate-x-full"
          } bg-white border-r border-gray-200 lg:translate-x-0 dark:bg-gray-800 dark:border-gray-700`}
        >
          <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
            <ul className="space-y-2 font-medium">
              <li>
                <Link
                  to="/dashboard"
                  className={`flex w-full  items-center p-2 text-gray-900 rounded-lg active dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700`}
                >
                  <div>
                    <FaUserAlt />
                  </div>
                  <span className="ml-3">Dashboard</span>
                </Link>
              </li>
              <li
                onClick={() => {
                  navigateDeposite("/deposit");
                  console.log("deposite");
                }}
              >
                <Link
                  to="/deposit"
                  className={`flex w-full items-center p-2 text-gray-900 rounded-lg  dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700`}
                >
                  <div>
                    <BsDownload />
                  </div>
                  <span className="ml-3">Deposit</span>
                </Link>
              </li>
              <li onClick={() => navigateWithdraw("/withdraw")}>
                <Link
                  to="/withdraw"
                  className={`flex w-full items-center p-2 text-gray-900 rounded-lg  dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700`}
                >
                  <div>
                    <BsUpload />
                  </div>
                  <span className="ml-3">Withdraw</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/crypto"
                  className={`flex w-full items-center p-2 text-gray-900 rounded-lg  dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700`}
                >
                  <div>
                    <FaBtc />
                  </div>
                  <span className="ml-3">Crypto Wallet</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/login"
                  className={`flex w-full items-center p-2 text-gray-900 rounded-lg  dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700`}
                >
                  <div>
                    <BsDoorOpen />
                  </div>

                  <span className="ml-3">Sign Out</span>
                </Link>
              </li>
            </ul>
          </div>
        </aside>

        {/* Main Dashboard  */}

        <div className="p-4 lg:ml-56 dark:bg-gray-700 min-h-screen ">
          <div className="md:p-4  rounded-lg dark:border-gray-700 mt-14">
            <h1 className="text-xl dark:text-white mb-3 font-medium">
              Hello, {user.name ? user.name : "User"}
            </h1>
            <div className="grid border-gray-800 rounded p-2 border-dashed border-2 lg:grid-cols-2 gap-4 mb-4 ">
              {/* Assets value  */}

              <div className="flex min-w-[240px] w-full border-gray-500 justify-between border-2 dark:border-0 text-gray-900 dark:text-white p-4 flex-col min-h-24 rounded bg-gray-50 dark:bg-gray-800">
                <div className="text-lg overflow-ellipsis mb-3">
                  Total Assets Value:
                </div>
                <div className="text-2xl mb-3 font-medium">
                  {isLoading ? (
                    <div className="font-bold text-3xl animate-bounce"> .</div>
                  ) : (
                    total
                  )}
                </div>
                <hr />
                <div className="flex items-center gap-3">
                  <Link
                    to="/deposit"
                    className="bg-green-100 mt-3 px-3 py-1 rounded hover:bg-green-500 hover:text-white dark:hover:text-white dark:text-gray-900 "
                  >
                    Deposit
                  </Link>
                  <Link
                    to="/withdraw"
                    className="bg-red-100 mt-3 px-3 py-1 rounded hover:bg-red-500 hover:text-white dark:hover:text-white dark:text-gray-900 "
                  >
                    Withdraw
                  </Link>
                </div>
              </div>

              {/* Staked Assets  */}

              <div className="flex min-w-[240px] w-full border-gray-500 justify-between border-2 dark:border-0 text-gray-900 dark:text-white p-4 flex-col min-h-24 rounded bg-gray-50 dark:bg-gray-800">
                <div className="text-lg overflow-ellipsis mb-3">
                  Staked Assets Value:
                </div>
                <div className="text-2xl mb-3 font-medium">$0.00</div>
                <hr />
                <div className="flex items-center gap-3">
                  <button className="bg-green-100 mt-3 px-3 py-1 rounded hover:bg-green-500 hover:text-white dark:hover:text-white dark:text-gray-900 ">
                    Investments
                  </button>
                </div>
              </div>

              {/* Referrals  */}
              {/* <div className="flex min-w-[240px] w-full border-gray-500 justify-between border-2 dark:border-0 text-gray-900 dark:text-white p-4 flex-col min-h-24 rounded bg-gray-50 dark:bg-gray-800">
                <div className="text-lg overflow-ellipsis mb-3">Referrals:</div>
                <div className="text-2xl mb-3 font-medium">0</div>
                <hr />
                <div className="flex items-center gap-3">
                  <button className="bg-green-100 mt-3 px-3 py-1 rounded hover:bg-zinc-600  hover:text-white dark:hover:text-white dark:text-gray-900 ">
                    Referral
                  </button>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
