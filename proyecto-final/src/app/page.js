import Image from "next/image";
import styles from "./page.module.css";
import Perfil from "./components/Perfil";
import Facts from "./components/Experiencia";
import PerfilBtn from "./components/BotonesPrimarios";
import TabBotones from "./components/BotonesSecundarios";
import TabContent from "./components/Conteiner-Images";
export default function Home() {
  return (
    <div className={styles.tabContent}>
      <Perfil nombre= "Dylan Cabrera" b="Software Enginner"/>
      <Facts c="50+"/>
      <PerfilBtn download="Download CV" a="Contact me" />
      <TabBotones e="Portafolio"/>
      <TabContent/>
    </div>
  );
}
