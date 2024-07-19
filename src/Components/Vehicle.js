import { useEffect, useState } from "react";
import axios from 'axios';

function Vehicle(){

    const [vehicles,setVehicles] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:5005/vehicles")
        .then(response=>{
            setVehicles(response.data);
        })
        .catch(error=>{
            console.log("Error occured when fetching the vehicles",error);
        })
    },[])
    return(
            <div className="container" style={{"fontFamily":"Cambria", "fontSize":20}}>
                <h1 style={{"marginTop":50, "fontWeight":600, "textAlign":"center"}}>Vehicles</h1><br/>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
                        {vehicles.map(vehicle=>(
                            <div className="col">
                            <div className="card shadow-sm">
                                <img src={vehicle.image} className="card-img-top" height={250} alt={vehicle.name}/>
                                <div className="card-body" >
                                    <p className="card-text"><b>Name: </b>{vehicle.name}</p>
                                    <p className="card-text"><b>Color: </b>{vehicle.color}</p>
                                    <p className="card-text"><b>Mileage: </b>{vehicle.mileage}</p>
                                    <p className="card-text"><b>Seats: </b>{vehicle.seats}</p>
                                    <p className="card-text"><b>Fuel Type: </b>{vehicle.fuel}</p>
                                    <p className="card-text"><b>Transmission Type: </b>{vehicle.gear}</p>
                                    <p className="card-text"><b>Description: </b>{vehicle.description}</p>
                                    <p className="card-text"><b>Price: </b>Rs.{vehicle.price}</p>
                                </div>
                            </div>
                            </div>
                        ))}
                </div>
            </div>
    )
}

export default Vehicle;