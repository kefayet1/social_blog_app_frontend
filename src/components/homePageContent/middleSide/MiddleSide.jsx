import { useEffect, useRef, useState } from "react";
import PostCart from "../../PostCart";
import BaseUrl from "../../../BaseUrl";
import { useLocation, useParams } from "react-router-dom";

const MiddleSide = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setLoading] = useState(false);
  const lastPostRef = useRef(null);
  const location = useLocation();
  const { tagName } = useParams();

  useEffect(() => {
    if (location.pathname.split("/")[1] !== "tag") {
      setLoading(true);
      const fetchHomePost = async () => {
        const response = await fetch(
          BaseUrl + `noAuth_get_post?page=${currentPage}`,
          {
            method: "post",
          }
        );

        const data = await response.json();

        if (currentPage === 1) {
          setPosts([...data.data]);
        } else {
          setPosts((prevData) => [...prevData, ...data.data]);
        }
        setLoading(false);
      };
      fetchHomePost();
    }
  }, [currentPage]);

  useEffect(() => {
    if (location.pathname.split("/")[1] === "tag") {
        console.log(tagName,"hello tag")
      setLoading(true);
      const fetchTagPost = async () => {
        const response = await fetch(
          BaseUrl + `get_post_by_tag_name?page=${currentPage}`,
          {
            method: "post",
            headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                tag_name: tagName
              }),
          }
        );

        const data = await response.json();
        console.log(data, "tag post")
        if (currentPage === 1) {
          setPosts([...data.data]);
        } else {
          setPosts((prevData) => [...prevData, ...data.data]);
        }
        setLoading(false);
      };
      fetchTagPost();
    }
  }, [currentPage]);


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        console.log("hello");
        if (entry.isIntersecting === !isLoading) {
          setCurrentPage((prevPage) => prevPage + 1);
        }
      },
      { threshold: 0.5 }
    );

    if (lastPostRef.current) {
      observer.observe(lastPostRef.current);
    }

    return () => observer.disconnect();
  }, [isLoading, lastPostRef]);

  console.log(lastPostRef.current);

  return (
    <div className="">
      <div className="top flex justify-between ml-3 mb-4">
        <div className="left flex items-center gap-4  text-xl font-thin">
          <button>Relevant</button>
          <button>Latest</button>
          <button className="text-black font-bold">Top</button>
        </div>
        <div className="right flex items-center gap-4 text-base font-thin">
          <button className="font-bold text-black">Week</button>
          <button>Month</button>
          <button>Year</button>
          <button>Infinity</button>
        </div>
      </div>
      <div className="bottom flex flex-col gap-2">
        {posts.map((post, index) => (
          <PostCart
            post={post}
            key={index}
            index={index}
            ref={index === posts.length - 1 ? lastPostRef : null}
          />
        ))}
        {isLoading && "Loading..."}
      </div>
    </div>
  );
};

export default MiddleSide;
