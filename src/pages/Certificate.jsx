// import React, { useState } from 'react'
// import tn from '../img/Tn.png'
// import bnd from '../img/bnd.png'
// import './Certificate.css';


// function Component2() {
//     const [user, setUser] =useState({
//         name:"",
//         gender:"",
//         placeofbirth: "",
//         dateofbirth: "",
//         fathername: "",
//         mothername: "",
//         phone: ""
//     });

//     function handleClick(e){
//       const name = e.target.name;
//       const value = e.target.value;
//       setUser({...user, [name]: value})
//       console.log(user.name);
//       window.print()
//     }
//   return (
//     <div>
//       <div className='ot3'>
//       <form>
//         <div>
//           <img src={tn} alt='' className='tn2' />
//           <img src={bnd} alt='' className='bnd2' />
//         </div>
//         <h3 className='titles'>Government of Tamil Nadu</h3>
//         <h3 className='birth'>Birth Certificate </h3>
//         <div id='output' name="output" className='users'>
//           <h3>{`Gender: ${user.gender} `}</h3>
//           <h3>{`District: ${user.name} `}</h3>
//           <h3>{`Placeofbirth: ${user.placeofbirth} `}</h3>
//           <h3>{`Dateofbirth: ${user.dateofbirth} `}</h3>
//           <h3>{`Fathername: ${user.fathername} `}</h3>
//           <h3>{`Mothername: ${user.mothername} `}</h3>
//           <h3>{`Phone: ${user.phone} `}</h3>
//         </div>
//       </form>
      
//     </div>
//     <button onClick={handleClick} className='dnl'>Download</button>
//     </div>
//   )
// }

// export default Component2;