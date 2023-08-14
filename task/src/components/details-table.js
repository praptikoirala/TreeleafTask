import React, { useEffect, useState } from 'react';

import { AiOutlineSortAscending } from 'react-icons/ai';
import {RiDeleteBinLine} from "react-icons/ri";
import {BiEditAlt} from "react-icons/bi";

const DetailsTable = () => {
    const [storedData, setStoredData] = useState([]);

    useEffect(() => {
        const localData = JSON.parse(localStorage.getItem('details'));

        if(localData !== null){
            setStoredData(localData);
        }
    }, [storedData])

    const tableStyle = `w-fit px-5 py-1.5 border-r`;
    const iconStyle = `hover:cursor-pointer hover:text-dark-light`;

    const handleSorting = () => {
        console.log("sort");
    }

    const handleDeletion = (id) => {
        const newData = storedData.filter((data) => data.id !== id);

        localStorage.setItem('details', JSON.stringify(newData));
    }

    return(
        <div className='mb-3'>
            <h1 className='text-xl text-center'>
                USER INFO
            </h1>
            <table className={`border-t border-l mt-3`}>
                <thead>
                    <tr className='border-b'>
                        <th className={`${tableStyle} flex items-center justify-center`}>Name<span className= "text-dark-light ml-1 hover:cursor-pointer hover:text-dark" onClick={handleSorting}><AiOutlineSortAscending /></span></th>
                        <th className={tableStyle}>Email</th>
                        <th className={tableStyle}>Number</th>
                        <th className={tableStyle}>DOB</th>
                        <th className={tableStyle}>Country</th>
                        <th className={tableStyle}>Province</th>
                        <th className={tableStyle}>District</th>
                        <th className={tableStyle}>City</th>
                        <th className={tableStyle}>Actions</th>            
                    </tr>    
                </thead>
                <tbody>
                    {storedData.map((data, index) => {
                        return(
                            <tr key={index} className={`border-b ${index % 2 === 0 ?  `bg-gray-light` : `bg-none`}`}>
                                <td className={tableStyle}>{data.name}</td>
                                <td className={tableStyle}>{data.email}</td>
                                <td className={tableStyle}>{data.number}</td>
                                <td className={tableStyle}>{data.date ? data.date : "N/A"}</td>
                                <td className={tableStyle}>{data.country}</td>
                                <td className={tableStyle}>{data.province}</td>
                                <td className={tableStyle}>{data.district}</td>
                                <td className={tableStyle}>{data.city ? data.city : "N/A"}</td>
                                <td className={tableStyle}> 
                                    <div className='flex'>
                                        <p className={`mr-5 ${iconStyle}`}><BiEditAlt /></p>
                                        <p className={iconStyle} onClick={() => handleDeletion(data.id)}><RiDeleteBinLine /></p>
                                    </div>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            
        </div>
    )
}

export default DetailsTable;