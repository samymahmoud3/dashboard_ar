import { useState } from "react";
import { paymentOptions, paymentRows } from "../../data";
import TableData from "../tableData/TableData";
import './payment.scss';

const Payment = () => {
  const [card, setCard] = useState(false);
  const [open, setOpen] = useState(false);
  const [openNewCard, setOpenNewCard] = useState(false);
  const [openEditCard, setOpenEditCard] = useState(false);

  const columns = [
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
      id: "paid",
      label: "المبلغ المدفوع",
      minWidth: 128,
      align: 'center',
    }
  ];

  function createBookingData(id, name, phone, bookingDate, paid) {
    return { id, name, phone, bookingDate, paid };
  }
  const rows = paymentRows.map((item) => (
    createBookingData(
      item.id,
      item.name,
      <p style={ { direction: "ltr" } }>{ item.phone }</p>,
      item.bookingDate,
      item.paid,
    )
  ));

  // filter inputs
  const [activeDate, setActiveDate] = useState(false);
  const [selectDate, setSelectDate] = useState("هذا الشهر");
  const dates = ["هذا الشهر", "اليوم", "احجز الان", "احجز الان"];
  // end

  const handleAddCard = () => {
    setOpenNewCard(false);
    setCard(true);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div className="payment">
      <div className='payment-options'>
        <h3>خيارات الدفع</h3>
        <div className='options'>
          {
            paymentOptions.map((option, index) => (
              <div key={ index } className="option" >
                <h4>{ option.title }</h4>
                <p>{ option.description }</p>
                <div className="actions">
                  <img src="edit.svg" alt="edit" />
                  <img src="delete.svg" alt="edit" />
                </div>
              </div>
            ))
          }
        </div>
        <div className="add-btn">
          <div className="btn">اضافة</div>
        </div>
      </div>
      <div className='addCard'>
        <h2>محفظتي</h2>
        {
          !card &&
          <div className='addCard-btn' onClick={ () => setOpenNewCard(true) }>
            اضافة بطاقه
          </div>
        }
        {
          card &&
          <div className='card-edit'>
            <img src="Mastercard.svg" alt="card" />
            <input type="text" placeholder="7812 2139 0823 XXXX" />
            <img className="edit-pen" src="edit-pen.svg" alt="edit" onClick={ () => setOpenEditCard(true) } />
          </div>
        }
      </div>
      <div className='payment-table' >
        <div className='head'>
          <div className='title'>تاريخ المعاملات</div>
          <div className='actions'>
            <div className='filter' onClick={ () => setOpen(true) }><img src='filter.svg' alt='filter' /></div>
            { open &&
              <div className="modal">
                <h1>تصفية</h1>
                <span className="close" onClick={ () => setOpen(false) }>
                  <img src="close.svg" alt="close" />
                </span>
                <form onSubmit={ handleSubmit }>
                  {/* inputs */ }
                  <div className='filter-inputs'>
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
                  </div>
                  <button>تصفية</button>
                </form>
              </div>
            }
          </div>
        </div>
        <TableData columns={ columns } rows={ rows } numbers={ 8 } />
      </div>

      {
        openNewCard &&
        <div className="addNew-card popup-card">
          <div className="head">
            <h2>اضافة بطاقه جديده</h2>
            <img src="close.svg" alt="close" onClick={ () => setOpenNewCard(false) } />
          </div>
          <div className="body">
            <div className="input-container">
              <label htmlFor="card-number">رقم بطاقة الائتمان</label>
              <input id="card-number" type="text" placeholder="اكتب رقم بطاقة الائتمان" />
            </div>
            <div className="input-container">
              <label htmlFor="date">تاريخ الصلاحية</label>
              <input id="date" type="text" placeholder="23/01/2024" />
            </div>
            <div className="input-container">
              <label htmlFor="cvv">CVV</label>
              <input id="cvv" type="text" placeholder="223" />
            </div>
            <div className="add-btn" onClick={ handleAddCard }>اضافة</div>
          </div>
        </div>
      }
      {
        openEditCard &&
        <div className="edit-card popup-card">
          <div className="head">
            <h2>تعديل  بطاقة الائتمان</h2>
            <img src="close.svg" alt="close" onClick={ () => setOpenEditCard(false) } />
          </div>
          <div className="body">
            <div className="input-container">
              <label htmlFor="name">اسم صاحب البطاقه</label>
              <input id="name" type="text" placeholder="اسم صاحب البطاقه" />
            </div>
            <div className="input-container">
              <label htmlFor="card-number">رقم بطاقة الائتمان</label>
              <input id="card-number" type="text" placeholder="اكتب رقم بطاقة الائتمان" />
            </div>
            <div className="input-container">
              <label htmlFor="date">تاريخ الصلاحية</label>
              <input id="date" type="text" placeholder="23/01/2024" />
            </div>
            <div className="input-container">
              <label htmlFor="cvv">CVV</label>
              <input id="cvv" type="text" placeholder="223" />
            </div>
            <div className="add-btn">تعديل</div>
          </div>
        </div>
      }
    </div>
  )
};

export default Payment