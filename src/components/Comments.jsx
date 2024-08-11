import { useContext, useEffect, useState } from "react";
import BaseUrl from "../BaseUrl";
import Comment from "./Comment";
import ChildComment from "./ChildComment";
import { CommentContext } from "../context/CommentContext";
import { useNavigate } from "react-router-dom";

const Comments = ({ postId }) => {
    const [inputComment, setInputComment] = useState("");
    const { commentState, dispatchComment } = useContext(CommentContext);
    const navigate = useNavigate();

    const handleAddComment = (e) => {
        if(!localStorage.getItem("loginInfo")){
            navigate("/login");
            return;
        }
        e.preventDefault();
        dispatchComment({ type: "ADD_COMMENT", payload: inputComment });
    };



    console.log(postId);
    return (
        <section className="bg-white dark:bg-gray-900 py-8 lg:py-16 antialiased">
            <div className="max-w-2xl mx-auto px-4">
                {
                    <>
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">
                                Top comments (20)
                            </h2>
                        </div>
                        <form className="mb-6" onSubmit={handleAddComment}>
                            <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                                <label htmlFor="comment" className="sr-only">
                                    Your comment
                                </label>
                                <textarea
                                    id="comment"
                                    rows="6"
                                    className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                                    placeholder="Write a comment..."
                                    required
                                    value={inputComment}
                                    onChange={(e) =>
                                        setInputComment(e.target.value)
                                    }
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-blue-900 hover:bg-blue-800"

                            >
                                Post comment
                            </button>
                        </form>
                    </>
                }

                <Comment postId={postId} />
            </div>
        </section>
    );
};

export default Comments;
