import React, { useEffect } from 'react'
import BaseUrl from '../BaseUrl';

const Profile = () => {
   
  return (
    <div className="profile rounded-md bg-white p-4 lg:p-4 mb-5">
        <div className="top mb-3">
            <div className="nameAndImg flex gap-2 items-center">
                <div className="img">
                <img src="https://media.dev.to/cdn-cgi/image/width=320,height=320,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F890225%2Fddc6509a-299f-4e1c-af78-59ab2103ef91.jpeg" alt="" className='rounded-full w-10 h-10'/>
                </div>

                <div className="name font-bold text-lg text-[#212B36]">
                    <span>Poovarasu Sekar</span>
                </div>
            </div>
        </div>
        <div className="middle w-full mb-3">
            <button className='bg-blue-700 w-full p-2 rounded-md text-white font-bold mb-2 hover:bg-blue-800'>Follow</button>
            <p className='text-base'>Senior PHP/Python Developer @ Mallow Technologies | Laravel & Django | Tech Enthusiast | Code Wizard | Forward-Thinking Techie</p>
        </div>
        <div className="bottom">
            <div className="address mb-3">
                <h4 className='font-bold text-slate-500 '>Location</h4>
                <p className='text-base'>Coimbatore, Tamil Nadu, India</p>
            </div>

            <div className="address">
                <h4 className='font-bold text-slate-500 '>Education</h4>
                <p className='text-base'>Bachelor of Mechanical Engineering</p>
            </div>
        </div>
      </div>
  )
}

export default Profile