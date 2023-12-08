import Styles from './section1.module.css';
import image1 from './img/img1.png';
import { NavLink } from 'react-router-dom';

function Section1() {
    return (
        <div id={Styles.container}>
            <div className={Styles.box1}>
                <h1>Ваш надежный криптовалютный серсис недвижимости</h1>
                <p>С помощью нашего сервиса Вы с легкостью сможете <br /> инвестировать с свое будущее</p>
                <NavLink to={'/register'} className={Styles.btn1}>Регистрация</NavLink>
                <NavLink to={'/login'} className={Styles.btn2}>Вход</NavLink>
            </div>
            <div className={Styles.box2}>
                <img src={image1} alt="img1" />
            </div>
        </div>
    )
}

export default Section1