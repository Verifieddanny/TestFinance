import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/navbar/logo_at_nav_bar.png";
import {
  BsDoorOpen,
  BsMoon,
  BsSun,
  BsDownload,
  BsUpload,
} from "react-icons/bs";
import { FaBtc, FaUserAlt } from "react-icons/fa";
import Axios from "axios";

const Withdraw = ({ theme, setNavon, setTheme }) => {
  const [isClosed, setIsClosed] = useState(true);
  const [prices, setCoins] = useState({});
  const [selected, setSelected] = useState("bitcoin");
  const [value, setValue] = useState(0);
  const [wallet, setWallett] = useState("");

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
                  className={`flex w-full  items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700`}
                >
                  <div>
                    <FaUserAlt />
                  </div>
                  <span className="ml-3">Dashboard</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/deposit"
                  className={`flex w-full items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700`}
                >
                  <div>
                    <BsDownload />
                  </div>
                  <span className="ml-3">Deposit</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/withdraw"
                  className={`flex w-full items-center p-2 text-gray-900 rounded-lg active dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700`}
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
              Withdraw Funds
            </h1>
            <main className="grid place-items-center w-full">
              <div className="grid w-full max-w-3xl py-5 border-gray-800 mt-5 dark:text-white rounded p-2 border-dashed border-2 gap-4 mb-4">
                <section className="px-2">
                  <p className="text-sm mb-3">SELECT WALLET:</p>
                  <select
                    className="w-full px-2 border-2 dark:border-0 bg-transparent py-4 rounded-lg text-gray-900 dark:text-white font-medium outline-none dark:bg-gray-800 "
                    onChange={(e) => {
                      setSelected(e.target.value);
                    }}
                    name="crypto"
                  >
                    <option value="bitcoin">-BITCOIN WALLET</option>
                    <option value="ethereum">-ETHEREUM WALLET</option>
                    <option value="solana">-SOLANA WALLET</option>
                    <option value="bsc">-BINANCE COIN WALLET</option>
                    <option value="usdt">-TETHER USDT WALLET</option>
                    <option value="ripple">-RIPPLE WALLET</option>
                  </select>
                  <p className="text-sm my-3">
                    AMOUNT
                    <sub className="ml-2 text-xs font-bold dark:text-blue-300 text-blue-500 ">
                      USD | <span className="italic">MIN 100 USD</span>
                    </sub>
                  </p>
                  <input
                    type="number"
                    value={value}
                    onChange={(e) => {
                      setValue(e.target.value);
                    }}
                    placeholder="0.00"
                    className="w-full px-2 border-2 dark:border-0 bg-transparent py-4 rounded-lg text-gray-900 dark:text-white font-medium outline-none dark:bg-gray-800 "
                  />
                  <p className="text-sm my-3">Wallet Address</p>
                  <input
                    type="text"
                    onChange={(e) => {
                      setWallett(e.target.value);
                    }}
                    placeholder="0x...."
                    className="w-full px-2 border-2 dark:border-0 bg-transparent py-4 rounded-lg text-gray-900 dark:text-white font-medium outline-none dark:bg-gray-800"
                  />
                  <button
                    disabled={Number(value) < 100 || wallet === ""}
                    className="w-full h-12 mt-5 disabled:text-gray-900 rounded-xl disabled:cursor-not-allowed disabled:dark:text-white disabled:dark:bg-slate-500 disabled:bg-slate-300 bg-slate-600 text-white dark:bg-slate-800  "
                  >
                    <a href="mailto:customer-support@heavisidefinance.online">
                      Confirm
                    </a>
                  </button>
                </section>
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
};

export default Withdraw;
