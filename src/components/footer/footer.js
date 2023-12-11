import Style from "./footer.module.css"
import { NavLink } from "react-router-dom"
import img from "./img/img.png"
import logo from "./img/logo.png"
import telegram from "./img/telegram.png"
import facebook from "./img/facebook.png"
import google from "./img/google.png"
import discord from "./img/discord.png"
function Footer() {
  return (
    <div className={Style.footer}>
      <img src={img} className={Style.img} alt="footer" />

      <div className={Style.footer1}>
        <NavLink to="/"> <img src={logo} className={Style.img1} alt="logo" /></NavLink>
        <h4>© 2021 НАЗВАНИЕ</h4>

        <div className="icon">
          <img src={telegram} alt="telegram" />
          <img src={facebook} alt="facebook" />
          <img src={google} alt="google" />
          <img src={discord} alt="discord" />
        </div>
        
      </div>
    </div>
  )
}

export default Footer