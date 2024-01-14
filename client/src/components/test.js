import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLogoutMutation } from '../features/auth/authApiSlice';
import { setCredentials } from '../features/auth/authSlice';
import {TailSpin} from 'react-loader-spinner'

export default function Test() {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const handleToggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    const dispatch = useDispatch();
    const [logout] = useLogoutMutation();

    const [loading, setLoading] = useState(false);

    const loggedInUser = useSelector((state) => state.auth.user)


    const handleLogout = async () => {
        setLoading(true);
        const result = await logout().unwrap();
        setLoading(false);
        console.log("result: ", result);
        dispatch(setCredentials({ user: null, accessToken: null }));

    }

    return (
        <div className="relative inline-block">
            <button
                id="dropdownUserAvatarButton"
                onClick={handleToggleDropdown}
                className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                type="button"
            >
                <span className="sr-only">Open user menu</span>
                <img
                    className="w-10 h-10 rounded-full"
                    src="images/prof.jpg"
                    alt="user"
                />
            </button>

            <div
                id="dropdownAvatar"
                className={`z-10 ${isDropdownOpen ? 'block' : 'hidden'} bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600 absolute top-full transform translate-y-4 translate-x-[-8rem]`}
            >
                <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                    <div>{loggedInUser.name}</div>
                    <div className="font-medium truncate">name@flowbite.com</div>
                </div>
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownUserAvatarButton">
                    <li>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                    </li>
                    <li>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                    </li>
                    <li>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                    </li>
                </ul>
                <div className={ loading ? "flex text-center justify-center py-2" : "py-2"}>
                    {loading ? <TailSpin width={25} height={25} color='#5D3FD3' strokeWidth={5}/> : <button onClick={handleLogout} className="block px-4 py-2 text-start text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white w-full">Sign out</button> }
                    
                </div>
            </div>
        </div>
    );
}
