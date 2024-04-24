'use client'
import React from "react";
import Image from "next/image";
import {Card, CardBody, Typography} from "@material-tailwind/react";
import TestimonialCard from "@/components/testimonial-card";
import {useGetTestimonialsQuery} from "@/services/testimonial.services";
import config from "@/config";

export function Testimonial() {

  const {data, isLoading} = useGetTestimonialsQuery();

  const testimonials = data?.data[0]?.attributes.testimonial_cards.data;

  const [activeCommentator, setActiveCommentator] = React.useState(
    testimonials && testimonials.length > 0 ? testimonials[0]?.attributes : {}
  );

  React.useEffect(() => {
    if (testimonials && testimonials.length > 0) {
      setActiveCommentator(testimonials[0]?.attributes);
    }
  }, [testimonials]);

  console.log(activeCommentator, "activeCommentator5555");

  return (
    <section className="py-12 px-8 lg:py-24">
      <div className="container max-w-screen-lg mx-auto">
        <div className="container mx-auto mb-20 text-center">
          <Typography variant="h2" color="blue-gray" className="mb-4">
            {data?.data[0]?.attributes.title}
          </Typography>
          <Typography
            variant="lead"
            className="mx-auto w-full px-4 font-normal !text-gray-500 lg:w-8/12"
          >
            {data?.data[0]?.attributes.description}
          </Typography>
        </div>
        <Card color="transparent" shadow={false} className="py-8 lg:flex-row">
          <CardBody className="w-full lg:gap-10 h-full lg:!flex justify-between ">
            <div className="w-full mb-10 lg:mb-0">
              <Typography
                variant="h3"
                color="blue-gray"
                className="mb-4 font-bold lg:max-w-xs"
              >
                {data?.data[0]?.attributes.cardTitle}
              </Typography>
              <Typography className="mb-3 w-full lg:w-8/12 font-normal !text-gray-500">
                {activeCommentator.comment}
              </Typography>
              <Typography variant="h6" color="blue-gray" className="mb-0.5">
                {activeCommentator.name} - {activeCommentator.position}
              </Typography>
              <Typography
                variant="small"
                className="font-normal mb-5 !text-gray-500"
              >
                {activeCommentator.company}
              </Typography>
              <div className="flex items-center gap-4">
                {isLoading === false && testimonials?.map((testimonial) => (
                  <TestimonialCard
                    key={testimonial.id}
                    author={testimonial.attributes}
                    isActive={activeCommentator === testimonial.attributes}
                    onClick={() => setActiveCommentator(testimonial.attributes)}
                    imgSrc={`${config.api}${testimonial.attributes.avatar.data.attributes.url}`}
                    imgAlt="Image"
                  />
                ))}
              </div>
            </div>
            <div className="h-[21rem] rounded-lg w-full sm:w-[18rem] shrink-0">
              <img
                width={768}
                height={768}
                alt="testimonial image"
                src={`${config.api}${activeCommentator?.avatar?.data?.attributes?.url}`}
                className="h-full rounded-lg w-full object-cover"
              />
            </div>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}

export default Testimonial;
