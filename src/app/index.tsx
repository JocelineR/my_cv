/*

//import styles from "../styles/Home.module.css";
import Head from "next/head";
import MainInfo from "user/components/MainInfo";
import Experience from "user/components/Experience";
import Sidebar from "user/components/SideBar";

//export default function Home() {
const Home: React.FC = () => {
  return (
    <div className="flex min-h-screen">
      <Head>
        <title>Mi Currículum</title>
      </Head>
      <Sidebar />
      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">
          ¡Hola, soy <span className="text-green-600">[Tu Nombre]</span>!
        </h1>
        <h1 className="text-3xl font-bold underline-offset-8">Hello world!</h1>

        <p className="mt-3 text-2xl">Aquí está mi currículum</p>
        <div id="main-info">
          <MainInfo />
        </div>
        <Experience />
//        {/* Añade aquí las otras secciones como Education y Skills */ //}
//      </main>
//    </div>
//  );
//};

//export default Home;
