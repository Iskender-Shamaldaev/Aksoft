"use client"
import {ProjectCard} from "@/components";
import {Typography} from "@material-tailwind/react";
import config from "@/config";
import {useGetCardsQuery} from "@/services/project.services";

export function Projects() {

  const {data, isLoading} = useGetCardsQuery();

  return (
    <section className="py-28 px-8">
      <div className="container mx-auto mb-20 text-center">
        <Typography variant="h2" color="blue-gray" className="mb-4">
          {data?.data[0].attributes.title}
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 font-normal !text-gray-500 lg:w-6/12"
        >
          {data?.data[0].attributes.description}
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2 xl:grid-cols-4">
        {isLoading === false && data.data.map((project: any) =>
          project.attributes.cards.data.map((card: any) => (
            <ProjectCard
              key={card.id}
              title={card.attributes.title}
              shortDescription={card.attributes.shortDescription}
              // description={card.attributes.description[0].children[0].text}
              imgSrc={`${config.api}${card.attributes.image.data.attributes.url}`}
              imgAlt="Image"
            />
          )))}
      </div>
    </section>
  );
}

export default Projects;
