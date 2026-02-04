import SocialLink from "./SocialLink";
import links from "../data/links";

const LinksList = () => {
  return (
    <div className="links">
      {links.map((link) => (
        <SocialLink
          key={link.id}
          icon={link.icon}
          label={link.title}
          url={link.url}
        />
      ))}
    </div>
  );
};

export default LinksList;
