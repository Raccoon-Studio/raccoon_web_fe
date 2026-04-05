/* SignUp page shell — two-panel split layout (hero | multi-step form). */
import SignUpHero from "./SignUpHero";
import SignUpForm from "./SignUpForm";

export default function SignUp() {
  return (
    <main className="grid min-h-screen grid-cols-1 lg:grid-cols-2">
      <SignUpHero />
      <SignUpForm />
    </main>
  );
}