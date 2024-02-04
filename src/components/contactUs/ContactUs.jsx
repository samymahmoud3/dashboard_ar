import './contactUs.scss';

const ContactUs = () => {

  return (
    <div className='contactUs'>
      <div className='body'>
        <div className='input-container'>
          <label htmlFor='website'>موقعنا</label>
          <input id='website' type='text' placeholder='ادخل اسم الموقع' />
        </div>
        <div className='input-container'>
          <label htmlFor='phone'>رقم الهاتف</label>
          <input id='phone' type='tel' placeholder='ادخل رقم الهاتف' />
        </div>
        <div className='input-container'>
          <label htmlFor='email'>عنوان البريد الالكتروني</label>
          <input id='email' type='email' placeholder='ادخل البريد الالكترونى' />
        </div>
        <div className='input-container'>
          <label htmlFor='whats'>رقم الواتساب</label>
          <input id='whats' type='tel' placeholder='ادخل رقم الواتساب' />
        </div>
        <div className='input-container'>
          <label htmlFor='facebook'>الفيس بوك</label>
          <input id='facebook' type='text' placeholder='ادخل الفيس بوك' />
        </div>
        <div className='input-container'>
          <label htmlFor='instagram'>الانستجرام</label>
          <input id='instagram' type='text' placeholder='ادخل الانستجرام' />
        </div>
        <div className='input-container'>
          <label htmlFor='twitter'>تويتر</label>
          <input id='twitter' type='text' placeholder='ادخل تويتر' />
        </div>
      </div>
    </div>
  );
}
export default ContactUs;