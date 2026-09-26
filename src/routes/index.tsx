import { createFileRoute } from "@tanstack/react-router";
import { BookApp } from "@/components/book/book-app";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return <BookApp />;
}
