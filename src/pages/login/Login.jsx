import { Link } from "react-router-dom";
import './login.scss';

const Login = () => {

  return (
    <div className="login-form">
      <div className="container">
        <h1>مرحبًا بعودتك!</h1>
        <p>تسجيل الدخول إلى حسابك</p>
        <form className="fields">
          <div className="form-group">
            <label htmlFor="email">
              <img src="/email.svg" alt="email" />
            </label>
            <input
              type="email"
              id="email"
              className="form-control"
              placeholder="البريد الإلكتروني"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">
              <img src="/lock.svg" alt="lock" />
            </label>
            <input
              type="password"
              id="password"
              className="form-control"
              placeholder="كلمة المرور"
              required
            />
          </div>
          <Link to='/password-recovery' className="password-recovery_btn">استعادة كلمة المرور</Link>
          <Link to='/' className="btn">تسجيل الدخول</Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
