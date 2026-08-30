import { useState } from "react";

import Header from "./components/Header";
import Term from "./components/Terms";
import Nominee from "./components/Nominee";
import Office from "./components/For-Office";
import Declaration from "./components/Declaration";
import Document from "./components/Required-Document";
import Chit from "./components/Chit-scheme";
import Footer from "./components/Footer";
import Member from "./components/Member";

import "./App.css";

const App = () => {

  // =========================
  // MEMBER DATA
  // =========================

  const [formData, setFormData] = useState({
    fullName: "",
    dob: "",
    mobile: "",
    aadhaar: "",
    occupation: "",
    address: "",
    fatherSpouseName: "",
    gender: "",
    email: "",
    pan: "",
    photo: null,
  });


  // =========================
  // NOMINEE DATA
  // =========================

  const [nomineeData, setNomineeData] = useState({
    nomineeName: "",
    fatherName: "",
    relationship: "",
    aadharNumber: "",
    mobileNumber: "",
    signature: null,
    address: "",
  });


  // =========================
  // CHIT DATA
  // =========================

  const [chitData, setChitData] = useState({
    chitGroupName: "",
    chitValue: "",
    monthlyInstallment: "",
    totalMembers: "",
    duration: "",
    startDate: "",
    dueDate: "",
  });


  // =========================
  // DOCUMENT DATA
  // =========================

  const [documentData, setDocumentData] = useState({
    aadharFile: null,
    panFile: null,
  });


  // =========================
  // PRINT
  // =========================

  const handlePrint = () => {
  document.body.classList.add("printing");

  setTimeout(() => {
    window.print();
  }, 100);
};


  return (
    <>
      <Header />

      {/* =========================
          COMPLETE FORM
      ========================= */}

      <div className="container">

        <div className="member-print">
          <Member
          formData={formData}
          setFormData={setFormData}
        />
        </div>


        <div className="nominee-chit">

          <div>
            <Nominee
              nomineeData={nomineeData}
              setNomineeData={setNomineeData}
            />
          </div>

          <div>
            <Chit
              chitData={chitData}
              setChitData={setChitData}
            />
          </div>

        </div>


        <Document
          documentData={documentData}
          setDocumentData={setDocumentData}
        />


        <Term />

        <Declaration />

        <Office />

      </div>
     <Footer />
     {/* =========================
            ATTACHED DOCUMENTS
        ========================= */}

        <div className="attached-documents">

          <div className="attached-title">
            ATTACHED DOCUMENTS
          </div>


          {/* AADHAAR */}

          {documentData.aadharFile && (
            <div className="attached-document">

              <h3>Aadhaar Card</h3>

              {documentData.aadharFile.type.startsWith("image/") ? (
                <img
                  src={URL.createObjectURL(
                    documentData.aadharFile
                  )}
                  alt="Aadhaar"
                />
              ) : (
                <iframe
                  src={URL.createObjectURL(
                    documentData.aadharFile
                  )}
                  title="Aadhaar PDF"
                />
              )}

            </div>
          )}


          {/* PAN */}

          {documentData.panFile && (
            <div className="attached-document">

              <h3>PAN Card</h3>

              {documentData.panFile.type.startsWith("image/") ? (
                <img
                  src={URL.createObjectURL(
                    documentData.panFile
                  )}
                  alt="PAN"
                />
              ) : (
                <iframe
                  src={URL.createObjectURL(
                    documentData.panFile
                  )}
                  title="PAN PDF"
                />
              )}

            </div>
          )}

        </div>
      {/* PRINT BUTTON */}
      <div className="print-button-container">
        <button
          className="print-button"
          onClick={handlePrint}
        >
          🖨️ Print Form
        </button>
      </div>

    </>
  );
};

export default App;