import {Component} from 'react';
import { Link } from 'react-router-dom';


class About extends Component{
  
    render(){
        return (
          
            <div data-testid="about-content">

              <section class="py-2 text-center container">
                <div class="row py-lg-5">
                  <div class="col-lg-6 col-md-8 mx-auto">
                    <h1 class="fw-light"><b>ABOUT</b></h1>
                  </div>
                </div>
              </section>
              <div className="container col-xxl-10 px-1 py-1">
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                  <div className="col-10 col-sm-8  col-lg-6">
                    <img src="https://images.pexels.com/photos/237195/pexels-photo-237195.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
                  </div>
                  <div className="col-lg-6">
                    <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">ABC Automobiles</h1>
                    <p className="lead"><b>We opened the doors of the first Company of Cars retail location in 2008 after more than ten years mixing it up in the hyper competitive automotive wholesale business. 
                      Originally located on the downtown of the Visakhapatnam, we moved our store in 2014 to a new larger space at 1502 Boundary Road on the Sea shore area. For some of our loyal customers that was a bit too far.
                       We found a better location back in the heart of Visakhapatnam at Maddilapalem in Visakhapatnam to better serve our customers. 
                      It’s been a crazy ride since our humble beginnings at Visakhapatnam.</b></p>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                      <Link to="/vehicle"><button type="button" className="btn btn-primary btn-lg px-4 me-md-2" >Vehicles</button></Link>
                      <Link to="/vehicle"><button type="button" className="btn btn-outline-secondary btn-lg px-4">Contact US</button></Link>
                    </div>
                  </div>
                </div>

                <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                  <div className="card h-100">
                    <img src="https://images.pexels.com/photos/3311574/pexels-photo-3311574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img-top" height={300} alt="..."/>
                    <div className="card-body">
                      <h5 className="card-title">FERRARI</h5>
                      <p className="card-text">We do provide our customers to check the Ferrari cars as we are collaborated with them too.</p>
                      <a href='https://www.ferrari.com/en-IN'><button className="btn btn-secondary rounded-pill px-3" type="button">Visit Website</button></a>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card h-100">
                    <img src="https://images.pexels.com/photos/3354648/pexels-photo-3354648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img-top" height={300} alt="..."/>
                    <div className="card-body">
                      <h5 className="card-title">MERCEDES BENZ</h5>
                      <p className="card-text">We do provide our customers to check the Mercedes Benz cars as we are collaborated with them too.</p>
                      <a href='https://www.mercedes-benz.com/en/'><button className="btn btn-secondary rounded-pill px-3" type="button">Visit Website</button></a>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card h-100">
                    <img src="https://images.pexels.com/photos/1687147/pexels-photo-1687147.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img-top" height={300} alt="..."/>
                    <div className="card-body">
                      <h5 className="card-title">BMW</h5>
                      <p className="card-text">We do provide our customers to check the BMW cars as we are collaborated with them too.</p>
                      <a href='https://www.bmw.com/en/index.html'><button className="btn btn-secondary rounded-pill px-3" type="button">Visit Website</button></a>
                    </div>
                  </div>
                </div>
              </div>


              </div>
            </div>
         
        )
    }
}
export default About;