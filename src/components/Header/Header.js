import "./Header.css";

const Header = () => {
  return (
    <span onClick={() => window.scroll(0, 0)} className="header">
      🎬 Movie & TV series DB🎥
    </span>
  );
};

export default Header;
