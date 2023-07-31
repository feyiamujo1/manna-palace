import Link from "next/link";

import SignupForm from "~/components/RegisterForm";

export default function RegistrationPage() {
  return (
    <div className="mb-10 space-y-4 md:mb-0">
      <p className="text-center text-xl font-semibold md:text-2xl">
        Register your account
      </p>
      <SignupForm />
      <p className="text-center">
        Already have an account?{" "}
        <Link
          className="cursor-pointer font-semibold text-custom-yellow hover:text-light-custom-yellow"
          href="/login"
        >
          Login
        </Link>
      </p>
    </div>
  );
}
