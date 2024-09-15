import { useEffect, useState } from "react";
import BaseUrl from "../BaseUrl";
import TagCard from "../components/TagCard";

function TagsPage() {
  const [tagsData, seTagsData] = useState([]);

  useEffect(() => {
    const fetchFollowers = async () => {
      try {
        const response = await fetch(BaseUrl + "get_tag_with_post_count", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          }
        });
        const data = await response.json();
        console.log(data);
        seTagsData(data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchFollowers();
  }, []);
  return (
    <div>
      <div className="ml-10 lg:ml-40 mt-2">
        {/* <h2 className="font-bold md:text-xl text-lg">
          Following: {followingData.totalFollowing}
        </h2> */}
      </div>
      <div className="flex justify-center mt-5">
        <div className="md:w-[80%]  flex gap-3 justify-center flex-wrap">
          {tagsData?.map((tag, index) => (
            <TagCard key={index} tag={tag}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TagsPage;
