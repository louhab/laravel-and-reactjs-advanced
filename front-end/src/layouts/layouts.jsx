import React, { useState } from 'react';
import { Outlet } from "react-router-dom";
import { Link } from 'react-router-dom';
import Logo from '../components/Logo'
export default function Layout() {
      const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return <>
    <header>
      <div
        className="items-center justify-between flex bg-gray-800 bg-opacity-90 px-12 py-4 mb-4 mx-auto shadow-2xl">
        <div className="text-2xl text-white font-semibold inline-flex items-center">
            <Logo/>
        </div>
        <div>
          <ul className="flex text-white">
            <li className="ml-5 px-2 py-1">
                <Link className={'flex'} to={"/"}>
                    Home Page
                </Link>
            </li>
            <li className="ml-5 px-2 py-1">
                <Link className={'flex'} to={"/Login"}>
                    Login
                </Link>
                      </li>
            <li className="ml-5 px-2 py-1">
            <button
                className={'flex bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'} onClick={toggleDarkMode}>
                    {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
    <main className={'container'}>
      <Outlet/>
    </main>
  </>
}