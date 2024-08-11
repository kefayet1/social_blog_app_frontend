import { useParams } from "react-router-dom";
import MoreFrom from "../components/MoreFrom";
import PostLeft from "../components/PostLeft";
import PostMiddle from "../components/PostMiddle";
import Profile from "../components/Profile";
import ReadSimilarPost from "../components/ReadSimilarPost";
import { useState } from "react";

const Post = () => {
    const {id} = useParams();
    const [ leftData, setLeftData ] = useState(null);
    const sendToLeft = (data) =>{
        setLeftData(data);
    }
    return (
        <div className="bg-[#F5F5F5] h-screen">
            <div className="lg:w-[70%] mx-auto">
                <div className="py-5 pr-5 pl-3 flex">
                    <div className="left pr-4 hidden lg:w-[5%] md:block md:w-[10%]">
                        <PostLeft leftData={leftData} id={id}/>
                    </div>
                    <div className="middle lg:w-[70%] w-full">
                        <PostMiddle postId={id} sendToLeft={sendToLeft}/>
                        <ReadSimilarPost />
                        <div className="lg:hidden block">
                        <Profile />
                        <MoreFrom/>
                        </div>
                    </div>
                    <div className="right ml-4 w-[25%] hidden lg:block">
                        <Profile />
                        <MoreFrom/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Post;
