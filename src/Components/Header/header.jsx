import "./header.css";
import picss from "../../assets/ww.jpeg";
const Header = () => {
  return (
    <div className="Header">
      <h1>Dashboard</h1>
      <div className="admin">
        <p style={{ fontSize: 17 }}>Mustafa Ahmed Abdulrazaq</p>

        <img src={picss} />
      </div>
    </div>
  );
};

export default Header;
