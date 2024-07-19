import "./Service.css";

function Service(){
    return(
        <main>
        <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center">
            <div class="col-md-6 p-lg-5 mx-auto my-5">
            <h1 class="display-3 fw-bold">Services</h1>
            <h3 class="fw-normal text-muted mb-3">We provide quality service to our customers. Quality is our preference</h3>
            </div>
            <div class="product-device shadow-sm d-none d-md-block"></div>
            <div class="product-device product-device-2 shadow-sm d-none d-md-block"></div>
        </div>

        <div class="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
            <div class="text-bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
            <div class="my-3 py-3">
                <h2 class="display-5">Qualified Technicians</h2>
                <p class="lead">Provide great service by our qualified technicians</p>
            </div>
            <div  id="service">
            <img src="https://images.pexels.com/photos/3807277/pexels-photo-3807277.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" height={500} alt=""/>
            </div>
            </div>
            <div class="bg-body-tertiary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
            <div class="my-3 p-3">
                <h2 class="display-5">Top Notch Equipment</h2>
                <p class="lead">We have the top notch equipment</p>
            </div>
            <div id="service">
            <img src="https://images.pexels.com/photos/8986070/pexels-photo-8986070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" height={400} alt=""/>
            </div>
            </div>
        </div>

        <div class="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
            <div class="bg-body-tertiary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
            <div class="my-3 p-3">
                <h2 class="display-5">Faster resolution</h2>
                <p class="lead">Our qualified technicians and top notch equipment made resolution faster</p>
            </div>
            <div id="service">
                <img src="https://images.pexels.com/photos/6408402/pexels-photo-6408402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" height={500}alt=""/>
            </div>
            </div>
            <div class="text-bg-primary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
            <div class="my-3 py-3">
                <h2 class="display-5">Great satisfaction</h2>
                <p class="lead">Our customer is also the service that we provide</p>
            </div>
            <div  id="service">
            <img src="https://images.pexels.com/photos/8638702/pexels-photo-8638702.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" height={500} alt=""/>
            </div>
                
            </div>
        </div>

        </main>
    )
}

export default Service;