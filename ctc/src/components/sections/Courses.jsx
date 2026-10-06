import { courses } from "../../data";
import Section from "../ui/Section";
import Button from "../ui/Button";

export default function Courses() {
  return (
    <Section id="courses" title="Courses in demand" text="Pick a track and start building the skills companies hire for.">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {courses.map((course) => (
          <div key={course.title} className="flex flex-col rounded-xl border border-line bg-surface p-6 transition hover:-translate-y-1 hover:border-primary/50">
            <span className="text-sm font-semibold text-accent">{course.duration}</span>
            <h3 className="mt-2 text-xl font-bold">{course.title}</h3>
            <ul className="my-4 flex-1 space-y-1 text-sm text-muted">
              {course.topics.map((topic) => (
                <li key={topic}>• {topic}</li>
              ))}
            </ul>
            <Button href="#start" ghost>Know more</Button>
          </div>
        ))}
      </div>
    </Section>
  );
}
