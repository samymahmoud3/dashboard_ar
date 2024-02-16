import Stepper from "../stepper/Stepper";
import './visasSteps.scss';

function VisasSteps(prop) {
  const { setOpenStepper } = prop;
  const list = [
    <Step1 key={ 0 } />,
    <Step2 key={ 1 } />,
    <Step3 key={ 2 } />,
    <Step4 key={ 3 } />,
  ];
  return (
    <div className="dashVisas-details">
      <Stepper list={ list } setOpenStepper={setOpenStepper} />
    </div>
  );
}
export default VisasSteps;

const Step1 = (prop) => {
  const { onNext } = prop;

  return (
    <div className="dashVisas-step">
      <h2>معلومات السفر</h2>
      <div className="step-info">
        <div className='step-input'>
          <label>الجنسية</label>
          <input type='text' value="السعودية" readOnly />
        </div>
        <div className='step-input'>
          <label>مسافر من</label>
          <input type='text' value="السعودية" readOnly />
        </div>
        <div className='step-input'>
          <label>مسافر الى دولة</label>
          <input type='text' value="السعودية" readOnly />
        </div>
        <div className='step-input'>
          <label>متى تاريخ السفر</label>
          <input type='text' value="2024/02/28" readOnly />
        </div>
      </div>
      <button className="stepper-btn" onClick={ onNext }>التالى</button>
    </div>
  );
};

const Step2 = (prop) => {
  const { onNext } = prop;
  // radio buttons
  const handleChangeRounds = (event) => {
    const value = event.target.value;
  }; //end

  return (
    <div className="dashVisas-step">
      <h2>معلومات الهوية</h2>
      <div className="step-info">
        <div className='radio-container'>

          <div className="radio-box">
            <h3 className="title">هل هويتك او اقامتك سارية الصلاحية؟</h3>
            <div className="radio-buttons">
              <label htmlFor='radio-1' className="radio">
                <input id='radio-1' name='group1' type="radio" value='yes' checked={true} onChange={ handleChangeRounds } />
                <label htmlFor='radio-1' className="radio-label">نعم</label>
              </label>
              <label htmlFor='radio-2' className="radio">
                <input id='radio-2' name='group1' type="radio" value='no' checked={false} onChange={ handleChangeRounds } />
                <label htmlFor='radio-2' className="radio-label">لا</label>
              </label>
            </div>
          </div>

          <div className="radio-box">
            <h3 className="title">هل جواز سفرك سارى الصلاحية و متبقى اكثر من 6 اشهر؟</h3>
            <div className="radio-buttons">
              <label htmlFor='radio-3' className="radio">
                <input id='radio-3' name='group2' type="radio" value='yes' checked={true} onChange={ handleChangeRounds } />
                <label htmlFor='radio-3' className="radio-label">نعم</label>
              </label>
              <label htmlFor='radio-4' className="radio">
                <input id='radio-4' name='group2' type="radio" value='no'  checked={false} onChange={ handleChangeRounds } />
                <label htmlFor='radio-4' className="radio-label">لا</label>
              </label>
            </div>
          </div>

          <div className="radio-box">
            <h3 className="title">هل لديك كشف جساب بنكى 3 او 6 اشهر ؟
              <p>بعض السفارات تتطلب كشف حساب</p>
            </h3>
            <div className="radio-buttons">
              <label htmlFor='radio-5' className="radio">
                <input id='radio-5' name='group3' type="radio" value='yes' checked={true} onChange={ handleChangeRounds } />
                <label htmlFor='radio-5' className="radio-label">نعم</label>
              </label>
              <label htmlFor='radio-6' className="radio">
                <input id='radio-6' name='group3' type="radio" value='no' checked={false} onChange={ handleChangeRounds } />
                <label htmlFor='radio-6' className="radio-label">لا</label>
              </label>
            </div>
          </div>

          <div className="radio-box">
            <h3 className="title">هل لديك كشف جساب بنكى 3 او 6 اشهر ؟
              <p>بعض السفارات تتطلب كشف حساب</p>
            </h3>
            <div className="radio-buttons">
              <label htmlFor='radio-7' className="radio">
                <input id='radio-7' name='group4' type="radio" value='yes' checked={true} onChange={ handleChangeRounds } />
                <label htmlFor='radio-7' className="radio-label">نعم</label>
              </label>
              <label  htmlFor='radio-8' className="radio">
                <input id='radio-8' name='group4' type="radio" value='no' checked={false} onChange={ handleChangeRounds } />
                <label htmlFor='radio-8' className="radio-label">لا</label>
              </label>
            </div>
          </div>

        </div>
      </div>
      <button className="stepper-btn" onClick={ onNext }>التالى</button>
    </div>
  );
};

const Step3 = (prop) => {
  const { onNext } = prop;

  return (
    <div className="dashVisas-step">
      <h2>معلومات قانونية</h2>
      <div className="step-info">
        <div className="upload_items">
          <div className="item">
            <div className="header">
              <h3>جواز السفر</h3>
            </div>
            <div className='upload_file'>
              <img src='edit-blog_img.jpg' alt='upload file' />
            </div>
          </div>
          <div className="item">
            <div className="header">
              <h3>الاقامة</h3>
            </div>
            <div className='upload_file'>
              <img src='edit-blog_img.jpg' alt='upload file' />
            </div>
          </div>
        </div>
      </div>
      <button className="stepper-btn" onClick={ onNext }>التالى</button>
    </div>
  );
};

const Step4 = (prop) => {
  const { onNext } = prop;
  return (
    <div className="dashVisas-step">
      <h2>معلومات العميل</h2>
      <div className="step-info">
        <div className='step-input'>
          <label htmlFor='fullName'>الاسم بالكامل</label>
          <input type='text' id='fullName' value="محمد سعيد احمد" readOnly />
        </div>
        <div className='step-input phone-input'>
          <label htmlFor='phone'>رقم الجوال</label>
          <div>
            <div className="flag"><img src="flag.svg" alt="flag" /><span>+20</span></div>
            <input type='text' id='phone' value="01201201201" readOnly />
          </div>
        </div>
        <div className='step-input'>
          <label htmlFor='email'>البريد الالكترونى</label>
          <input type='email' id='email' value="mohamedsaid@gmail.com" readOnly />
        </div>
      </div>
      <button className="stepper-btn" onClick={ onNext } >تحويل الى مكتملة</button>
    </div>
  );
};
