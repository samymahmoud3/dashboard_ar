import DriverSteps from '../../components/driverStepper/driverSteps/DriverSteps';
import { driversRows, driversStats, waitListRows } from '../../data';
import TableData from '../../components/tableData/TableData';
import Stats from '../../components/stats/Stats';
import { useState } from 'react';
import './drivers.scss';

const Drivers = () => {
  const [open, setOpen] = useState(false);
  const [openStepper, setOpenStepper] = useState(false);

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
      id: "email",
      label: "البريد الالكترونى",
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
      id: "carType",
      label: "نوع السياره",
      minWidth: 178,
      align: 'center',
    },
    {
      id: "remove",
      label: "حذف",
      minWidth: 128,
      align: 'center',
    },
  ];

  function createBookingData(id, name, email, phone, carType, remove) {
    return { id, name, email, phone, carType, remove };
  }
  const rows = driversRows.map((item) => (
    createBookingData(
      item.id,
      item.name,
      item.email,
      <p style={ { direction: "ltr" } }>{ item.phone }</p>,
      item.carType,
      <img style={ { cursor: "pointer" } } src={ item.delete } alt='status' />
    )
  ));

  // wait list 
  const listColumns = [
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
      id: "email",
      label: "البريد الالكترونى",
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
      id: "carType",
      label: "نوع السياره",
      minWidth: 178,
      align: 'center',
    },
    {
      id: "status",
      label: "الحالة",
      minWidth: 128,
      align: 'center',
    },
  ];

  function createBookingData2(id, name, email, phone, carType, status) {
    return { id, name, email, phone, carType, status };
  }
  const listRows = waitListRows.map((item) => (
    createBookingData2(
      item.id,
      item.name,
      item.email,
      <p style={ { direction: "ltr" } }>{ item.phone }</p>,
      item.carType,
      item.status.map((item) => (
        <div key={ item.id }>
          <img style={ { cursor: "pointer" } } src={ item.true } alt='true' onClick={ () => setOpenStepper(true) } />
          <img style={ { cursor: "pointer" } } src={ item.false } alt='false' />
        </div>
      ))
    )
  ));


  return (
    <div className='drivers'>
      <div className='nav-header'>كن شريكا</div>
      {
        !open ?
          <div className='content'>
            <div className='header'>
              <Stats data={ driversStats } />
              <div className='wait-list'>
                <div className='title'>
                  <img src='users-stats.svg' alt='users' />
                  <span>قائمة الانتظار</span>
                </div>
                <button onClick={ () => setOpen(true) }>تفحص القائمة</button>
              </div>
            </div>
            <div className='table' >
              <div className='head'>
                <div className='title'>السائقين</div>
              </div>
              <TableData columns={ columns } rows={ rows } numbers={ 8 } />
            </div>
          </div>
          :
          <div className='content'>
            <div className='table' >
              <div className='head'>
                <div className='title'>قائمة الانتظار</div>
              </div>
              <TableData columns={ listColumns } rows={ listRows } numbers={ 10 } />
            </div>
            { openStepper &&
              <DriverSteps setOpenStepper={ setOpenStepper } />
            }
          </div>
      }
      
    </div>
  )
};

export default Drivers;