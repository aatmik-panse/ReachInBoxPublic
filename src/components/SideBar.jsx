/* eslint-disable react/prop-types */
import { useState } from "react";
import logo from "../assets/logo.svg";
import googleLogo from "../assets/google.svg";

const SideBar = ({ onMenuItemClick }) => {
  const [selectedItem, setSelectedItem] = useState("/");

  const handleMenuItemClick = (path) => {
    setSelectedItem(path);
    onMenuItemClick(path);
  };

  return (
    <div className="flex flex-col justify-between items-center fixed h-screen px-3 py-5 border-r dark:border-[#343A40] border-gray-200 w-20 z-50 bg-white dark:bg-[#101113]">
      <div className="flex items-center flex-col gap-12">
        <div className="cursor-pointer">
          <img
            src={logo}
            className="h-8 rounded-xl object-left overflow-visible"
            alt="Logo"
          />
        </div>
        <div className="flex flex-col gap-7 text-2xl">
          <div
            className={`inline-flex items-center justify-center rounded-md text-sm font-medium h-10 relative p-2 cursor-pointer ${
              selectedItem === "/"
                ? "text-black dark:text-white"
                : "text-gray-500 dark:text-gray-400"
            }`}
            onClick={() => handleMenuItemClick("/")}
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 1024 1024"
              height="2em"
              width="2em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M946.5 505L534.6 93.4a31.93 31.93 0 0 0-45.2 0L77.5 505c-12 12-18.8 28.3-18.8 45.3 0 35.3 28.7 64 64 64h43.4V908c0 17.7 14.3 32 32 32H448V716h112v224h265.9c17.7 0 32-14.3 32-32V614.3h43.4c17 0 33.3-6.7 45.3-18.8 24.9-25 24.9-65.5-.1-90.5z"></path>
            </svg>
          </div>
          <div
            className={`inline-flex items-center justify-center rounded-md text-sm font-medium h-10 relative p-2 cursor-pointer ${
              selectedItem === "/mail"
                ? "text-black dark:text-white"
                : "text-gray-500 dark:text-gray-400"
            }`}
            onClick={() => handleMenuItemClick("/mail")}
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              height="2em"
              width="2em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path>
            </svg>
          </div>
          <div
            className={`inline-flex items-center justify-center rounded-md text-sm font-medium h-10 relative p-2 cursor-pointer ${
              selectedItem === "/send"
                ? "text-black dark:text-white"
                : "text-gray-500 dark:text-gray-400"
            }`}
            onClick={() => handleMenuItemClick("/send")}
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              height="2em"
              width="2em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M473 39.05a24 24 0 00-25.5-5.46L47.47 185h-.08a24 24 0 001 45.16l.41.13 137.3 58.63a16 16 0 0015.54-3.59L422 80a7.07 7.07 0 0110 10L226.66 310.26a16 16 0 00-3.59 15.54l58.65 137.38c.06.2.12.38.19.57 3.2 9.27 11.3 15.81 21.09 16.25h1a24.63 24.63 0 0023-15.46L478.39 64.62A24 24 0 00473 39.05z"></path>
            </svg>
          </div>
          <div
            className={`inline-flex items-center justify-center rounded-md text-sm font-medium h-10 relative p-2 cursor-pointer ${
              selectedItem === "/stack"
                ? "text-black dark:text-white"
                : "text-gray-500 dark:text-gray-400"
            }`}
            onClick={() => handleMenuItemClick("/stack")}
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              height="2em"
              width="2em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M3 14h4v-4H3v4zm0 5h4v-4H3v4zM3 9h4V5H3v4zm5 5h13v-4H8v4zm0 5h13v-4H8v4zM8 5v4h13V5H8z"></path>
            </svg>{" "}
          </div>
          <div
            className={`inline-flex items-center justify-center rounded-md text-sm font-medium h-10 relative p-2 cursor-pointer ${
              selectedItem === "/onebox"
                ? "text-black dark:text-white"
                : "text-gray-500 dark:text-gray-400"
            }`}
            onClick={() => handleMenuItemClick("/onebox")}
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              height="2em"
              width="2em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M479.66 268.7l-32-151.81C441.48 83.77 417.68 64 384 64H128c-16.8 0-31 4.69-42.1 13.94s-18.37 22.31-21.58 38.89l-32 151.87A16.65 16.65 0 0032 272v112a64 64 0 0064 64h320a64 64 0 0064-64V272a16.65 16.65 0 00-.34-3.3zm-384-145.4v-.28c3.55-18.43 13.81-27 32.29-27H384c18.61 0 28.87 8.55 32.27 26.91 0 .13.05.26.07.39l26.93 127.88a4 4 0 01-3.92 4.82H320a15.92 15.92 0 00-16 15.82 48 48 0 11-96 0A15.92 15.92 0 00192 256H72.65a4 4 0 01-3.92-4.82z"></path>
            </svg>{" "}
          </div>
          <div
            className={`inline-flex items-center justify-center rounded-md text-sm font-medium h-10 relative p-2 cursor-pointer ${
              selectedItem === "/stacks"
                ? "text-black dark:text-white"
                : "text-gray-500 dark:text-gray-400"
            }`}
            onClick={() => handleMenuItemClick("/stacks")}
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              height="2em"
              width="2em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M5 8h14V6H5v2zm0 4h14v-2H5v2zm0 4h14v-2H5v2z"></path>
            </svg>{" "}
          </div>
        </div>
      </div>
      <div className="cursor-pointer">
        <img
          src={googleLogo}
          alt="logout"
          className="h-8 rounded-xl object-left overflow-visible"
        />
      </div>
    </div>
  );
};

export default SideBar;
