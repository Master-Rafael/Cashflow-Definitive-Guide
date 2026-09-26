import { createFileRoute } from "@tanstack/react-router";
import { BookApp } from "@/components/book/book-app";

export const Route = createFileRoute("/imprimir")({ component: PrintPage });

function PrintPage() {
  return <BookApp print />;
}
