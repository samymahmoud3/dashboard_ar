import { bookingStats, usersRows, usersStats } from '../../data';
import TableData from '../../components/tableData/TableData';
import Stats from '../../components/stats/Stats';
import './users.scss';

const Users = () => {

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
      id: "bookingNumbers",
      label: "عدد مرات الحجز",
      minWidth: 178,
      align: 'center',
    },
    {
      id: "cancelledNumbers",
      label: "عدد مرات الغاء الحجز",
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

  function createBookingData(id, name, email, phone, bookingNumbers, cancelledNumbers, remove) {
    return { id, name, email, phone, bookingNumbers, cancelledNumbers, remove };
  }
  const rows = usersRows.map((item) => (
    createBookingData(
      item.id,
      item.name,
      item.email,
      <p style={{direction:"ltr"}}>{ item.phone }</p>,
      item.bookingNumbers,
      item.cancelledNumbers,
      <img style={{cursor:"pointer"}} src={ item.delete } alt='status'/>
    )
  ));

  return (
    <div className='users'>
      <div className='nav-header'>المستخدمين</div>
      <div className='content'>
        <div className='header'>
          <Stats data={usersStats} />
          <Stats data={bookingStats} />
        </div>
        <div className='table' >
          <div className='head'>
            <div className='title'>المستخدمين</div>
          </div>
          <TableData columns={ columns } rows={ rows } numbers={ 8 } />
        </div>
      </div>
    </div>
  )
};

export default Users;