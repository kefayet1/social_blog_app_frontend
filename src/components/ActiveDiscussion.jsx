const ActiveDiscussion = () => {
    return (
        <div className="bg-white rounded-md py-2 border ml-4">
            <h2 className="text-lg font-bold px-4 pb-3">Active Discussion</h2>
            <hr />
            <div className="commentedPost ">
                <div className="post py-3 px-4">
                    <div className="name text-[#212B36]">
                        <span>Meme Monday</span>
                    </div>
                    <div className="commentCount">
                        <span>10</span> comments
                    </div>
                </div>
                <hr />
                <div className="post py-3 px-4">
                    <div className="name text-[#212B36]">
                        <span>Portfolio or no Portfolio</span>
                    </div>
                    <div className="commentCount">
                        <span>12</span> comments
                    </div>
                </div>
                <hr />
                <div className="post py-3 px-4">
                    <div className="name text-[#212B36]">
                        <span>Portfolio or no Portfolio</span>
                    </div>
                    <div className="commentCount">
                        <span>12</span> comments
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ActiveDiscussion;
