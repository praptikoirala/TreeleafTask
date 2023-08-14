import React, { useState, useEffect } from "react";
import {RiDeleteBinLine} from "react-icons/ri";
import {BiEditAlt, BiLogoGmail} from "react-icons/bi";
import {FaUserCircle} from 'react-icons/fa';
import {HiLocationMarker} from 'react-icons/hi';
import {AiFillPhone} from 'react-icons/ai';
import {BsCalendarDate} from 'react-icons/bs';

const ProfileContainer = () => {
    const [storedData, setStoredData] = useState([]);

    useEffect(() => {
        const localData = JSON.parse(localStorage.getItem('details'));

        if(localData !== null){
            setStoredData(localData)
        }
    },[storedData]);

    const handleProfileDeletion = (id) => {
        const newData = storedData.filter((data) => data.id !== id);

        localStorage.setItem('details', JSON.stringify(newData));
    }

    const iconStyle = `hover:cursor-pointer hover:text-dark-light`;
    const iconStyle2 = `text-lg mr-1.5`;
    const iconDiv = `flex items-center`;

    return <div className="grid grid-cols-4 gap-x-3 gap-y-7 text-dark mx-11 my-5">
        {storedData.map((data, index) => {
            return(
                <div key={index} className="w-[17rem] bg-gray-light rounded-lg p-3 shadow-lg">
                    <div className="flex justify-between overflow-x-auto">
                        <div className="space-y-[0.25rem]">
                            <h1 className={iconDiv}><span className={iconStyle2}><FaUserCircle /></span>{data.name}</h1>
                            <h1 className={iconDiv}><span className={iconStyle2}><BiLogoGmail /></span>{data.email}</h1>
                            <h1 className={iconDiv}><span className={iconStyle2}><AiFillPhone /></span>{data.number}</h1>
                            <h1 className={iconDiv}><span className={iconStyle2}><BsCalendarDate /></span>{data.date ? data.date : "N/A"}</h1>
                            <div className={iconDiv}>
                                <span className={iconStyle2}><HiLocationMarker /></span>
                                <p>{data.country}, {data.province}, {data.district ?  data.district + ',' : 'N/A ,' } {data.city ? data.city : 'N/A'}</p>
                            </div>
                        </div>
                        <div>
                            <p className={iconStyle}><BiEditAlt /></p>
                            <p className={`${iconStyle} mt-2`} onClick={() => handleProfileDeletion(data.id)}><RiDeleteBinLine /></p>
                        </div>
                    </div>
                </div>
            )
        })}
    </div>
}

export default ProfileContainer;