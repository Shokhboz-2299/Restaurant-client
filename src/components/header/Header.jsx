import './Header.scss'
import { Link } from 'react-router-dom';

function Header() {
  return (
  <div className="header">
    <div className='container'>
      <div className="header-wrapper">
        <div className='logo'>
          <Link to={"/"} className='logo'>Best<span>Restaurant</span></Link>
        </div>
        <nav className='header-nav'>
          <ul className='menu'>
            <li><Link to="/" className ='item-link'>Home</Link></li>
            <li><Link to="/admin" className ='item-link'>Admin</Link></li>
            <li><button>+998 99 086 64 22</button></li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
);
}

export default Header;