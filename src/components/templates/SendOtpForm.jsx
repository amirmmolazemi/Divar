import { sendOtp } from "../../services/auth.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./SendOtpForm.module.css";

function SendOtpForm({ mobile, setMobile, setStep }) {
  const submitHandler = async (event) => {
    event.preventDefault();
    if (mobile.length !== 11) return;
    const { error, response } = await sendOtp(mobile);
    if (error)
      toast.error(error.response.data.message, {
        position: "top-center",
        autoClose: 5000,
        theme: "colored",
      });
    if (response) setStep(2);
  };
  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <p>ورود به حساب کاربری</p>
      <span>
        برای استفاده از امکانات دیوار , لطفا شماره موبایل خود را وارد کنید . کد
        تایید به این شماره پیامک خواهد شد.
      </span>
      <label htmlFor="input">شماره موبایل خود را وارد بکنید</label>
      <input
        type="text"
        id="input"
        placeholder="شماره موبایل"
        value={mobile}
        autoComplete="off"
        onChange={(event) => setMobile(event.target.value)}
      />
      <button type="Submit">ارسال کد تایید</button>
      <ToastContainer />
    </form>
  );
}

export default SendOtpForm;
