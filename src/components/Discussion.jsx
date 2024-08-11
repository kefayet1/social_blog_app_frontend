const Discussion = () => {
  return (
    <div className="ml-4">
        <h5 className="text-sm font-bold mb-4">#discussion</h5>
        <div className="discussionPosts ml-3">
            <div className="dispost mb-4">
                <div className="name text-[#212B36]">
                    <p>What's your fav bundler: Rollup, Parcel or Webpack?</p>
                </div>
                <div className="commentCount text-sm">
                    <span>29</span> comments
                </div>
            </div>

            <div className="dispost">
                <div className="name text-[#212B36]">
                    <p>JavaScript project ideas and practical uses</p>
                </div>
                <div className="commentCount text-sm">
                    <span>34</span> comments
                </div>
            </div>
        </div>
    </div>
  )
}

export default Discussion