import React from 'react';
import style from "./Auth.module.scss"
const Auh = () => {
    return (
        <div className={style.container}>
            <button className={style.close_button}>&times;</button>
            <div className={style.header}>Войти в систему</div>
            <div className={style.form_group}>
                <input type="text" placeholder="Email/Телефон"/>
                    <input type="password" placeholder="Пароль"/>
                        <div className={style.checkbox_container}>
                            <input type="checkbox" id="remember"/>
                                <label htmlFor="remember">Запомнить пароль</label>
                        </div>
            </div>
            <a href="#" className={style.link}>Восстановить</a>
            <button className={style.button}>Войти</button>
            <button className={`${style.button} ${style.secondary_button}`}>Зарегистрироваться</button>
        </div>
    );
};

export default Auh;