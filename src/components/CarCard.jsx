import React, { useState } from "react";

const CarCard = ({ carPic, carName, type, fuel, mileage, passenger, boot, drivetrain }) => {
    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);

    const handleLikes = () => (setLikes(likes + 1));
    const handleDeisLikes = () => (setDislikes(dislikes + 1));

    return (
        <div className="card m-2" >
            <img src={carPic} className="card-img-top" alt="Car Image"></img>
            <div className="card-body">
                <div className="col-12 text-center">
                    <h5>{carName}</h5>
                </div>
                <hr></hr>
                <div className="row d-flex justify-content-between align-items-center">

                    <div className="col-6 p-1 d-flex align-items-center justify-content-between">
                        <img src="/resources/icons/carIcon.png" className="col-3 me-2" style={{ width: "24px", height: "18px" }} alt="Car Icon" />
                        <div className="col-9 text-center">
                            <p className="mb-0">{type}</p>
                        </div>
                    </div>

                    <div className="col-6 p-1 d-flex align-items-center justify-content-between">
                        <img src="/resources/icons/fuelIcon.png" className="col-3 me-2" style={{ width: "24px", height: "18px" }} alt="Car Icon" />
                        <div className="col-9 text-center">
                            <p className="mb-0">{fuel}</p>
                        </div>
                    </div>

                    <div className="col-6 p-1 d-flex align-items-center justify-content-between">
                        <img src="/resources/icons/gasIcon.png" className="col-3 me-2" style={{ width: "24px", height: "18px" }} alt="Car Icon" />
                        <div className="col-9 text-center">
                            <p className="mb-0">{mileage}</p>
                        </div>
                    </div>

                    <div className="col-6 p-1 d-flex align-items-center justify-content-between">
                        <img src="/resources/icons/peopleIcon.png" className="col-3 me-2" style={{ width: "24px", height: "18px" }} alt="Car Icon" />
                        <div className="col-9 text-center">
                            <p className="mb-0">{passenger}</p>
                        </div>
                    </div>

                    <div className="col-6 p-1 d-flex align-items-center justify-content-between">
                        <img src="/resources/icons/bootIcon.png" className="col-3 me-2" style={{ width: "24px", height: "18px" }} alt="Car Icon" />
                        <div className="col-9 text-center">
                            <p className="mb-0">{boot}</p>
                        </div>
                    </div>

                    <div className="col-6 p-1 d-flex align-items-center justify-content-between">
                        <img src="/resources/icons/drivetrainIcon.png" className="col-3 me-2" style={{ width: "24px", height: "24px" }} alt="Car Icon" />
                        <div className="col-9 text-center">
                            <p className="mb-0">{drivetrain}</p>
                        </div>
                    </div>

                    <div className="d-flex justify-content-between gap-3 mt-3">
                        <div className="btn btn-success flex-grow-1" onClick={handleLikes}>
                            👍 Like {likes}
                        </div>
                        <div className="btn btn-danger flex-grow-1" onClick={handleDeisLikes}>
                            👎 Dislike {dislikes}
                        </div>
                    </div>

                    <h6 className="col-12 mt-3 text-center">Total Rating: {likes + dislikes}</h6>
                    
                </div>
            </div>
        </div>
    );
};

export default CarCard;
