import React from "react";
import logo from "../assets/navbar/logo_at_nav_bar.png";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";

export const LoginPage = ({ setNavon }) => {
  useEffect(() => {
    setNavon(true);
  }, []);

  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    navigate("/dashboard");
  };

  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState({
    id: "",
    message: "",
  });

  return (
    <div>
      <main className="">
        <section className="">
          <div className="flex flex-col h-auto pt-[6rem] items-center justify-center px-6 py-[5rem] mx-auto md:min-h-screen  dark:bg-gray-800 bg-white">
            <a
              href="#"
              className="flex items-center mb-6 text-2xl font-semibold text-gray-800  dark:text-white"
            >
              <img className="w-8 h-8 mr-2" src={logo} alt="logo" />
              Finance
            </a>
            <div className="w-full dark:bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 dark:border-gray-700">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl text-center font-bold leading-tight tracking-tight dark:text-gray-900 md:text-2xl text-white">
                  Welcome Back
                  <span className="block text-sm mt-1">
                    Sign in to continue
                  </span>
                </h1>
                <form
                  onSubmit={onSubmit}
                  className="space-y-4 md:space-y-6"
                  action="#"
                >
                  {/* Email  */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium dark:text-gray-900 text-white"
                    >
                      Your email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="dark:bg-gray-50 border dark:border-gray-300 dark:text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 dark:placeholder-gray-400 text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="name@company.com"
                      required
                      onChange={(e) => {
                        setUser((prev) => {
                          return { ...prev, email: e.target.value };
                        });
                      }}
                    />

                    {/* Error Message Regarding Email  */}
                    <p className="text-sm text-red-600 font-medium">
                      {error.message}
                    </p>
                  </div>

                  {/* Password  */}
                  <div>
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium dark:text-gray-900 text-white"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="••••••••"
                      className="dark:bg-gray-50 border dark:border-gray-300 dark:text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 dark:placeholder-gray-400 text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required
                      onChange={(e) => {
                        setUser((prev) => {
                          return { ...prev, password: e.target.value };
                        });
                      }}
                    />
                    {/* Error Message Regarding Password  */}
                    <p className="text-sm text-red-600 font-medium">
                      {error.message}
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="remember"
                          aria-describedby="remember"
                          type="checkbox"
                          className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                          required=""
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label
                          htmlFor="remember"
                          className="dark:text-gray-500 text-gray-300"
                        >
                          Remember me
                        </label>
                      </div>
                    </div>
                    <Link
                      to="/"
                      className="text-sm font-medium text-primary-600 hover:underline dark:text-gray-700 text-gray-300"
                    >
                      Forgot password?
                    </Link>
                  </div>

                  {/* Submit  */}

                  <button
                    disabled={
                      !user.email.includes("@") ||
                      user.email.length < 8 ||
                      user.password.length < 6
                    }
                    type="submit"
                    className="w-full disabled:bg-opacity-80 dark:text-white text-gray-900 bg-white dark:bg-[#21262C] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    Sign in
                  </button>
                  <p className="text-sm font-medium dark:text-gray-600 text-gray-300">
                    Don’t have an account yet?
                    <Link
                      to="/signup"
                      className="font-medium ml-2 dark:text-gray-600 hover:underline text-gray-300"
                    >
                      Sign up
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
