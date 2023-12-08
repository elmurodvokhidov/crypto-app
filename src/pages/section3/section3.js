import Styles from './section3.module.css';
import Card from './components/card';
import Image1 from './img/Vector.png';
import Image2 from './img/Group.png';
import Image3 from './img/Component 20 (1).png'
import Image4 from './img/Group 93.png';
import Image5 from './img/Group 94 (1).png'

function Section3() {
    return (
        <div className={Styles.asos}>
            <Card header={"Регистрация"} image={Image1} footer={"Шаг 1"} />
            <Card header={"Пополнение счета"} image={Image2} footer={"Шаг 2 "} />
            <Card header={"Отслеживание по графику"} image={Image3} footer={"Шаг 3"}/>
            <Card header={"Продажа монет"} image={Image4} footer={"Шаг 4"}/>
            <Card header={"Вывод прибыли"} image={Image5} footer={"Шаг 5"}/>
        </div>
    )
}

export default Section3