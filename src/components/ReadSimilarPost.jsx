import React from 'react'

const ReadSimilarPost = () => {
  return (
    <div className='p-8 bg-white mb-5 rounded-md'>
        <h2 className='font-bold text-2xl mb-5'>Read next</h2>
        <div className="allPost flex items-center gap-2">
            <div className="post">
                <div className="postImage">
                    <img src="https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?dpr=1&h=200&w=120&auto=format&fit=crop&q=60&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzIwNDE1MTEwfA&ixlib=rb-4.0.3" alt="" className='w-20 h-20 rounded-full'/>
                </div>
            </div>
            <div className="postInfo">
                <div className="postHeader">
                    <h3 className='font-bold text-xl'>Crafting a social connector for Logto</h3>
                </div>
                <div className="aothorAndDate text-base">
                    <span>Polomino</span> -
                    <span>Jun 24</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ReadSimilarPost