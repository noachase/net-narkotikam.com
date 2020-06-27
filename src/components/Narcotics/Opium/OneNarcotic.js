import React from 'react';
import style from './oneNarcotic.module.css'

const OneNarcotic = ({Opium}) => {
    return (
        <article className={style.opium}>
            <div className={style.opium_headPicture}>
                <img src={Opium.pic4} alt="pic4"/>
            </div>
            <div className={style.opium_wrapper}>
                <h2>{Opium.t1}</h2>
                <div className={style.opium__textBlock}>
                    <img className={style.opium__picture} 
                        align="left" 
                        vspace="5" 
                        hspace="15"
                        src={Opium.pic1}
                        width="250px" 
                        height="200px" alt="pic1"/>
                    <p className={style.opium__text}>
                        &nbsp; &nbsp; {Opium.p1}
                    </p>
                </div>
            </div>
            <div className={style.opium_wrapper}>
                <h2>{Opium.t2}</h2>
                <div className={style.opium__textBlock}>
                    <img className={style.opium__picture} 
                        align="right" 
                        vspace="5" 
                        hspace="15"
                        src={Opium.pic2}
                        width="250px" 
                        height="200px" alt="pic2"/>
                    <p className={style.opium__text}>
                        &nbsp; &nbsp; {Opium.p2}
                    </p>
                </div>
            </div>
            <div className={style.opium_wrapper}>
                <h2>{Opium.t3}</h2>
                <div className={style.opium__textBlock}>
                    <img className={style.opium__picture} 
                        align="left" 
                        vspace="5" 
                        hspace="15"
                        src={Opium.pic3}
                        width="250px" 
                        height="200px" alt="pic3"/>
                    <p className={style.opium__text}>
                        &nbsp; &nbsp; {Opium.p3}
                    </p>
                </div>
            </div>
        </article>
    )
}

export default OneNarcotic;