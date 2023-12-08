import Styles from "./section4.module.css"

function Section4() {

    return (
        <div   className={Styles.Section4}>
                <h1>О нас</h1>
                <div className={Styles.Ichi}>
                    <div className={Styles.section4left}>
                        <h3>Начните свое путешествие в мире </h3>
                        <h3>криптовалюты с надежным партнером</h3>
                        <p>Cat.Ex, созданная в августе 2018 года, является одной из</p>
                        <p>крупнейших бирж криптовалют в мире. Наша штаб</p>
                        <p>-квартира находится в Шэньчжэне, Китай. У нас есть</p>
                        <p> глобальные сообщества в Южной Корее, Китае,</p>
                        <p> Бангладеш, России, Турции, на Ближнем Востоке, в</p>
                        <p> Индии, Индонезии и США. Мы используем процесс,</p>
                        <p>называемый майнингом транзакций, чтобы пользователи</p>
                        <p> могли получать дивиденды с нашей платформы</p>
                        <p>   распределения прибыли.</p>
                    </div>
                    <div  className={Styles.section4right}>
                        <div  className={Styles.rasm}></div>
                    </div>
                </div>
        </div>
    )
}
export default Section4