import { Link } from 'react-router-dom';
import { menu } from '../../data';
import './sideNavbar.scss';
import { useState } from 'react';

const SideNavbar = () => {
  const [active, setActive] = useState(0)
  return (
    <div className='sideNavbar'>
      <div className='logo'>اللوجو</div>
      <div className='menu'>
        {
          menu.map((item,index) => (
            <Link to={ item.url }
              className={`item ${active === index && "active"}`}
              key={ item.id }
              onClick={ () => setActive(index) }
            >
              { active === index ?
                <img src={ item.lightIcon } alt={ item.title } /> :
                <img src={ item.icon } alt={ item.title } /> 
              }
              <span className='itemTitle'>{ item.title }</span>
            </Link>
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