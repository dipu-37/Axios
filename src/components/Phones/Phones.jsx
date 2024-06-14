import axios from "axios";
import { useEffect, useState } from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';


const Phones = () => {
    const [phones, setphones]=useState([])
    useEffect(()=>{
        axios.get(' https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(data => {
            const phoneData = data.data.data;
            const phonewithFackData = phoneData.map(phone =>{
                

                const obj ={
                    name : phone.phone_name,
                    price : parseInt(phone.slug.split('-')[1])
                }
                return obj;

                })
                
                console.log(phonewithFackData);
                setphones(phonewithFackData)
                 
            });

            
           
        
            
           
    },[])
    return (
        <div>
            <h2>phones length: {phones.length}</h2>
            <LineChart width={400} height={200} data={phones}>
        <Line type="monotone" dataKey="price" stroke="#8884d8" />
        
        <XAxis dataKey="name" />
        <YAxis />
      </LineChart>
        </div>
    );
};

export default Phones;