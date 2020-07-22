import React, {useState} from "react";
import Img_logo from "../../../assets/images/Biocal_LogoTypo-2.png"
import Img_jauge from "../../../assets/images/Biocal_Jauge.png"
import "./Header.module.scss";

export function Header() {
    const [data, setData] = useState(null);

    return (
      <>
          <div style={{backgroundColor : "white"}}>

          <img src={Img_logo}  height={80} width={260} alt="mon image" />
          <img src={Img_jauge} height={90} width={100} alt="mon image" />
          </div>
      </>
    );

}
