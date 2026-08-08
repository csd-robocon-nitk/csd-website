import React from "react";
import VerificationView from "@/components/VerificationView";

export const metadata = {
  title: "Verify Staff Credentials | CSD NITK",
  description: "Verification system for Centre for System Design (CSD) employees and staff at NITK Surathkal."
};

export default async function VerifyNamePage({ params }) {
  const resolvedParams = params ? await params : {};
  // The URL segment is the staff member's name (URL-encoded by the QR code)
  const name = resolvedParams.name ? decodeURIComponent(resolvedParams.name) : null;

  return <VerificationView name={name} />;
}
