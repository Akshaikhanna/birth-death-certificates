import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Death.css';

function Death() {
  const nav = useNavigate();
  const [gender, setGender] = useState("");
  const [district, setDistrict] = useState("");
  const [placeofdeath, setPlaceOfDeath] = useState("");
  const [date, setDate] = useState("");
  const [fathername, setFatherName] = useState("");
  const [mothername, setMotherName] = useState("")
  const [phone, setPhone] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if(!gender && !district && !placeofdeath && !date && !fathername && !mothername && !phone){

    }else{
      localStorage.setItem("gender",JSON.stringify(gender));
      localStorage.setItem("district", JSON.stringify(district));
      localStorage.setItem("placeofdeath", JSON.stringify(placeofdeath));
      localStorage.setItem("date", JSON.stringify(date));
      localStorage.setItem("fathername", JSON.stringify(fathername));
      localStorage.setItem("mothername", JSON.stringify(mothername));
      localStorage.setItem("phone", JSON.stringify(phone));
      if(gender && district && placeofdeath && date && fathername && mothername && phone){
       nav("/Certificate")
      }
      console.log(gender, district, placeofdeath, date, phone); 
    }
  }

  return (
    <div>
      <nav>
        <a href='/'><button className='btn3'>Home</button></a>
        <button className='btn4'>PrintCertificate</button>
      </nav>
      <h2 className='txt1'>Death Certificate</h2>
      <form className='form' onClick={handleFormSubmit}>
        <label>*Gender:
          <input type='radio' name='gender' value="Male" className='gender1' onChange={(e)=>setGender(e.target.value)} />Male
          <input type='radio' name='gender' value="Female"  onChange={(e)=>setGender(e.target.value)} />Female
        </label>
        <br />

        <label>*District:
          <input type='dropdown' name='district'  className='district1' onChange={(e)=>setDistrict(e.target.value)} />
        </label>
        <br />

        <label>*Place of Death:
          <input type='radio' name='place of death' value='hospital' className='pob1' onChange={(e)=>setPlaceOfDeath(e.target.value)}/>Hospital
          <input type='radio' name='place of death' value='home' onChange={(e)=>setPlaceOfDeath(e.target.value)} />Home/Others
        </label>
        <br />

        <label>*Date of Death:
          <input type='datetime-local' className='dob1' onChange={(e)=>setDate(e.target.value)} />
        </label>
        <br />
        
        <label>Father name:
          <input type='text' classname='fn' onChange={(e)=>setFatherName(e.target.value)} />
        </label>
        <br/>

        <label>Mother name:
          <input type='text' classname='mn' onChange={(e)=>setMotherName(e.target.value)} />
        </label>
        <br/>

        <label>Phone:
          <input type='text' name='phone' className='phone1'  onChange={(e)=>setPhone(e.target.value)} />
        </label>
        <br />

       <button className='btn' type='submit'>Submit</button>

      </form>
    </div>
  )
}

export default Death