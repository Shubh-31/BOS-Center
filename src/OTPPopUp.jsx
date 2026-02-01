import { useRef, useState, useEffect } from "react";
// import "./popup.scss";
import axios from "axios";
import AppConfig from "./config";
import ThankYou from "./ThankYou";

const OtpPopUp = ({
  CustomerName,
  CustomerMobileNo,
  customerEmailID,
  customerRemarks,
}) => {
  const inputsRef = useRef([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [showThankYou, setShowThankYou] = useState(false);
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes in seconds
  const [resendVisible, setResendVisible] = useState(false);
  const [resendCount, setResendCount] = useState(0);

  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        const newTime = prevTime - 1;
        if (newTime === 10) {
          setResendVisible(true);
        }
        return newTime;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
      .toString()
      .padStart(2, "0");
    const secs = (seconds % 60).toString().padStart(2, "0");
    return `${mins}:${secs}`;
  };

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (value.length === 1 && index < inputsRef.current.length - 1) {
      inputsRef.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !e.target.value && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("Text").trim().slice(0, 6);
    [...pastedData].forEach((char, idx) => {
      if (inputsRef.current[idx]) {
        inputsRef.current[idx].value = char;
      }
    });
    if (pastedData.length < 6) {
      inputsRef.current[pastedData.length]?.focus();
    } else {
      inputsRef.current[5].focus();
    }
  };

  const handleOTPVerification = async (e) => {
    e.preventDefault();

    const otp = inputsRef.current.map((input) => input.value).join("");

    if (otp.length !== 6) {
      setErrorMessage("The OTP must be exactly 6-digits.")
      return;
    }

    try {
      const response = await axios.post(
        `${AppConfig.contactUsBaseURL}/AOPCustomerQuery/VerifyOTP`,
        {
          emailid: customerEmailID,
          otp: otp,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data.status === true) {
        setErrorMessage("");
        setShowThankYou(true);
      } else {
        setErrorMessage(
          
            "The OTP you entered is incorrect or has expired. Please try again."
        );
      }
    } catch (error) {
      const fallbackMessage =
        error.response?.data?.message ||
        "There was an error verifying the OTP. Please try again.";
      setErrorMessage(fallbackMessage);
      //   toast.error(fallbackMessage);
    }
  };

  const handleResendOTP = async (e) => {
    e.preventDefault();

    if (resendCount >= 5) {
      //   toast.error("You have reached the maximum number of resends.");
      return;
    }

    const headers = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const { data: getResponseData } = await axios.post(
        `${AppConfig.contactUsBaseURL}/AOPCustomerQuery/SendOTP`,
        {
          mobileNo: CustomerMobileNo,
          emailid: customerEmailID,
        },
        headers
      );

      const returnMessage = getResponseData?.returnMessage;
      const status = getResponseData?.status;

      if (
        status === false &&
        returnMessage ===
          "OTP could not be sent because a user record already exists."
      ) {
        // toast.error("We already have a query from this email.");
      } else if (status === true && returnMessage === "OTP Send Successfully") {
        // toast.success("OTP Sent Successfully !!");
        setResendCount((prev) => prev + 1); // increment resend count
        setTimeLeft(300); // restart timer
        setResendVisible(false); // hide resend prompt
        setErrorMessage(""); // clear error message
        // Clear existing input values
        inputsRef.current.forEach((input) => {
          if (input) input.value = "";
        });
        // Focus first input
        inputsRef.current[0]?.focus();
      }
    } catch (error) {
      console.error("Submission error:", error);
      const message =
        error.response?.data?.message ||
        "There was an error. Please try again later!";
      toast.error(message);
    }
  };

  return (
    <>
      {!showThankYou ? (
        <form
          onSubmit={handleOTPVerification}
          className="w-4/10 bg-white rounded-xl shadow-2xl p-6 flex flex-col items-center gap-2 relative h-auto"
        >
          <h2 className="text-xl font-semibold text-gray-800">Verify OTP</h2>
          <p className="text-sm text-gray-600 text-center">
            We have sent a 6-digit code to your email. Please enter it below.
          </p>

          <div className="flex gap-2 justify-center" onPaste={handlePaste}>
            {[...Array(6)].map((_, index) => (
              <input
                key={index}
                type="text"
                maxLength={1}
                required
                ref={(el) => (inputsRef.current[index] = el)}
                onChange={(e) => handleChange(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                className="w-10 h-12 text-center text-lg font-semibold text-gray-800 bg-gray-200 rounded-md outline-none 
                         caret-[rgb(127,129,255)] focus:bg-[rgba(127,129,255,0.199)] valid:bg-[rgba(127,129,255,0.199)] 
                         transition duration-300"
              />
            ))}
          </div>

          <div className="text-sm text-gray-500">
            Time remaining:{" "}
            <span className="font-semibold ">{formatTime(timeLeft)}</span>
          </div>

          {resendVisible && (
            <div className="text-sm text-gray-600 text-center">
              Did not get the OTP?{" "}
              <button
                type="button"
                onClick={handleResendOTP}
                className="text-indigo-600 hover:underline font-medium"
              >
                Resend
              </button>{" "}
              ({5 - resendCount} attempts left)
            </div>
          )}

          {errorMessage && (
            <p className="text-red-600 text-sm text-center">{errorMessage}</p>
          )}

          <button
            type="submit"
            className="mt-2 w-full bg-indigo-600 text-white py-2 rounded-md shadow-sm font-medium hover:bg-indigo-800 transition hover:shadow-md"
          >
            Verify OTP
          </button>
        </form>
      ) : (
        <div className="w-1/2 max-w-full rounded-xl shadow-xl p-6">
          <ThankYou
            CustomerName={CustomerName}
            CustomerMobileNo={CustomerMobileNo}
            customerEmailID={customerEmailID}
            customerRemarks={customerRemarks}
          />
        </div>
      )}
    </>
  );
};

export default OtpPopUp;
