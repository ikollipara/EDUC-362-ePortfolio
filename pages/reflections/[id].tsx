/* reflections/[id].tsx
 * Ian Kollipara
 * 2021.01.23
 * Dynamic Page for Reflections
 */

// Imports
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Header from "../../components/header";

// Type Definitions
type Reflection = {
  title: string;
  body: string;
};

function Reflection() {
  const router = useRouter();
  const { id } = router.query;

  const [slug, setSlug] = useState<Reflection>({ title: "", body: "" });

  useEffect(() => {
    fetch(`/api/reflections/${id}`)
      .then((res) => res.json())
      .then((json) => setSlug(json));
  }, [id]);

  return (
    <main>
      <Header />
      <div className="container">
        <div className="row">
          <span className="col-1"></span>
          <h1 className="display-4 text-center col-10">{slug.title}</h1>
        </div>
        <div className="d-flex flex-row justify-content-between">
          <p className="lead">by Ian Kollipara</p>
          <p className="lead">January 25, 2021</p>
        </div>
        <hr className="mt-0" />
        <div className="row">
          <span className="col-1"></span>
          <article
            className="col-10"
            dangerouslySetInnerHTML={{ __html: slug.body }}
          ></article>
        </div>
      </div>
    </main>
  );
}

export default Reflection;
