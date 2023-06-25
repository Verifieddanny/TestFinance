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
import { useQuery } from "react-query";
import Axios from "axios";

const Crypto = ({ theme, setNavon, setTheme }) => {
  const [isClosed, setIsClosed] = useState(true);
  const [prices, setCoins] = useState({});
  const [selected, setSelected] = useState("bitcoin");
  const [value, setValue] = useState(0);
  const [amount, setAmount] = useState(0);

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

  useEffect(() => {
    if (!isLoading && !data) {
      // navigate to login
    }

    if (!isLoading && data) {
      setUser(data.user);
    }
  }, [isLoading, data]);

  useEffect(() => {
    setNavon(false);
  }, []);

  useEffect(() => {
    if (selected === "bitcoin") {
      setAmount(Number(value) / prices.btc);
    } else if (selected === "ethereum") {
      setAmount(Number(value) / prices.eth);
    } else if (selected === "bsc") {
      setAmount(Number(value) / prices.bsc);
    } else if (selected === "ripple") {
      setAmount(Number(value) / prices.ripple);
    } else if (selected === "solana") {
      setAmount(Number(value) / prices.sol);
    } else if (selected === "usdt") {
      setAmount(Number(value));
    }
  }, [value, prices, selected]);

  useEffect(() => {
    Axios.get("https://api.coinstats.app/public/v1/coins").then((response) => {
      //   console.log(prices);
      setCoins({
        btc: response.data.coins[0],
        eth: response.data.coins[1],
        usdt: response.data.coins[2],
        bsc: response.data.coins[3],
        ripple: response.data.coins[5],
        sol: response.data.coins[9],
      });
    });
  }, [prices]);

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
                  className={`flex w-full items-center active p-2 text-gray-900 rounded-lg  dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700`}
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
            <h1 className="text-xl dark:text-white my-3 font-medium">
              Your Assets
            </h1>
            <main className="grid place-items-center w-full">
              <div className="grid w-full max-w-3xl  border-gray-800 mt-5 dark:text-white rounded border-dashed border-2 gap-4 mb-4">
                <h1 className="w-full text-center h-32 grid place-items-center text-white font-bold text-2xl bg-gray-900 ">
                  ${user.balance || 0}
                </h1>
                {prices ? (
                  <section className="w-full p-2 md:px-5 gap-5 grid">
                    <Template
                      src={prices?.btc?.icon}
                      name={prices?.btc?.name}
                      price={prices.btc?.price}
                      change={prices.btc?.priceChange1d}
                      amount={user.btcBalance}
                    />
                    <Template
                      src={prices?.eth?.icon}
                      name={prices?.eth?.name}
                      price={prices.eth?.price}
                      change={prices.eth?.priceChange1d}
                      amount={user.ethBalance}
                    />
                    <Template
                      src={prices?.usdt?.icon}
                      name={prices?.usdt?.name}
                      price={prices.usdt?.price}
                      change={prices.usdt?.priceChange1d}
                      amount={user.usdtBalance}
                    />
                    <Template
                      src={prices?.bsc?.icon}
                      name={prices?.bsc?.name}
                      price={prices.bsc?.price}
                      change={prices.bsc?.priceChange1d}
                      amount={user.bnbBalance}
                    />
                    <Template
                      src={prices?.ripple?.icon}
                      name={prices?.ripple?.name}
                      price={prices.ripple?.price}
                      change={prices.ripple?.priceChange1d}
                      amount={user.xrpBalance}
                    />
                    <Template
                      src={prices?.sol?.icon}
                      name={prices?.sol?.name}
                      price={prices.sol?.price}
                      change={prices.sol?.priceChange1d}
                      amount={user.solBalance}
                    />
                  </section>
                ) : (
                  <h1>Loading</h1>
                )}
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
};

const Template = ({ src, name, price, change, amount }) => {
  return (
    <div className="flex items-center justify-between text-center gap-3 border-b-2 pb-3">
      <img src={src} alt="" className="w-10" />
      <div>
        <h1>{name}</h1>
        <p>
          {price?.toLocaleString("en-US", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </p>
      </div>
      <div>
        <p>
          {(amount / price)?.toLocaleString("en-US", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 5,
          })}
        </p>
        <p>${amount}</p>
      </div>
    </div>
  );
};

export default Crypto;
