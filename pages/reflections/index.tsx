/* reflections/index.tsx
 * Ian Kollipara
 * 2021.01.23
 * Base /reflections endpoint
 */

// Imports
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Link from "next/link";
import Header from "../../components/header";

function Index({
  reflections,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <main>
      <Header />
      <ul>
        {reflections.map((reflection) => (
          <li key={reflection.id}>
            <Link
              href={{
                pathname: "/reflections/[id]",
                query: { id: reflection.id },
              }}
            >
              <a>{reflection.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      reflections: [
        {
          id: 1,
          title: "Lorem Ipsum",
        },
      ],
    },
  };
};

export default Index;
