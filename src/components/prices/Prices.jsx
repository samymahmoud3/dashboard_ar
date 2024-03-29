import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { useState } from 'react';
import './prices.scss';
import { pricesRows } from '../../data';

const Prices = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(7);
  const [open, setOpen] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);

  const columns = [
    {
      id: "id",
      label: "م",
      minWidth: 55,
      align: 'center',
    },
    {
      id: "trip",
      label: "الرحله",
      minWidth: 200,
      align: 'center',
    },
    {
      id: "car1",
      label: "سيارة سيدان سوناتا/كامرى",
      minWidth: 89,
      align: 'center',
    },
    {
      id: "car2",
      label: "سيارات عائلية جمس بوكن XL",
      minWidth: 89,
      align: 'center',
    },
    {
      id: "car3",
      label: "سيارات عائلية(فئة اتش وان)",
      minWidth: 89,
      align: 'center',
    },
    {
      id: "car4",
      label: "باصات",
      minWidth: 89,
      align: 'center',
    },
    {
      id: "car5",
      label: "سيارات VIP لكزس ES",
      minWidth: 89,
      align: 'center',
    },
    {
      id: "car6",
      label: "السيارات الفارهة(مرسيدس. بى ام)",
      minWidth: 89,
      align: 'center',
    },
    {
      id: "edit",
      label: "تعديل",
      minWidth: 55,
      align: 'center',
    },
  ];

  function createBookingData(id, trip, car1, car2, car3, car4, car5, car6, edit) {
    return { id, trip, car1, car2, car3, car4, car5, car6, edit };
  }
  const rows = pricesRows.map((item) => (
    createBookingData(
      item.id,
      <div>
        { item.trip }<p style={ { fontSize: "10px", color: "#9094A0" } }>{ item.note }</p>
      </div>,
      item.car1,
      item.car2,
      item.car3,
      item.car4,
      item.car5,
      item.car6,
      <img src="edit.svg" alt="edit" style={{cursor:"pointer"}} onClick={ () => setOpenEdit(true) } />
    )
  ));

  const handleChangePage = (newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div className='prices'>
      <Paper sx={ { width: '100%', overflow: 'hidden', marginTop: "16px", borderRadius: "10px" } }>
        <TableContainer >
          <Table stickyHeader aria-label="sticky table">
            <TableHead style={ { backgroundColor: "#BBA664" } }>
              <TableRow>
                { columns.map((column) => (
                  <TableCell
                    key={ column.id }
                    align={ column.align }
                    style={ { minWidth: column.minWidth, border: "none", fontSize: "11px", fontWeight: "500", lineHeight: "20px", backgroundColor: "#BBA664", color: "#fff" } }
                  >
                    { column.label }
                  </TableCell>
                )) }
              </TableRow>
            </TableHead>
            <TableBody>
              { rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={ -1 } key={ row.id }>
                      { columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell
                            style={ { border: "none", fontSize: "14px", lineHeight: "16px" } }
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
          count={ rows.length }
          rowsPerPage={ rowsPerPage }
          page={ page }
          onPageChange={ handleChangePage }
          onRowsPerPageChange={ handleChangeRowsPerPage }
        />
      </Paper>
      {/* add */ }
      <div className='addNew-btn'>
        <div className='btn' onClick={() => setOpen(true)}>اضافة رحلة جديدة </div>
        { open &&
        <div className="modal">
          <h1>اضافة رحلة جديدة</h1>
          <span className="close" onClick={ () => setOpen(false) }>
            <img src="close.svg" alt="close" />
          </span>
          <form className="form-popup">
            <div className='filter-inputs'>
              <div className='input-container'>
                <label>مسار الرحله</label>
                <input type='text' placeholder='ادخل مسار الرحله  ' required />
              </div>
              <div className='input-container'>
                <label>سيارة سيدان
                  سوناتا/كامرى</label>
                <input type='number' placeholder='ادخل المبلغ ' required />
              </div>
              <div className='input-container'>
                <label>سيارات عائلية
                  جمس بوكن XL</label>
                <input type='number' placeholder='ادخل المبلغ' required />
              </div>
              <div className='input-container'>
                <label>سيارات عائلية
                  (فئة اتش وان)</label>
                <input type='number' placeholder='ادخل المبلغ' required />
              </div>
              <div className='input-container'>
                <label>باصات</label>
                <input type='number' placeholder='ادخل المبلغ' required />
              </div>
              <div className='input-container'>
                <label>سيارات VIP
                  لكزس ES</label>
                <input type='number' placeholder='ادخل المبلغ' required />
              </div>
              <div className='input-container'>
                <label>السيارات الفارهة
                  (مرسيدس. بى ام)</label>
                <input type='number' placeholder='ادخل المبلغ' required />
              </div>
            </div>
            <button>اضافة</button>
          </form>
        </div>
      }
      { openEdit &&
        <div className="modal">
          <h1>تعديل</h1>
          <span className="close" onClick={ () => setOpenEdit(false) }>
            <img src="close.svg" alt="close" />
          </span>
          <form className="form-popup">
            <div className='filter-inputs'>
              <div className='input-container'>
                <label>مسار الرحله</label>
                <input type='text' placeholder='ادخل مسار الرحله ' required />
              </div>
              <div className='input-container'>
                <label>سيارة سيدان
                  سوناتا/كامرى</label>
                <input type='number' placeholder='ادخل المبلغ ' required />
              </div>
              <div className='input-container'>
                <label>سيارات عائلية
                  جمس بوكن XL</label>
                <input type='number' placeholder='ادخل المبلغ' required />
              </div>
              <div className='input-container'>
                <label>سيارات عائلية
                  (فئة اتش وان)</label>
                <input type='number' placeholder='ادخل المبلغ' required />
              </div>
              <div className='input-container'>
                <label>باصات</label>
                <input type='number' placeholder='ادخل المبلغ' required />
              </div>
              <div className='input-container'>
                <label>سيارات VIP
                  لكزس ES</label>
                <input type='number' placeholder='ادخل المبلغ' required />
              </div>
              <div className='input-container'>
                <label>السيارات الفارهة
                  (مرسيدس. بى ام)</label>
                <input type='number' placeholder='ادخل المبلغ' required />
              </div>
            </div>
            <button>تعديل</button>
          </form>
        </div>
      }
      </div>
    </div>
  )
};

export default Prices;