import {
    faGear,
    faPodcast,
    faTags,
    faVideo,
} from "@fortawesome/free-solid-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons/faHouse";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
    faFacebookF,
    faGithub,
    faInstagram,
    faThreads,
    faTwitch,
    faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

const LeftSideBar = () => {
    return (
        <div className="linkPage">

            {/* All page link  */}

            <div className="links flex flex-col text-[#31343be8] mb-4">
                <div className="link flex items-center gap-2 hover:bg-purple-500 hover:bg-opacity-10 p-2 rounded">
                    <div className="left">
                        <FontAwesomeIcon
                            icon={faHouse}
                            size="lg"
                            className="text-[#FF0080]"
                        />
                    </div>
                    <Link to="/" className="text-base">
                        Home
                    </Link>
                </div>

                <div className="link flex items-center gap-2 hover:bg-purple-500 hover:bg-opacity-10 p-2 rounded">
                    <div className="left">
                        <FontAwesomeIcon
                            icon={faTags}
                            size="lg"
                            className="text-[#4C3BCF]"
                        />
                    </div>
                    <Link to="/" className="text-base">
                        #Tags
                    </Link>
                </div>

                <div className="link flex items-center gap-2 hover:bg-purple-500 hover:bg-opacity-10 p-2 rounded">
                    <div className="left">
                        <FontAwesomeIcon
                            icon={faPodcast}
                            size="lg"
                            className="text-[#FDDE55]"
                        />
                    </div>
                    <Link to="/" className="text-base">
                        Podcast
                    </Link>
                </div>

                <div className="link flex items-center gap-2 hover:bg-purple-500 hover:bg-opacity-10 p-2 rounded">
                    <div className="left">
                        <FontAwesomeIcon
                            icon={faVideo}
                            size="lg"
                            className="text-[#4B70F5]"
                        />
                    </div>
                    <Link to="/" className="text-base">
                        Videos
                    </Link>
                </div>
            </div>

            {/* other */}

            <div className="mb-3 pl-2">
                <span className="font-bold text-base text-[#31343be8]">
                    Other
                </span>
            </div>

            <div className="links flex flex-col text-[#31343be8] mb-6">
                <div className="link flex items-center gap-1 hover:bg-purple-500 hover:bg-opacity-10 p-2 rounded">
                    <div className="left">
                        <span className="text-emoji">🔏</span>
                    </div>
                    <Link to="/" className="text-base">
                        Privacy Policy
                    </Link>
                </div>

                <div className="link flex items-center gap-1 hover:bg-purple-500 hover:bg-opacity-10 p-2 rounded">
                    <div className="left">
                        <span className="text-emoji">👀</span>
                    </div>
                    <Link to="/" className="text-base">
                        Terms of use
                    </Link>
                </div>
            </div>

            <div className="links flex text-socialIcon justify-between px-2 mb-6">
                <FontAwesomeIcon
                    icon={faFacebookF}
                    className="p-2 hover:bg-purple-200 hover:text-[#4C3BCF] rounded"
                />
                <FontAwesomeIcon
                    icon={faXTwitter}
                    className="p-2 hover:bg-purple-200 hover:text-[#4C3BCF] rounded"
                />
                <FontAwesomeIcon
                    icon={faGithub}
                    className="p-2 hover:bg-purple-200 hover:text-[#4C3BCF] rounded"
                />
                <FontAwesomeIcon
                    icon={faInstagram}
                    className="p-2 hover:bg-purple-200 hover:text-[#4C3BCF] rounded"
                />
                <FontAwesomeIcon
                    icon={faThreads}
                    className="p-2 hover:bg-purple-200 hover:text-[#4C3BCF] rounded"
                />
            </div>

            {/* myTags */}
            <div className="myTags mb-3 px-2">
                <div className="top flex justify-between items-center">
                    <div className="left">
                        <span className="font-bold text-base text-[#31343be8]">
                            My Tags
                        </span>
                    </div>
                    <div className="right p-1 hover:bg-purple-200 hover:text-[#4C3BCF] rounded">
                        <span className="text-emoji">
                            <FontAwesomeIcon icon={faGear} />
                        </span>
                    </div>
                </div>
                <div className="tags">
                    <div className="hover:bg-purple-500 hover:bg-opacity-10 p-2 rounded text-base">
                        <span>#react</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LeftSideBar;
