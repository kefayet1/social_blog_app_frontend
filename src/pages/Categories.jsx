import React, { useContext, useEffect, useRef, useState } from "react";
import CategoriesTable from "../components/CategoriesTable";
import { AuthContext } from "../context/AuthContext";
import { CategoryContext } from "../context/CategoryContext";
import BaseUrl from "../BaseUrl";

const Categories = () => {
    const newFormData = new FormData();
    const { categoryState, dispatchCategory } = useContext(CategoryContext);
    const [showForm, setShowForm] = useState(false);
    const [buttonChange, setButtonChange] = useState(false);
    const { login } = useContext(AuthContext);
    const formRef = useRef(null);
    const createButtonRef = useRef(null);

    const [formData, setFormData] = useState({
        title: "",
        hashtag: "",
        body: "",
        thumbnail: "",
    });

    const convertText = (text) => {
        const newText = text
            .split(" ")
            .map((item, index) =>
                index === 0
                    ? "#" + item
                    : item.charAt(0).toUpperCase() + item.slice(1)
            )
            .join("");
        return newText;
    };

    const handleChange = (e) => {
        if (e.target.name === "thumbnail") {
            setFormData({
                ...formData,
                thumbnail: e.target.files[0],
            });
        } else if (e.target.name === "title") {
            setFormData({
                ...formData,
                title: e.target.value,
                hashtag: convertText(e.target.value),
            });
        } else {
            setFormData({
                ...formData,
                [e.target.name]: e.target.value,
            });
        }
    };

    const appendFormData = (data) => {
        newFormData.append("file", data.thumbnail);
        newFormData.append("title", data.title);
        newFormData.append("hashtag", data.hashtag);
        newFormData.append("body", data.body);
        newFormData.append("token", JSON.parse(login).token);
        if (data.id) {
            newFormData.append("category_id", data.id);
        }
        for (const pair of newFormData.entries()) {
            console.log(pair[0], pair[1]);
        }

        return newFormData;
    };

    // useEffect(()=> {
    //     const handleHideForm = (e) =>{
    //         console.log(formData.current);
    //         if(e.target !== formRef.current && e.target !== createButtonRef.current){
    //             setShowForm(false);
    //         }

    //     }
    //     document.body.addEventListener("click", handleHideForm);

    //     // return document.body.removeEventListener("click", handleHideForm);
    // })

    const handleCreateSubmit = async (e) => {
        e.preventDefault();
        newFormData.append("file", formData.thumbnail);
        newFormData.append("title", formData.title);
        newFormData.append("hashtag", formData.hashtag);
        newFormData.append("body", formData.body);
        newFormData.append("token", JSON.parse(login).token);
        try {
            const response = await fetch(
                `${BaseUrl}create_tag`,
                {
                    method: "POST",
                    body: newFormData,
                }
            );

            if (!response.ok) {
                throw new Error("Network response was not ok");
            }

            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error(
                "There was a problem with teh fetch operation:",
                error
            );
        }

        setFormData({
            title: "",
            hashtag: "",
            body: "",
            thumbnail: "",
        });
        setShowForm(false);
    };

    // this function data is comping child components using lifting state up
    const handleClick = (data) => {
        console.log(data.id,"helloId")
        setShowForm(true);
        setButtonChange(true);
        console.log("hello", data.id);
        setFormData({
            ...formData,
            id: data.id,
            title: data.title,
            hashtag: data.hashtag,
            body: data.body,
            tag_id: data.id,
        });
    };

    const handleUpdateSubmit = async (e) => {
        e.preventDefault();
        newFormData.append("file", formData.thumbnail);
        newFormData.append("title", formData.title);
        newFormData.append("hashtag", formData.hashtag);
        newFormData.append("body", formData.body);
        newFormData.append("tag_id", formData.tag_id);
        newFormData.append("token", JSON.parse(login).token);
        try {
            const response = await fetch(
                `${BaseUrl}update_tag`,
                {
                    method: "POST",
                    body: newFormData,
                }
            );

            if (!response.ok) {
                throw new Error("Network response was not ok");
            }

            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error(
                "There was a problem with teh fetch operation:",
                error
            );
        }

        dispatchCategory({
            type: "UPDATE_CATEGORY",
            payload: {
                id: formData.id,
                title: formData.title,
                hashtag: formData.hashtag,
            },
        });

        setFormData({
            title: "",
            hashtag: "",
            body: "",
            thumbnail: "",
        });
        setShowForm(false);
    };

    // update form to convert create form
    const handleCreateCategory = () => {
        setButtonChange(false);
        setFormData({
            title: "",
            hashtag: "",
            body: "",
            thumbnail: "",
        });
    };
    return (
        <div>
            <div className="bg-indigo-600 px-8 pt-10 lg:pt-14 pb-16 flex justify-between items-center mb-3 ">
                {/* <!-- title --> */}
                <h1 className="text-xl text-white">Categories</h1>
                <span
                    ref={createButtonRef}
                    onClick={() => setShowForm(!showForm)}
                    className="btn bg-white text-gray-800 border-gray-600 hover:bg-gray-100 hover:text-gray-800 hover:border-gray-200 active:bg-gray-100 active:text-gray-800 active:border-gray-200 focus:outline-none focus:ring-4 focus:ring-indigo-300"
                >
                    Create New Category
                </span>
            </div>

            {showForm && (
                <section
                    ref={formRef}
                    className="max-w-4xl p-6 mx-auto bg-indigo-600 rounded-md shadow-md dark:bg-gray-800 mt-20 absolute right-20 top-20 z-20"
                >
                    <h1 className="text-xl font-bold text-white capitalize dark:text-white">
                        {buttonChange ? "Updated Category" : "Create Category"}
                    </h1>
                    <form
                        onSubmit={
                            buttonChange
                                ? handleUpdateSubmit
                                : handleCreateSubmit
                        }
                    >
                        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                            <div>
                                <label
                                    className="text-white dark:text-gray-200"
                                    htmlFor="title"
                                >
                                    Title
                                </label>
                                <input
                                    id="title"
                                    type="text"
                                    name="title"
                                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                                    value={formData.title}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <label
                                    className="text-white dark:text-gray-200"
                                    htmlFor="emailAddress"
                                >
                                    Hashtag
                                </label>
                                <input
                                    id="emailAddress"
                                    type="text"
                                    name="slag"
                                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                                    value={formData.hashtag}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <label
                                    className="text-white dark:text-gray-200"
                                    htmlFor="textarea"
                                >
                                    Body
                                </label>
                                <textarea
                                    id="textarea"
                                    type="textarea"
                                    name="body"
                                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                                    value={formData.body}
                                    onChange={handleChange}
                                ></textarea>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-white">
                                    Thumbnail
                                </label>
                                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                    <div className="space-y-1 text-center">
                                        <svg
                                            className="mx-auto h-12 w-12 text-white"
                                            stroke="currentColor"
                                            fill="none"
                                            viewBox="0 0 48 48"
                                            aria-hidden="true"
                                        >
                                            <path
                                                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                        <div className="flex text-sm text-gray-600">
                                            <label
                                                htmlFor="file-upload"
                                                className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                                            >
                                                <span className="">
                                                    Upload a file
                                                </span>
                                                <input
                                                    id="file-upload"
                                                    name="thumbnail"
                                                    type="file"
                                                    className="sr-only"
                                                    onChange={handleChange}
                                                />
                                            </label>
                                            <p className="pl-1 text-white">
                                                or drag and drop
                                            </p>
                                        </div>
                                        <p className="text-xs text-white">
                                            PNG, JPG, GIF up to 10MB
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-end mt-6">
                            {buttonChange ? (
                                <div className="flex gap-2">
                                    <button
                                        onClick={handleCreateCategory}
                                        className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-pink-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600"
                                    >
                                        Click To Create Category
                                    </button>
                                    <button className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-600">
                                        Update
                                    </button>
                                </div>
                            ) : (
                                <button className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-pink-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600">
                                    Save
                                </button>
                            )}
                        </div>
                    </form>
                </section>
            )}
            <CategoriesTable clicking={handleClick} />
        </div>
    );
};

export default Categories;
