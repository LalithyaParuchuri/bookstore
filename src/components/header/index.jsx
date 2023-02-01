import { Link } from "react-router-dom";
import { routes } from "../../router";
import "./style.css";

export const Header = () => {
  return (
    <div className="header">
      <div className="logo">Book Store</div>

      <div className="nav">
        {routes.map((route) => {
          return (
            <div key={route.name} className="route">
              <Link to={route.path}>{route.name}</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};
