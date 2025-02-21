import React from "react";
import CarCard from "./CarCard";

export default function CardList() {
    const cardInfo = [
        {   
            carPic: "/resources/thumbs/dzire.png",
            carName: "Maruti Dzire",
            type: "Sedan",
            fuel: "Petrol",
            mileage: "22 kmpl",
            passenger: "4",
            boot: "268L",
            drivetrain: "FWD"
        },
        {   
            carPic: "/resources/thumbs/creta.png",
            carName: "Hyundai Creta",
            type: "SUV",
            fuel: "Diesel",
            mileage: "19 kmpl",
            passenger: "5",
            boot: "433L",
            drivetrain: "FWD / AWD"
        },
        {   
            carPic: "/resources/thumbs/nexonev.png",
            carName: "Tata Nexon EV",
            type: "SUV",
            fuel: "Electric",
            mileage: "312 kmpc",
            passenger: "5",
            boot: "350L",
            drivetrain: "FWD"
        },
        {   
            carPic: "/resources/thumbs/xuv700.png",
            carName: "Mahindra XUV700",
            type: "SUV",
            fuel: "Diesel",
            mileage: "17 kmpl",
            passenger: "7",
            boot: "450L",
            drivetrain: "FWD / AWD"
        },
        {   
            carPic: "/resources/thumbs/tharroxx.png",
            carName: "Mahindra Thar Roxx",
            type: "SUV (5-Door)",
            fuel: "Petrol/Diesel",
            mileage: "16-17 kmpl",
            passenger: "5",
            boot: "300L",
            drivetrain: "4WD"
        },
        {   
            carPic: "/resources/thumbs/be6e.png",
            carName: "Mahindra BE 6e",
            type: "SUV",
            fuel: "Electric",
            mileage: "400 kmpc",
            passenger: "5",
            boot: "433L",
            drivetrain: "AWD"
        },
    ];

    return (
        <div className="container pt-4 py-2">
            <div className="row">
                {cardInfo.map((car, index) => (
                    <div key={index} className="col-lg-4 col-md-6 col-sm-12">
                        <CarCard
                            carPic={car.carPic}
                            carName={car.carName}
                            type={car.type}
                            fuel={car.fuel}
                            mileage={car.mileage}
                            passenger={car.passenger}
                            boot={car.boot}
                            drivetrain={car.drivetrain}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
