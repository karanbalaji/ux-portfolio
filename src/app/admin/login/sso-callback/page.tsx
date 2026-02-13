"use client";

import { SignIn } from "@clerk/nextjs";

export default function SSOCallbackPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <SignIn
        routing="path"
        path="/admin/login"
        afterSignInUrl="/admin/dashboard"
        afterSignUpUrl="/admin/dashboard"
      />
    </div>
  );
}
