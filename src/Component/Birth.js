import { useState } from 'react';

// import {Alert, InputAdornment }from "@mui/material";
// import { Form } from 'react-router-dom';
import './Birth.css'
import { useNavigate } from 'react-router-dom';

function Birth() {
  const nav = useNavigate();
  const [gender, setGender] = useState("");
  const [district, setDistrict] = useState("");
  const [placeofbirth, setPlaceOfBirth] = useState("");
  const [date, setDate] = useState();
  const [fathername, setFatherName] = useState("");
  const [mothername, setMotherName] = useState("")
  const [phone, setPhone] = useState("");
  // const [isError, setIsError] = useState(false);
  // const [flag, setFlag] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if(!gender && !district && !placeofbirth && !date && !phone){
    //  setFlag(false)
    }else{
      // setFlag(true)
      localStorage.setItem("gender",JSON.stringify(gender));
      localStorage.setItem("district", JSON.stringify(district));
      localStorage.setItem("placeofbirth", JSON.stringify(placeofbirth));
      localStorage.setItem("date", JSON.stringify(date));
      localStorage.setItem("fathername", JSON.stringify(fathername));
      localStorage.setItem("mothername", JSON.stringify(mothername));
      localStorage.setItem("phone", JSON.stringify(phone));
      if(gender && district && placeofbirth && date && fathername && mothername && phone){
        nav('/Certificate');
      }
      console.log(gender, district, placeofbirth, date, fathername, mothername, phone);
    }
  }

  // function handleSubmit(){
  //   nav('/Certificate')
  // }

  return (
    <div className='div'>
      
      <nav>
        <a href='/'><button className='Home'>Home</button></a>
        <button className='pc'>PrintCertificate</button><a href='/Birth'>Birth</a><a href='/Death'>Death</a>
      </nav>
      <h2 className='text'>Birth Certificate</h2>
      <form className='form' onClick={handleFormSubmit} action="" >
        <div className='gender'>
        <label>Gender:
          <input type='radio' name="gender" value="Male" onChange={(e)=>setGender(e.target.value)}  />Male
          <input type='radio' name="gender" value="Female" onChange={(e)=>setGender(e.target.value)}  />Female
        </label>
        </div>
        <br />

        <label>District:
         <input type='text' className='district' onChange={(e)=>setDistrict(e.target.value)}  />
        </label>
        <br />

        <label>Place of Birth:
          <input type='radio' name='place of birth' value='hospital' className='pob' onChange={(e)=>setPlaceOfBirth(e.target.value)} />Hospital
          <input type='radio' name='place of birth' value='home'  onChange={(e)=>setPlaceOfBirth(e.target.value)} />Home/Others
        </label>
        <br />

        <label>Date of Birth:
          <input type='datetime-local' className='dob' onChange={(e)=>setDate(e.target.value)} />
        </label>
        <br />

        <label>Father name:
          <input type='text' className='fn' onChange={(e)=>setFatherName(e.target.value)} />
        </label>
        <br/>

        <label>Mother name:
          <input type='text' className='mn' onChange={(e)=>setMotherName(e.target.value)} />
        </label>
        <br/>

        <label>Phone:
          <input type='tel'  name='phone' className='phone' onChange={(e)=>setPhone(e.target.value)}/>
        </label>
        <br />
        <button className='btn'>Submit</button>
       
        {/* <p>{
          flag && <Alert></Alert>
          }</p> */}     
      </form> 
    </div>
  )
}

export default Birth

// error={isError}