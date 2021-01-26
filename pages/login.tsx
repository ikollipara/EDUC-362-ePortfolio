import { signIn, signOut, useSession } from "next-auth/client";

function Login() {
  const [session, loading] = useSession();

  return (
    <>
      {!session && (
        <>
          Not signed in <br />
          <button onClick={signIn}>Sign In</button>
        </>
      )}
      {session && (
        <>
          Signed in as {session.user} <br />
          <button onClick={signOut}>Sign Out</button>
        </>
      )}
    </>
  );
}

export default Login;
