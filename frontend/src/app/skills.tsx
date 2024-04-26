"use client"
import {Typography} from "@material-tailwind/react";
import {SkillCard} from "@/components";
import {useGetSkillsQuery} from "@/services/skill.services";
import config from "@/config";

export function Skills() {
  const {data, isLoading} = useGetSkillsQuery();

  return (
    <section className="px-8">
      <div className="container mx-auto mb-20 text-center">
        <Typography color="blue-gray" className="mb-2 font-bold uppercase">
          {data?.data[0].attributes.text}
        </Typography>
        <Typography variant="h1" color="blue-gray" className="mb-4">
          {data?.data[0].attributes.title}
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full !text-gray-500 lg:w-10/12"
        >
          {data?.data[0].attributes.description}
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
        {isLoading === false &&
          data.data[0].attributes.skill_cards.data.map((card: any) => (
            <SkillCard
              key={card.id}
              title={card.attributes.title}
              children={card.attributes.description}
              imgSrc={`${config.api}${card.attributes.icon.data.attributes.url}`}
              imgAlt="Image"
            />
          ))}
      </div>
    </section>
  );
}

export default Skills;
