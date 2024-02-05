import { Link, NavLink } from 'react-router-dom';
import { menu } from '../../data';
import './sideNavbar.scss';

const SideNavbar = () => {
  return (
    <div className='sideNavbar'>
      <div className='logo'>اللوجو</div>
      <div className='menu'>
        {
          menu.map((item) => (
            <NavLink to={ item.url }
              className={ `item ${({ isActive }) =>
                isActive ? "active" : ""}` }
              key={ item.id }
            >
              { ({ isActive }) => (
                <>
                  <img src={ isActive ? item.lightIcon : item.icon } alt={ item.title } />
                  <span className='itemTitle'>{ item.title }</span>
                </>
              ) }
            </NavLink>
          ))
        }
      </div>
      <Link to='/' className='logout'>
        <img src='logout.svg' alt='logout' />
        <span className='title'>تسجيل الخروج</span>
      </Link>
    </div>
  )
};

export default SideNavbar;