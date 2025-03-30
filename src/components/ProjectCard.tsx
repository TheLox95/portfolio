import { ImageSlider } from "./ImageSlider";

export const ProjectCard = (props: {
  title: string;
  description: string;
  stack: string[];
  images: string[];
}) => {
  return (
    <section className="w-full sm:w-2/5 bg-custom-3 dark:bg-custom-2 m-4 p-4 rounded-lg">
      <h4 className="text-xl font-bold underline decoration-accent-2-6 decoration-2 underline-offset-6 mb-2 text-center sm:text-left">
        {props.title}
      </h4>
      <ul className="flex flex-wrap justify-center sm:justify-normal">
        {props.stack.map((s) => (
          <li
            className="mr-2 text-xs italic bg-accent-1-6/35 p-1.5 rounded-2xl"
            key={s}
          >
            {s}
          </li>
        ))}
      </ul>
      <p className="mt-4 text-sm mb-4 text-black/80 dark:text-custom-9 text-justify sm:text-left">
        {props.description}
      </p>
      <ImageSlider images={props.images} />
    </section>
  );
};
