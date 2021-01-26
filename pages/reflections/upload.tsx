import { useSession } from "next-auth/client";
import { Form } from "react-bootstrap";

function Upload() {
  const [session, loading] = useSession();

  return (
    <Form>
      <Form.Group controlId="">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="Title" />
      </Form.Group>
    </Form>
  );
}

export default Upload;
