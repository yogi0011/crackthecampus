import { hero } from "../../data";
import Button from "../ui/Button";

const sizes = "(min-width:768px) 50vw, 100vw";

export default function Hero() {
  return (
    <section id="top" className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-12 md:grid-cols-2 md:py-20">
      <div className="fade-up">
        <h1 className="text-4xl font-bold leading-tight md:text-6xl">{hero.title}</h1>
        <p className="mt-5 max-w-md text-lg text-text/80">{hero.text}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="#courses">Start Upskilling</Button>
          <Button href="#start" ghost>Get Started</Button>
        </div>
      </div>

      <picture>
        <source type="image/avif" srcSet="/img/hero-480.avif 480w, /img/hero-800.avif 800w" sizes={sizes} />
        <source type="image/webp" srcSet="/img/hero-480.webp 480w, /img/hero-800.webp 800w" sizes={sizes} />
        <img
          src="/img/hero-800.jpg"
          width="800"
          height="534"
          alt="Two smiling students walking across campus with notebooks"
          fetchPriority="high"
          className="w-full rounded-2xl"
        />
      </picture>
    </section>
  );
}
