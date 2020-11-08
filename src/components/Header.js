import logo from '../images/logo.svg';

function Header() {
  return (
    <div className="header root__section">
      <img src={ logo } alt="mesto logo" className="logo"/>
    </div>
  )
}

export default Header;
