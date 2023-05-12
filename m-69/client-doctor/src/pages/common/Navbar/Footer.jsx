
import logo from "../../../assets/logo.svg";

const Footer = () => {
    return (
        <footer className="footer p-10 bg-base-200 text-base-content">
        <div>
         <img className="w-20 lg:w-28" src={logo} alt="" />
          <p>ACME Industries Ltd.<br/>Providing reliable tech since 1992</p>
        </div> 
        <div>
          <span className="footer-title">Services</span> 
          <a className="link link-hover">Branding</a> 
          <a className="link link-hover">Design</a> 
          <a className="link link-hover">Marketing</a> 
          <a className="link link-hover">Advertisement</a>
        </div> 
        <div>
          <span className="footer-title">Company</span> 
          <a className="link link-hover">About us</a> 
          <a className="link link-hover">Contact</a> 
          <a className="link link-hover">Jobs</a> 
          <a className="link link-hover">Press kit</a>
        </div> 
        <div>
          <span className="footer-title">Legal</span> 
          <a className="link link-hover">Terms of use</a> 
          <a className="link link-hover">Privacy policy</a> 
          <a className="link link-hover">Cookie policy</a>
        </div>
        {/* <div className="flex flex-wrap md:flex-none">
        
     </div> */}
      </footer>
    );
};

export default Footer;