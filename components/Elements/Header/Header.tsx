import React, {useState} from "react";
import Img from "../../../assets/images/Biocal_LogoTypo-2.png"
import "./Header.module.scss";

export function Header() {
    const [data, setData] = useState(null);

    return (
      <>
          <img src={Img} height={80} width={260} alt="mon image" />
      </>
    );

}
