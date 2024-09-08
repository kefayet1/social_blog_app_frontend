import Echo from "laravel-echo";
import React, { useEffect, useRef, useState } from "react";
import Pusher from "pusher-js";
const Test = () => {
  // const currentBox = useRef(null);

  // useEffect(() => {
  //     const observer = new IntersectionObserver((enteris) => {
  //         if(enteris[0].isIntersecting){
  //             console.log("hello");
  //         }

  //     }, {});
  //     observer.observe(currentBox.current);

  //     return ()=> observer.disconnect();
  // }, []);

  const [data, setData] = useState([]);
  useEffect(() => {
    window.Pusher = Pusher;
    window.Echo = new Echo({
      broadcaster: "pusher",
      key: "ABCDEFG", 
      cluster: "mt1",
      forceTLS: false,
      wsHost: window.location.hostname,
      wsPort: 6001,
      disableStats: true,
    });

    return () => {
        window.Echo.disconnect();
      };

}, []);

  useEffect(() => {
    window.Echo.channel("notification").listen("SendNotification", (e) => {
      setData(e?.notification[0].user_id === 3 ? e?.notification[0] : []);
    });

    window.Echo.connector.pusher.connection.bind('connected', () => {
      console.log('Pusher connected');
    });
  }, []);

  useEffect(()=> {
    
    
  }, []);
  console.log(data);
  return (
    <div className="flex flex-col items-center gap-4 mt-2">
      <p>Trade:- {} </p>
    </div>
  );
};

export default Test;
