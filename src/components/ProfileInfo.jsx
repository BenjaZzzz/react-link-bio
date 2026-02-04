import avatar from "../assets/avatar.jpg";
import info from "../data/info.js";

const ProfileInfo = () => {
  return (
    <>
      <img src={avatar} alt="profile-avatar" className="avatar"/>
      <h1 className="name">{info.name}</h1>
      <p className="bio">{info.bio}</p>
      <p className="tagline">{info.tagline}</p>
    </>
  );
};

export default ProfileInfo;
