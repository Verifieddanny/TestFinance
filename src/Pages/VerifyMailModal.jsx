import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";

const VerifyMailModal = ({ isModalOpen, setIsModalOpen, email }) => {
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    toast.success("register success");
    navigate("/dashboard");
  };

  return (
    <div
      className={` ${
        !isModalOpen && "hidden"
      } fixed grid top-0 left-0 right-0 z-50 h-screen w-screen place-items-center bg-opacity-30 backdrop-blur-sm p-4 overflow-x-hidden overflow-y-auto md:inset-0 max-h-full`}
    >
      <div className="relative w-full max-w-md max-h-full">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <div className="px-6 py-6 lg:px-8">
            <h3 className="mb-4 text-center text-xl font-medium text-gray-900 dark:text-white">
              Verify Email Address
            </h3>
            <form onSubmit={onSubmit} className="space-y-6" action="#">
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Enter verification code here
                </label>
                <input
                  type="number"
                  name="code"
                  onChange={(e) => {
                    setValue(Number(e.target.value));
                  }}
                  value={value}
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  required
                />
              </div>
              <div className="flex justify-between">
                <div className="flex items-start">
                  <span
                    onClick={() => {
                      setIsModalOpen((prev) => !prev);
                    }}
                    className="text-sm text-blue-700 hover:underline dark:text-blue-500"
                  >
                    Wrong email?
                  </span>
                </div>
                <Link
                  href="/"
                  className="text-sm text-blue-700 hover:underline dark:text-blue-500"
                >
                  Didn't recieve any code?
                </Link>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Verify
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyMailModal;
