import { useState } from "react";
import DataControl from "../../components/dataControl/DataControl"
import { packagesControlRows } from "../../data";
import './packageControl.scss';

const PackagesControl = () => {
  const [open, setOpen] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);

  const categories = [
    "صوره الفئة الاقتصادية",
    "صوره الفئة الاقتصادية2",
    "صوره الفئة الاقتصادية",
    "صوره الفئة الاقتصادية",
    "صوره الفئة الاقتصادية2",
    "صوره الفئة الاقتصادية"
  ]

  const columns = [
    {
      id: "id",
      label: "م",
      minWidth: 60,
      align: 'center',
    },
    {
      id: "place",
      label: "اماكن الزيارات",
      minWidth: 200,
      align: 'center',
    },
    {
      id: "car1",
      label: "سيارة سيدان سوناتا/كامرى",
      minWidth: 200,
      align: 'center',
    },
    {
      id: "car2",
      label: "سيارات عائلية جمس بوكن XL",
      minWidth: 178,
      align: 'center',
    },
    {
      id: "car3",
      label: "سيارات عائلية(فئة اتش وان)",
      minWidth: 128,
      align: 'center',
    },
    {
      id: "car4",
      label: "باصات",
      minWidth: 128,
      align: 'center',
    },
    {
      id: "car5",
      label: "سيارات VIP لكزس ES",
      minWidth: 128,
      align: 'center',
    },
    {
      id: "car6",
      label: "السيارات الفارهة(مرسيدس. بى ام)",
      minWidth: 128,
      align: 'center',
    },
    {
      id: "edit",
      label: "تعديل",
      minWidth: 55,
      align: 'center',
    },
  ];

  function createBookingData(id, place, car1, car2, car3, car4, car5, car6, edit) {
    return { id, place, car1, car2, car3, car4, car5, car6, edit };
  }
  const rows = packagesControlRows.map((item) => (
    createBookingData(
      item.id,
      item.place,
      item.car1,
      item.car2,
      item.car3,
      item.car4,
      item.car5,
      item.car6,
      <img src="edit.svg" alt="edit" style={{cursor:"pointer"}} onClick={ () => setOpenEdit(true) } />
    )
  ));

  return (
    <div className="package-control">
      <DataControl
        columns={ columns }
        rows={ rows }
        numbers={ 2 }
        navTitle="الباقات"
        title="تحكم فى الباقات"
        addNew_btn="اضافة باقة جديدة "
        categories={ categories }
        setOpen={ setOpen }
      />
      { open &&
        <div className="modal">
          <h1>اضافة باقة جديدة</h1>
          <span className="close" onClick={ () => setOpen(false) }>
            <img src="close.svg" alt="close" />
          </span>
          <form className="form-popup">
            <div className='filter-inputs'>
              <div className='input-container'>
                <label>المكان</label>
                <input type='text' placeholder='ادخل اسم المكان ' required />
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
                <label>المكان</label>
                <input type='text' placeholder='ادخل اسم المكان ' required />
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
  )
};

export default PackagesControl