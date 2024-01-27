"use client"
import Image from "next/image";
import { useEffect, useState } from "react";
import style from './BotonesPrimarios.module.css';
function PerfilBtn({download,a}) {
    const [descargas,setDescargas]=useState("/descargas.png");
    return (
        <div className={style.contenedor} id="main-content">
            <button className={style.btncv}><h2>{download}<Image src={descargas} alt="github" width={26} height={24} /></h2></button>
            <button className={style.btncm} ><h2>{a}</h2></button>
        </div>
    );
}

export default PerfilBtn;
