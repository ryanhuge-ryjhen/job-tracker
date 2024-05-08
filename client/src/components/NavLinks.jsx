import { NavLink } from "react-router-dom";
// import { useDashboardContext } from "../pages/DashboardLayout";
import links from "../utils/links";

const NavLinks = (isBigSidebar) => {
  //   const { user } = useDashboardContext();
  return (
    <div className="nav-links">
      {links.map((link) => {
        const { text, path, icon } = link;
        return (
          <NavLink
            to={path}
            key={text}
            className="nav-link"
            onClick={isBigSidebar}
            end
          >
            <span className="icon">{icon}</span>
            {text}
          </NavLink>
        );
      })}
    </div>
  );
};
export default NavLinks;
