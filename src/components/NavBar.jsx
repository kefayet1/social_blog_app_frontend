import {
  faBars,
  faBell,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Notification from "./Notification";
import { useContext, useState } from "react";
import ProfileDropDownMenu from "./ProfileDropDownMenu";
import { NavMenuContext } from "../context/NavMenuContext";
const NavBar = () => {
  const [showNotification, setShowNotification] = useState(true);
  const [countUnSeenNotifi, setCountUnSeenNotifi] = useState(0);
  const [showMenu, setShowMenu] = useState(false);
  const { showLeftMenu, setShowLeftMenu } = useContext(NavMenuContext);

  return (
    <div className="border-b">
      <nav className="lg:w-[70%] w-full m-auto py-2 relative">
        {/* profile menu */}
        {showMenu && (
          <ProfileDropDownMenu
            setShowMenu={setShowMenu}
            showMenu={setShowMenu}
          />
        )}
        {/* notificaiton */}
        {localStorage.getItem("loginInfo") && (
          <Notification
            showNotification={showNotification}
            setShowNotification={setShowNotification}
            setCountUnSeenNotifi={setCountUnSeenNotifi}
          />
        )}
        <div className="container ">
          <div className="nav_item flex items-center justify-between ">
            <div className="logoIcon flex items-center">
              <FontAwesomeIcon
                className="block md:hidden"
                color="black"
                size="2xl"
                icon={faBars}
                onClick={()=> setShowLeftMenu(!showLeftMenu)}
              />
              <Link className="w-[54px] ml-2 lg:ml-0">
                <img
                  src="https://logosandtypes.com/wp-content/uploads/2022/03/lazada.svg"
                  alt=""
                />
              </Link>
            </div>
            <div className="leftSide md:w-8/12 md:ml-2 border-2">
              <form className="hidden md:block">
                <label
                  htmlFor="default-search"
                  className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                >
                  Search
                </label>
                <div className="relative">
                  <div className="group flex items-center h-full">
                    <svg
                      className="icon"
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                    >
                      <g>
                        <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
                      </g>
                    </svg>
                    <input
                      placeholder="Search"
                      type="search"
                      className="input"
                    />
                  </div>
                </div>
              </form>
            </div>
            {JSON.parse(localStorage.getItem("loginInfo")) ? (
              <div className="rightSide md:w-5/12">
                <div className="rightSideItem flex items-center justify-end gap-2">
                  <div className="createPost hidden md:block">
                    <Link
                      to={"/createPost"}
                      className="py-2 px-4 border border-black rounded-md font-bold"
                    >
                      Create Post
                    </Link>
                  </div>

                  <div className="createPost block md:hidden">
                    <FontAwesomeIcon
                      icon={faMagnifyingGlass}
                      size="xl"
                      color="black"
                    />
                  </div>

                  <div
                    className="notification"
                    onClick={() => setShowNotification(!showNotification)}
                  >
                    <div className="relative mt-2">
                      <div className="absolute left-0 top-0  bg-red-500 rounded-full">
                        <span className="text-sm text-white p-1">
                          {countUnSeenNotifi}
                        </span>
                      </div>

                      <div className="p-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          className="text-gray-600 w-6 h-6"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div
                    className="profile"
                    onClick={() => setShowMenu(!showMenu)}
                  >
                    <img
                      src={
                        JSON.parse(localStorage.getItem("loginInfo"))
                          .profile_image
                      }
                      alt=""
                      className="h-10 w-10 rounded-full"
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div className="rightSide md:w-3/12">
                <div className="rightSideItem flex items-center justify-end gap-2">
                  <Link
                    to={"/registration"}
                    className="inline-flex items-center px-4 py-2 border-gray-300 border  text-sm font-medium rounded-md"
                  >
                    Register
                  </Link>

                  <Link
                    className="inline-flex items-center px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium rounded-md"
                    to={"/login"}
                  >
                    Login
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
