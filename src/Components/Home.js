import {Link} from 'react-router-dom'
function Home(){
    return(
        // <h1>Home Component</h1>

        <div>

<div id="carouselExampleCaptions" class="carousel slide">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                        <img src="https://images.pexels.com/photos/1383834/pexels-photo-1383834.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="d-block w-100" height={750} alt="..."/>
                        <div class="carousel-caption d-none d-md-block">
                            <h5>ABC Automobiles</h5>
                            <p>You can get popular family cars and sports cars here.</p>
                        </div>
                        </div>
                        <div class="carousel-item">
                        <img src="https://images.pexels.com/photos/1719648/pexels-photo-1719648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="d-block w-100" height={750} alt="..."/>
                        <div class="carousel-caption d-none d-md-block">
                            <h5>ABC Automobiles</h5>
                            <p>You can get popular family cars and sports cars here.</p>
                        </div>
                        </div>
                        <div class="carousel-item">
                        <img src="https://images.pexels.com/photos/2922140/pexels-photo-2922140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="d-block w-100" height={750} alt="..."/>
                        <div class="carousel-caption d-none d-md-block">
                            <h5>ABC Automobiles</h5>
                            <p>You can get popular family cars and sports cars here.</p>
                        </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>



            <div className="container col-xxl-10 px-1 py-5">

                



                <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div className="col-10 col-sm-8 col-lg-6">
                        <img src="https://clay-works.com/wp-content/uploads/2018/12/2236-Mercedes-Me-restaurant-showroom.jpg" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="600" height="600" loading="lazy"/>
                    </div>
                    <div className="col-lg-6">
                        <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">ABC AUTOMOBILES</h1>
                        <p className="lead"><b>The world of automobiles is a vast and diverse one, offering a wide array of vehicles to suit every need and preference. 
                            From sleek and efficient compact cars designed for urban commuting to robust and rugged trucks built for heavy-duty work, 
                            the type of automobiles available on the market is truly impressive. The automotive industry continuously evolves, 
                            introducing innovative designs and technologies that cater to both practicality and luxury. 
                            Whether it's the classic charm of a vintage car, the eco-friendliness of electric vehicles, the power of sports cars, or the versatility of SUVs, 
                            there is an automobile to match every lifestyle and requirement</b></p>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                        <Link to="/vehicle"><button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Vehicles</button></Link>
                        <button type="button" className="btn btn-outline-secondary btn-lg px-4">SignIn</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Home;