import "./NavBar.css";
import logIcon from "../../assets/icons/user.png";

function NavBar() {
  return (
    <div className="navbar">
      <h1 className="nav-header">Shutoku Maps</h1>
      <img src={logIcon} alt="" className="login-icon" />
    </div>
  );
}

export default NavBar;
