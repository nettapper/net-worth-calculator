import "./styles.css";

function Header({ text }) {
  return (
    <header className="header">
      <h1 className="header-title">{text}</h1>
    </header>
  );
};

export default Header;
