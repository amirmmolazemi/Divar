import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import { checkOtp } from "services/auth.js";
import { setCookie } from "utils/cookie.js";
import { getProfile } from "services/user";

import { toast } from "react-toastify";
import styles from "./CheckOtpForm.module.css";

function CheckOtpForm({ code, setCode, mobile, setStep }) {
  const navigate = useNavigate();
  const { refetch } = useQuery(["profile"], getProfile);

  const submitHandler = async (event) => {
    event.preventDefault();

    if (code.length !== 5) return;

    const { response, error } = await checkOtp(mobile, code);

    if (error)
      toast.error(error.response.data.message, {
        position: "top-center",
        autoClose: 5000,
        theme: "colored",
      });
    if (response) {
      setCookie(response.data);
      navigate("/");
      refetch()
    }
  };

  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <p>تایید کد اس ام اس شده</p>
      <span>کد پیامک شده را به شماره {mobile} را وارد کنید.</span>
      <label htmlFor="input">کد تایید را وارد کنید</label>
      <input
        type="text"
        id="input"
        placeholder="کد تایید"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
      <button type="submit">ورود</button>
      <button onClick={() => setStep(1)} className={styles.backButton}>
        تغییر شماره موبایل
      </button>
    </form>
  );
}

export default CheckOtpForm;
