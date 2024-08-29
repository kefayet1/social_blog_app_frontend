import { FaLocationDot } from "react-icons/fa6";
import { FaBirthdayCake } from "react-icons/fa";
import { IoLinkSharp } from "react-icons/io5";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import BaseUrl from "../BaseUrl";
import dayjs from "dayjs";

const UserProfileTop = () => {
  const { id } = useParams();
  const [ profileDetails, setProfileDetails ] = useState({});

  useEffect(() => {
    const fetchProfileDetails = async () => {
      const response = await fetch(BaseUrl + "get_profile_details", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: id }),
      });

      const data = await response.json();
      console.log(data);
      setProfileDetails(data.data);
    };

    fetchProfileDetails();
  }, []);
  console.log(BaseUrl);
  return (
    <div className="py-10 px-5 md:px-20  bg-white">
      <div className="profile_top w-full h-[100%] flex flex-col gap-3 items-center">
        <div className="profile_image">
          <img
            // src="https://images.unsplash.com/photo-1530834395125-2a7eb8848ac0?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            src={BaseUrl.slice(0,-4)+profileDetails.profile_image}
            alt=""
            className="w-[100px] h-[100px] object-center rounded-full"
          />
        </div>
        <div className="profile_details flex flex-col items-center">
          <h2 className="text-center text-2xl mb-2">{profileDetails?.name}</h2>
          <p className="text-base mb-6">
            {profileDetails?.bio}
          </p>
        </div>
      </div>

      <div className="profile_bottom">
        <div className="location_joinedDate_links flex gap-5 justify-center w-full border-b pb-6">
          <div className="location flex gap-2">
            <FaLocationDot size={20} /> {profileDetails?.location}
          </div>

          <div className="joinedDate flex gap-2">
            <FaBirthdayCake size={20} />Joined on<p>{dayjs(profileDetails?.created_at).format("MMM D, YYYY")}</p>
          </div>

          <div className="links flex gap-2">
            <IoLinkSharp size={20} /> <p>{profileDetails?.website_url}</p>
          </div>
        </div>

        <div className="education_work flex justify-evenly gap-1 pt-5">
          {profileDetails?.eduction && (
            <div className="education text-center ">
            <h4 className="font-semibold text-[#929292fa]">Education</h4>
            <p className="black">
              {profileDetails?.eduction}
            </p>
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
