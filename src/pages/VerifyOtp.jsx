import { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const VerifyOtp = () => {
    const navigate = useNavigate();
    const [input1, setInput1] = useState("");
    const [input2, setInput2] = useState("");
    const [input3, setInput3] = useState("");
    const [input4, setInput4] = useState("");
    const [email, setEmail] = useState(sessionStorage.getItem("email"));
    const inputRef1 = useRef();
    const inputRef2 = useRef();
    const inputRef3 = useRef();
    const inputRef4 = useRef();

    const { login } = useContext(AuthContext);

    useEffect(()=>{
        if(login){
            navigate("/");
        }
    })

    useEffect(() => {
        inputRef1.current.focus();
        if (inputRef1.current.value) {
            inputRef2.current.focus();
        }
        if (inputRef2.current.value) {
            inputRef3.current.focus();
        }
        if (inputRef3.current.value) {
            inputRef4.current.focus();
        }
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const otp = input1 + input2 + input3 + input4;
        console.log(otp);
        const obj = { email: email, otp: otp };
        try {
            const response = await fetch(
                "http://127.0.0.1:8000/api/verify_otp",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(obj),
                }
            );

            if (!response.ok) {
                console.error(`HTTP error! status: ${response.status}`);
                const text = await response.text();
                console.error(`Response text: ${text}`);
                return;
            }

            const data = await response.json();
            if (data.status === "success") {
                navigate("/resetPassword")
                if (sessionStorage.getItem("otpToken") === null) {
                    sessionStorage.setItem("otpToken", data.token);
                }else{
                    sessionStorage.removeItem("otpToken");
                    sessionStorage.setItem("otpToken", data.token);
                }
            }

        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-12">
            <div className="relative bg-white px-6 pt-10 pb-9 shadow-xl mx-auto w-full max-w-lg rounded-2xl">
                <div className="mx-auto flex w-full max-w-md flex-col space-y-16">
                    <div className="flex flex-col items-center justify-center text-center space-y-2">
                        <div className="font-semibold text-3xl">
                            <p>Email Verification</p>
                        </div>
                        <div className="flex flex-row text-sm font-medium text-gray-400">
                            <p>
                                We have sent a code to your email
                                ba**@dipainhouse.com
                            </p>
                        </div>
                    </div>

                    <div>
                        <form onSubmit={handleSubmit}>
                            <div className="flex flex-col space-y-16">
                                <div className="flex flex-row items-center justify-between mx-auto w-full max-w-xs">
                                    <div className="w-16 h-16 ">
                                        <input
                                            ref={inputRef1}
                                            className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                                            type="text"
                                            name=""
                                            id=""
                                            value={input1}
                                            onChange={(e) =>
                                                setInput1(e.target.value)
                                            }
                                        />
                                    </div>
                                    <div className="w-16 h-16 ">
                                        <input
                                            ref={inputRef2}
                                            className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                                            type="text"
                                            name=""
                                            id=""
                                            value={input2}
                                            onChange={(e) =>
                                                setInput2(e.target.value)
                                            }
                                        />
                                    </div>
                                    <div className="w-16 h-16 ">
                                        <input
                                            ref={inputRef3}
                                            className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                                            type="text"
                                            name=""
                                            id=""
                                            value={input3}
                                            onChange={(e) =>
                                                setInput3(e.target.value)
                                            }
                                        />
                                    </div>
                                    <div className="w-16 h-16 ">
                                        <input
                                            ref={inputRef4}
                                            className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                                            type="text"
                                            name=""
                                            id=""
                                            value={input4}
                                            onChange={(e) =>
                                                setInput4(e.target.value)
                                            }
                                        />
                                    </div>
                                </div>

                                <div className="flex flex-col space-y-5">
                                    <div>
                                        <button
                                            type="submit"
                                            className="flex flex-row items-center justify-center text-center w-full border rounded-xl outline-none py-5 bg-blue-700 border-none text-white text-sm shadow-sm"
                                        >
                                            Verify Account
                                        </button>
                                    </div>

                                    <div className="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
                                        <p>Didn't recieve code?</p>{" "}
                                        <a
                                            className="flex flex-row items-center text-blue-600"
                                            href="http://"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Resend
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VerifyOtp;
