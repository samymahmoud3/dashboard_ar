import { useRef, useState } from 'react';
import { blogsRows, blogsStats, } from '../../data';
import TableData from '../../components/tableData/TableData';
import Stats from '../../components/stats/Stats';
import './blogs.scss';

const Blogs = () => {
  const [open, setOpen] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [openAdd, setOpenAdd] = useState(false);

  const columns = [
    {
      id: "id",
      label: "ID",
      minWidth: 60,
      align: 'center',
    },
    {
      id: "name",
      label: "اسم المدونة",
      minWidth: 200,
      align: 'center',
    },
    {
      id: "city",
      label: "المدينة",
      minWidth: 200,
      align: 'center',
    },
    {
      id: "date",
      label: "تاريخ الاضافة",
      minWidth: 178,
      align: 'center',
    },
    {
      id: "counts",
      label: "الزيارات",
      minWidth: 178,
      align: 'center',
    },
    {
      id: "actions",
      label: "تعديل/ حذف",
      minWidth: 128,
      align: 'center',
    }
  ];

  function createBookingData(id, name, city, date, counts, actions) {
    return { id, name, city, date, counts, actions };
  }
  const rows = blogsRows.map((item) => (
    createBookingData(
      item.id,
      item.name,
      item.city,
      item.date,
      item.counts,
      item.actions.map((item, index) => (
        <div key={ index }>
          <img src={ item.edit } alt='edit' style={ { cursor: "pointer" } } onClick={ () => setOpenEdit(true) } />
          <img src={ item.delete } alt='delete' style={ { cursor: "pointer", marginRight: "15px" } } />
        </div>
      ))
    )
  ));

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  // filter inputs
  const [activeMonth, setActiveMonth] = useState(false);
  const [selectMonth, setSelectMonth] = useState("الكل");
  const months = ["الكل", "مارس"];

  const [activePlace, setActivePlace] = useState(false);
  const [selectPlace, setSelectPlace] = useState("المدينة المنورة");
  const Places = ["مكة", "المدينة", " الرياض"];
  // end

  // handle upload files
  const fileInputRef = useRef(null);
  const handleFileInput = () => {
    fileInputRef.current.click();
  }


  return (
    <div className='blogs'>
      <div className='nav-header'>مدونتنا</div>
      <div className='content'>
        <div className='header'>
          <Stats data={ blogsStats } />
          <div className='add-blog'>
            <div className='title'>
              <img src='users-stats.svg' alt='users' />
              <span>اضافة مدونة جديدة</span>
            </div>
            <button onClick={ () => setOpenAdd(true) }>اضافة مدونة</button>
            {
              openAdd &&
              <div className='add-form form'>
                <div className='head'>
                  <span>اضافة مدونة</span>
                  <img src='close.svg' alt='close' onClick={ () => setOpenAdd(false) } />
                </div>
                <div className='img'>
                  <div className='upload_file' onClick={ handleFileInput }>
                    <input ref={ fileInputRef } type='file' style={ { display: "none" } } />
                    <img src='/upload.svg' alt='upload file' />
                    <h2>Upload Files</h2>
                    <p>PNG, JPG and GIF files are allowed</p>
                  </div>
                </div>
                <form className='info'>
                  <div className='name'>
                    <label>اسم المدونة</label>
                    <input type='text' placeholder='ادخل اسم المدونة' />
                  </div>
                  <div className='description'>
                    <label>الوصف</label>
                    <textarea rows={ 7 } placeholder='ادخل وصف المدونة' />
                  </div>
                  <button className='add-btn'>اضافة</button>
                </form>
              </div>
            }
            {
              openEdit &&
              <div className='edit-form form'>
                <div className='head'>
                  <span>تعديل مدونة</span>
                  <img src='close.svg' alt='close' onClick={ () => setOpenEdit(false) } />
                </div>
                <div className='img'>
                  <img src='edit-blog_img.jpg' alt='edit blog img' />
                </div>
                <form className='info'>
                  <div className='name'>
                    <label>المدينة</label>
                    <input type='text' placeholder='ادخل اسم المدينة' />
                  </div>
                  <div className='name'>
                    <label>اسم المدونة</label>
                    <input type='text' placeholder='ادخل اسم المدونة' />
                  </div>
                  <div className='description'>
                    <label>الوصف</label>
                    <textarea rows={ 7 } placeholder='ادخل وصف المدونة' />
                  </div>
                  <button className='add-btn'>اضافة</button>
                </form>
              </div>
            }
          </div>
        </div>
        <div className='table' >
          <div className='head'>
            <div className='title'>بيانات المدونات</div>
            <div className='actions'>
              <div className='filter' onClick={ () => setOpen(true) }>
                <img src='filter.svg' alt='filter' />
              </div>
              { open &&
                <div className="modal">
                  <h1>تصفية</h1>
                  <span className="close" onClick={ () => setOpen(false) }>
                    <img src='close.svg' alt='close' />
                  </span>
                  <form onSubmit={ handleSubmit }>
                    {/* inputs */ }
                    <div className='filter-inputs'>
                      <div className="input">
                        <label onClick={ (e) => { setActiveMonth(!activeMonth); e.preventDefault(); } }>الشهر</label>
                        <div className="step-dropdown">
                          <div className="dropdown-btn" onClick={ (e) => { setActiveMonth(!activeMonth); e.preventDefault(); } }>
                            <span>{ selectMonth }</span>
                            <img src="/arrow-down.svg" alt="arrow down" />
                          </div>
                          {
                            activeMonth &&
                            <div className="dropdown-content">
                              {
                                months.map((item, index) => (
                                  <div className="dropdown-item"
                                    key={ index }
                                    onClick={ (e) => {
                                      setSelectMonth(item);
                                      setActiveMonth(false);
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
                        <label onClick={ (e) => { setActivePlace(!activePlace); e.preventDefault(); } }>طريقة الذهاب</label>
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
                    </div>
                    <button>تصفية</button>
                  </form>
                </div>
              }
            </div>
          </div>
          <TableData columns={ columns } rows={ rows } numbers={ 8 } />
        </div>
      </div>
    </div>
  )
};

export default Blogs;