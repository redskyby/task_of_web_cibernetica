import React, { useState } from "react";
import style from "./App.module.scss";
import row from "../../utils/imgs/row_button.png";
import left_main_img from "../../utils/imgs/image15.png";
import Auth from "../modals/Auth";

function App() {
    const [showModal, setShowModal] = useState(false);

    const toggleAuth = (e: React.MouseEvent) => {
        e.preventDefault();
        setShowModal(true);
    };

    return (
        <div className={style.main_page}>
            <div className={style.left_column}>
                <div className={style.left_column_first_block}>
                    <div>
                        <h1>Демо-версия</h1>
                        <div>
                            <p>
                                За 18 лет деятельности было реализовано более 500 крупных, а так же, не менее 2500
                                средних и малых проектов. Используя знания и накопленный опыт мы можем предложить{" "}
                            </p>
                        </div>
                    </div>
                    <div className={style.button_container} onClick={(e) => toggleAuth(e)}>
                        <button>
                            Попробовать бесплатно
                            <img src={row} alt="*" />
                        </button>
                    </div>
                </div>
            </div>
            <div className={style.right_column}>
                <div className={style.right_column_image_container}>
                    <img src={left_main_img} alt="*" />
                </div>
            </div>
            <Auth show={showModal} hidden={setShowModal} />
        </div>
    );
}

export default App;
