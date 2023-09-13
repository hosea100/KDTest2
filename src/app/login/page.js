import LoginForm from "../../../components/Login";
import Head from "next/head";

export const metadata = {
  title: 'Login',
  description: 'Login landing page',
}

export default function Login() {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <LoginForm />
    </>
  )
}