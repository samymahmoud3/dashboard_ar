import { useRef, useState } from 'react';
import { carsTypesRows } from '../../data';
import TableData from '../../components/tableData/TableData';
import './carsTypes.scss';

const CarsTypes = () => {
  const [open, setOpen] = useState(false);

  const columns = [
    {
      id: "carImg",
      label: "الصوره",
      minWidth: 200,
      align: 'center',
    },
    {
      id: "type",
      label: "نوع السياره",
      minWidth: 200,
      align: 'center',
    },
    {
      id: "category",
      label: "نوع الفئه",
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

  function createBookingData(carImg, type, category, actions) {
    return { carImg, type, category, actions };
  }
  const rows = carsTypesRows.map((item) => (
    createBookingData(
      <img src={ item.carImg } alt='car' style={ { width: "80px", height: "40px" } } />,
      item.type,
      item.category,
      item.actions.map((item, index) => (
        <div key={ index }>
          <img src={ item.edit } alt='edit' style={ { cursor: "pointer" } } />
          <img src={ item.delete } alt='delete' style={ { cursor: "pointer", marginRight: "15px" } } />
        </div>
      ))
    )
  ));

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  // filter inputs
  const [activeCat, setActiveCat] = useState(false);
  const [selectCat, setSelectCat] = useState("اقتصادية");
  const categories = ["اقتصادية", "VIP"];
  // end

  // handle upload files
  const fileInputRef = useRef(null);
  const handleFileInput = () => {
    fileInputRef.current.click();
  }

  return (
    <div className='cars-types'>
      <div className='table' >
        <div className='head'>
          <div className='title'>انواع السيارات</div>
          <div className='actions'>
            <div className='add-btn' onClick={ () => setOpen(true) }>
              <button onClick={ () => setOpen(true) }>اضافة</button>
            </div>
            { open &&
              <div className="modal">
                <h1>اضافة سياره </h1>
                <span className="close" onClick={ () => setOpen(false) }>
                  <img src='close.svg' alt='close' />
                </span>
                <form onSubmit={ handleSubmit }>
                  {/* inputs */ }
                  <div className='filter-inputs'>
                    <div className="input">
                      <label onClick={ (e) => { setActiveCat(!activeCat); e.preventDefault(); } }>نوع الفئه</label>
                      <div className="step-dropdown">
                        <div className="dropdown-btn" onClick={ (e) => { setActiveCat(!activeCat); e.preventDefault(); } }>
                          <span>{ selectCat }</span>
                          <img src="/arrow-down.svg" alt="arrow down" />
                        </div>
                        {
                          activeCat &&
                          <div className="dropdown-content">
                            {
                              categories.map((item, index) => (
                                <div className="dropdown-item"
                                  key={ index }
                                  onClick={ (e) => {
                                    setSelectCat(item);
                                    setActiveCat(false);
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
                    <div className='type-input'>
                      <label>نوع السيارة</label>
                      <input type='text' placeholder='ادخل نوع السيارة' />
                    </div>
                    <div className='img'>
                      <div className='upload_file' onClick={ handleFileInput }>
                        <input ref={ fileInputRef } type='file' style={ { display: "none" } } />
                        <img src='/upload.svg' alt='upload file' />
                        <h2>Upload Files</h2>
                        <p>PNG, JPG and GIF files are allowed</p>
                      </div>
                    </div>
                  </div>
                  <button>اضافة</button>
                </form>
              </div>
            }
          </div>
        </div>
        <TableData columns={ columns } rows={ rows } numbers={ 8 } />
      </div>
    </div>
  )
};

export default CarsTypes;