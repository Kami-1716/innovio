import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function LandingPage() {
  return (
    <div>
      LandingPage (uprotected)
      <Link href="/sign-in">
        <Button>Sign in</Button>
      </Link>
    </div>
  );
}
