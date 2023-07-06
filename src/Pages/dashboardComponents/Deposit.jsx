import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/navbar/logo_at_nav_bar.png";
import {
  BsDoorOpen,
  BsMoon,
  BsSun,
  BsDownload,
  BsUpload,
} from "react-icons/bs";
import { FaBtc, FaUserAlt } from "react-icons/fa";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Deposit = ({ theme, setNavon, setTheme }) => {
  const [isClosed, setIsClosed] = useState(true);
  const [prices, setCoins] = useState({});
  const [selected, setSelected] = useState("bitcoin");
  const [value, setValue] = useState(0);
  const [amount, setAmount] = useState(0);
  const [display, setDisplay] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setNavon(false);
  }, []);

  const onCopied = () => {
    toast("Copied! 🔗", {
      position: "top-center",
      autoClose: 500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
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
      setCoins({
        btc: response.data.coins[0].price,
        eth: response.data.coins[1].price,
        usdt: response.data.coins[2].price,
        bsc: response.data.coins[3].price,
        ripple: response.data.coins[5].price,
        sol: response.data.coins[9].price,
      });
    });
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
                  className={`flex w-full items-center p-2 text-gray-900 rounded-lg active dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700`}
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
                  className={`flex w-full items-center p-2 text-gray-900 rounded-lg  dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700`}
                >
                  <div>
                    <FaBtc />
                  </div>
                  <span className="ml-3">Crypto Wallet</span>
                </Link>
              </li>
              <li>
                <button
                  onClick={() => {
                    localStorage.removeItem("token");
                    navigate("/login");
                  }}
                  className={`flex w-full items-center p-2 text-gray-900 rounded-lg  dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700`}
                >
                  <div>
                    <BsDoorOpen />
                  </div>

                  <span className="ml-3">Sign Out</span>
                </button>
              </li>
            </ul>
          </div>
        </aside>

        {/* Main Dashboard  */}

        <div className="p-4 lg:ml-56 relative dark:bg-gray-700 min-h-screen ">
          <div className="md:p-4  rounded-lg dark:border-gray-700 mt-14">
            <h1 className="text-xl dark:text-white mb-3 font-medium">
              Deposit Funds
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
                  <p className="text-sm my-3">
                    AMOUNT
                    <sub className="ml-2 text-xs font-bold dark:text-blue-300 text-blue-500 ">
                      {/* BTC */}
                      {selected === "bitcoin"
                        ? "BTC"
                        : selected === "ethereum"
                        ? "ETH"
                        : selected === "bsc"
                        ? "BSC"
                        : selected === "solana"
                        ? "SOL"
                        : selected === "usdt"
                        ? "USDT"
                        : "XRP"}
                    </sub>
                  </p>
                  <input
                    type="number"
                    value={amount}
                    placeholder="0.00"
                    className="w-full px-2 border-2 pointer-events-none dark:border-0 bg-gray-200 py-4 rounded-lg text-gray-900 dark:text-white font-medium outline-none dark:bg-gray-800 "
                  />
                  <button
                    onClick={() => {
                      setDisplay(true);
                    }}
                    disabled={Number(value) < 100}
                    className="w-full h-12 mt-5 disabled:text-gray-900 rounded-xl disabled:cursor-not-allowed disabled:dark:text-white disabled:dark:bg-slate-500 disabled:bg-slate-300 bg-slate-600 text-white dark:bg-slate-800  "
                  >
                    Confirm
                  </button>
                </section>
              </div>
            </main>
          </div>
        </div>
      </div>

      <Overflow
        amount={amount}
        currency={
          selected === "bitcoin"
            ? "BTC"
            : selected === "ethereum"
            ? "ETH"
            : selected === "bsc"
            ? "BSC"
            : selected === "solana"
            ? "SOL"
            : selected === "usdt"
            ? "USDT"
            : "XRP"
        }
        setDisplay={setDisplay}
        display={display}
        selected={selected}
        text={
          selected === "bitcoin"
            ? "bc1q8m9d6fz0sllgh0y8fyyx7uusjnyeyuwlujue42"
            : selected === "ethereum"
            ? "0xe5dD0CCdd9036FD3A1Ec4Da3B44A7bACf98c7c55"
            : selected === "solana"
            ? "5kvZXdjmbZD2HYwdzQeoe8oqcfsH3e9Sq1yF5HvhHtHj"
            : "0xe5dD0CCdd9036FD3A1Ec4Da3B44A7bACf98c7c55"
        }
        onCopied={onCopied}
      />
    </>
  );
};

// Overflow Modal

const Overflow = ({
  amount,
  currency,
  display,
  setDisplay,
  selected,
  text,
  onCopied,
}) => {
  const navigate = useNavigate();

  return (
    <>
      <section
        className={`absolute bg-opacity-80 ${
          !display && "hidden"
        }  dark:bg-opacity-30 lg:pl-56 px-[2rem] top-0 flex items-center justify-center bg-white w-full h-screen `}
      >
        <main
          onClick={() => {
            setDisplay(false);
          }}
          className="absolute w-full h-full top-0 z-[1]"
        ></main>
        <div className="px-1 md:px-5 z-[2] py-10 rounded-xl md:w-[60%] w-full text-center text-white  bg-gray-700">
          <CopyToClipboard text={text}>
            <p className="text-xl font-medium ">
              I'm Sending {amount} {currency} to <br /> <br />
              <span
                className=" bg-gray-900 rounded-xl p-3 mt-2 text-xs w-full"
                onClick={onCopied}
              >
                {selected === "bitcoin"
                  ? "bc1q8m9d6fz0sllgh0y8fyyx7uusjnyeyuwlujue42"
                  : selected === "ethereum"
                  ? "0xe5dD0CCdd9036FD3A1Ec4Da3B44A7bACf98c7c55"
                  : selected === "solana"
                  ? "5kvZXdjmbZD2HYwdzQeoe8oqcfsH3e9Sq1yF5HvhHtHj"
                  : "0xe5dD0CCdd9036FD3A1Ec4Da3B44A7bACf98c7c55"}
              </span>
            </p>
          </CopyToClipboard>
          <button
            onClick={() => {
              toast("Payment is being confirmed.....", {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
              });

              setTimeout(() => {
                navigate("/dashboard");
              }, 3000);
            }}
            className="text-lg mt-5 rounded-lg font-medium bg-green-500 text-white px-3 py-1 "
          >
            I've paid.
          </button>
          <p className="text-sm text-left text-white mt-4 ">
            click on address to copy address
          </p>
        </div>
        <ToastContainer
          position="top-center"
          autoClose={500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
        <br />
      </section>
    </>
  );
};

export default Deposit;
