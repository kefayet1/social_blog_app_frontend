import { useContext, useState } from "react";
import { CommentContext } from "../context/CommentContext";
import BaseUrl from "../BaseUrl";
import { useNavigate } from "react-router-dom";

const ChildComment = ({ comment, parentId, setShowParentInput, index }) => {
    const [openMenu, setOpenMenu] = useState(false);
    const { commentState, dispatchComment } = useContext(CommentContext);
    const [showInput, setShowInput] = useState([]);
    const [inputComment, setInputComment] = useState("");
    const navigate = useNavigate();

    console.log(parentId);
    const consoleParentId = (data) => {
        console.log(data);
    };

    const removeChild = (childId) => {
        dispatchComment({
            type: "REMOVE_CHILD_COMMENT",
            payload: { parentId, childId },
        });
    };

    const handleChildCommentSubmit = async (comment) => {
        if(!localStorage.getItem("loginInfo")){
            navigate("/login");
            return;
        }
        try {
            const response = await fetch(`${BaseUrl}create_comment`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    postId: comment.post_id,
                    parentId: comment.id,
                    userId: 2,
                    comment: inputComment,
                }),
            });

            const data = await response.json();
            dispatchComment({
                type: "REPLY_CHILD_COMMENT",
                payload: {
                    parenId: parentId,
                    postId: comment.id,
                    inputComment: data,
                },
            });
            toggleChildRelyInput(comment);
        } catch (error) {
            console.log(error);
        }
    };

    const toggleChildRelyInput = (comment) => {
        // console.log(showInput, "show input child");
        // setShowInput((prevInput) => {
        //     const prevShowInput = [...prevInput];
        //     prevShowInput[index] = !prevShowInput[index];
        //     return prevInput;
        // });
        setInputComment("");
        dispatchComment({ type: "SHOW_AND_HIDE_INPUT", payload: comment.id });
    };

    const toggleMenu = (comment) => {
        dispatchComment({ type: "SHOW_AND_HIDE_MENU", payload: comment.id });
    };

    const handleChildCommentEdit = (comment) => {
        dispatchComment({
            type: "EDIT_CHILD_COMMENT",
            payload: {
                parentId: parentId,
                id: comment.id,
                comment: inputComment,
            },
        });
        dispatchComment({
            type: "SHOW_EDIT_INPUT",
            payload: comment.id,
        });
        setInputComment("");
    };

    const handleShowEditInput = (comment) => {
        setInputComment(comment.comment);
        dispatchComment({
            type: "SHOW_EDIT_INPUT",
            payload: comment.id,
        });
        dispatchComment({ type: "SHOW_AND_HIDE_INPUT", payload: comment.id });
        toggleMenu(comment);
    };

    console.log(index, "child index");

    return (
        <>
            {comment.parent_id !== null && (
                <article
                    className="p-6 mb-3 lg:ml-6 text-base bg-white rounded-lg dark:bg-gray-900"
                    onClick={() => consoleParentId(parentId)}
                >
                    <footer className="flex justify-between items-center mb-2 relative">
                        <div className="flex items-center">
                            <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold">
                                <img
                                    className="mr-2 w-6 h-6 rounded-full"
                                    src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                                    alt="Jese Leos"
                                />
                                {comment?.name}
                            </p>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                <time
                                    dateTime="2022-02-12"
                                    title="February 12th, 2022"
                                >
                                    Feb. 12, 2022
                                </time>
                            </p>
                        </div>
                        <button
                            id="dropdownComment2Button"
                            data-dropdown-toggle="dropdownComment2"
                            className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 dark:text-gray-40 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                            type="button"
                            onClick={() => toggleMenu(comment)}
                        >
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 16 3"
                            >
                                <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                            </svg>
                            <span className="sr-only">Comment settings</span>
                        </button>
                        {/* <!-- Dropdown menu --> */}
                        <div
                            id="dropdownComment2"
                            className={`${
                                comment.showMenu !== true && "hidden"
                            } z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600 absolute top-10 left-[312px]`}
                        >
                            <ul
                                className="py-1 text-sm text-gray-700 dark:text-gray-200"
                                aria-labelledby="dropdownMenuIconHorizontalButton"
                            >
                                <li>
                                    <button
                                        className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                        onClick={() =>
                                            handleShowEditInput(comment)
                                        }
                                    >
                                        Edit
                                    </button>
                                </li>
                                <li>
                                    <button
                                        className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                        onClick={() => removeChild(comment?.id)}
                                    >
                                        Remove
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </footer>
                    <p className="text-gray-500 text-sm dark:text-gray-400">
                        {comment?.comment}
                    </p>
                    <div className="flex items-center mt-4 space-x-4">
                        {!comment?.showEditInput && (
                            <button
                                type="button"
                                className="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400 font-medium"
                                onClick={() => toggleChildRelyInput(comment)}
                            >
                                <svg
                                    className="mr-1.5 w-3.5 h-3.5"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 20 18"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M5 5h5M5 8h2m6-3h2m-5 3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"
                                    />
                                </svg>
                                Reply
                            </button>
                        )}
                        <div className="max-w-sm">
                            {(comment?.inputShow || comment?.showEditInput) && (
                                <div>
                                    <div>
                                        <textarea
                                            id="textarea-email-label"
                                            className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                                            rows="2"
                                            placeholder="Say hi..."
                                            value={inputComment}
                                            onChange={(e) =>
                                                setInputComment(e.target.value)
                                            }
                                        ></textarea>
                                    </div>
                                    <div className="flex items-center justify-end gap-2 mt-2">
                                        <button
                                            className="inline-flex items-center px-2 py-1 bg-red-600 hover:bg-red-700 text-white text-sm font-semibold rounded"
                                            onClick={() => {
                                                if (comment.showEditInput) {
                                                    dispatchComment({
                                                        type: "SHOW_EDIT_INPUT",
                                                        payload: comment.id,
                                                    });
                                                    setInputComment("");
                                                }else{
                                                    dispatchComment({
                                                        type: "SHOW_AND_HIDE_INPUT",
                                                        payload: comment.id,
                                                    });
                                                    setInputComment("");
                                                }
                                            }}
                                        >
                                            cancel
                                        </button>
                                        {!comment.showEditInput && (
                                            <button
                                                className="inline-flex items-center px-2 py-1 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded"
                                                onClick={() =>
                                                    handleChildCommentSubmit(
                                                        comment
                                                    )
                                                }
                                            >
                                                submit
                                            </button>
                                        )}

                                        {comment.showEditInput && (
                                            <button
                                                className="inline-flex items-center px-2 py-1 bg-yellow-500 hover:bg-yellow-600 text-white text-sm font-semibold rounded"
                                                onClick={() =>
                                                    handleChildCommentEdit(
                                                        comment
                                                    )
                                                }
                                            >
                                                Edit
                                            </button>
                                        )}
                                    </div>
                                    <div></div>
                                </div>
                            )}
                        </div>
                    </div>
                </article>
            )}
            <div className="pl-20 break-words">
                {[...comment?.childComments]?.reverse()?.map((child, index) => (
                    <ChildComment
                        key={child.id}
                        comment={child}
                        parentId={parentId}
                        setShowParentInput={setShowParentInput}
                        index={index}
                    />
                ))}
            </div>
        </>
    );
};

export default ChildComment;
