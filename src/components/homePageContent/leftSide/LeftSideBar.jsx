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
import { useEffect, useState } from "react";
import BaseUrl from "../../../BaseUrl";

const LeftSideBar = ({ showLeftMenu }) => {
  const [followingTags, setFollowingTags] = useState([]);
  const [loginInfo, setLoginInfo] = useState(localStorage.getItem("loginInfo"));

  //in this function user can on home. which tag user is following
  useEffect(() => {
    if (loginInfo) {
      const fetchFollowingTags = async () => {
        const response = await fetch(BaseUrl + "get_following_tags", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            token: JSON.parse(localStorage.getItem("loginInfo")).token,
          }),
        });
        const data = await response.json();
        console.log(data, "fetchtags");
        setFollowingTags(data.data);
      };

      fetchFollowingTags();
    }
  }, []);

  return (
    <div className={`linkPage ${showLeftMenu && "absolute bg-zinc-50 z-30"}`}>
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
          <Link to="/tags" className="text-base">
            #Tags
          </Link>
        </div>
      </div>

      {/* other */}

      <div className="mb-3 pl-2">
        <span className="font-bold text-base text-[#31343be8]">Other</span>
      </div>

      <div className="links flex flex-col text-[#31343be8] mb-6">
        <div className="link flex items-center gap-1 hover:bg-purple-500 hover:bg-opacity-10 p-2 rounded">
          <div className="left">
            <span className="text-emoji">🔏</span>
          </div>
          <Link to="/privacyPolicy" className="text-base">
            Privacy Policy
          </Link>
        </div>

        <div className="link flex items-center gap-1 hover:bg-purple-500 hover:bg-opacity-10 p-2 rounded">
          <div className="left">
            <span className="text-emoji">👀</span>
          </div>
          <Link to="/termsOfUse" className="text-base">
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
      {loginInfo !== "" && loginInfo && (
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
            {followingTags.map((tag) => (
              <div
                key={tag.id}
                className="hover:bg-purple-500 hover:bg-opacity-10 p-2 rounded text-base"
              >
                <Link to={`/tag/${tag.title}`}>#{tag.title}</Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LeftSideBar;
