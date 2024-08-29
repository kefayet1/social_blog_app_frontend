import { faBars, faBell, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Notification from "./Notification";
import { useState } from "react";
const NavBar = () => {
    const [ showNotification, setShowNotification] = useState(true);
  return (
    <div className="border-b">
            <nav className="lg:w-[70%] w-full m-auto py-2 ">
                <Notification showNotification={showNotification} setShowNotification={setShowNotification}/>
                <div className="container ">
                    <div className="nav_item flex items-center justify-between md:justify-start">
                        <div className="logoIcon flex items-center">
                        <FontAwesomeIcon className="block md:hidden"  color="black" size="2xl" icon={faBars}/>
                        <Link className="w-[54px] ml-2 lg:ml-0">
                            <img
                                src="https://media.dev.to/cdn-cgi/image/quality=100/https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"
                                alt=""
                            />
                        </Link>
                        </div>
                        <div className="leftSide md:w-8/12 md:ml-2 ">
                            <form className="hidden md:block">
                                <label
                                    htmlFor="default-search"
                                    className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                                >
                                    Search
                                </label>
                                <div className="relative">
                                    <div className="group">
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
                        <div className="rightSide md:w-3/12">
                            <div className="rightSideItem flex items-center justify-end gap-2">
                                <div className="createPost hidden md:block">
                                    <Link to={"/createPost"} className="py-2 px-4 border border-black rounded-md font-bold">
                                        Create Post
                                    </Link>
                                </div>

                                <div className="createPost block md:hidden">
                                    <FontAwesomeIcon icon={faMagnifyingGlass} size="xl" color="black"/>
                                </div>

                                <div className="notification" onClick={()=> setShowNotification(!showNotification)}>
                                    <FontAwesomeIcon size="xl" icon={faBell} />
                                </div>
                                <div className="profile">
                                    <img
                                        src="https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                        alt=""
                                        className="h-10 w-10 rounded-full"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
  )
}

export default NavBar
