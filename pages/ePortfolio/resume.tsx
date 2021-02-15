import Head from "next/head";
import Header from "../../components/header";

function Resume() {
  return (
    <main>
      <Head>
        <title>Resume</title>
      </Head>
      <Header />
      <article className="section d-flex flex-column align-items-center mx-4">
        <h1 className="display-1 heading-font">Resume</h1>
        <p className="lead text-font text-muted">
          <strong>Date: </strong>February 4, 2021
        </p>
        <div className="d-flex flex-row justify-content-between">
          <a
            className="btn btn-outline-primary mx-2"
            href="/documents/Résumé.docx"
            download="Ian_Kollipara_Resume.docx"
          >
            Download DOCX
          </a>
          <a
            className="btn btn-outline-danger mx-2"
            href="/documents/Resume.pdf"
            download="Ian_Kollipara_Resume.pdf"
          >
            Download PDF
          </a>
        </div>
        <h2 className="display-4 heading-font">Contact Information</h2>
        <ul>
          <li>
            <p className="lead text-font">
              Email:{" "}
              <a href="mailto:ian.kollipara@cune.org">ian.kollipara@cune.org</a>
            </p>
          </li>
          <li>
            <p className="lead text-font">Phone: 402-904-0427</p>
          </li>
        </ul>
        <h2 className="display-4 heading-font">Professional Goals</h2>
        <p className="lead text-font">
          To teach somewhere in K-5 grade level, in either a departmental or
          self-contained classroom, and to assist with technology/computers.
        </p>
        <h2 className="display-4 heading-font">
          Licensure/
          <br />
          Certification
        </h2>
        <p className="lead text-font">Praxis Tests: Core Basic - passed</p>
        <h2 className="display-4 heading-font">Education</h2>
        <h4>Concordia University Nebraska (Fall 2019 - May 2023)</h4>
        <ul>
          <li>
            <p className="lead text-font">
              B.S. in Elementary Education - Infomation Technology
              Certification; B.S. in Computer Science - Minor in Mathematics;
              ancticipated graduation May 2023 (GPA 3.67)
            </p>
          </li>
          <li>
            <p className="lead text-font">
              Scholarships: Regent's Scholarship, Moseman Family Scholarship,
              Church Work Scholarship
            </p>
          </li>
          <li>
            <p className="lead text-font">
              Honors and Awards: Church Careers Award, Lutheran Heritage Award,
              Top 300 in University (Fall 2019)
            </p>
          </li>
        </ul>
        <h2 className="display-4 heading-font">Career Related Experience</h2>
        <h4>Computer Science</h4>
        <ul>
          <li>
            <p className="lead text-font">
              WEBook Co-Founder (February 24, 2019)
            </p>
          </li>
        </ul>
        <h4>Elementary Education</h4>
        <ul>
          <li>
            <p className="lead text-font">
              Trinity Lutheran Summer Camp - 8 years (2012-2020)
            </p>
          </li>
          <li>
            <p className="lead text-font">
              St. John's Child Development Center - 2 years (2020-2021)
            </p>
          </li>
        </ul>
        <h2 className="display-4 heading-font">Special Interests</h2>
        <p className="lead text-font">
          I enjoy the outdoors and nature, working on and learning about coding,
          spending time with my friends and family.
        </p>
      </article>
    </main>
  );
}

export default Resume;
