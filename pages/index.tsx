/* index.tsx
 * Ian Kollipara
 * 2021.01.23
 * HomePage
 */

// Imports
import Head from "next/head";
import Footer from "../components/footer";
import Header from "../components/header";
import styles from "../styles/home.module.css";

function Index() {
  return (
    <main>
      <Head>
        <title>Home</title>
      </Head>
      <Header />
      <div
        className={`jumbotron-fluid bg-light text-white text-center ${styles.heroImage}`}
      >
        <div className="d-flex flex-column align-items-end px-lg-5 py-xl-5 animate__animated animate__fadeIn">
          <h1 className="display-2">Ian Kollipara's</h1>
          <h2 className="display-4 text-white-50">ePortfolio</h2>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <span className="col-1"></span>
          <div className="col-10">
            <p className="lead">Lorem Ipsum</p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default Index;
