import Styles from './login.module.css'

function Login() {
    return (
        <div className={Styles.Register}>
            <div className={Styles.modal}>
                <div className={Styles.tepa}>
                    <h3>Вход</h3>
                </div>
                <div className="inp1">
                    <input type="email" name="inp1" id={Styles.inp1} placeholder='Почта' />
                </div>
                <div className="inp2">
                    <input type="password" name="inp2" id={Styles.inp2} placeholder='Пароль' />
                </div>
                <div className={Styles.rad}>
                    <input type="checkbox" id='inp3' />
                    <p>Запомнить меня</p>
                </div>
                <button className={Styles.btnn}>Подтвердить</button>
                <div className={Styles.ico}>
                    <i id={Styles.ic1} class="fa-brands fa-facebook"></i>
                    <i id={Styles.ic2} class="fa-brands fa-google"></i>
                </div>
            </div>
        </div>
    )
}

export default Login