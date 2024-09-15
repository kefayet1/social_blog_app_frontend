import { useEffect, useRef, useState } from "react";
import PostCart from "../../PostCart";
import BaseUrl from "../../../BaseUrl";
import { useLocation, useParams } from "react-router-dom";

const MiddleSide = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setLoading] = useState(false);
  const [fetchPostOptions, setFetchPostOptions] = useState("latest");
  const lastPostRef = useRef(null);
  const location = useLocation();
  const { tagName, id } = useParams();
  const [currentUrl, setCurrentUrl] = useState(location.pathname.split("/")[1]);

  useEffect(() => {
    //when user in tag page this function will for fetch user selected tag post
    if (currentUrl === "tag") {
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
              tag_name: tagName,
            }),
          }
        );

        const data = await response.json();
        console.log(data, "tag post");
        if (currentPage === 1) {
          setPosts([...data.data]);
        } else {
          setPosts((prevData) => [...prevData, ...data.data]);
        }
        setLoading(false);
      };
      fetchTagPost();
    } // if current page is profile this fun will fetch profile owner post
    else if (currentUrl === "profile") {
      setLoading(true);
      const fetchUserPost = async () => {
        const response = await fetch(
          BaseUrl + `get_post_by_user_id?page=${currentPage}`,
          {
            method: "post",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              id: id,
            }),
          }
        );

        const data = await response.json();
        console.log(data, "tag post");
        if (currentPage === 1) {
          setPosts([...data.data]);
        } else {
          setPosts((prevData) => [...prevData, ...data.data]);
        }
        setLoading(false);
      };
      fetchUserPost();
    } // this will fetch home page post
    else {
      setLoading(true);
      if (fetchPostOptions === "relevant") {
        const fetchHomePost = async () => {
          const response = await fetch(
            BaseUrl + `get_relevant_post?page=${currentPage}`,
            {
              method: "post",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                token: JSON.parse(localStorage.getItem('loginInfo')).token,
              }),
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
      } else {
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
    }
  }, [currentPage, fetchPostOptions]);

  // when user cross more then 9 post this useEffect will to increase the page number
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

  console.log(currentUrl, "profile url");
  return (
    <div
      // when route on profile page
      className={`${currentUrl === "profile" ? "lg:w-[80%] lg:mx-auto" : ""}`}
    >
      <div className="top flex justify-between ml-3 mb-4">
        <div className="left flex items-center gap-4  text-xl font-thin">
          <button
            className={`${
              fetchPostOptions === "latest" ? "text-black font-bold" : ""
            }`}
            onClick={() => {
              setFetchPostOptions("latest")
              setPosts([])
              setCurrentPage(1)
            }}
          >
            Latest
          </button>
          <button
            className={`${
              fetchPostOptions === "relevant" ? "text-black font-bold" : ""
            }`}
            onClick={() => setFetchPostOptions("relevant")}
          >
            Relevant
          </button>
          <button
            className={`${
              fetchPostOptions === "top" ? "text-black font-bold" : ""
            }`}
            onClick={() => setFetchPostOptions("top")}
          >
            Top
          </button>
        </div>
        <div className="right flex items-center gap-4 text-base font-thin">
          {/* <button className="font-bold text-black">Week</button>
          <button>Month</button>
          <button>Year</button>
          <button>Infinity</button> */}
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
