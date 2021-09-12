import "./App.css";
import Contactform from "./Components/Contactform";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <ToastContainer />
      {/* <img src={logo} alt="Logo of nagarjuna" className="logo"/> */}
      <h1 className="first">Nagarjuna College Of Information Technology</h1>
      <p className="second">
        <i>A destination for Quality Education....</i>
      </p>

      <p className="third">
        On behalf of our faculty and staff, welcome to Nagarjuna Group of
        Educational Organisations. Your success matters to us,
        <span>
          and we are here to help guide to your ultimate educational and career
          goals. We provide an array of services which will
        </span>
        <span>
          help you succeed in achieving success no matter if your goal is to
          complete a course or a complete degree program.
        </span>{" "}
      </p>

      <h3>Why Choose Nagarjuna</h3>
      <ul className="forth">
        <li>Nagarjuna is working in the education field since 1988.</li>
        <li>
          Enough spacious space with Basketball court, Badminton court, enough
          parking space.
        </li>
        <li>
          Many times our students hace able to achieve top position in the TU
          results.
        </li>
        <li>
          Resourceful library, we provide all textbooks for every student in
          every semester.
        </li>
      </ul>

      <h3 className="desc">
        To know more about Nagarjuna College feel free to fill below form and
        get the required information.{" "}
      </h3>
      <div className="container">
        <h1 className="brand">
          <span>Bsc. CSIT</span> Informations
        </h1>
        <div className="wrapper animated bounceInLeft">
          <div className="company-info">
            <h3>About Bsc.CSIT</h3>
            <ul>
              <li>
                <i className="fa fa-road"></i> 44 Something st
              </li>
              <li>
                <i className="fa fa-phone"></i> (555) 555-5555
              </li>
              <li>
                <i className="fa fa-envelope"></i> test@acme.test
              </li>
            </ul>
          </div>
          <div className="contact">
            <h3>Email Us</h3>
            <Contactform />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
