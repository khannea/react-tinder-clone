import React from 'react';
import './Chats.css';
import Chat from './Chat';

function Chats() {
  return (
    <div className="chats">
      <Chat
        name="mark"
        message="Yo, what's up?"
        timestamp="40 seconds ago"
        profilePic="https://www.postplanner.com/hs-fs/hub/513577/file-2886416984-png/blog-files/facebook-profile-pic-vs-cover-photo-sq.png?width=250&height=250&name=facebook-profile-pic-vs-cover-photo-sq.png"
      />
      <Chat
        name="Lea"
        message="Hello!!"
        timestamp="1 day ago"
        profilePic="https://i.pinimg.com/originals/be/ac/96/beac96b8e13d2198fd4bb1d5ef56cdcf.jpg"
      />
    </div>
  );
}

export default Chats;
