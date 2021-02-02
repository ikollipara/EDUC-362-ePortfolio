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
import { MongoReflection } from "../../utils/typedefs.js";
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
              {reflections.map((reflection: Omit<MongoReflection, "_id">) => (
                <ListGroup.Item key={reflection.id} className="container">
                  <div className="row">
                    <div className="col-12 text-center">
                      <Link
                        href={{
                          pathname: "/reflections/[id]",
                          query: { id: reflection.id },
                        }}
                      >
                        <a className={`lead ${styles.link}`}>
                          {reflection.title}
                        </a>
                      </Link>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <div className="d-flex flex-row justify-content-between">
                        <p className="lead text-muted">{reflection.date}</p>
                        <p className="lead text-muted">{reflection.author}</p>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <p className="text-muted ellipsis">{reflection.body}</p>
                    </div>
                  </div>
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
  const reflections: Omit<MongoReflection, "_id"> = json.reflections;
  return {
    props: {
      reflections: reflections,
    },
  };
};

export default Index;
