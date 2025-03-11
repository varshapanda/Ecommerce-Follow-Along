import axios from 'axios'
import { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import AddressList from "../components/AllAddress/Addresses";

export default function SelectAddress(){
    const [AllAddresses, setAllAddresses]=useState([]);
    const data = useSelector((state) => state.user);
    useEffect(()=>{
        const fetchAddress = async()=>{
            const token = localStorage.getItem('token');
            if(!token){
                alert('token missing, login please')
            }
            const response = await axios.get(
                `https://ecommerce-follow-along-tbuy.onrender.com/user/get-addresses?token=${token}`
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