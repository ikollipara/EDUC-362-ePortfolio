import { signIn, signOut, useSession } from 'next-auth/client';
import Header from '../components/header';
function SignIn() {
  const [session, loading] = useSession();

  return (
    <main>
      <Header />
      <main className="d-flex flex-column">
      <h2 className="display-2 heading-font">{`Sign ${session ? 'In' : 'Out'}`}</h2>
      {!session && <article>
        <p className="text-font">Not Signed In</p>
        <button className="btn btn-outline-success" onClick={() => signIn()}>Sign In</button>
      </article>}
      {session && <article>
        <p className="text-font">Signed In as {session.user}</p>
        <button className="btn btn-outline-danger" onClick={() => signOut()}>Sign Out</button>
      </article>}
    </main>
    </main>
  )
}

export default SignIn;
