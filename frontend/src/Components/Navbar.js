import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react';

export default function Navbar() {
    const location = useLocation();
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
    const totalQuantity = useSelector(state => state.cart.totalQuantity);
    const money = useSelector(state => state.cart.money);
    const [expanded, setExpanded] = useState(false);

    return (
        <nav className="bg-gray-300 border-gray-200 px-2 sm:px-4 py-2.5 fixed w-full z-10">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <Link to="/" className="flex items-center">
                    <span className="self-center text-2xl font-semibold whitespace-nowrap">OOPSIE</span>
                </Link>

                <button collapse={expanded.toString()} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-md text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false" onClick={() => setExpanded(expanded ? !expanded : "expanded")}>
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                    {expanded && !isLoggedIn && <div className="width:100% list-style-type:none padding:0 margin:0">
                        <ul><Link to="/login" className="flex items-center">Login</Link></ul>
                        <ul><Link to="/register" className="flex items-center">Register</Link></ul>
                    </div>}
                    {expanded && isLoggedIn && <div className="width:100% list-style-type:none padding:0 margin:0">
                        <ul><Link to="/shopping" className="flex items-center">Shopping</Link></ul>
                        <ul><Link to="/cart" className="flex items-center">Cart</Link></ul>
                        <ul><Link to="/wallet" className="flex items-center">Wallet</Link></ul>
                    </div>}
                </button>

                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="flex flex-col p-4 mt-4 bg-gray-300 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-lg md:font-medium md:border-0 dark:border-gray-700">
                        {!isLoggedIn ? (
                            <>
                                {
                                    /* If user has not logged in, only then login and register screenn will be shown*/
                                }
                                <li>
                                    <Link to="/login" className={(location.pathname === "/login" ? "text-blue-700 " : "text-gray-800 ") + "block py-2 pr-4 pl-3 bg-blue-700 rounded bg-transparent md:p-0"}>Log in</Link>
                                </li>
                                <li>
                                    <Link to="/register" className={(location.pathname === "/register" ? "text-blue-700 " : "text-gray-800 ") + "block py-2 pr-4 pl-3 bg-blue-700 rounded md:bg-transparent md:p-0"}>Register</Link>
                                </li>
                            </>
                        ) : (
                            <>
                                {
                                    /* Else shopping and cart screen tabs will be shown*/
                                }
                                <li>
                                    <Link to="/shopping" className={(location.pathname === "/shopping" ? "text-blue-700 " : "text-gray-800 ") + "block py-2 pr-4 pl-3 bg-blue-700 rounded md:bg-transparent md:p-0"}>Shopping</Link>
                                </li>
                                <li>
                                    <Link to="/cart" className={(location.pathname === "/cart" ? "text-blue-700 " : "text-gray-800 ") + "block py-2 pr-4 pl-3 bg-blue-700 rounded md:bg-transparent md:p-0"}>Cart<sup>{totalQuantity}</sup></Link>
                                </li>
                                <li>
                                    <Link to="/wallet" className={(location.pathname === "/wallet" ? "text-blue-700 " : "text-gray-800 ") + "block border border-black px-4 bg-blue-700 rounded md:bg-transparent"}>₹{money}</Link>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </nav>

    )
}