import React from 'react'
import  { useState } from "react";
//import axios from 'axios'
import { useNavigate  } from "react-router-dom";



const Adduser = () => {

    let history = useNavigate ();
    const [user, setUser] = useState({
      id: "",
      first_name : "",
      second_name: "",
      last_name: "",  
      date_of_birth: "",
      email_id: "",
      phone_number: "",
      state: "",
      district: "",
      aadhar_card_no: "",
      dl_card_no: "",
      current_assigned_bike: ""
      
    });
    const { id,
        first_name ,
        second_name,
        last_name,  
        date_of_birth,
        email_id,
        phone_number,
        state,
        district,
        aadhar_card_no,
        dl_card_no,
        current_assigned_bike } = user;

        const onInputChange = e => {
            setUser({ ...user, [e.target.name]: e.target.value });
          };
        
          const onSubmit = async e => {
            e.preventDefault();
            //await axios.post("http://localhost:3003/users/create", user);
            history("/list");
           console.log(user)
          };

  return (
    <div>Adduser</div>
  )
}

export default Adduser