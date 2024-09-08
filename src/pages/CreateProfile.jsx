import { faFile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@mui/material";
import { useState } from "react";
import BaseUrl from "../BaseUrl";

const CreateProfile = () => {
  const newFormData = new FormData();
  const [formData, setFormData] = useState({
    bio: "",
    education: "",
    website_url: "",
    work: "",
    location: "",
    profile_image: "",
  });

  const handleInput = (e) => {
    if (e.target.name === "profile_image") {
      setFormData((prevData) => ({
        ...prevData,
        profile_image: e.target.files[0],
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [e.target.name]: e.target.value,
      }));
    }
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    newFormData.append("bio", formData.bio);
    newFormData.append("education", formData.education);
    newFormData.append("website_url", formData.website_url);
    newFormData.append("work", formData.work);
    newFormData.append("location", formData.location);
    newFormData.append("profile_image", formData.profile_image);
    newFormData.append("token", JSON.parse(localStorage.getItem("loginInfo")).token);

    try {
      const response = await fetch(BaseUrl + "create_profile", {
        method: "POST",
        body: newFormData,
      });
      const data = await response.json();
      console.log(data);
      setFormData({
        bio: "",
        education: "",
        website_url: "",
        work: "",
        location: "",
        profile_image: "",
      });
    } catch (error) {
      console.error('Error:', error);
    }
  };

  console.log(formData, "formData");

  return (
    <div className="bg-indigo-100 flex justify-center items-center">
      <div className="lg:w-2/5 md:w-1/2 w-2/3">
        <form
          className="bg-white p-10 rounded-lg shadow-lg min-w-full"
          onSubmit={handleSubmitForm}
        >
          <h1 className="text-center text-2xl mb-6 text-gray-600 font-bold font-sans">
            Change Profile
          </h1>
          <div>
            <label
              className="text-gray-800 font-semibold block my-3 text-md"
              htmlFor="bio"
            >
              Bio
            </label>
            <input
              className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
              type="text"
              name="bio"
              id="bio"
              placeholder="Bio"
              value={formData.bio}
              onChange={handleInput}
            />
          </div>
          <div>
            <label
              className="text-gray-800 font-semibold block my-3 text-md"
              htmlFor="education"
            >
              Education
            </label>
            <input
              className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
              type="education"
              name="education"
              id="education"
              placeholder="Education"
              value={formData.education}
              onChange={handleInput}
            />
          </div>
          <div>
            <label
              className="text-gray-800 font-semibold block my-3 text-md"
              htmlFor="website url"
            >
              Website url
            </label>
            <input
              className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
              type="text"
              name="website_url"
              id="website url"
              placeholder="Website url"
              value={formData.website_url}
              onChange={handleInput}
            />
          </div>
          <div>
            <label
              className="text-gray-800 font-semibold block my-3 text-md"
              htmlFor="work"
            >
              Work
            </label>
            <input
              className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
              type="text"
              name="work"
              id="work"
              placeholder="Work"
              value={formData.work}
              onChange={handleInput}
            />
          </div>
          <div>
            <label
              className="text-gray-800 font-semibold block my-3 text-md"
              htmlFor="location"
            >
              Location
            </label>
            <input
              className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
              type="text"
              name="location"
              id="location"
              placeholder="Location"
              value={formData.location}
              onChange={handleInput}
            />
          </div>
          <div>
            <h6 className="text-gray-800 font-semibold block my-3 text-md">
              Profile Image
            </h6>
            <div className="flex h-[200px] overflow-hidden  align-center justify-center flex-wrap relative inline-block">
              <div className="">
                {formData.profile_image && (
                  <img
                    type="file"
                    src={URL.createObjectURL(formData.profile_image)}
                    alt=""
                    accept="image/*"
                    className="h-1/3 w-full object-cover"
                  />
                )}
                <div className="px-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="mb-3 flex justify-center align-center ">
                    <Button
                      component="label"
                      role={undefined}
                      variant="contained"
                      // tabIndex={-1}
                      startIcon={<FontAwesomeIcon icon={faFile} />}
                    >
                      Upload File
                      <input
                        name="profileImage"
                        onChange={handleInput}
                        type="file"
                        accept="image/*"
                        hidden
                      />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="w-full mt-6 bg-indigo-600 rounded-lg px-4 py-2 text-lg text-white tracking-wide font-semibold font-sans"
          >
            submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateProfile;
