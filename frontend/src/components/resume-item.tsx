import {Card, Typography} from "@material-tailwind/react";
import Image from "next/image";

interface ResumeItemProps {
  icon: string;
  children: React.ReactNode;
  imgSrc: string;
  imgAlt: string;
}

export function ResumeItem({icon, children, imgAlt, imgSrc}: ResumeItemProps) {
  return (
    <div className="flex items-start gap-4">
      <Card
        color="gray"
        className="h-12 w-12 shrink-0 items-center justify-center !rounded-lg"
      >
        <Image
          className="h-6 w-6"
          src={imgSrc}
          alt={imgAlt}
          width={512}
          height={512}
        />
      </Card>
      <Typography className="w-full font-normal !text-gray-500">
        {children}
      </Typography>
    </div>
  );
}

export default ResumeItem;
