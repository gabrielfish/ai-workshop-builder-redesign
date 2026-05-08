import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/training")({
  component: () => <div className="min-h-screen bg-td-bg flex items-center justify-center font-serif text-2xl text-td-text">Training — Coming Soon</div>,
});
