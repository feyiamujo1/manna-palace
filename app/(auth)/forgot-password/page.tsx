import React from "react";
import Link from "next/link";

import ForgotPasswordForm from "~/components/ForgotPasswordForm";

export default function ForgotPasswordPage() {
  return (
    <div className="mb-10 space-y-4 md:mb-0">
      <p className="text-center text-xl font-semibold md:text-2xl">
        Forgot your password?
      </p>
      <ForgotPasswordForm />
      <div>
        <p className="text-center">
          Already have an account?{" "}
          <Link
            className="cursor-pointer font-semibold text-custom-yellow hover:text-light-custom-yellow"
            href="/login"
          >
            Login
          </Link>
        </p>
        <p className="text-center">
          Do not have an account yet?{" "}
          <Link
            className="cursor-pointer font-semibold text-custom-yellow hover:text-light-custom-yellow"
            href="/register"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
