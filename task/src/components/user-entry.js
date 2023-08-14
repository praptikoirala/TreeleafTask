import React, { useState} from "react";
import {Link } from "react-router-dom";

import Form from "./form";
import InputGroup from "./inputgroup";
import Button from "./button";
import DetailsTable from "./details-table";

import { randomAlphanumericValue } from "../lib/id-generator";

const UserEntry = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [date, setDate] = useState("");

    //for address
    const [province, setProvince] = useState("Bagmati");
    const [city, setCity] = useState("");
    const [district, setDistrict] = useState("");
    const [country, setCountry] = useState("Nepal");

    const [error, setError] = useState("");
    const [displayTable, setDisplayTable] = useState(false);

    const inputStyle = "w-[8.5rem]";

    const provinceOptions = [
        { label: "Bagmati", value: "Bagmati" },
        { label: "Province no 1", value: "Province no 1" },
        { label: "Lumbini", value: "Lumbini" },
        { label: "Sudurpaschim", value: "Sudurpaschim" },
        { label: "Madhesh", value: "Madhesh" },
        { label: "Gandaki", value: "Gandaki" },
        { label: "Karnali", value: "Karnali" },
    ];

    const validateUserInput = () => {
        
        //check name is valid
        const validName = /^[A-Za-z\s]+$/.test(name);
        const validEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);

        //name, email, number cannot be empty
        if(name === ""){
            setError("*name cannot be empty");
        }else{
            if(!validName){
                setError("*name not valid");
            }else{
                if(email === ""){
                    setError("*email cannot be empty");
                }else{
                    if(!validEmail){
                        setError("*email not valid");
                    }else{
                        if(number === ""){
                            setError("*number cannot be empty");
                        }else{
                            if(number.length < 7){
                                setError("*atleast 7 digits long");
                            }else{
                                return true;
                            }
                        }
                    }
                }
            }
        }
  
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();

        let id = randomAlphanumericValue();

        //clearError
        setError("");

        const result = validateUserInput();

        if(result){
            const userData = {id, name, email, number,  date, country, province, city, district};

            let storedData = JSON.parse(localStorage.getItem('details'));

            if(storedData == null){
                localStorage.setItem('details', JSON.stringify([userData]));
            }else{
                storedData.push(userData);
                localStorage.setItem('details', JSON.stringify(storedData));
            }

            //display table
            setDisplayTable(true);

            //clear fields
            setName("");
            setEmail("");
            setNumber("");
            setDate("");
        }    
    }

    return(
        <div className="min-h-screen text-dark justify-center items-center">
            <div className="flex flex-col mx-auto w-fit mt-7 mb-5">
                <Form heading="User Details" onSubmit={handleFormSubmit}>
                    <InputGroup label="Name" type="text" placeholder="your name" value={name} onChange={setName} isRequired={true} />
                    <InputGroup label="Email" type="text" placeholder="your email" value={email} onChange={setEmail} isRequired={true} />
                    <InputGroup label="Phone Number" type="number" placeholder="number must be atleast 7 digits" value={number} onChange={setNumber} isRequired={true} />
                    <InputGroup label="DOB" type="date" placeholder="your name" value={date} onChange={setDate} />

                    <div>
                        <div className="flex items-center justify-between">
                           <div className={inputStyle}>
                            <InputGroup
                                    label="Country"
                                    value={country}
                                    onChange={setCountry}
                                />
                           </div>
                           <div className={inputStyle}>
                                <InputGroup
                                    label="Province"
                                    view="select"
                                    options={provinceOptions}
                                    value={province}
                                    onChange={setProvince}
                                />
                           </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className={inputStyle}>
                                <InputGroup
                                    label="City"
                                    placeholder="e.g kathmandu"
                                    value={city}
                                    onChange={setCity}
                                />
                            </div>
                            <div className={inputStyle}>
                                <InputGroup
                                    label="District"
                                    placeholder="e.g. kathmandu"
                                    value={district}
                                    onChange={setDistrict}
                                />
                            </div>
                        </div>
                    </div>

                    {error && <span className='text-sm text-error mb-1'>{error}</span>}
                    
                    <Button onClick={handleFormSubmit}>Submit Details</Button>
                </Form>
            </div>
           {displayTable &&  <div className="flex flex-col items-center ml-5">
            <DetailsTable />
                <Link to="/profile">
                    <Button>Show Profile</Button>
                </Link>
            </div>}
        </div>
    )
}

export default UserEntry;
