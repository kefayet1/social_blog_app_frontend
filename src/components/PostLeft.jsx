import { useEffect, useState } from "react";
import { CiBookmark } from "react-icons/ci";
import { FaBookmark, FaHeartCirclePlus, FaRegComment } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import BaseUrl from "../BaseUrl";

const PostLeft = ({ leftData, id }) => {
  const navigate = useNavigate();
  const [data, setData] = useState(leftData);
  useEffect(() => {
    setData(leftData);
  }, [leftData]);

  //this fun will do like and dislike
  const handleLikePost = async () => {
    if (!localStorage.getItem("loginInfo")) {
      navigate("/login");
      return;
    }

    console.log(data.is_like, "hello like");

    if (data.is_like) {
      try {
        const response = await fetch(`${BaseUrl}like_post`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            token: JSON.parse(localStorage.getItem("loginInfo")).token,
            post_id: id,
          }),
        });

        const data = await response.json();
        if (data.status === "success") {
          setData((prevData) => {
            return {
              ...prevData,
              is_like: 0,
              totalLike: prevData.totalLike - 1,
            };
          });
        }
        console.log(data, "like post");
      } catch (error) {
        console.log(error, "like post");
      }
    } else {
      try {
        const response = await fetch(`${BaseUrl}like_post`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            token: JSON.parse(localStorage.getItem("loginInfo")).token,
            post_id: id,
          }),
        });

        const data = await response.json();
        console.log(data, "like post");
        if (data.status === "success") {
          setData((prevData) => {
            return {
              ...prevData,
              is_like: 1,
              totalLike: prevData.totalLike + 1,
            };
          });
        }
      } catch (error) {
        console.log(error, "like post");
      }
    }
  };

  const handleSavePost = async () => {
    if (!localStorage.getItem("loginInfo")) {
      navigate("/login");
      return;
    }

    console.log(data.is_save, "hello save");

    if (data.is_save === 1) {
      try {
        const response = await fetch(`${BaseUrl}save_post`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            token: JSON.parse(localStorage.getItem("loginInfo")).token,
            post_id: id,
          }),
        });

        const data = await response.json();
        console.log(data, "like post");
        if (data.status === "success") {
          setData((prevData) => {
            return {
              ...prevData,
              is_save: 0,
              totalSave: prevData.totalSave - 1,
            };
          });
        }
      } catch (error) {
        console.log(error, "like post");
      }
    } else {
      try {
        const response = await fetch(`${BaseUrl}like_post`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            token: JSON.parse(localStorage.getItem("loginInfo")).token,
            post_id: id,
          }),
        });

        const data = await response.json();
        console.log(data, "like post");
        if (data.status === "success") {
          setData((prevData) => {
            return {
              ...prevData,
              is_save: 1,
              totalSave: prevData.totalSave + 1,
            };
          });
        }
      } catch (error) {
        console.log(error, "like post");
      }
    }
  };

  console.log(data, "leftData");
  return (
    <div className="flex flex-col w-full gap-4 mt-20">
      <div
        className="heart flex flex-col items-center gap-2"
        onClick={handleLikePost}
      >
        <FaHeartCirclePlus
          size={30}
          color={`${data?.is_like ? "black" : ""}`}
        />
        <span>{data?.totalLike}</span>
      </div>
      <div className="comment flex flex-col items-center gap-2">
        <FaRegComment size={30} />
        <span>{leftData?.totalComment}</span>
      </div>
      <div
        className="bookmark flex flex-col items-center gap-2"
        onClick={handleSavePost}
      >
        {data?.is_save ? <FaBookmark size={30} /> : <CiBookmark size={30} />}
        <span>{data?.totalSave}</span>
      </div>
    </div>
  );
};

export default PostLeft;
