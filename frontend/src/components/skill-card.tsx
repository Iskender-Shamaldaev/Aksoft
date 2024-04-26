"use client"
import {Card, CardBody, Typography} from "@material-tailwind/react";
import Image from "next/image";

interface SkillCardProps {
  text: string;
  title: string;
  children: React.ReactNode;
  imgSrc: string;
  imgAlt: string;
}

export function SkillCard({title, children, imgAlt, imgSrc}: SkillCardProps) {
  return (
    <Card color="transparent" shadow={false}>
      <CardBody className="grid justify-center text-center">
        <div
          className="mx-auto mb-6 grid h-16 w-16 place-items-center rounded-full bg-gray-900 p-2.5 text-white shadow">
          <Image src={imgSrc}
                 alt={imgAlt}
                 width={768}
                 height={768}
                 className="h-8 w-8"
          />
        </div>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {title}
        </Typography>
        <Typography className="px-8 font-normal !text-gray-500">
          {children}
        </Typography>
      </CardBody>
    </Card>
  );
}

export default SkillCard;
