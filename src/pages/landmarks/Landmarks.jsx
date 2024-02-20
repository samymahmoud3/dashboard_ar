import LandmarkSteps from '../../components/landmarkStepper/landmarkSteps/LandmarkSteps';
import { landmarksRows, landmarksStats } from '../../data';
import TableData from '../../components/tableData/TableData';
import Stats from '../../components/stats/Stats';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './landmarks.scss';

const Landmarks = () => {
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
      id: "place",
      label: "اسم المكان",
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

  function createBookingData(id, name, phone, place, category, payment, status) {
    return { id, name, phone, place, category, payment, status };
  }
  const rows = landmarksRows.map((item) => (
    createBookingData(
      item.id,
      <div style={{cursor:"pointer"}} onClick={ () => setOpenStepper(true) }>{ item.name }</div>,
      <p style={ { direction: "ltr" } }>{ item.phone }</p>,
      item.place,
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
    <div className='landmarks'>
      <div className='nav-header'>المزارات</div>
      <div className='content'>
        <div className='header'>
          <Stats data={ landmarksStats } />
          <div className='available-packages'>
            <div className='title'>
              <img src='users-stats.svg' alt='users' />
              <span>المزارات المتاحة</span>
            </div>
            <Link className='button' to="/landmarks-control">رؤية المزارات</Link>
          </div>
        </div>
        <div className='table' >
          <div className='head'>
            <div className='title'>حجوزات المزارات</div>
          </div>
          <TableData columns={ columns } rows={ rows } numbers={ 8 } />
        </div>
        { openStepper &&
          <LandmarkSteps setOpenStepper={ setOpenStepper } />
        }
      </div>
    </div>
  )
};

export default Landmarks;