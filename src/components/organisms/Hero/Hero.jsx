import React from "react";
import Style from "./hero.module.scss";

export const Hero = () => {
    return (
        <>
            <div className={Style.Hero}>
                <div className={Style.Hero__container}>
                    <picture className={Style.Hero__container__picture}>
                        <img
                            className={Style.Hero__photo}
                            src="/images/photo.png"
                        />
                        {/* <img
                            className={Style.Hero__photo2}
                            src="/images/photo2.png"
                        /> */}
                    </picture>
                </div>
                <img className={Style.Hero__lines} src="/images/Group26.png" />
                <img className={Style.Hero__Oval} src="/images/circle.svg" />
                <div className={Style.Hero__introduction}>
                    <h1 className={Style.Hero__introduction__title}>
                        Nice to meet you! I’m{" "}
                        <u
                            className={
                                Style.Hero__introduction__title__underline
                            }
                        >
                            Iuna de Leon
                        </u>
                        .
                    </h1>
                    <p className={Style.Hero__introduction__paragraph}>
                        Based in Brazil, I’m a front-end developer passionate
                        about building accessible web apps that users love.
                    </p>
                    <a className={Style.Hero__introduction__anchor}>
                        contact me
                    </a>
                    <hr size="1" width="90%" align="center" />
                </div>
            </div>
        </>
    );
};
