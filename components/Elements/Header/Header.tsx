import React, {useState} from "react";
import Img_logo from "../../../assets/images/Biocal_LogoTypo-2.png"
import Img_jauge from "../../../assets/images/Biocal_Jauge.png"
import "./Header.module.scss";
import {StyleSheet} from "react-native";

export const Header = (props:{showjauge : boolean}) : any => {
    const [data, setData] = useState(null);

    return (
      <>
          <div style={{backgroundColor : "white", display : "grid", gridTemplateColumns : "repeat(3,1fr)",textAlign:"center", padding:"2vh"}}>

          <img src={Img_logo} style={{width : "100%",gridColumn: "1 / 3",height : "10vh"}}  alt="mon image" />
              {props.showjauge ? (
                  <div style={{width : "100%",gridColumn: "3 / 4",height : "10vh", display:"grid",gridTemplateRows : "repeat(3,1fr)" }}>
                      <img src={Img_jauge} style={{gridRow : "1 / 3",height : "7vh"}} alt="mon image" />
                      <p style={{margin : "0", fontFamily : "Biocal", paddingTop:"1vh"}}>50 pts</p>
                  </div>
              ):
              ''
              }
          </div>
      </>
    );

}
