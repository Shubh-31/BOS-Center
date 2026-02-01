"use client";

import React, { useState } from "react";
import axios from "axios";
import AppConfig from "./config";
import { useRouter } from "next/navigation";
import { CheckCircle } from "lucide-react";

const ThankYou = ({
  CustomerName,
  CustomerMobileNo,
  customerEmailID,
  customerRemarks,
}) => {
  const [statusMessage, setStatusMessage] = useState(
    "Click OK to submit your request."
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const handleSubmit = async () => {
    if (isSubmitting) return;
    setIsSubmitting(true);

    try {
      const formData = new FormData();
      formData.append("FirstName", CustomerName);
      formData.append("LastName", "N/A");
      formData.append("PhoneNumber", CustomerMobileNo);
      formData.append("CompanyName", "N/A");
      formData.append("EmailAddress", customerEmailID);
      formData.append("LeadSource", "N/A");
      formData.append("LeadStatus", "N/A");
      formData.append("Remarks", customerRemarks);
      formData.append("ActiveYN", "N/A");
      formData.append("CreateBy", "N/A");

      await axios.post(
        `${AppConfig.querySubmissionBaseURL}/api/CrmQuery/Crmleadenquiry`,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      setStatusMessage(
        "Your request has been received. We will contact you shortly. Thank you!"
      );
    } catch (error) {
      console.error(error);
      setStatusMessage("Error submitting your request. Please try again.");
    } finally {
      setTimeout(() => {
        router.push("/");
      }, 5000);
    }
  };

  return (
    <div className="w-full max-w-md bg-white rounded-lg p-6 shadow-lg border border-gray-200 text-center">
      <div className="flex items-center justify-center gap-2 mb-3">
        <CheckCircle className="text-green-500 w-6 h-6" />
        <h2 className="font-semibold text-green-700 text-lg">
          Submission Status
        </h2>
      </div>

      <p className="text-sm text-gray-600">{statusMessage}</p>

      {!isSubmitting && (
        <div className="mt-5">
          <button
            type="button"
            onClick={handleSubmit}
            className="px-6 py-2 rounded-md bg-green-100 text-green-800 hover:bg-green-200 transition text-sm font-medium"
          >
            OK
          </button>
        </div>
      )}
    </div>
  );
};

export default ThankYou;
