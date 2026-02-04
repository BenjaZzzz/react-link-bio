const SocialLink = ({ icon, label, url }) => {
  return (
    <a href={url}>
      <i className={icon}></i>
      {label}
    </a>
  );
};

export default SocialLink;
