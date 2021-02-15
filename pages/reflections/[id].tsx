/* reflections/[id].tsx
 * Ian Kollipara
 * 2021.01.23
 * Dynamic Page for Reflections
 */

// Imports
import { MongoReflection, DisplayReflection } from "../../utils/typedefs";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Header from "../../components/header";
import Head from "next/head";

function ReflectionPage() {
  const router = useRouter();
  const { id } = router.query;
  const [slug, setSlug] = useState<DisplayReflection>({
    title: "",
    id: "",
    body: "",
    author: "",
    date: new Date().toDateString(),
  });

  useEffect(() => {
    fetch(`/api/reflection/${id}`)
      .then<MongoReflection>((res) => res.json())
      .then((json) => setSlug(json));
  }, [id]);

  return (
    <main>
      <Head>
        <title>
          {slug.title} by {slug.author}
        </title>
      </Head>
      <Header />
      <div className="container">
        <div className="row">
          <span className="col-1"></span>
          <h1 className="display-3 heading-font text-center col-10">
            {slug.title}
          </h1>
        </div>
        <div className="d-flex flex-row justify-content-between">
          <p className="lead">by {slug.author}</p>
          <p className="lead">{slug.date}</p>
        </div>
        <hr className="mt-0" />
        <div className="row">
          <span className="col-1"></span>
          <article
            className={`col-10 text-font`}
            dangerouslySetInnerHTML={{ __html: slug.body }}
          ></article>
        </div>
      </div>
    </main>
  );
}

export default ReflectionPage;
