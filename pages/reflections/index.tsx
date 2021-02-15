/* reflections/index.tsx
 * Ian Kollipara
 * 2021.01.23
 * Base /reflections endpoint
 */

// Imports
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Link from "next/link";
import Header from "../../components/header";
import { DisplayReflection } from "../../utils/typedefs";
import styles from "../../styles/reflections.module.css";
import Head from "next/head";
import { ListGroup } from "react-bootstrap";
import Image from "next/image";

function Index({
  reflections,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <main>
      <Head>
        <title>Reflections</title>
      </Head>
      <Header />
      <Image
        src="https://cdn.pixabay.com/photo/2018/01/03/05/33/the-sun-3057623_1280.jpg"
        layout="responsive"
        objectFit="cover"
        width={720}
        height={100}
        priority={true}
      />
      <div className="d-flex flex-column align-items-center">
        <h1 className="display-2 heading-font">Reflections</h1>
      </div>
      <div className="container">
        <div className="row">
          <span className="col-1"></span>
          <div className="col-10">
            <ListGroup variant="flush">
              {reflections.map((reflection: DisplayReflection) => (
                <ListGroup.Item
                  key={reflection.id}
                  className="d-flex flex-column justify-content-center"
                >
                  <Link
                    href={{
                      pathname: "/reflections/[id]",
                      query: { id: reflection.id },
                    }}
                  >
                    <a
                      className={`display-4 text-font text-center ${styles.link}`}
                    >
                      {reflection.title}
                    </a>
                  </Link>
                  <div className="d-flex flex-row justify-content-between">
                    <p className="lead text-font text-muted">
                      {reflection.date}
                    </p>
                    <p className="lead text-font text-muted">
                      By: {reflection.author}
                    </p>
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
  const json = await res.json();
  const reflections: DisplayReflection = json.reflections;
  return {
    props: {
      reflections: reflections,
    },
  };
};

export default Index;
