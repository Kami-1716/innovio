import { UserButton } from "@clerk/nextjs";
import React from "react";

export default async function Dashboard() {
  return (
    <div>
      Dashboard
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
