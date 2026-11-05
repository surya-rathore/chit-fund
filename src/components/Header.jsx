import "../assets/Header.css";
import logo from "../assets/react.svg";
function Header() {
  return (
    <>
      <div className="main-container">
        <div className="logo-part">
          <div>
            <img src={logo} alt="Hero" />
          </div>
          <div>
            <h2>SRI LAXMI</h2>
            <h1>CHIT FUNDS</h1>
            <h1>-----@------</h1>
          </div>
        </div>
        <div className="Center-content">
          <div>MONTHLY</div>
          <div>CHIT FUND</div>
          <div>----MEMBERSHIP APPLICATION----</div>
        </div>
        <div className="right-content">
          <div className="contact-item">
            <span>Kethiri Thirupathi </span>
          </div>

          <div className="contact-item">
            <span>+91 90592 66243</span>
            <span>+91 85208 72657</span>
          </div>

          <div className="contact-item">
            <span>kethiripavankumar412@gmail.com </span>
          </div>

          <div className="contact-item">
            <span>www.shreechitfunds.com</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
