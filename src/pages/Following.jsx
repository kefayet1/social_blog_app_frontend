import { useEffect, useState } from "react";
import FoProfileCart from "../components/FoProfileCart";
import BaseUrl from "../BaseUrl";

const Following = () => {
  const [followingData, setFollowingData] = useState([]);

  useEffect(() => {
    const fetchFollowers = async () => {
      try {
        const response = await fetch(BaseUrl + "get_following", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            token: JSON.parse(localStorage.getItem("loginInfo")).token,
          }),
        });
        const data = await response.json();
        console.log(data);
        setFollowingData(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchFollowers();
  }, []);
  return (
    <div>
      <div className="ml-10 lg:ml-40 mt-2">
        <h2 className="font-bold md:text-xl text-lg">
          Following: {followingData.totalFollowing}
        </h2>
      </div>
      <div className="flex justify-center mt-5">
        <div className="md:w-[80%]  flex gap-3 justify-center flex-wrap">
          {followingData?.data?.map((post) => (
            <FoProfileCart key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Following;
