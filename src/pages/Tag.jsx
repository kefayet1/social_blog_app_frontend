// import Discussion from "../components/Discussion";
// import LeftSideBar from "../components/homePageContent/leftSide/LeftSideBar";
// import MiddleSide from "../components/homePageContent/middleSide/MiddleSide";

import { Box, CircularProgress } from "@mui/material";
import { Suspense, lazy, useEffect, useState } from "react";
import BaseUrl from "../BaseUrl";
import { useParams } from "react-router-dom";

const Discussion = lazy(() => import("../components/Discussion"));
const MiddleSide = lazy(() =>
  import("../components/homePageContent/middleSide/MiddleSide")
);

const Tag = () => {
  const { tagName } = useParams();
  const [tagDetails, setTagDetails] = useState({});

  // this function will run for to fetch tag details
  useEffect(() => {
    const fetchTagDetails = async () => {
      try {
        const response = await fetch(BaseUrl + "get_tag_details", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            tag_name: tagName,
          }),
        });

        const data = await response.json();
        console.log(data, "fetchTagDetails");
        setTagDetails(data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTagDetails();
  }, []);

  return (
    <Suspense
      fallback={
        <div className="h-screen w-screen flex items-center justify-center">
          <Box sx={{ display: "flex" }}>
            <CircularProgress />
          </Box>
        </div>
      }
    >
      <div className="bg-[#F5F5F5] h-screen">
        <div className="lg:w-[70%] mx-auto">
          {/* tag information */}
          <div className="taginfo py-3 px-5 m-2 rounded-md bg-white">
            <div className="main flex items-center justify-between ">
              <div className="left flex justify-center gap-4">
                <div className="img">
                  <img className="w-20" src={tagDetails.thumbnail} alt="" />
                </div>
                <div className="tagName font-light text-[#212B36] text-3xl">
                  <span>#{tagDetails?.title}</span>
                </div>
              </div>
              <div className="right">
                {tagDetails.is_follow !== true ? (
                  <button className="p-2 font-semibold rounded-md bg-blue-700 text-white text-base">
                    Follow
                  </button>
                ) : (
                  <button className="p-2 font-semibold rounded-md border border-black text-base">
                    Following
                  </button>
                )}
              </div>
            </div>
            <div className="body ml-[6.1rem] text-base text-[#212B36]">
              <p>
                {tagDetails?.body
                  ? tagDetails?.body
                  : "is simply dummy text of the printing and typesetting industry"}
              </p>
            </div>
          </div>
          <div className="py-5 pr-5 pl-3 flex">
            <div className="left pr-4 hidden lg:w-[20%] md:block md:w-[35%]"></div>
            <div className="middle  lg:w-[55%] w-full">
              <MiddleSide />
            </div>
            <div className="right  w-[25%] hidden lg:block">
              <Discussion />
            </div>
          </div>
        </div>
      </div>
    </Suspense>
  );
};

export default Tag;
