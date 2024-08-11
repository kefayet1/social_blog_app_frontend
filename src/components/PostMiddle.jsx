import { CiBookmark } from "react-icons/ci";
import { FaHeartCirclePlus, FaRegComment } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Comments from "./Comments";
import { useEffect, useState } from "react";
import BaseUrl from "../BaseUrl";
import UseDateFormate from "../hooks/UseDateFormate";
import { Skeleton } from "@mui/material";

function PostMiddle({ postId, sendToLeft }) {
    const [post, setPost] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchPost = async () => {
            if (!localStorage.getItem("loginInfo")) {
                try {
                    setLoading(true);
                    const response = await fetch(`${BaseUrl}get_single_post`, {
                        method: "post",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({ id: postId }),
                    });
                    const data = await response.json();
                    setPost(data);

                    //sending data to parent :lifting state up
                    sendToLeft(data);
                } catch (err) {
                    setError(err);
                } finally {
                    setLoading(false);
                }
            } else {
                try {
                    setLoading(true);
                    const response = await fetch(`${BaseUrl}noAuth_get_post_with_auth`, {
                        method: "post",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({ token: JSON.parse(localStorage.getItem("loginInfo")).token, id: postId }),
                    });
                    const data = await response.json();
                    setPost(data);

                    //sending data to parent :lifting state up
                    sendToLeft(data);
                } catch (err) {
                    setError(err);
                } finally {
                    setLoading(false);
                }
            }
            console.log(`${BaseUrl}get_single_post`);
        };
        fetchPost();
    }, []);

    // console.log(post);
    return (
        <div className="bg-white mb-8 rounded-md">
            {/* thumbnail image */}
            <div className="top mb-8">
                {loading ? (
                    <Skeleton
                        animation="pulse"
                        variant="rectangular"
                        height={550}
                        className="rounded-t-md"
                    />
                ) : (
                    <img
                        src={post.thumbnail}
                        alt=""
                        className="rounded-t-md w-full"
                    />
                )}
            </div>
            <div className="bottom h-full pl-10 border-black">
                {/* author profile */}
                <div className="authorProfile flex gap-3 mb-4">
                    <div className="authorImg">
                        <img
                            src="https://images.unsplash.com/photo-1576705188476-5a2c42e56df9?dpr=1&h=200&w=120&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
                            alt=""
                            className="rounded-full w-9 h-9 object-fill"
                        />
                    </div>
                    <div className="authorNameDate">
                        <div className="name text-[#31343be8] font-bold">
                            <span>
                                {loading ? (
                                    <Skeleton
                                        animation="pulse"
                                        variant="text"
                                        width={150}
                                        height={20}
                                    />
                                ) : (
                                    post.name
                                )}
                            </span>
                        </div>
                        <div className="date text-sm">
                            {loading ? (
                                <Skeleton
                                    animation="pulse"
                                    variant="text"
                                    width={110}
                                    height={20}
                                />
                            ) : (
                                <>
                                    <span>Posted on </span>
                                    <span>
                                        {UseDateFormate(post.published_at)[0]}
                                    </span>
                                </>
                            )}
                        </div>
                    </div>
                </div>

                {/* post reaction and count */}
                <div className="reaction flex gap-6 mb-3">
                    <div className="heart flex items-center gap-1">
                        <FaHeartCirclePlus size={30} />
                        <span>150</span>
                    </div>
                    <div className="comment flex items-center gap-1">
                        <FaRegComment size={30} />
                        <span>12</span>
                    </div>
                    <div className="bookmark flex items-center gap-1">
                        <CiBookmark size={30} />
                        <span>45</span>
                    </div>
                </div>

                {/* headline */}

                <div className="headline font-extrabold text-3xl mb-4">
                    {loading ? (
                        <Skeleton
                            animation="pulse"
                            variant="text"
                            width={600}
                            height={50}
                        />
                    ) : (
                        <h2>{post.title}</h2>
                    )}
                </div>

                {/* tags */}

                <div className="tags flex gap-4 mb-8 text-[#31343be8] text-base">
                    {loading ? (
                        <Skeleton
                            animation="pulse"
                            variant="text"
                            width={300}
                            height={40}
                        />
                    ) : (
                        post?.tags
                            ?.split(",")
                            .map((tag, index) => (
                                <Link key={index}>#{tag}</Link>
                            ))
                    )}
                </div>

                <div className="article text-lg text-[#31343be8]">
                    <p>
                        {loading ? (
                            <Skeleton
                                animation="wave"
                                variant="rectangular"
                                width={700}
                                height={400}
                            />
                        ) : (
                            post.body
                        )}
                    </p>
                </div>
            </div>

            {/* comment section */}
            <div className="comment">
                <Comments postId={postId} />
            </div>
        </div>
    );
}

export default PostMiddle;
