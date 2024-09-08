import { useEffect, useRef, useState } from "react";
import { MdPostAdd } from "react-icons/md";
import BaseUrl from "../BaseUrl";
import dayjs from "dayjs";
import { Link } from "react-router-dom";
import Echo from "laravel-echo";
import Pusher from "pusher-js";

const Notification = ({
  showNotification,
  setShowNotification,
  setCountUnSeenNotifi,
}) => {
  const notificationRef = useRef(null);
  const [notification, setNotification] = useState([]);
  const [todayNotification, setTodayNotification] = useState([]);
  const [yesterdayNotification, setYesterDayNotification] = useState([]);
  const [otherDaysNotification, setOtherDaysNotification] = useState([]);
  const [count, setCount] = useState(0);

  const day = dayjs().format("YYYY-MM-DD");
  const yesterday = dayjs().subtract(1, "day").format("YYYY-MM-DD");
  useEffect(() => {
    const fetchNotification = async () => {
      const response = await fetch(BaseUrl + "get_notification", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          token: JSON.parse(localStorage.getItem("loginInfo")).token,
        }),
      });
      const data = await response.json();
      setNotification(data);

      //lifting state up
      setCountUnSeenNotifi(data.flat().filter((obj) => !obj.enabled).length);
    };
    fetchNotification();

    const interval = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, [count]);

  useEffect(() => {
    setTodayNotification(
      notification.filter(
        (notify) =>
          notify.created_at.split(" ")[0] === day && notify.user_id === 3
      )
    );
    setYesterDayNotification(
      notification.filter(
        (notify) => notify.created_at.split(" ")[0] === yesterday
      )
    );
    setOtherDaysNotification(
      notification.filter(
        (notify) =>
          notify.created_at.split(" ")[0] !== yesterday &&
          notify.created_at.split(" ")[0] !== day
      )
    );
  }, [notification]);

  // //laravel echo
  // useEffect(() => {
  //   window.Pusher = Pusher;
  //   window.Echo = new Echo({
  //     broadcaster: "pusher",
  //     key: "ABCDEFG",
  //     cluster: "mt1",
  //     forceTLS: false,
  //     wsHost: window.location.hostname,
  //     wsPort: 6001,
  //     disableStats: true,
  //   });

  //   return () => {
  //     window.Echo.disconnect();
  //   };
  // }, []);

  // useEffect(() => {
  //   window.Echo.channel("notification").listen("SendNotification", (e) => {
  //     if (e?.notification[0]?.user_id === 3 && notification.includes) {
  //       notificationRef.current = e?.notification[0];
  //     }

  //     if (notificationRef.current !== null) {
  //       setTodayNotification((prevData) => {
  //         return  [...prevData, JSON.parse(JSON.stringify(e?.notification[0].user_id === 3 && e?.notification[0])) ];
  //       });
  //       console.log(notificationRef.current);
  //     }
  //   });

  //   window.Echo.connector.pusher.connection.bind("connected", () => {
  //     console.log("Pusher connected");
  //   });
  // }, [notification]);
  return (
    <div className="relative">
      <div
        className={`w-full h-full bg-opacity-90 top-0 overflow-y-auto ${
          showNotification ? "hidden" : ""
        } overflow-x-hidden fixed sticky-0 z-10`}
        id="chef-div"
      >
        <div
          className={`w-full absolute z-10 right-0 h-full overflow-x-hidden transform ${
            showNotification ? "translate-x-full" : "translate-x-0"
          }  transition ease-in-out duration-700`}
          id="notification"
        >
          <div className="2xl:w-4/12 bg-yellow-50 h-screen overflow-y-auto p-8 absolute right-0 lg:right-60">
            <div className="flex items-center justify-between">
              <p
                tabIndex="0"
                className="focus:outline-none text-2xl font-semibold leading-6 text-gray-800"
              >
                Notifications
              </p>
              <button
                role="button"
                aria-label="close modal"
                className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 rounded-md cursor-pointer"
                onClick={() => setShowNotification(!showNotification)}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 6L6 18"
                    stroke="#4B5563"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6 6L18 18"
                    stroke="#4B5563"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            {todayNotification?.reverse().map((notify) => (
              <Link key={notify.id} to={`post/${notify.post_id}`}>
                <div className="w-full p-3 mt-8 bg-white rounded flex">
                  <div
                    tabIndex="0"
                    aria-label="heart icon"
                    role="img"
                    className="focus:outline-none w-8 h-8 border rounded-full border-gray-200 flex items-center justify-center"
                  >
                    <MdPostAdd size={20} className="text-blue-500" />
                  </div>
                  <div className="pl-3">
                    <p
                      tabIndex="0"
                      className="focus:outline-none text-sm leading-none"
                    >
                      <span className="text-indigo-700">{notify.name}</span>{" "}
                      <span>added new post</span>
                      {notify?.tag_title !== "" && notify?.tag_id !== null ? (
                        <span>
                          {" "}
                          on{" "}
                          <Link
                            className="text-black underline font-medium"
                            to={`/tag/${notify?.tag_title}`}
                          >
                            {notify?.tag_title}
                          </Link>
                        </span>
                      ) : (
                        ""
                      )}
                    </p>
                    <h4>{notify.title}</h4>
                    <p
                      tabIndex="0"
                      className="focus:outline-none text-xs leading-3 pt-1 text-gray-500"
                    >
                      {dayjs().diff(dayjs(notify.created_at), "minute")} hours
                      ago
                    </p>
                  </div>
                </div>
              </Link>
            ))}

            {yesterdayNotification.length > 0 ? (
              <h2
                tabIndex="0"
                className="focus:outline-none text-sm leading-normal pt-8 border-b pb-2 border-gray-300 text-gray-600"
              >
                YESTERDAY
              </h2>
            ) : null}
            {yesterdayNotification?.map((notify) => (
              <Link key={notify.id} to={`post/${notify.post_id}`}>
                <div
                  key={notify.id}
                  className="w-full p-3 mt-8 bg-white rounded flex"
                >
                  <div
                    tabIndex="0"
                    aria-label="heart icon"
                    role="img"
                    className="focus:outline-none w-8 h-8 border rounded-full border-gray-200 flex items-center justify-center"
                  >
                    <MdPostAdd size={20} className="text-blue-500" />
                  </div>
                  <div className="pl-3">
                    <p
                      tabIndex="0"
                      className="focus:outline-none text-sm leading-none"
                    >
                      <span className="text-indigo-700">{notify.name}</span>{" "}
                      <span>added new post</span>
                      {notify?.tag_title !== "" && notify?.tag_id !== null ? (
                        <span>
                          {" "}
                          on{" "}
                          <Link
                            className="text-black underline font-medium"
                            to={`/tag/${notify?.tag_title}`}
                          >
                            {notify?.tag_title}
                          </Link>
                        </span>
                      ) : (
                        ""
                      )}
                    </p>
                    <h4>{notify.title}</h4>
                    <p
                      tabIndex="0"
                      className="focus:outline-none text-xs leading-3 pt-1 text-gray-500"
                    >
                      {dayjs(notify.created_at).format("hh")} hours ago
                    </p>
                  </div>
                </div>
              </Link>
            ))}

            {otherDaysNotification?.map((notify) => (
              <Link key={notify.id} to={`post/${notify.post_id}`}>
                <div
                  key={notify.id}
                  className="w-full p-3 mt-8 bg-white rounded flex"
                >
                  <div
                    tabIndex="0"
                    aria-label="heart icon"
                    role="img"
                    className="focus:outline-none w-8 h-8 border rounded-full border-gray-200 flex items-center justify-center"
                  >
                    <MdPostAdd size={20} className="text-blue-500" />
                  </div>
                  <div className="pl-3">
                    <p
                      tabIndex="0"
                      className="focus:outline-none text-sm leading-none"
                    >
                      <span className="text-indigo-700">{notify.name}</span>{" "}
                      <span>added new post</span>
                      {notify?.tag_title !== "" && notify?.tag_id !== null ? (
                        <span>
                          {" "}
                          on{" "}
                          <Link
                            className="text-black underline font-medium"
                            to={`/tag/${notify?.tag_title}`}
                          >
                            {notify?.tag_title}
                          </Link>
                        </span>
                      ) : (
                        ""
                      )}
                    </p>
                    <h4>{notify.title}</h4>
                    <p
                      tabIndex="0"
                      className="focus:outline-none text-xs leading-3 pt-1 text-gray-500"
                    >
                      {dayjs(notify.created_at).format("DD/MM/YYYY")} at{" "}
                      {dayjs(notify.created_at).format("h.ssa")}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
            <div className="w-full p-3 mt-4 bg-white rounded flex">
              <div
                tabIndex="0"
                aria-label="heart icon"
                role="img"
                className="focus:outline-none w-8 h-8 border rounded-full border-gray-200 flex items-center justify-center"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.00059 3.01934C9.56659 1.61334 11.9866 1.66 13.4953 3.17134C15.0033 4.68334 15.0553 7.09133 13.6526 8.662L7.99926 14.3233L2.34726 8.662C0.944589 7.09133 0.997256 4.67934 2.50459 3.17134C4.01459 1.662 6.42992 1.61134 8.00059 3.01934Z"
                    fill="#EF4444"
                  />
                </svg>
              </div>
              <div className="pl-3">
                <p
                  tabIndex="0"
                  className="focus:outline-none text-sm leading-none"
                >
                  <span className="text-indigo-700">James Doe</span> favourited
                  an <span className="text-indigo-700">item</span>
                </p>
                <p
                  tabIndex="0"
                  className="focus:outline-none text-xs leading-3 pt-1 text-gray-500"
                >
                  2 hours ago
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
