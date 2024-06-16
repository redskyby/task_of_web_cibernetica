import React from "react";
import style from "./Auth.module.scss";
const Auth = ({ show, hidden }: { show: boolean; hidden: React.Dispatch<React.SetStateAction<boolean>> }) => {
    const showOffModalForm = (e: React.MouseEvent) => {
        e.stopPropagation();
        hidden(false);
    };

    return (
        <div className={style.first_block}>
            {show && <div className={style.second_block} onClick={(e) => showOffModalForm(e)} />}
            <div className={show ? style.module_show : style.module_hide}>
                <button className={style.close_button} onClick={() => hidden(false)}>
                    &times;
                </button>
                <div className={style.header}>Войти в систему</div>
                <div className={style.form_group}>
                    <input type="text" placeholder="Email/Телефон" />
                    <input type="password" placeholder="Пароль" />
                    <div className={style.checkbox_container}>
                        <input type="checkbox" id="remember" />
                        <label htmlFor="remember">Запомнить пароль</label>
                    </div>
                </div>
                <a href="#" className={style.link}>
                    Восстановить
                </a>
                <button className={style.button} onClick={(e) => showOffModalForm(e)}>
                    Войти
                </button>
                <button className={`${style.button} ${style.secondary_button}`} onClick={(e) => showOffModalForm(e)}>
                    Зарегистрироваться
                </button>
            </div>
        </div>
    );
};

export default Auth;
