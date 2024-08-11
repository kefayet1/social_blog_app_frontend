import React, { useContext, useEffect, useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const DashboardLayout = () => {
    const navigate = useNavigate();
    const [navToggle, setNavToggle] = useState(false);
    const [openItem, setOpenItem] = useState(false);
    const { login } = useContext(AuthContext);

    useEffect(() => {
        if (!login) {
            navigate("/");
        }
    });
    return (
        <div
            id="app-layout"
            className={`overflow-x-hidden flex ${navToggle ? "toggled" : ""}`}
        >
            {/* <!-- start navbar --> */}
            <nav className="navbar-vertical navbar">
                <div
                    id="myScrollableElement"
                    className="h-screen"
                    data-simplebar
                >
                    {/* <!-- brand logo --> */}
                    <a className="navbar-brand" href="./index.html">
                        <img src="./assets/images/brand/logo/logo.svg" alt="" />
                    </a>

                    {/* <!-- navbar nav --> */}
                    <ul className="navbar-nav flex-col" id="sideNavbar">
                        <li className="nav-item">
                            <NavLink
                                className="nav-link  active "
                                href=".dashboard"
                            >
                                <i
                                    data-feather="home"
                                    className="w-4 h-4 mr-2"
                                ></i>
                                Dashboard
                            </NavLink>
                        </li>
                        {/* <!-- nav item --> */}
                        <li className="nav-item">
                            <div className="navbar-heading">Content</div>
                        </li>
                        {/* <!-- nav item --> */}
                        <li
                            className="nav-item"
                            onClick={() => setOpenItem(!openItem)}
                        >
                            <span
                                className="nav-link  collapsed "
                                data-bs-toggle="collapse"
                                data-bs-target="#navPages"
                                aria-expanded="false"
                                aria-controls="navPages"
                            >
                                <i
                                    data-feather="layers"
                                    className="w-4 h-4 mr-2"
                                ></i>
                                Pages
                            </span>
                            <div
                                id="navPages"
                                className={`collapse ${openItem ? "show" : ""}`}
                                data-bs-parent="#sideNavbar"
                            >
                                <ul className="nav flex-col">
                                    <li className="nav-item">
                                        <NavLink
                                            className="nav-link "
                                            to="/dashboard/categories"
                                        >
                                            Categories
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink
                                            className="nav-link"
                                            to="/dashboard/posts"
                                        >
                                            Posts
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        {/* <!-- nav item --> */}
                        <li className="nav-item">
                            <a
                                className="nav-link  collapsed "
                                href="#!"
                                data-bs-toggle="collapse"
                                data-bs-target="#navAuthentication"
                                aria-expanded="false"
                                aria-controls="navAuthentication"
                            >
                                <i
                                    data-feather="lock"
                                    className="w-4 h-4 mr-2"
                                ></i>
                                Authentication
                            </a>
                            <div
                                id="navAuthentication"
                                className="collapse "
                                data-bs-parent="#sideNavbar"
                            >
                                <ul className="nav flex-col">
                                    <li className="nav-item">
                                        <a
                                            className="nav-link "
                                            href="./sign-in.html"
                                        >
                                            Sign In
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link "
                                            href="./sign-up.html"
                                        >
                                            Sign Up
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link "
                                            href="./forget-password.html"
                                        >
                                            Forget Password
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        {/* <!-- nav item --> */}
                        <li className="nav-item">
                            <a className="nav-link " href="./layout.html">
                                <i
                                    data-feather="sidebar"
                                    className="w-4 h-4 mr-2"
                                ></i>
                                Layouts
                            </a>
                        </li>
                        {/* <!-- nav heading --> */}
                        <li className="nav-item">
                            <div className="navbar-heading">UI Components</div>
                        </li>
                        {/* <!-- nav item --> */}
                        <li className="nav-item">
                            <a
                                className="nav-link  collapsed "
                                href="#!"
                                data-bs-toggle="collapse"
                                data-bs-target="#navComponents"
                                aria-expanded="false"
                                aria-controls="navComponents"
                            >
                                <i
                                    data-feather="package"
                                    className="w-4 h-4 mr-2"
                                ></i>
                                Components
                            </a>
                            <div
                                id="navComponents"
                                className="collapse "
                                data-bs-parent="#sideNavbar"
                            >
                                <ul className="nav flex-col">
                                    <li className="nav-item">
                                        <a
                                            className="nav-link "
                                            href="./components/accordions.html"
                                        >
                                            Accordions
                                        </a>
                                    </li>

                                    <li className="nav-item">
                                        <a
                                            className="nav-link "
                                            href="./components/alerts.html"
                                        >
                                            Alerts
                                        </a>
                                    </li>

                                    <li className="nav-item">
                                        <a
                                            className="nav-link "
                                            href="./components/avatar.html"
                                        >
                                            Avatar
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link "
                                            href="./components/badge.html"
                                        >
                                            Badges
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link "
                                            href="./components/buttons.html"
                                        >
                                            Buttons
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link "
                                            href="./components/button-group.html"
                                        >
                                            Button Group
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link "
                                            href="./components/blockquote.html"
                                        >
                                            Blockquote
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link "
                                            href="./components/breadcrumb.html"
                                        >
                                            Breadcrumb
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link "
                                            href="./components/card.html"
                                        >
                                            Card
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link "
                                            href="./components/collapse.html"
                                        >
                                            Collapse
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link "
                                            href="./components/dropdown.html"
                                        >
                                            Dropdown
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link "
                                            href="./components/forms.html"
                                        >
                                            Forms
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link "
                                            href="./components/offcanvas.html"
                                        >
                                            Offcanvas
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link "
                                            href="./components/lists.html"
                                        >
                                            Lists
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link "
                                            href="./components/navbar.html"
                                        >
                                            Navbar
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link "
                                            href="./components/navs-tabs.html"
                                        >
                                            Nav & Tabs
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link "
                                            href="./components/pagination.html"
                                        >
                                            Pagination
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link "
                                            href="./components/progress.html"
                                        >
                                            Progress
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link "
                                            href="./components/spinners.html"
                                        >
                                            Spinners
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link "
                                            href="./components/tables.html"
                                        >
                                            Tables
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link "
                                            href="./components/toast.html"
                                        >
                                            Toast
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link "
                                            href="./components/tooltips.html"
                                        >
                                            Tooltips
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        {/* <!-- nav item --> */}
                        <li className="nav-item">
                            <a
                                className="nav-link collapsed"
                                href="#!"
                                data-bs-toggle="collapse"
                                data-bs-target="#navMenuLevel"
                                aria-expanded="false"
                                aria-controls="navMenuLevel"
                            >
                                <i
                                    data-feather="corner-left-down"
                                    className="w-4 h-4 mr-2"
                                ></i>
                                Menu Level
                            </a>
                            <div
                                id="navMenuLevel"
                                className="collapse"
                                data-bs-parent="#sideNavbar"
                            >
                                <ul className="nav flex-col">
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            href="#!"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#navMenuLevelSecond"
                                            aria-expanded="false"
                                            aria-controls="navMenuLevelSecond"
                                        >
                                            Two Level
                                        </a>
                                        <div
                                            id="navMenuLevelSecond"
                                            className="collapse"
                                            data-bs-parent="#navMenuLevel"
                                        >
                                            <ul className="nav flex-col">
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link"
                                                        href="#!"
                                                    >
                                                        NavItem 1
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link"
                                                        href="#!"
                                                    >
                                                        NavItem 2
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    {/* <!-- nav item --> */}
                                    <li className="nav-item">
                                        <a
                                            className="nav-link collapsed"
                                            href="#!"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#navMenuLevelThree"
                                            aria-expanded="false"
                                            aria-controls="navMenuLevelThree"
                                        >
                                            Three Level
                                        </a>
                                        <div
                                            id="navMenuLevelThree"
                                            className="collapse"
                                            data-bs-parent="#navMenuLevel"
                                        >
                                            <ul className="nav flex-col">
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link collapsed"
                                                        href="#!"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target="#navMenuLevelThreeOne"
                                                        aria-expanded="false"
                                                        aria-controls="navMenuLevelThreeOne"
                                                    >
                                                        NavItem 1
                                                    </a>
                                                    <div
                                                        id="navMenuLevelThreeOne"
                                                        className="collapse"
                                                        data-bs-parent="#navMenuLevelThree"
                                                    >
                                                        <ul className="nav flex-col">
                                                            <li className="nav-item">
                                                                <a
                                                                    className="nav-link"
                                                                    href="#!"
                                                                >
                                                                    NavChild
                                                                    Item 1
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link"
                                                        href="#!"
                                                    >
                                                        Nav Item 2
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        {/* <!-- nav item --> */}
                        <li className="nav-item">
                            <div className="navbar-heading">Documentation</div>
                        </li>

                        {/* <!-- nav item --> */}
                        <li className="nav-item">
                            <a className="nav-link " href="./docs.html">
                                <i
                                    data-feather="clipboard"
                                    className="w-4 h-4 mr-2"
                                ></i>
                                Docs
                            </a>
                        </li>
                        {/* <!-- nav item --> */}
                        <li className="nav-item">
                            <a className="nav-link " href="./changelog.html">
                                <i
                                    data-feather="git-pull-request"
                                    className="w-4 h-4 mr-2"
                                ></i>
                                Changelog
                            </a>
                        </li>
                        {/* <!-- nav heading --> */}
                        <li className="nav-item">
                            <a
                                className="nav-link"
                                href="https://dashui.codescandy.com/"
                                target="_blank"
                            >
                                <i
                                    data-feather="download"
                                    className="w-4 h-4 mr-2"
                                ></i>
                                Download
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>

            <div
                id="app-layout-content"
                className={`bg-black min-h-screen w-full min-w-[100vw] md:min-w-0 ml-[15.625rem] [transition:margin_0.25s_ease-out] ${
                    navToggle ? "toggled" : ""
                }`}
            >
                {/* <!-- start navbar --> */}
                <div className="header">
                    {/* <!-- navbar --> */}
                    <nav className="bg-white px-6 py-[10px] flex items-center justify-between shadow-sm">
                        <span
                            id="nav-toggle"
                            href="#"
                            className="text-gray-800 cursor-pointer"
                            onClick={() => setNavToggle(!navToggle)}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                />
                            </svg>
                        </span>
                        <div className="ml-3 hidden md:hidden lg:block">
                            {/* <!-- form --> */}
                            <form className="flex items-center">
                                <input
                                    type="search"
                                    className="border border-gray-300 text-gray-900 rounded focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2 px-3 disabled:opacity-50 disabled:pointer-events-none"
                                    placeholder="Search"
                                />
                            </form>
                        </div>
                        {/* <!-- navbar nav --> */}
                        <ul className="flex ml-auto items-center">
                            <li className="dropdown stopevent mr-2">
                                <a
                                    className="text-gray-600"
                                    href="#"
                                    role="button"
                                    id="dropdownNotification"
                                    data-bs-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="w-6 h-6"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5"
                                        />
                                    </svg>
                                </a>
                                <div
                                    className="dropdown-menu dropdown-menu-lg lg:left-auto lg:right-0"
                                    aria-labelledby="dropdownNotification"
                                >
                                    <div>
                                        <div className="border-b px-3 pt-2 pb-3 flex justify-between items-center">
                                            <span className="text-lg text-gray-800 font-semibold">
                                                Notifications
                                            </span>
                                            <a href="#">
                                                <span>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        strokeWidth="1.5"
                                                        stroke="currentColor"
                                                        className="w-4 h-4"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
                                                        />
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                                        />
                                                    </svg>
                                                </span>
                                            </a>
                                        </div>
                                        {/* <!-- list group --> */}
                                        <ul className="h-56" data-simplebar="">
                                            {/* <!-- list group item --> */}
                                            <li className="bg-gray-100 px-3 py-2 border-b">
                                                <a href="#">
                                                    <h5 className="mb-1">
                                                        Rishi Chopra
                                                    </h5>
                                                    <p className="mb-0">
                                                        Mauris blandit erat id
                                                        nunc blandit, ac
                                                        eleifend dolor pretium.
                                                    </p>
                                                </a>
                                            </li>
                                            {/* <!-- list group item --> */}
                                            <li className="px-3 py-2 border-b">
                                                <a href="#">
                                                    <h5 className="mb-1">
                                                        Neha Kannned
                                                    </h5>
                                                    <p className="mb-0">
                                                        Proin at elit vel est
                                                        condimentum elementum id
                                                        in ante. Maecenas et
                                                        sapien metus.
                                                    </p>
                                                </a>
                                            </li>
                                            {/* <!-- list group item --> */}
                                            <li className="px-3 py-2 border-b">
                                                <a href="#">
                                                    <h5 className="mb-1">
                                                        Nirmala Chauhan
                                                    </h5>
                                                    <p className="mb-0">
                                                        Morbi maximus urna
                                                        lobortis elit
                                                        sollicitudin
                                                        sollicitudieget elit vel
                                                        pretium.
                                                    </p>
                                                </a>
                                            </li>
                                            {/* <!-- list group item --> */}
                                            <li className="px-3 py-2 border-b">
                                                <a href="#">
                                                    <h5 className="mb-1">
                                                        Sina Ray
                                                    </h5>
                                                    <p className="mb-0">
                                                        Sed aliquam augue sit
                                                        amet mauris volutpat
                                                        hendrerit sed nunc eu
                                                        diam.
                                                    </p>
                                                </a>
                                            </li>
                                        </ul>
                                        <div className="border-top px-3 py-2 text-center">
                                            <a
                                                href="#"
                                                className="text-gray-800 font-semibold"
                                            >
                                                View all Notifications
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            {/* <!-- list --> */}
                            <li className="dropdown ml-2">
                                <a
                                    className="rounded-full"
                                    href="#"
                                    role="button"
                                    id="dropdownUser"
                                    data-bs-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                >
                                    <div className="w-10 h-10 relative">
                                        <img
                                            alt="avatar"
                                            src="./assets/images/avatar/avatar-1.jpg"
                                            className="rounded-full"
                                        />
                                        <div className="absolute border-gray-200 border-2 rounded-full right-0 bottom-0 bg-green-600 h-3 w-3"></div>
                                    </div>
                                </a>
                                <div
                                    className="dropdown-menu dropdown-menu-end p-2"
                                    aria-labelledby="dropdownUser"
                                >
                                    <div className="px-4 pb-0 pt-2">
                                        <div className="leading-4">
                                            <h5 className="mb-1">
                                                John E. Grainger
                                            </h5>
                                            <a href="#">View my profile</a>
                                        </div>
                                        <div className="border-b mt-3 mb-2"></div>
                                    </div>

                                    <ul className="list-unstyled">
                                        <li>
                                            <a
                                                className="dropdown-item"
                                                href="#"
                                            >
                                                <i
                                                    className="w-4 h-4"
                                                    data-feather="user"
                                                ></i>
                                                Edit Profile
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="dropdown-item"
                                                href="#"
                                            >
                                                <i
                                                    className="w-4 h-4"
                                                    data-feather="activity"
                                                ></i>
                                                Activity Log
                                            </a>
                                        </li>

                                        <li>
                                            <a
                                                className="dropdown-item"
                                                href="#"
                                            >
                                                <i
                                                    className="w-4 h-4"
                                                    data-feather="star"
                                                ></i>
                                                Go Pro
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="dropdown-item"
                                                href="#"
                                            >
                                                <i
                                                    className="w-4 h-4"
                                                    data-feather="settings"
                                                ></i>
                                                Account Settings
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="dropdown-item"
                                                href="./index.html"
                                            >
                                                <i
                                                    className="w-4 h-4"
                                                    data-feather="power"
                                                ></i>
                                                Sign Out
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </nav>
                </div>
                {/* <!-- end of navbar --> */}

                <Outlet />
            </div>
        </div>
    );
};

export default DashboardLayout;
