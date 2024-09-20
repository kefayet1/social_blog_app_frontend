import { FaLocationDot } from "react-icons/fa6";
import { FaBirthdayCake } from "react-icons/fa";
import { IoLinkSharp } from "react-icons/io5";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import BaseUrl from "../BaseUrl";
import dayjs from "dayjs";

const UserProfileTop = () => {
  const { id } = useParams();
  const [profileDetails, setProfileDetails] = useState({});

  useEffect(() => {
    const fetchProfileDetails = async () => {
      const response = await fetch(BaseUrl + "get_profile_details", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: id,
          token: JSON.parse(localStorage.getItem("loginInfo")).token,
        }),
      });

      const data = await response.json();
      console.log(data, "profile data");
      setProfileDetails(data.data);
    };

    fetchProfileDetails();
  }, []);

  const handleFollowUser = async () => {
    try {
      const response = await fetch(BaseUrl + "follow_unFollow_user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          following_user_id: profileDetails.user_id,
          token: JSON.parse(localStorage.getItem("loginInfo")).token,
        }),
      });

      const data = await response.json();
      if (data.status === "success") {
        setProfileDetails((prevData) => {
          return {
            ...prevData,
            is_follow: !prevData.is_follow,
          };
        });
      }
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(BaseUrl);
  return (
    <div className="py-10 px-5 md:px-20  bg-white">
      {JSON.parse(localStorage.getItem("loginInfo")).id !== profileDetails.user_id && (
        <div className="div flex justify-end" onClick={handleFollowUser}>
          {profileDetails.is_follow ? (
            <button className="inline-flex items-center px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm font-medium rounded-md">
              Cancel 
            </button>
          ) : (
            <button className="inline-flex items-center px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-medium rounded-md">
              Follow
            </button>
          )}
        </div>
      )}
      <div className="profile_top w-full h-[100%] flex flex-col gap-3 items-center">
        <div className="profile_image">
          <img
            src={profileDetails.profile_image}
            // src={BaseUrl.slice(0, -4) + profileDetails.profile_image}
            alt=""
            className="w-[100px] h-[100px] object-center rounded-full"
          />
        </div>
        <div className="profile_details flex flex-col items-center">
          <h2 className="text-center text-2xl mb-2">{profileDetails?.name}</h2>
          <p className="text-base mb-6">{profileDetails?.bio}</p>
        </div>
      </div>

      <div className="profile_bottom">
        <div className="location_joinedDate_links flex gap-5 justify-center w-full border-b pb-6">
          <div className="location flex gap-2">
            <FaLocationDot size={20} /> {profileDetails?.location}
          </div>

          <div className="joinedDate flex gap-2">
            <FaBirthdayCake size={20} />
            Joined on
            <p>{dayjs(profileDetails?.created_at).format("MMM D, YYYY")}</p>
          </div>

          <div className="links flex gap-2">
            <IoLinkSharp size={20} /> <p>{profileDetails?.website_url}</p>
          </div>
        </div>

        <div className="education_work flex justify-evenly gap-1 pt-5">
          {profileDetails?.education && (
            <div className="education text-center ">
              <h4 className="font-semibold text-[#929292fa]">Education</h4>
              <p className="black">{profileDetails?.education}</p>
            </div>
          )}

          {profileDetails?.work && (
            <div className="work text-center">
              <h4 className="font-semibold text-[#929292fa]">Work</h4>
              <p className="black">{profileDetails.work}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserProfileTop;
