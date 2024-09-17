import { useContext } from "react";
import LeftSideBar from "./leftSide/LeftSideBar";
import MiddleSide from "./middleSide/MiddleSide";
import RightSide from "./rightSide/RightSide";
import { NavMenuContext } from "../../context/NavMenuContext";

const PageContent = () => {
    const { showLeftMenu } = useContext(NavMenuContext);
    return (
        <div className="bg-[#F5F5F5] h-screen">
            <div className="lg:w-[70%] mx-auto">
                <div className="py-5 pr-5 pl-3 flex">
                    <div className={`left pr-4  lg:w-[20%]  md:w-[35%] ${showLeftMenu ? "relative" : "hidden md:block"}`}>
                        <LeftSideBar showLeftMenu={showLeftMenu}/>
                    </div>
                    <div className="middle  lg:w-[55%] w-full">
                        <MiddleSide/>
                    </div>
                    <div className="right w-[25%] hidden lg:block">
                        <RightSide/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PageContent;
