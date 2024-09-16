import { useEffect, useState } from "react";
import SavePostCard from "../components/SavePostCard"
import BaseUrl from "../BaseUrl";

const SavePosts = () => {
    const [ savePost, setSavePost ] = useState([]);
    useEffect(() => {
        const fetchFollowers = async () => {
          try {
            const response = await fetch(BaseUrl + "get_save_post", {
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
            setSavePost(data);
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
          Total Post: 20 
        </h2>
      </div>
      <div className="flex justify-center mt-5">
        <div className="md:w-[80%]  flex gap-3 justify-center flex-wrap">
            {savePost.map(post => (
                <SavePostCard key={post.id} post={post}/>
            ))}
        </div>
      </div>
    </div>
  )
}

export default SavePosts