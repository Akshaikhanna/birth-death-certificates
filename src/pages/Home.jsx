import React from 'react'
import './Home.css'
import logo1 from '../img/logo1.png'
import tn from '../img/Tn.png'
//  import { useNavigate } from 'react-router-dom'
import bnd from "../img/bnd.png"

function Home() {
  //  const navigate = useNavigate();
  const onButtonClick = () => {
    fetch('About_us.pdf').then(response => {
      response.blob().then(blob => {
        const fileURL = window.URL.createObjectURL(blob)
        let alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = 'About_us.pdf';
        alink.click()
      })
    })
  }

  //  function handleClick(){
  //   navigate("/login")
  //  }
  return (

    <div>
      <div className='t'>
        <img src={tn} alt='' className='tn' />
        <img src={bnd} alt='' className='bnd' />
        <div className='t1'>
          <h2 className='title'>Government of Tamil Nadu</h2>
        </div>
        <h2>BIRTH AND DEATH CERTIFICATE</h2>
      </div>

      <div>
        <nav className='nav'>
          <button className='btn6' onClick={onButtonClick}>About us</button>
          <a href='/Login'><button className='btn5' type='submit' >Login</button></a>
        </nav>
        <div>
          <img src={logo1} alt='' className='img' />
        </div>
      </div>
      <div className='hp'>
        <form>
          <div className='hp1'>
            <h4>Information</h4>
            <p>The birth and death certificates can be downloaded <br />
              from this portal for the births and deaths registered<br />
              from 01.01.2023. Prior to 01.01.2023, respective local<br />
              bodies may be approached for getting birth and <br />
              death certificate.</p>
          </div>
          <h4>Public Online Services</h4>
          <p>In respect of births and deaths in a hospital, health center, maternity or nursing home or<br />
            other like institutions, responsibility of informing the events to the registrar <br />
            is by the Institution as per Registration of Birth and Death Act, 1969.</p>

          <h4>Institutions</h4>
          <p>Registrars have been appointed for each local area under Section 7 of the RBD Act,<br />
            1969 for registration of births and deaths occur in their jurisdiction.</p>

          <h4>Registration</h4>
          <p>Citizen should inform about the occurrence of birth and death at home within<br />
            21 days to the Registrar of their jurisdiction.</p>
        </form>
      </div>
    </div>
  )
}

export default Home;