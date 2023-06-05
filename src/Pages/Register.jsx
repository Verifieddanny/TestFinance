import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/navbar/logo_at_nav_bar.png";

export const RegisterPage = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
    name: "",
    gender: "",
    confirmPassword: "",
    agreed: "off",
  });
  const [error, setError] = useState({
    id: "",
    message: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    setUser({
      email: "",
      password: "",
      name: "",
      gender: "",
      confirmPassword: "",
      agreed: "off",
    });
    console.log(user);
  };

  return (
    <>
      <main className="">
        <section className="">
          <div className="flex flex-col mt-[80px] md:mt-[100px] mb-10  items-center justify-center px-6 py-8 mx-auto md:min-h-screen lg:py-0">
            <a
              href="#"
              className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
            >
              <img className="w-8 h-8 mr-2" src={logo} alt="logo" />
              Finance
            </a>
            <h1 className="text-xl mb-5 text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Register Account
              <span className="block font-medium text-sm mt-1">
                Get your free Finance account now.
              </span>
            </h1>
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <form
                  onSubmit={onSubmit}
                  className="space-y-4 md:space-y-6"
                  action="#"
                >
                  {/* Name  */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Your Legal Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="e.g John Doe"
                      value={user.name}
                      required
                      onChange={(e) => {
                        setUser((prev) => {
                          return { ...prev, name: e.target.value };
                        });
                        if (e.target.value.length < 3) {
                          setError({
                            id: "shortName",
                            message: "Should be more than 3 letters",
                          });
                        } else {
                          setError({
                            id: "",
                            message: "",
                          });
                        }
                      }}
                    />
                    {/* Error Message Regarding Name  */}
                    <p className="text-sm text-red-600 font-medium">
                      {error.id === "shortName" && error.message}
                    </p>
                  </div>
                  {/* Email  */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Your email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={user.email}
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="name@company.com"
                      required
                      onChange={(e) => {
                        setUser((prev) => {
                          return { ...prev, email: e.target.value };
                        });
                      }}
                    />
                  </div>

                  {/* Gender  */}
                  <div>
                    <label
                      htmlFor="gender"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Gender *
                    </label>

                    <select
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      name="gender"
                      onChange={(e) => {
                        setUser((prev) => {
                          return { ...prev, gender: e.target.value };
                        });
                      }}
                      id="gender"
                    >
                      <option value="" disabled selected>
                        Select Gender
                      </option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </div>

                  {/* Password  */}
                  <div>
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Password *
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      value={user.password}
                      placeholder="••••••••"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required
                      onChange={(e) => {
                        setUser((prev) => {
                          return { ...prev, password: e.target.value };
                        });
                        if (e.target.value.length < 6) {
                          setError({
                            id: "shortPassword",
                            message: "Should be more than 6 characters ",
                          });
                        } else {
                          setError({
                            id: "",
                            message: "",
                          });
                        }
                      }}
                    />
                    {/* Error Message Regarding Password  */}
                    <p className="text-sm text-red-600 font-medium">
                      {error.id === "shortPassword" && error.message}
                    </p>
                  </div>

                  {/* Password Confirmation  */}
                  <div>
                    <label
                      htmlFor="passwordConfirmation"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Password Confirmation *
                    </label>
                    <input
                      type="password"
                      name="passwordConfirmation"
                      id="passwordConfirmation"
                      placeholder="••••••••"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required
                      value={user.confirmPassword}
                      onChange={(e) => {
                        setUser((prev) => {
                          return { ...prev, confirmPassword: e.target.value };
                        });
                        if (e.target.value !== user.password) {
                          setError({
                            id: "notEqual",
                            message: "Passwords should be the same",
                          });
                        } else {
                          setError({
                            id: "",
                            message: "",
                          });
                        }
                      }}
                    />
                    {/* Error Message Regarding Password  */}
                    <p className="text-sm text-red-600 font-medium">
                      {error.id === "notEqual" && error.message}
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
                          required
                          onChange={(e) => {
                            setUser((prev) => {
                              return { ...prev, agreed: e.target.value };
                            });
                          }}
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label
                          htmlFor="remember"
                          className="text-gray-500 dark:text-gray-300"
                        >
                          I agree to all Terms and Conditions.
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* Submit  */}

                  <button
                    disabled={
                      user.name.length < 3 ||
                      user.email.length < 8 ||
                      user.password.length < 6 ||
                      error.id !== ""
                    }
                    type="submit"
                    className="w-full disabled:bg-opacity-80 text-white bg-[#21262C]  focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    Sign Up
                  </button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                    Already have an account?{" "}
                    <Link
                      to="/signup"
                      className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                    >
                      Login
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
