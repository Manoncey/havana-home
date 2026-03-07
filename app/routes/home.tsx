import type { Route } from "./+types/home";
import { HomePage } from "../homePage";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Havana Club" },
    { name: "description", content: "Book your room at La Havana" },
  ];
}

export default function Home() {
  return <HomePage />;
}
