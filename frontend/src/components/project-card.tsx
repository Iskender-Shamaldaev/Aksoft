import Image from "next/image";
import {Button, Card, CardBody, CardHeader, Typography,} from "@material-tailwind/react";

interface ProjectCardProps {
  imgSrc: string;
  imgAlt: string;
  // description: string;
  shortDescription: string;
  title: string;
}

export function ProjectCard({imgSrc, imgAlt,shortDescription,title}: ProjectCardProps) {
  return (
    <Card color="transparent" shadow={false}>
      <CardHeader floated={false} className="mx-0 mt-0 mb-6 h-48">
        <Image
          src={imgSrc}
          alt={imgAlt}
          width={768}
          height={768}
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody className="p-0">
        <a
          href="#"
          className="text-blue-gray-900 transition-colors hover:text-gray-800"
        >
          <Typography variant="h5" className="mb-2">
            {title}
          </Typography>
        </a>
        <Typography className="mb-6 font-normal !text-gray-500">
          {shortDescription}
        </Typography>
        <Button color="gray" size="sm">
          посмотреть больше
        </Button>
      </CardBody>
    </Card>
  );
}

export default ProjectCard;
