import { lazy, Suspense } from "react";
import Navbar from "./components/sections/Navbar";
import Hero from "./components/sections/Hero";

const Logos = lazy(() => import("./components/sections/Logos"));
const Courses = lazy(() => import("./components/sections/Courses"));
const Score = lazy(() => import("./components/sections/Score"));
const Stats = lazy(() => import("./components/sections/Stats"));
const Faq = lazy(() => import("./components/sections/Faq"));
const FinalCta = lazy(() => import("./components/sections/FinalCta"));
const Footer = lazy(() => import("./components/sections/Footer"));

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={null}>
          <Logos />
          <Courses />
          <Score />
          <Stats />
          <Faq />
          <FinalCta />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </>
  );
}
