import Head from "next/head";
import { FormEvent, useState } from "react";
import { Form } from "react-bootstrap";
import Header from "../components/header";

function UploadPage() {
  const [title, setTitle] = useState<String>("");
  const [author, setAuthor] = useState<String>("");
  const [md, setMd] = useState("");

  const handleSubmit = (event: FormEvent<HTMLElement>) => {
    fetch("/api/reflection/add", {
      method: "POST",
      body: JSON.stringify({
        title: title,
        author: author,
        body: md,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((json) => {
        if(json.success) alert("Successfully submitted!");
      });
    event.preventDefault();
    event.stopPropagation();
  };
  return (
    <main>
      <Head>
        <title>Upload Reflection</title>
      </Head>
      <Header />
      <article className="container">
        <h2 className="display-2 text-center text-font">Upload</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="uploadForm">
            <Form.Label className="text-font">Title</Form.Label>
            <Form.Control
              required
              size="lg"
              type="text"
              placeholder="Enter Title"
              onChange={(e: any) => setTitle(e.target.value)}
            />
            <br />
            <Form.Label className="text-font">Author</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Enter Author Name"
              onChange={(e: any) => setAuthor(e.target.value)}
            />
            <br />
            <textarea  required onChange={(e: any) => setMd(e.target.value)} /> 
          </Form.Group>
          <button type="submit" className="btn btn-outline-primary">
            Upload
          </button>
        </Form>
      </article>
    </main>
  );
}

export default UploadPage;
