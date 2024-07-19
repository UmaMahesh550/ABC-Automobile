import { Link } from "react-router-dom";

function Footer(){
    return (
      <>
      <div className="container">
  <footer className="py-3 my-4">
    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
      <li className="nav-item"><Link class="nav-link px-2 text-body-secondary" to="/">Home</Link></li>
      <li className="nav-item"><Link class="nav-link px-2 text-body-secondary" to="/about">About Us</Link></li>
      <li className="nav-item"><Link class="nav-link px-2 text-body-secondary" to="/vehicle">Vehicles</Link></li>
      <li className="nav-item"><Link class="nav-link px-2 text-body-secondary" to="/service">Services</Link></li>
      <li className="nav-item"><Link class="nav-link px-2 text-body-secondary" to="/about">Contact Us</Link></li>
    </ul>
    <div data-testid="footer-content">
    <p className="text-center text-body-secondary">© 2024 ABC Automobiles</p>
    </div>
  </footer>
</div>
      </>
 
    )
  }


export default Footer;
