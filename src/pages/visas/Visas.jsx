import { useState } from 'react';
import { visasRows, visasStats } from '../../data';
import TableData from '../../components/tableData/TableData';
import Stats from '../../components/stats/Stats';
import VisasSteps from '../../components/visasStepper/visasSteps/VisasSteps';
import './visas.scss';

const Visas = () => {
  const [open, setOpen] = useState(false);
  const [openStepper, setOpenStepper] = useState(false);
  const [values, setValues] = useState([]); // Initialize an empty array for values
  const [inputValue, setInputValue] = useState(''); // To capture the input value

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const addValue = () => {
    if (inputValue.trim() !== '') {
      // Only add non-empty values
      setValues([...values, inputValue]);
      setInputValue(''); // Clear the input field
    }
  };

  const removeValue = (indexToRemove) => {
    const updatedValues = values.filter((_, index) => index !== indexToRemove);
    setValues(updatedValues);
  };

  const columns = [
    {
      id: "id",
      label: "ID",
      minWidth: 85,
      align: 'center',
    },
    {
      id: "name",
      label: "الاسم",
      minWidth: 220,
      align: 'center',
    },
    {
      id: "email",
      label: "الايميل",
      minWidth: 220,
      align: 'center',
    },
    {
      id: "from",
      label: "من",
      minWidth: 140,
      align: 'center',
    },
    {
      id: "to",
      label: "الى",
      minWidth: 140,
      align: 'center',
    },
    {
      id: "bookingDate",
      label: "تاريخ الحجز",
      minWidth: 180,
      align: 'center',
    },
    {
      id: "status",
      label: "حاله الحجز",
      minWidth: 170,
      align: 'center',
    },
  ];

  function createBookingData(id, name, email, from, to, bookingDate, status) {
    return { id, name, email, from, to, bookingDate, status };
  }
  const rows = visasRows.map((item) => (
    createBookingData(
      item.id,
      item.name,
      item.email,
      item.from,
      item.to,
      item.bookingDate,
      <img style={ { cursor: "pointer" } } src={ item.status } alt='status' onClick={ () => setOpenStepper(true) } />
    )
  ));
  
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
    <div className='dash-visas'>
      <div className='nav-header'>التاشيرات</div>
      <div className='content'>
        <div className='header'>
          <Stats data={ visasStats } />
          <div className='add-place'>
            <div className='title'>
              <img src='users-stats.svg' alt='users' />
              <span>اضافة اماكن جديدة</span>
            </div>
            <div className='addPlace-visas'>
              <input
                type="text"
                value={ inputValue }
                onChange={ handleInputChange }
                placeholder="ادخل اسم المكان"
              />
              <button className='add-btn' onClick={ addValue }>اضافة فى البانر</button>
            </div>
          </div>
        </div>

        <div className='available-places'>
          <h2 className='title'>الاماكن المضافة للبانر</h2>
          <div className='places'>
            { values.map((value, index) => (
              <div key={ index } className='place'>
                { value }
                <img src='close.svg'
                  className='close-btn'
                  alt='close'
                  onClick={ () => removeValue(index) }
                />
              </div>
            )) }
          </div>
        </div>

        <div className='visasTable' >
          <div className='head'>
            <div className='title'>طلبات التاشيرات</div>
            <div className='actions'>
              <div className='filter' onClick={ () => setOpen(true) }><img src='filter.svg' alt='filter' /></div>
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
          <TableData columns={ columns } rows={ rows } numbers={ 8 } />
          {
            openStepper && <VisasSteps setOpenStepper={ setOpenStepper } />
          }
        </div>
      </div>
    </div>
  )
};

export default Visas;