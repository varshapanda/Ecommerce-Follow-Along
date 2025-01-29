import axios from 'axios'
import { useEffect, useState } from "react";
import AddressList from "../components/AllAddress/Addresses";

export default function SelectAddress(){
    const [AllAddresses, setAllAddresses]=useState([]);
    useEffect(()=>{
        const fetchAddress = async()=>{
            const token = localStorage.getItem('token');
            if(!token){
                alert('token missing, login please')
            }
            const response = await axios.get(
                `http://localhost:8080/user/get-addresses?token=${token}`
            )
            // console.log(response)
            console.log(response.data.userInfo);
            setAllAddresses(response.data.userInfo.address);
            
        }
        fetchAddress();
    },[]);
    return (
        <div>
            <AddressList addresses={AllAddresses}/>
        </div>
    )
}