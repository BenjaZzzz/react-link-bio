import SocialLink from "./SocialLink";
import links from "../data/links";

const LinksList = () => {
  return (
    <div className="links">
      {links.map((link) => link.internal ? (
        <SocialLink key={link.id} to={link.url}>
          <i className={link.icon}></i>{link.title}
        </SocialLink>
      ) :
      
      (
        <a key={link.id} href={link.url}>
          <i className={link.icon}></i>{link.title}
        </a>
      )
      )}
    </div>
  );
};

export default LinksList;
