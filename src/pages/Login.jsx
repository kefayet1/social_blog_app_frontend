import { useContext, useEffect, useState } from "react";
import { NavLink, redirect, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import BaseUrl from "../BaseUrl";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const [data, setData] = useState(null);
  const [formData, setFormData] = useState({
    email: "lacey.jacobs@gmail.com",
    password: "12345678",
  });

  if (login) {
    navigate("/");
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${BaseUrl}login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    setData(data);

    if (localStorage.getItem("loginInfo") === null) {
      localStorage.setItem("loginInfo", JSON.stringify(data));
    } else {
      localStorage.removeItem("loginInfo");
      localStorage.setItem("loginInfo", JSON.stringify(data));
    }

    if (data?.status === "success" && data?.token !== "") {
      navigate("/");
    }

    // setFormData({
    //     email: "",
    //     password: "",
    // });
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      <div className="flex min-h-[100vh] flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="text-center sm:mx-auto sm:w-full sm:max-w-md">
          <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white">
            Sign in
          </h1>
        </div>
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white dark:bg-gray-700 px-4 pb-4 pt-8 sm:rounded-lg sm:px-10 sm:pb-6 sm:shadow">
            <form
              className="space-y-6"
              onSubmit={
                formData.email !== "" && formData.password !== ""
                  ? handleSubmit
                  : null
              }
            >
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-white"
                >
                  Email address / Username
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    type="text"
                    name="email"
                    required=""
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white dark:placeholder-gray-300 dark:focus:border-indigo-400 dark:focus:ring-indigo-400 sm:text-sm"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 dark:text-white"
                >
                  Password
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    data-testid="password"
                    autoComplete="current-password"
                    required=""
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white dark:placeholder-gray-300 dark:focus:border-indigo-400 dark:focus:ring-indigo-400 sm:text-sm"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember_me"
                    name="remember_me"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 dark:text-white dark:border-gray-600 dark:focus:ring-indigo-400 disabled:cursor-wait disabled:opacity-50"
                  />
                  <label
                    htmlFor="remember_me"
                    className="ml-2 block text-sm text-gray-900 dark:text-white"
                  >
                    Remember me
                  </label>
                </div>
                <div className="text-sm">
                  <a
                    className="font-medium text-indigo-400 hover:text-indigo-500"
                    href=""
                  >
                    Forgot your password?
                  </a>
                </div>
              </div>
              <div>
                <button
                  data-testid="login"
                  type="submit"
                  className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:bg-indigo-700 dark:border-transparent dark:hover:bg-indigo-600 dark:focus:ring-indigo-400 dark:focus:ring-offset-2 disabled:cursor-wait disabled:opacity-50"
                >
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <svg
                      className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  Sign In
                </button>
              </div>
            </form>
            <div className="m-auto mt-6 w-fit md:mt-8">
              <span className="m-auto dark:text-gray-400">
                Don't have an account?
                <NavLink
                  to="/registration"
                  className="font-semibold text-indigo-600 dark:text-indigo-100"
                  href="/register"
                >
                  Create Account
                </NavLink>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
