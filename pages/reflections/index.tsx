/* reflections/index.tsx
 * Ian Kollipara
 * 2021.01.23
 * Base /reflections endpoint
 */

// Imports
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import fetch from "isomorphic-unfetch";
import Link from "next/link";
import Header from "../../components/header";
import { DisplayReflection, MongoReflection } from "../../utils/typedefs";
import styles from "../../styles/reflections.module.css";
import Head from "next/head";
import { ListGroup } from "react-bootstrap";

function Index({
  reflections,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <main>
      <Head>
        <title>Reflections</title>
      </Head>
      <Header />
      <div
        className={`jumbotron-fluid bg-light text-white text-center ${styles.heroImage}`}
      >
        <div className="d-flex flex-column align-items-center">
          <h1 className="display-2">Reflections</h1>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <span className="col-1"></span>
          <div className="col-10">
            <ListGroup variant="flush">
              {reflections.map((reflection: DisplayReflection) => (
                <ListGroup.Item
                  key={reflection.id}
                  className="d-flex flex-row justify-content-between align-items-center"
                >
                  <p className="lead text-muted">{reflection.date}</p>
                  <Link
                    href={{
                      pathname: "/reflections/[id]",
                      query: { id: reflection.id },
                    }}
                  >
                    <a className={`lead ${styles.link}`}>{reflection.title}</a>
                  </Link>
                  <p className="lead text-muted">{reflection.author}</p>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </div>
        </div>
      </div>
    </main>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch("https://eportfolio.vercel.app/api/reflection");
  console;
  const json = await res.json();
  const reflections: DisplayReflection = json.reflections;
  return {
    props: {
      reflections: reflections,
    },
  };
};

export default Index;
