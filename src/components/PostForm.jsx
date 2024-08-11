import Switch from "@mui/material/Switch";
import TipTap from "./TipTap";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { createTheme, styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Alert, Autocomplete, Chip, Snackbar, TextField } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import dayjs from "dayjs";


const CustomAutoComplete = styled(Autocomplete)({
    "& .MuiInputBase-root.MuiFilledInput-root": {
        backgroundColor: "transparent",
        "&:hover": {
            backgroundColor: "transparent",
        },
    },
    "& .MuiAutocomplete-inputRoot": {
        paddingBottom: "10px",
    },
    // '& [type="text"]:focus': {
    //     outlineColor: "transparent",
    //     boxShadow: "0 0 0 1px transparent", // example shadow
    //     borderColor: "transparent",
    // },
    // "& .css-1dffvzu-MuiInputBase-root-MuiFilledInput-root::after": {
    //     'borderColor': "#ed6c02"
    // },

    // "& .css-hwkq3c-MuiInputBase-root-MuiFilledInput-root::after": {
    //     "borderColor": "#ed6c02"
    // }
});

const label = { inputProps: { "aria-label": "Color switch demo" } };
const PostForm = ({ editData, hideForm }) => {
    const [fetchTag, setFetchTag] = useState([]);
    const newFormData = new FormData();
    const { login } = useContext(AuthContext);
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState("");
    const [defaultTags, setDefaultTags] = useState(["hello"]);
    const [key, setKey] = useState(0);
    const [edit, setEdit] = useState(false);
    const [changeDate, setChangeDate] = useState(false);
    const [formData, setFormData] = useState({
        title: "",
        tags: [],
        active: false,
        published_at: dayjs(),
        body: "",
        thumbnail: "",
    });

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("http://127.0.0.1:8000/api/get_tags", {
                method: "post",
                headers: {
                    Content_Type: "application/json",
                },
                body: JSON.stringify({ token: JSON.parse(login).token }),
            });
            const data = await response.json();
            setFetchTag(data);
            console.log(fetchTag, "fetch Tag");
        };
        fetchData();
    }, []);

    // useEffect(() => {
    //     if (formData.thumbnail) {
    //         const reader = new FileReader();
    //         reader.onloadend = () => {
    //             setPreview(reader.result);
    //         };

    //         reader.readAsDataURL(formData.thumbnail);
    //     } else {
    //         setPreview(null);
    //     }
    // }, [formData.thumbnail]);

    const handleInputChange = (e) => {
        if (e.target.name === "thumbnail") {
            if (edit) {
                setFormData((prevFromData) => ({
                    ...prevFromData,
                    oldThumbnail: prevFromData.thumbnail,
                    thumbnail: e.target.files[0],
                }));
            } else {
                setFormData((prevFromData) => ({
                    ...prevFromData,
                    thumbnail: e.target.files[0],
                }));
            }
        } else if (e.target.name === "active") {
            console.log("hello active");
            setFormData((prevFromData) => ({
                ...prevFromData,
                active: !prevFromData.active,
            }));
        } else {
            setFormData((prevFromData) => ({
                ...prevFromData,
                [e.target.name]: e.target.value,
            }));
        }
    };

    const handleArticleChange = (data) => {
        setFormData((prevFromData) => ({
            ...prevFromData,
            body: data,
        }));
    };

    const handleTagsChange = (value) => {
        setFormData((prevFromData) => ({
            ...prevFromData,
            tags: value,
        }));
    };

    const handleDateChange = (newDate) => {
        setFormData((prevData) => ({
            ...prevData,
            published_at: dayjs(newDate),
        }));
        setChangeDate(false);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        newFormData.append("title", formData.title);
        newFormData.append("tags", formData.tags);
        newFormData.append("active", formData.active);
        //converting published_at into server wanted published_at
        newFormData.append("published_at", formData.published_at);
        newFormData.append("body", formData.body);
        newFormData.append("thumbnail", formData.thumbnail);
        newFormData.append("token", JSON.parse(login).token);

        if (formData.oldThumbnail !== undefined) {
            newFormData.append("oldThumbnail", formData.oldThumbnail);
        }

        if (formData.id !== undefined) {
            newFormData.append("id", formData.id);
        }

        const createPost = async () => {
            try {
                console.log(formData, "formData");
                const response = await fetch(
                    "http://127.0.0.1:8000/api/create_post",
                    {
                        method: "POST",
                        body: newFormData,
                    }
                );

                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }

                const data = await response.json();
                if (data.status) {
                    setOpen(true);
                    setMessage(data.message);
                    setStatus("success");
                   hideForm();
                } else if (data.status === "failed") {
                    setOpen(true);
                    setMessage(data.message);
                    setStatus("error");
                } else {
                    setOpen(true);
                    setMessage("internal server error");
                    setStatus("warning");
                }
                setFormData({
                    title: "",
                    tags: [],
                    active: false,
                    published_at: dayjs(""),
                    body: "",
                    thumbnail: "",
                });
            } catch (error) {
                console.error(
                    "There was a problem with teh fetch operation:",
                    error
                );
            }
        };

        const updatePost = async () => {
            try {
                console.log(formData, "formData");
                const response = await fetch(
                    "http://127.0.0.1:8000/api/update_post",
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
                if (data.status === "success") {
                    setOpen(true);
                    setMessage(data.message);
                    setStatus("success");
                    hideForm();
                } else if (data.status === "failed") {
                    setOpen(true);
                    setMessage(data.message);
                    setStatus("error");
                } else {
                    setOpen(true);
                    setMessage("inter server error");
                    setStatus("warning");
                }
                setFormData({
                    title: "",
                    tags: [],
                    active: false,
                    published_at: dayjs(""),
                    body: "",
                    thumbnail: "",
                });
            } catch (error) {
                console.error(
                    "There was a problem with teh fetch operation:",
                    error
                );
            }
        };

        if (edit) {
            updatePost();
        } else {
            createPost();
        }
    };

    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }

        setOpen(false);
    };

    // Update defaultValue state when defaultTags changes
    useEffect(() => {
        setDefaultTags(defaultTags);
    }, [defaultTags]);

    useEffect(() => {
        if (Object.keys(editData).length !== 0) {
            setFormData(editData);
            setDefaultTags(
                editData.tags !== null ? editData.tags.split(",") : []
            );
            setKey((prevKey) => prevKey + 1);
            setEdit(true);
            setChangeDate(true);
        }
    }, [editData]);


    const getThumbnailUrl = () => {
        if (edit && typeof formData.thumbnail === "string") {
            return `http://127.0.0.1:8000/${formData.thumbnail}`;
        } else if (formData.thumbnail instanceof File) {
            return URL.createObjectURL(formData.thumbnail);
        } else if (edit && Array.isArray(formData.thumbnail) === true) {
            return URL.createObjectURL(formData.thumbnail[1]);
        }
        return "";
    };

    return (
        <section className="bg-white w-5/6 lg:w-1/2  bg-blueGray-50 absolute lg:right-40 lg:top-100">
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity={status}>
                    {message}
                </Alert>
            </Snackbar>
            ;
            <div className="w-full px-4 mx-auto mt-6">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
                    <div className="rounded-t bg-white mb-0 px-6 py-6">
                        <div className="text-center flex justify-between">
                            <h6 className="text-blueGray-700 text-xl font-bold">
                                Create Post Form
                            </h6>
                            <button
                                className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                type="submit"
                                form="postForm"
                            >
                                Add Blog
                            </button>
                        </div>
                    </div>
                    <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                        <form id="postForm" onSubmit={handleSubmit}>
                            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                                User Information
                            </h6>
                            <div className="flex flex-wrap">
                                <div className="w-full lg:w-6/12 px-4">
                                    <div className="relative w-full mb-3">
                                        <label
                                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                            htmlFor="grid-password"
                                        >
                                            Title
                                        </label>
                                        <input
                                            type="text"
                                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                            name="title"
                                            value={formData.title}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </div>
                                <div className="w-full lg:w-6/12 px-4 flex align-bottom">
                                    <div className="relative w-full mb-3 ">
                                        <CustomAutoComplete
                                            multiple
                                            id="tags-filled"
                                            options={fetchTag.map(
                                                (option) => option.title
                                            )}
                                            defaultValue={[...defaultTags]}
                                            freeSolo
                                            name="tags"
                                            onChange={(event, value) => {
                                                handleTagsChange(value);
                                            }}
                                            renderTags={(value, getTagProps) =>
                                                value.map((option, index) => (
                                                    // eslint-disable-next-line react/jsx-key
                                                    <Chip
                                                        variant="outlined"
                                                        label={option}
                                                        {...getTagProps({
                                                            index,
                                                        })}
                                                    />
                                                ))
                                            }
                                            renderInput={(params) => (
                                                <TextField
                                                    {...params}
                                                    variant="filled"
                                                    label=""
                                                    placeholder="Add Tag"
                                                />
                                            )}
                                        />
                                    </div>
                                </div>
                                <div className="w-full lg:w-6/12 px-4">
                                    <div className="relative w-full mb-3">
                                        <label
                                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                            htmlFor="grid-password"
                                        >
                                            Active
                                        </label>

                                        <Switch
                                            onChange={handleInputChange}
                                            {...label}
                                            checked={Boolean(formData.active)}
                                            color="warning"
                                            name="active"
                                        />
                                    </div>
                                </div>
                                <div className="w-full lg:w-6/12 px-4">
                                    <div className="relative w-full mb-3">
                                        <label
                                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                            htmlFor="grid-password"
                                        >
                                            Date
                                        </label>
                                        <LocalizationProvider
                                            dateAdapter={AdapterDayjs}
                                        >
                                            <DatePicker
                                                value={
                                                    edit
                                                        ? changeDate
                                                            ? dayjs(
                                                                  formData?.published_at?.split(
                                                                      " "
                                                                  )[0]
                                                              )
                                                            : formData.published_at
                                                        : formData.published_at
                                                }
                                                onChange={handleDateChange}
                                            />
                                        </LocalizationProvider>
                                    </div>
                                </div>
                            </div>

                            <hr className="mt-6 border-b-1 border-blueGray-300" />

                            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                                Article
                            </h6>
                            <div className="flex flex-wrap">
                                <div className="w-full  px-4">
                                    <div className="relative w-full mb-3 TiPTap">
                                        <TipTap
                                            handleArticleChange={
                                                handleArticleChange
                                            }
                                            body={formData.body}
                                            edit={edit}
                                        />
                                    </div>
                                </div>
                            </div>

                            <hr className="mt-6 border-b-1 border-blueGray-300" />

                            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                                Thumbnail
                            </h6>
                            <div className="flex h-[300px] overflow-hidden  align-center justify-center flex-wrap relative inline-block">
                                <div className="">
                                    {formData.thumbnail && (
                                        <img
                                            type="file"
                                            src={getThumbnailUrl()}
                                            alt=""
                                            accept="image/*"
                                            className="h-1/3 w-full object-cover"
                                        />
                                    )}
                                    <div className="w-full lg:w-12/12 px-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                        <div className="w-full mb-3 flex justify-center align-center ">
                                            <Button
                                                component="label"
                                                role={undefined}
                                                variant="contained"
                                                tabIndex={-1}
                                                startIcon={
                                                    <FontAwesomeIcon
                                                        icon={faFile}
                                                    />
                                                }
                                            >
                                                Upload File
                                                <input
                                                    name="thumbnail"
                                                    onChange={handleInputChange}
                                                    type="file"
                                                    hidden
                                                />
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PostForm;
