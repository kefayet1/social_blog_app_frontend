import { useContext, useEffect, useState } from "react";
import PostForm from "../components/PostForm";
import { AuthContext } from "../context/AuthContext";
import { PostContext } from "../context/PostContext";
import { Alert, Snackbar } from "@mui/material";

const Posts = () => {
    const [showForm, setShowForm] = useState(false);
    const { login } = useContext(AuthContext);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPage, setTotalPage] = useState(0);
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState("");
    const [ editData, setEditData ] = useState({});
    const [ reRenderTbleDta, setReRenderTbleDta ] = useState(0);

    const { postState, postDispatch } = useContext(PostContext);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(
                `http://127.0.0.1:8000/api/get_posts?page=${currentPage}`,
                {
                    method: "post",
                    headers: {
                        Content_Type: "application/json",
                    },
                    body: JSON.stringify({ token: JSON.parse(login).token }),
                }
            );
            const data = await response.json();
            setTotalPage(data.last_page);
            postDispatch({ type: "GET_POSTS", payload: data });
        };
        fetchData();
    }, [currentPage, reRenderTbleDta]);

    console.log(postState);

    // const convertDate = (date) => {
    //     const dateArr = data.splid(" ");
    // }

    // pagination

    // this function for current page
    const handlePageClick = (page) => {
        if (page !== " ..." && page !== "... ") {
            setCurrentPage(page);
        }
    };

    //this function for next page
    const handleNextClick = () => {
        if (currentPage < totalPage) {
            setCurrentPage((prevPage) => prevPage + 1);
        }
    };

    //this function for previous page
    const handlePreviousClick = () => {
        if (currentPage > 1) {
            setCurrentPage((prevPage) => prevPage - 1);
        }
    };

    // this function creates an array with a range of numbers.
    const range = (start, end, step = 1) => {
        if (end === undefined) {
            end = start;
            start = 0;
        }

        const length = Math.ceil((end - start) / step);

        return Array.from({ length }, (v, i) => start + i * step);
    };

    // this for pagination and manage the dots for pagination array
    const returnPaginationRange = (totlPage, page, siblings) => {
        let totalPageNoInArray = 7 + siblings;
        if (totalPageNoInArray >= totlPage) {
            return range(1, totlPage + 1);
        }

        let leftSiblingsIndex = Math.max(page - siblings, 1);
        let rightSiblingsIndex = Math.min(page + siblings, totlPage);

        let showLeftDots = leftSiblingsIndex > 2;
        let showRightDots = rightSiblingsIndex < totlPage - 2;

        if (!showLeftDots && showRightDots) {
            let leftItemsCount = 3 + 2 * siblings;
            let leftRange = range(1, leftItemsCount + 1);
            return [...leftRange, " ...", totlPage];
        } else if (showLeftDots && !showRightDots) {
            let rightItemsCount = 3 + 2 * siblings;
            let rightRange = range(totlPage - rightItemsCount + 1, totlPage);
            return [1, "... ", ...rightRange];
        } else {
            let middleRange = range(leftSiblingsIndex, rightSiblingsIndex + 1);
            return [1, "... ", ...middleRange, " ...", totlPage];
        }
    };

    const pagination = returnPaginationRange(totalPage, currentPage, 1);

    // this handler is for delete and dispatch post table element
    const handleDeletePost = async (id) => {
        try {
            const response = await fetch(
                `http://127.0.0.1:8000/api/delete_post`,
                {
                    method: "post",
                    headers: {
                        Content_Type: "application/json",
                    },
                    body: JSON.stringify({
                        id: id,
                        token: JSON.parse(login).token,
                    }),
                }
            );
            const data = await response.json();

            if (data.status === "success") {
                postDispatch({ type: "DELETE_POST", payload: id });
                setOpen("true");
                setStatus("success");
                setMessage(data.message);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }

        setOpen(false);
    };

    const handleEditPost = (post) =>{
        console.log(post)
        setEditData(post,"inside handleEditPost");
        setShowForm(true);
    }

    console.log(editData, "with editData");

    const hideForm = () =>{
        setShowForm(false);
        setReRenderTbleDta(prevNum => prevNum + 1);
    }

    return (
        <div>
            {showForm && <PostForm editData={editData} hideForm={hideForm}/>}
            <div className="bg-indigo-600 px-8 pt-10 lg:pt-14 pb-16 flex justify-between items-center mb-3 ">
                <Snackbar
                    open={open}
                    autoHideDuration={6000}
                    onClose={handleClose}
                >
                    <Alert onClose={handleClose} severity={status}>
                        {message}
                    </Alert>
                </Snackbar>
                {/* <!-- title --> */}
                <h1 className="text-xl text-white">Categories</h1>
                <span
                    onClick={() => setShowForm(!showForm)}
                    className="btn bg-white text-gray-800 border-gray-600 hover:bg-gray-100 hover:text-gray-800 hover:border-gray-200 active:bg-gray-100 active:text-gray-800 active:border-gray-200 focus:outline-none focus:ring-4 focus:ring-indigo-300"
                >
                    Create New Category
                </span>
            </div>
            <section className="container px-4 mx-auto">
                <div className="flex flex-col">
                    <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                            <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                    <thead className="bg-gray-50 dark:bg-gray-800">
                                        <tr>
                                            <th
                                                scope="col"
                                                className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                                            >
                                                <div className="flex items-center gap-x-3">
                                                    <input
                                                        type="checkbox"
                                                        className="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700"
                                                    />
                                                    <button className="flex items-center gap-x-2">
                                                        <span>Title</span>

                                                        <svg
                                                            className="h-3"
                                                            viewBox="0 0 10 11"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                d="M2.13347 0.0999756H2.98516L5.01902 4.79058H3.86226L3.45549 3.79907H1.63772L1.24366 4.79058H0.0996094L2.13347 0.0999756ZM2.54025 1.46012L1.96822 2.92196H3.11227L2.54025 1.46012Z"
                                                                fill="currentColor"
                                                                stroke="currentColor"
                                                                strokeWidth="0.1"
                                                            />
                                                            <path
                                                                d="M0.722656 9.60832L3.09974 6.78633H0.811638V5.87109H4.35819V6.78633L2.01925 9.60832H4.43446V10.5617H0.722656V9.60832Z"
                                                                fill="currentColor"
                                                                stroke="currentColor"
                                                                strokeWidth="0.1"
                                                            />
                                                            <path
                                                                d="M8.45558 7.25664V7.40664H8.60558H9.66065C9.72481 7.40664 9.74667 7.42274 9.75141 7.42691C9.75148 7.42808 9.75146 7.42993 9.75116 7.43262C9.75001 7.44265 9.74458 7.46304 9.72525 7.49314C9.72522 7.4932 9.72518 7.49326 9.72514 7.49332L7.86959 10.3529L7.86924 10.3534C7.83227 10.4109 7.79863 10.418 7.78568 10.418C7.77272 10.418 7.73908 10.4109 7.70211 10.3534L7.70177 10.3529L5.84621 7.49332C5.84617 7.49325 5.84612 7.49318 5.84608 7.49311C5.82677 7.46302 5.82135 7.44264 5.8202 7.43262C5.81989 7.42993 5.81987 7.42808 5.81994 7.42691C5.82469 7.42274 5.84655 7.40664 5.91071 7.40664H6.96578H7.11578V7.25664V0.633865C7.11578 0.42434 7.29014 0.249976 7.49967 0.249976H8.07169C8.28121 0.249976 8.45558 0.42434 8.45558 0.633865V7.25664Z"
                                                                fill="currentColor"
                                                                stroke="currentColor"
                                                                strokeWidth="0.3"
                                                            />
                                                        </svg>
                                                    </button>
                                                </div>
                                            </th>

                                            <th
                                                scope="col"
                                                className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                                            >
                                                Published At
                                            </th>

                                            <th
                                                scope="col"
                                                className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                                            >
                                                Status
                                            </th>

                                            <th
                                                scope="col"
                                                className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                                            >
                                                User
                                            </th>

                                            <th
                                                scope="col"
                                                className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                                            >
                                                Body
                                            </th>

                                            <th
                                                scope="col"
                                                className="relative py-3.5 px-4"
                                            >
                                                <span className="sr-only">
                                                    Actions
                                                </span>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                                        {postState &&
                                            postState.map((post) => (
                                                <tr key={post.id}>
                                                    <td className="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
                                                        <div className="inline-flex items-center gap-x-3">
                                                            <input
                                                                type="checkbox"
                                                                className="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700"
                                                            />

                                                            <span>
                                                                {post.title}
                                                            </span>
                                                        </div>
                                                    </td>
                                                    <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                                        {post.published_at}
                                                    </td>
                                                    <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                                        <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 text-emerald-500 bg-emerald-100/60 dark:bg-gray-800">
                                                            {post.active ===
                                                            1 ? (
                                                                <svg
                                                                    width="12"
                                                                    height="12"
                                                                    viewBox="0 0 12 12"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M10 3L4.5 8.5L2 6"
                                                                        stroke="currentColor"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            ) : (
                                                                <svg
                                                                    width="12"
                                                                    height="12"
                                                                    viewBox="0 0 12 12"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M2 2L10 10"
                                                                        stroke="red"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                    <path
                                                                        d="M10 2L2 10"
                                                                        stroke="red"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            )}
                                                        </div>
                                                    </td>
                                                    <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                                        <div className="flex items-center gap-x-2">
                                                            <img
                                                                className="object-cover w-8 h-8 rounded-full"
                                                                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                                                                alt=""
                                                            />
                                                            <div>
                                                                <h2 className="text-sm font-medium text-gray-800 dark:text-white ">
                                                                    {post.name}
                                                                </h2>
                                                                <p className="text-xs font-normal text-gray-600 dark:text-gray-400">
                                                                    {post.email}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                                        {post.body
                                                            .substring(0, 50)
                                                            .replace(
                                                                /<[^>]*>/g,
                                                                ""
                                                            )}
                                                    </td>
                                                    <td className="px-4 py-4 text-sm whitespace-nowrap">
                                                        <div className="flex items-center gap-x-6">
                                                            <button className="text-gray-500 transition-colors duration-200 dark:hover:text-indigo-500 dark:text-gray-300 hover:text-indigo-500 focus:outline-none"
                                                            onClick={()=> handleEditPost(post)}
                                                            >
                                                                Edit
                                                            </button>

                                                            <button
                                                                className="text-blue-500 transition-colors duration-200 hover:text-indigo-500 focus:outline-none"
                                                                onClick={() =>
                                                                    handleDeletePost(
                                                                        post.id
                                                                    )
                                                                }
                                                            >
                                                                Delete
                                                            </button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-between mt-6">
                    {currentPage !== 1 ? (
                        <button
                            className="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800"
                            onClick={handlePreviousClick}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-5 h-5 rtl:-scale-x-100"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                                />
                            </svg>

                            <span>previous</span>
                        </button>
                    ) : (
                        <div
                            className="flex items-center px-5 py-2 text-sm  capitalize transition-colors duration-200 border rounded-md gap-x-2    dark:border-none "
                            onClick={handleNextClick}
                        >
                            {" "}
                        </div>
                    )}

                    <div className="items-center hidden md:flex gap-x-3">
                        {pagination.map((page, index) => (
                            <span
                                key={index}
                                className={`px-2 py-1 text-sm text-gray-500 rounded-md ${
                                    currentPage === page &&
                                    page !== " ..." &&
                                    page !== "... "
                                        ? "text-white bg-blue-600"
                                        : "text-gray-500"
                                } 
                                dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100`}
                                onClick={() => handlePageClick(page)}
                            >
                                {page}
                            </span>
                        ))}
                    </div>

                    {currentPage !== totalPage ? (
                        <button
                            className="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800"
                            onClick={() => handleNextClick("next")}
                        >
                            <span>Next</span>

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-5 h-5 rtl:-scale-x-100"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                />
                            </svg>
                        </button>
                    ) : (
                        <div
                            className="flex items-center px-5 py-2 text-sm  capitalize transition-colors duration-200 border rounded-md gap-x-2    dark:border-none "
                            onClick={() => handleNextClick("next")}
                        >
                            {" "}
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default Posts;
