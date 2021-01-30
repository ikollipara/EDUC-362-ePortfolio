/* reflections/[id].tsx
 * Ian Kollipara
 * 2021.01.23
 * Dynamic Page for Reflections
 */

// Imports
import { MongoReflection, Reflection } from "../../utils/typedefs";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Header from "../../components/header";

function ReflectionPage() {
  const router = useRouter();
  const { id } = router.query;
  const [slug, setSlug] = useState<Omit<Reflection & MongoReflection, "_id">>({
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
      <Header />
      <div className="container">
        <div className="row">
          <span className="col-1"></span>
          <h1 className="display-3 text-center col-10">{slug.title}</h1>
        </div>
        <div className="d-flex flex-row justify-content-between">
          <p className="lead">by {slug.author}</p>
          <p className="lead">{slug.date}</p>
        </div>
        <hr className="mt-0" />
        <div className="row">
          <span className="col-1"></span>
          <article
            className="col-10 lead"
            dangerouslySetInnerHTML={{ __html: slug.body }}
          ></article>
        </div>
      </div>
    </main>
  );
}

export default ReflectionPage;
