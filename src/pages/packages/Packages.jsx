import PackageSteps from '../../components/packageStepper/packageSteps/PackageSteps';
import { packagesRows, packagesStats } from '../../data';
import TableData from '../../components/tableData/TableData';
import Stats from '../../components/stats/Stats';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './packages.scss';

const Packages = () => {
  const [openStepper, setOpenStepper] = useState(false);
  const [active, setActive] = useState();
  const statusOptions= ["In-Progress", "Completed", "Cancelled" ]

  const columns = [
    {
      id: "id",
      label: "ID",
      minWidth: 60,
      align: 'center',
    },
    {
      id: "name",
      label: "الاسم بالكامل",
      minWidth: 200,
      align: 'center',
    },
    {
      id: "phone",
      label: "رقم الواتساب",
      minWidth: 200,
      align: 'center',
    },
    {
      id: "category",
      label: "الفئه",
      minWidth: 178,
      align: 'center',
    },
    {
      id: "payment",
      label: "وسيله الدفع",
      minWidth: 128,
      align: 'center',
    },
    {
      id: "status",
      label: "حاله الحجز",
      minWidth: 128,
      align: 'center',
    },
  ];

  function createBookingData(id, name, phone, category, payment, status) {
    return { id, name, phone, category, payment, status };
  }
  const rows = packagesRows.map((item) => (
    createBookingData(
      item.id,
      <div style={{cursor:"pointer"}} onClick={ () => setOpenStepper(true) }>{ item.name }</div>,
      <p style={ { direction: "ltr" } }>{ item.phone }</p>,
      item.category,
      item.payment,
      <div className="dropdown-status" onMouseLeave={ () => setActive(!item.id) } >
        <div className="dropdown">
          <div
            className={ `dropdown-btn ${item.status.toLowerCase() === 'cancelled' ? "cancel" : item.status.toLowerCase() === "completed" ? "completed" : ''}` }
            onClick={ () => { setActive(item.id) } }
          >
            <p>{ item.status }</p>
            <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 6.5L8 10.5L4 6.5" stroke="#BEC0CA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          {
            active === item.id &&
            <div className="dropdown-content">
              {
                statusOptions.map((option, index) => (
                  <div className="dropdown-item"
                    key={ index }
                    onClick={ () => {
                      setActive(!item.id);
                    } }
                  >
                    { option }
                  </div>
                ))
              }
            </div>
          }
        </div>
      </div>
    )
  ));

  return (
    <div className='packages'>
      <div className='nav-header'>الباقات</div>
      <div className='content'>
        <div className='header'>
          <Stats data={ packagesStats } />
          <div className='available-packages'>
            <div className='title'>
              <img src='users-stats.svg' alt='users' />
              <span>الباقات المتاحة</span>
            </div>
            <Link className='button' to="/packages-control">رؤية الباقات</Link>
          </div>
        </div>
        <div className='table' >
          <div className='head'>
            <div className='title'>حجوزات الباقات</div>
          </div>
          <TableData columns={ columns } rows={ rows } numbers={ 8 } />
        </div>
        { openStepper &&
          <PackageSteps setOpenStepper={ setOpenStepper } />
        }
      </div>
    </div>
  )
};

export default Packages;