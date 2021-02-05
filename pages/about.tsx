/* about.tsx
 * Ian Kollipara
 * 2021.01.26
 * About Me Page
 */

// Imports
import Head from "next/head";
import Image from "next/image";
import Header from "../components/header";

function AboutMe() {
  return (
    <main>
      <Head>
        <title>About Me</title>
      </Head>
      <Header />
      <Image
        src="https://cdn.pixabay.com/photo/2020/04/19/16/19/tree-5064341_1280.jpg"
        layout="responsive"
        objectFit="cover"
        width={720}
        height={100}
        priority={true}
      />
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h1 className="display-3">About Me</h1>
          </div>
        </div>
        <div className="row">
          <span className="col-1"></span>
          <div className="col-10 d-flex flex-column">
            <p className="lead">
              My name is Ian Kollipara, and I'm a Junior Standing at CUNE. I was
              born, and raised, in Lincoln, NE. I attended Trinity Lutheran
              Elementary and Lincoln Lutheran Jr/Sr High. I was a part of
              Concert and Pep Band for all 4 years, as well as competing at the
              Nebraska State Science Bowl in 7th and 8th grade - placing 7th and
              5th respectively. My free time is split between hanging out with
              friends and family, and working on my coding projects. In my
              junior year of High School I started to code, and its become
              something of a passion. In fact, this whole website was written by
              yours truly - using <a href="https://nextjs.org">Next.js</a>,{" "}
              <a href="https://www.mongodb.com/cloud/atlas">MongoDB Atlas</a>,
              and <a href="https://vercel.com/">Vercel</a>.
            </p>
            <Image
              src="/Ian_BL_4272x2848.jpg"
              layout="responsive"
              objectFit="contain"
              objectPosition="center center"
              width={712}
              height={414}
              alt="2019 Bright Lights Reptiles Rock Group"
              quality={100}
              priority={true}
              placeholder={"2019 Bright Lights Reptiles Rock! Class"}
              className="pt-3"
            />
            <p className="text-muted text-center">
              2019 Bright Lights Reptiles Rock!
            </p>
            <p className="lead pt-3">
              I've wanted to teach since I was quite young. In fact, I can trace
              it all the way back to my first year of volunteering when I was 14
              years old. One of the older staff members approached me, and
              mentioned how I might make a good teacher. From that grew an
              interest and passion that has manifested in my future career. My
              strengths lie in building relationships with kids and their
              families. It is through this avenue that the best teaching can
              occur.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default AboutMe;
