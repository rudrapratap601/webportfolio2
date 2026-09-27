import Link from "next/link";
import { Page } from "@/components/portfolio";
export default function NotFound() {
  return (
    <Page
      eyebrow="404"
      title="This page isn’t here."
      intro="You can still explore the projects or head back to the homepage."
    >
      <Link className="btn-primary" href="/">
        Back to home
      </Link>
    </Page>
  );
}
