'use client'
import React, { useState } from "react";
import emailjs from 'emailjs-com';
import Image from "next/image";
import {Button, Input, Typography} from "@material-tailwind/react";
import {useGetHeroesQuery} from "@/services/hero.services";
import config from "@/config";

function Hero() {
  const {data, isLoading} = useGetHeroesQuery();
  const [email, setEmail] = useState('');
  const [messageSent, setMessageSent] = useState(false);

  const handleContact = () => {
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      alert('Пожалуйста, введите корректный адрес электронной почты.');
      return;
    }

    const params = {
      from_name: `Пользователь ${email}`,
      to_email: 'aksoftkg@gmail.com',
    };


    emailjs.send(
      'service_gmail_sender',
      'template_1e8880k',
      params,
      'LLiv4-u-Z42d_ukaA',
    )
      .then((response) => {
        console.log('Письмо успешно отправлено!', response);
        setMessageSent(true);
        setEmail('');

        setTimeout(() => {
          setMessageSent(false);
        }, 3000);
      })
      .catch((error) => {
        console.error('Ошибка отправки письма:', error);
      });
  };

  return (
    <header className="bg-white p-8">
      <div className="container mx-auto grid h-full gap-10 min-h-[60vh] w-full grid-cols-1 items-center lg:grid-cols-2">
        <div className="row-start-2 lg:row-auto">
          <Typography
            variant="h1"
            color="blue-gray"
            className="mb-4 lg:text-5xl !leading-tight text-3xl"
          >
            {data?.data[0]?.attributes?.title} <br/>
          </Typography>
          <Typography
            variant="lead"
            className="mb-4 !text-gray-500 md:pr-16 xl:pr-28"
          >
            {data?.data[0]?.attributes?.description}
          </Typography>
          <div className="grid">
            <Typography
              variant="small"
              className="mb-2 text-gray-900 font-medium"
            >
              Ваш адрес электронной почты
            </Typography>
            <div className="mb-2 flex w-full flex-col gap-4 md:w-10/12 md:flex-row">
              <Input
                color="gray"
                type="email"
                label="Введите адрес электронной почты"
                size="lg"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button
                color="gray"
                className="w-full px-4 md:w-[12rem]"
                onClick={handleContact}
              >
                обратиться
              </Button>
            </div>
          </div>
          {messageSent && <p>Обращение успешно отправлено!</p>}
        </div>
        {!isLoading && data?.data[0]?.attributes?.image?.data?.attributes?.url && (
          <Image
            width={640}
            height={640}
            alt="team work"
            src={`${config.api}${data?.data[0]?.attributes?.image?.data?.attributes?.url}`}
            className="rounded-xl object-cover w-full h-full"
          />
        )}
      </div>
    </header>
  );
}

export default Hero;
