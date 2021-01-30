/* about.tsx
 * Ian Kollipara
 * 2021.01.26
 * About Me Page
 */

// Imports
import Image from "next/image";
import Header from "../components/header";
import styles from "../styles/about.module.css";

function AboutMe() {
  return (
    <main>
      <Header />
      <Image
        src="/tree-5064341_1920.jpg"
        layout="responsive"
        objectFit="cover"
        width={720}
        height={100}
        priority={true}
      />
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h1 className="display-3">About Me</h1>
          </div>
        </div>
        <div className="row">
          <span className="col-1"></span>
          <div className="col-10">
            <p className="lead">Lorem Ipsum</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default AboutMe;
