import type { MetaFunction } from "@remix-run/node";
import { Header } from "~/components/header";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix SPA" },
    { name: "description", content: "Welcome to Remix (SPA Mode)!" },
  ];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <Header />
      <h1>Hello World</h1>
    </div>
  );
}
