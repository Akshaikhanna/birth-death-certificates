import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import tn from "../img/Tn.png";
import bnd from "../img/bnd.png";
import "./Death.css";

function Component1() {
  const [user, setUser] = useState({
    name: "",
    gender: "",
    placeofDeath: "",
    dateofDeath: "",
    phone: "",
  });
  const [state, setState] = useState(true);
  function handleSubmit(e) {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
    console.log(user.name);
  }

  // const download = (e) => {
  //   const formURL = "http://localhost:3000/Birth";
  //   const downloadLink = document.createElement('a');
  //   downloadLink.href = formURL;
  //   downloadLink.target = '';
  //   downloadLink.download = 'Certificate.jpg';
  //   document.body.appendChild(downloadLink);
  //   downloadLink.click();
  //   document.body.removeChild(downloadLink)
  // }

  const download = async () => {
    await fetch("form.pdf").then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "certificate.pdf";
        alink.click();
        window.print();
      });
    });
    setState(false);
  };

  return (
    <div>
      <img src={tn} alt="" className="tn" />
      <img src={bnd} alt="" className="bnd" />
      <h1>Government of Tamil Nadu</h1>
      <h1>Death Certificate</h1>
      <nav className="nav1">
        <Link to="/">
          <button className="home">Home</button>
        </Link>
      </nav>
      {state && (
        <form className="form1">
          <div div className="g">
            <label> *Gender:</label>
            <select id="gender" name="gender" onChange={handleSubmit}>
              <option value="Select option" onChange={handleSubmit}>
                Select Option
              </option>
              <option value="Male" onChange={handleSubmit}>
                Male
              </option>
              <option value="Female" onChange={handleSubmit}>
                Female
              </option>
              <option value="Transgender" onChange={handleSubmit}>
                Transgender
              </option>
            </select>
          </div>
          <br />
          <div className="district">
            <label>*District:</label>
            <select id="name" name="name" onChange={handleSubmit}>
              <option value="Select District" onChange={handleSubmit}>
                Select District
              </option>
              <option value="Ariyalur" onChange={handleSubmit}>
                AriyalurAriyalur
              </option>
              <option value="Chengalpattu" onChange={handleSubmit}>
                ChengalpattuChengalpattu
              </option>
              <option value="Chennai" onChange={handleSubmit}>
                ChennaiChennai
              </option>
              <option value="Coimabatore" onChange={handleSubmit}>
                CoimbatoreCoimbatore
              </option>
              <option value="Cuddalore" onChange={handleSubmit}>
                CuddaloreCuddalore
              </option>
              <option value="Dharmapuri" onChange={handleSubmit}>
                DharmapuriDharmapuri
              </option>
              <option value="Dindigul" onChange={handleSubmit}>
                DindigulDindigul
              </option>
              <option value="Erode" onChange={handleSubmit}>
                ErodeErode
              </option>
              <option value="Kallakurichi" onChange={handleSubmit}>
                KallakurichiKallakurichi
              </option>
              <option value="kancheepuram" onChange={handleSubmit}>
                KancheepuramKancheepuram
              </option>
              <option value="Karur" onChange={handleSubmit}>
                KarurKarur
              </option>
              <option value="Krishnagiri" onChange={handleSubmit}>
                KrishnagiriKrishnagiri
              </option>
              <option value="Madurai" onChange={handleSubmit}>
                MaduraiMadurai
              </option>
              <option value="Mayiladuthurai" onChange={handleSubmit}>
                MayiladuthuraiMayiladuthurai
              </option>
              <option value="Nagapattinam" onChange={handleSubmit}>
                NagapattinamNagapattinam
              </option>
              <option value="Kanyakumari" onChange={handleSubmit}>
                KanyakumariNagercoil
              </option>
              <option value="Nammakaal" onChange={handleSubmit}>
                NamakkalNamakkal
              </option>
              <option value="Perambalur" onChange={handleSubmit}>
                PerambalurPerambalur
              </option>
              <option value="Pudukottai" onChange={handleSubmit}>
                PudukottaiPudukkottai
              </option>
              <option value="Ramanathapuram" onChange={handleSubmit}>
                RamanathapuramRamanathapuram
              </option>
              <option value="Ranipet" onChange={handleSubmit}>
                RanipetRanipet
              </option>
              <option value="Salem" onChange={handleSubmit}>
                SalemSalem
              </option>
              <option value="Sivagangai" onChange={handleSubmit}>
                SivagangaiSivagangai
              </option>
              <option value="Tenkasi" onChange={handleSubmit}>
                TenkasiTenkasi
              </option>
              <option value="Thanjavur" onChange={handleSubmit}>
                ThanjavurThanjavur
              </option>
              <option value="Theni" onChange={handleSubmit}>
                TheniTheni
              </option>
              <option value="Thiruvallur" onChange={handleSubmit}>
                ThiruvallurThiruvallur
              </option>
              <option value="Thiruvarur" onChange={handleSubmit}>
                ThiruvarurThiruvarur
              </option>
              <option value="Tuticorin" onChange={handleSubmit}>
                TuticorinThoothukudi
              </option>
              <option value="Trichirapalli" onChange={handleSubmit}>
                TrichirappalliTiruchirappalli
              </option>
              <option value="Tirunelveli" onChange={handleSubmit}>
                ThirunelveliTirunelveli
              </option>
              <option value="Tirupathur" onChange={handleSubmit}>
                TirupathurTirupathur
              </option>
              <option value="Tiruppur" onChange={handleSubmit}>
                TiruppurTiruppur
              </option>
              <option value="Tiruvanmalai" onChange={handleSubmit}>
                TiruvannamalaiTiruvannamalai
              </option>
              <option value="Nilgiris" onChange={handleSubmit}>
                The NilgirisUdagamandalam (Ootacamund)
              </option>
              <option value="Vellore" onChange={handleSubmit}>
                VelloreVellore
              </option>
              <option value="Viluppuram" onChange={handleSubmit}>
                ViluppuramViluppuram
              </option>
              <option value="Virudhunagar" onChange={handleSubmit}>
                VirudhunagarVirudhunagar
              </option>
            </select>
          </div>
          <br />
          <div className="pod">
            <label>*Place of death:</label>
            <input
              type="text"
              name="placeofDeath"
              value={user.placeofDeath}
              onChange={handleSubmit}
            />
          </div>
          <br />
          <div className="bod">
            <label>*Date of Death: </label>
            <input
              type="datetime-local"
              name="dateofDeath"
              value={user.dateofDeath}
              onChange={handleSubmit}
            />
          </div>
          <br />
          <div className="Phone">
            <label>Phone:</label>
            <input
              type="text"
              name="phone"
              value={user.phone}
              onChange={handleSubmit}
            />
          </div>
        </form>
      )}
      <Component3 user={user} />
      <button onClick={(e) => download(e)} className="btnd1">
        Download Certificate
      </button>
    </div>
  );
}

function Component3({ user }) {
  const nav = useNavigate();
  function handleClick() {
    nav("/Certificate");
  }
  return (
    <>
      <div className="F2">
        <div>
          <img src={tn} alt="" className="tn3" />
          <img src={bnd} alt="" className="bnd3" />
        </div>
        <div className="hd">
          <h2>Government of Tamil Nadu</h2>
          <h2>Death Certificate</h2>
        </div>
        <div className="ot2">
          <h3>{`Gender: ${user.gender} `}</h3>
          <h3>{`District: ${user.name} `}</h3>
          <h3>{`PlaceofDeath: ${user.placeofDeath} `}</h3>
          <h3>{`DateofDeath: ${user.dateofDeath} `}</h3>
          <h3>{`Phone: ${user.phone} `}</h3>
        </div>
      </div>
      <button onClick={handleClick}>next</button>
    </>
  );
}

export default Component1;
