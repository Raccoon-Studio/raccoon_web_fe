/* Login page shell — two-panel split layout (hero | form). */
import LoginHero from "./LoginHero";
import LoginForm from "./LoginForm";

export default function Login() {
  return (
    <main className="grid min-h-screen grid-cols-1 lg:grid-cols-2">
      <LoginHero />
      <LoginForm />
    </main>
  );
}