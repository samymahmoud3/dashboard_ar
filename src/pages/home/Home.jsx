import { bookingRows, homeNumbers, profitsRows } from '../../data';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import './home.scss';
import { useState } from 'react';

const Home = () => {
  const [open, setOpen] = useState(false);

  const profitsColumns = [
    {
      id: "id",
      label: "ID",
      minWidth: 60,
      align: 'center',
    },
    {
      id: "name",
      label: "الاسم",
      minWidth: 200,
      align: 'center',
    },
    {
      id: "phone",
      label: "رقم الهاتف",
      minWidth: 200,
      align: 'center',
    },
    {
      id: "bookingDate",
      label: "تاريخ الحجز",
      minWidth: 178,
      align: 'center',
    },
    {
      id: "revenues",
      label: "ايرادات",
      minWidth: 128,
      align: 'center',
    },
    {
      id: "expenses",
      label: "المصروفات",
      minWidth: 128,
      align: 'center',
    },
    {
      id: "profits",
      label: "الارباح",
      minWidth: 128,
      align: 'center',
    },
  ];

  const bookingColumns = [
    {
      id: "id",
      label: "ID",
      minWidth: 60,
      align: 'center',
    },
    {
      id: "name",
      label: "الاسم",
      minWidth: 200,
      align: 'center',
    },
    {
      id: "phone",
      label: "رقم الهاتف",
      minWidth: 200,
      align: 'center',
    },
    {
      id: "trip",
      label: "الرحلة",
      minWidth: 178,
      align: 'center',
    },
    {
      id: "bookingDate",
      label: "تاريخ الحجز",
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

  function createData(id, name, phone, bookingDate, revenues, expenses, profits) {
    return { id, name, phone, bookingDate, revenues, expenses, profits };
  }
  const profitsData = profitsRows.map((item) => (
    createData(item.id, item.name, item.phone, item.bookingDate, item.revenues, item.expenses, item.profits)
  ));

  function createBookingData(id, name, phone, trip, bookingDate, payment, status) {
    return { id, name, phone, trip, bookingDate, payment, status };
  }
  const bookingData = bookingRows.map((item) => (
    createBookingData(
      item.id,
      item.name,
      item.phone,
      item.trip,
      item.bookingDate,
      item.payment,
      <img src={ item.status } alt='status' />
    )
  ));
  
  const [page1, setPage1] = useState(0);
  const [rowsPerPage1, setRowsPerPage1] = useState(4);
  const [page2, setPage2] = useState(0);
  const [rowsPerPage2, setRowsPerPage2] = useState(4);

  const handleChangePage1 = (event, newPage) => {
    setPage1(newPage);
  };

  const handleChangeRowsPerPage1 = (event) => {
    setRowsPerPage1(+event.target.value);
    setPage1(0);
  };

  const handleChangePage2 = (event, newPage) => {
    setPage2(newPage);
  };

  const handleChangeRowsPerPage2 = (event) => {
    setRowsPerPage2(+event.target.value);
    setPage2(0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  // filter inputs
  const [activeType, setActiveType] = useState(false);
  const [selectType, setSelectType] = useState("احجز الان");
  const bookingTypes = ["احجز الان", "احجز", "احجز الان", "احجز الان"];

  const [activeMethod, setActiveMethod] = useState(false);
  const [selectMethod, setSelectMethod] = useState("ذهاب فقط");
  const methodTypes = ["ذهاب فقط", "ذهاب", "احجز الان", "احجز الان"];

  const [activePlace, setActivePlace] = useState(false);
  const [selectPlace, setSelectPlace] = useState("مكة");
  const Places = ["مكة", "المدينة", "احجز الان", "احجز الان"];

  const [activePlaceTo, setActivePlaceTo] = useState(false);
  const [selectPlaceTo, setSelectPlaceTo] = useState("المدينة");

  const [activeDate, setActiveDate] = useState(false);
  const [selectDate, setSelectDate] = useState("هذا الشهر");
  const dates = ["هذا الشهر", "اليوم", "احجز الان", "احجز الان"];

  const [activeStatus, setActiveStatus] = useState(false);
  const [selectStatus, setSelectStatus] = useState("قائمة الانتظار");
  const status = ["قائمة الانتظار", "مكتملة", "احجز الان", "احجز الان"];

  const [activePayment, setActivePayment] = useState(false);
  const [selectPayment, setSelectPayment] = useState("الكل");
  const payments = ["الكل", "نقدى", "احجز الان", "احجز الان"];
  // end


  return (
    <div className='home'>
      <div className='nav-header'>الرئيسية</div>
      <div className='home-content'>
        <div className='home-numbers'>
          {
            homeNumbers.map((item) => (
              <div className='item' key={ item.id }>
                <div className='img'>
                  <img src={ item.img } alt={ item.title } />
                </div>
                <h2 className='title'>{ item.number }<span>{ item.title }</span></h2>
              </div>
            ))
          }
        </div>

        {/* tables */ }
        <div className='profitsTable'>
          <div className='head'>
            <div className='title'>الارباح</div>
            <div className='actions'>
              <div className='download'>تحميل<img src='download.svg' alt='download' /></div>
              <div className='filter' onClick={ () => setOpen(true) }><img src='filter.svg' alt='filter' /></div>
              { open &&
                <div className="modal">
                  <h1>تصفية</h1>
                  <span className="close" onClick={ () => setOpen(false) }>X</span>
                  <form onSubmit={ handleSubmit }>
                    {/* inputs */ }
                    <div className='filter-inputs'>
                      <div className="input">
                        <label onClick={ (e) => { setActiveType(!activeType); e.preventDefault(); } }>نوع الحجز</label>
                        <div className="step-dropdown">
                          <div className="dropdown-btn" onClick={ (e) => { setActiveType(!activeType); e.preventDefault(); } }>
                            <span>{ selectType }</span>
                            <img src="/arrow-down.svg" alt="arrow down" />
                          </div>
                          {
                            activeType &&
                            <div className="dropdown-content">
                              {
                                bookingTypes.map((item, index) => (
                                  <div className="dropdown-item"
                                    key={ index }
                                    onClick={ (e) => {
                                      setSelectType(item);
                                      setActiveType(false);
                                      e.preventDefault();
                                    } }
                                  >
                                    { item }
                                  </div>
                                ))
                              }
                            </div>
                          }
                        </div>
                      </div>
                      <div className="input">
                        <label onClick={ (e) => { setActiveMethod(!activeMethod); e.preventDefault(); } }>طريقة الذهاب</label>
                        <div className="step-dropdown">
                          <div className="dropdown-btn" onClick={ (e) => { setActiveMethod(!activeMethod); e.preventDefault(); } }>
                            <span>{ selectMethod }</span>
                            <img src="/arrow-down.svg" alt="arrow down" />
                          </div>
                          {
                            activeMethod &&
                            <div className="dropdown-content">
                              {
                                methodTypes.map((item, index) => (
                                  <div className="dropdown-item"
                                    key={ index }
                                    onClick={ (e) => {
                                      setSelectMethod(item);
                                      setActiveMethod(false);
                                      e.preventDefault();
                                    } }
                                  >
                                    { item }
                                  </div>
                                ))
                              }
                            </div>
                          }
                        </div>
                      </div>
                      <div className="input">
                        <label onClick={ (e) => { setActivePlace(!activePlace); e.preventDefault(); } }>من</label>
                        <div className="step-dropdown">
                          <div className="dropdown-btn" onClick={ (e) => { setActivePlace(!activePlace); e.preventDefault(); } }>
                            <span>{ selectPlace }</span>
                            <img src="/arrow-down.svg" alt="arrow down" />
                          </div>
                          {
                            activePlace &&
                            <div className="dropdown-content">
                              {
                                Places.map((item, index) => (
                                  <div className="dropdown-item"
                                    key={ index }
                                    onClick={ (e) => {
                                      setSelectPlace(item);
                                      setActivePlace(false);
                                      e.preventDefault();
                                    } }
                                  >
                                    { item }
                                  </div>
                                ))
                              }
                            </div>
                          }
                        </div>
                      </div>
                      <div className="input">
                        <label onClick={ (e) => { setActivePlaceTo(!activePlaceTo); e.preventDefault(); } }>الى</label>
                        <div className="step-dropdown">
                          <div className="dropdown-btn" onClick={ (e) => { setActivePlaceTo(!activePlaceTo); e.preventDefault(); } }>
                            <span>{ selectPlaceTo }</span>
                            <img src="/arrow-down.svg" alt="arrow down" />
                          </div>
                          {
                            activePlaceTo &&
                            <div className="dropdown-content">
                              {
                                Places.map((item, index) => (
                                  <div className="dropdown-item"
                                    key={ index }
                                    onClick={ (e) => {
                                      setSelectPlaceTo(item);
                                      setActivePlaceTo(false);
                                      e.preventDefault();
                                    } }
                                  >
                                    { item }
                                  </div>
                                ))
                              }
                            </div>
                          }
                        </div>
                      </div>
                      <div className="input">
                        <label onClick={ (e) => { setActiveDate(!activeDate); e.preventDefault(); } }>تاريخ الحجز</label>
                        <div className="step-dropdown">
                          <div className="dropdown-btn" onClick={ (e) => { setActiveDate(!activeDate); e.preventDefault(); } }>
                            <span>{ selectDate }</span>
                            <img src="/arrow-down.svg" alt="arrow down" />
                          </div>
                          {
                            activeDate &&
                            <div className="dropdown-content">
                              {
                                dates.map((item, index) => (
                                  <div className="dropdown-item"
                                    key={ index }
                                    onClick={ (e) => {
                                      setSelectDate(item);
                                      setActiveDate(false);
                                      e.preventDefault();
                                    } }
                                  >
                                    { item }
                                  </div>
                                ))
                              }
                            </div>
                          }
                        </div>
                      </div>
                      <div className="input">
                        <label onClick={ (e) => { setActiveStatus(!activeStatus); e.preventDefault(); } }>حالة الحجز</label>
                        <div className="step-dropdown">
                          <div className="dropdown-btn" onClick={ (e) => { setActiveStatus(!activeStatus); e.preventDefault(); } }>
                            <span>{ selectStatus }</span>
                            <img src="/arrow-down.svg" alt="arrow down" />
                          </div>
                          {
                            activeStatus &&
                            <div className="dropdown-content">
                              {
                                status.map((item, index) => (
                                  <div className="dropdown-item"
                                    key={ index }
                                    onClick={ (e) => {
                                      setSelectStatus(item);
                                      setActiveStatus(false);
                                      e.preventDefault();
                                    } }
                                  >
                                    { item }
                                  </div>
                                ))
                              }
                            </div>
                          }
                        </div>
                      </div>
                      <div className="input">
                        <label onClick={ (e) => { setActivePayment(!activePayment); e.preventDefault(); } }>وسيلة الدفع</label>
                        <div className="step-dropdown">
                          <div className="dropdown-btn" onClick={ (e) => { setActivePayment(!activePayment); e.preventDefault(); } }>
                            <span>{ selectPayment }</span>
                            <img src="/arrow-down.svg" alt="arrow down" />
                          </div>
                          {
                            activePayment &&
                            <div className="dropdown-content">
                              {
                                payments.map((item, index) => (
                                  <div className="dropdown-item"
                                    key={ index }
                                    onClick={ (e) => {
                                      setSelectPayment(item);
                                      setActivePayment(false);
                                      e.preventDefault();
                                    } }
                                  >
                                    { item }
                                  </div>
                                ))
                              }
                            </div>
                          }
                        </div>
                      </div>
                    </div>
                    <button>تصفية</button>
                  </form>
                </div>
              }
            </div>
          </div>
          <Paper sx={ { width: '100%', overflow: 'hidden', marginTop: "16px", borderRadius: "10px" } }>
            <TableContainer sx={ { maxHeight: 440 } }>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow style={ { boxShadow: "1px 1px 9px #F4F6F9" } }>
                    { profitsColumns.map((column) => (
                      <TableCell
                        key={ column.id }
                        align={ column.align }
                        style={ { minWidth: column.minWidth, border: "none", fontSize: "16px", fontWeight: "500", lineHeight: "16px" } }
                      >
                        { column.label }
                      </TableCell>
                    )) }
                  </TableRow>
                </TableHead>
                <TableBody>
                  { profitsData
                    .slice(page1 * rowsPerPage1, page1 * rowsPerPage1 + rowsPerPage1)
                    .map((row) => {
                      return (
                        <TableRow hover role="checkbox" tabIndex={ -1 } key={ row.id }>
                          { profitsColumns.map((column) => {
                            const value = row[column.id];
                            return (
                              <TableCell
                                style={ { border: "none", fontSize: "16px", lineHeight: "16px" } }
                                key={ column.id }
                                align={ column.align }>
                                { column.format && typeof value === 'number'
                                  ? column.format(value)
                                  : value }
                              </TableCell>
                            );
                          }) }
                        </TableRow>
                      );
                    }) }
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              style={ { backgroundColor: "#F4F6F9" } }
              rowsPerPageOptions={ [0] }
              component="div"
              count={ profitsData.length }
              rowsPerPage={ rowsPerPage1 }
              page={ page1 }
              onPageChange={ handleChangePage1 }
              onRowsPerPageChange={ handleChangeRowsPerPage1 }
            />
          </Paper>
        </div>

        <div className='bookingTable'>
          <div className='title'>اخر الحجوزات</div>
          <Paper sx={ { width: '100%', overflow: 'hidden', marginTop: "16px", borderRadius: "10px" } }>
            <TableContainer sx={ { maxHeight: 440 } }>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow style={ { boxShadow: "1px 1px 9px #F4F6F9" } }>
                    { bookingColumns.map((column) => (
                      <TableCell
                        key={ column.id }
                        align={ column.align }
                        style={ { minWidth: column.minWidth, border: "none", fontSize: "16px", fontWeight: "500", lineHeight: "16px" } }
                      >
                        { column.label }
                      </TableCell>
                    )) }
                  </TableRow>
                </TableHead>
                <TableBody>
                  { bookingData
                    .slice(page2 * rowsPerPage2, page2 * rowsPerPage2 + rowsPerPage2)
                    .map((row) => {
                      return (
                        <TableRow hover role="checkbox" tabIndex={ -1 } key={ row.id }>
                          { bookingColumns.map((column) => {
                            const value = row[column.id];
                            return (
                              <TableCell
                                style={ { border: "none", fontSize: "16px", lineHeight: "16px" } }
                                key={ column.id }
                                align={ column.align }>
                                { column.format && typeof value === 'number'
                                  ? column.format(value)
                                  : value }
                              </TableCell>
                            );
                          }) }
                        </TableRow>
                      );
                    }) }
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              style={ { backgroundColor: "#F4F6F9" } }
              rowsPerPageOptions={ [0] }
              component="div"
              count={ bookingData.length }
              rowsPerPage={ rowsPerPage2 }
              page={ page2 }
              onPageChange={ handleChangePage2 }
              onRowsPerPageChange={ handleChangeRowsPerPage2 }
            />
          </Paper>
        </div>
      </div>
    </div>
  )
};

export default Home;