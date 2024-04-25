'use client'
import {Typography} from "@material-tailwind/react";


export default function About() {
  return (
    <section className="px-8">
      <div className="container mx-auto">
        <Typography variant="h1"
                    color="blue-gray"
                    className="text-center font-bold mt-10 mb-12">
          О компании Aksoft
        </Typography>
        <Typography
          variant="h3"
          className="mx-auto text-center w-full !blue-gray-700 lg:w-10/12"
        >
          Наша миссия — воплотить ваши самые смелые идеи в цифровую жизнь!
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto text-center w-full !text-gray-500 lg:w-10/12 mt-8"
        >
          Мы - команда профессионалов, специализирующихся на разработке сайтов, веб-сервисов и приложений. Мы знаем как
          сделать ваше присутствие в интернете эффективным.

          Вдохновленные технологиями, мы создаем красивые и функциональные продукты, которые приносят результаты нашим
          клиентам.
        </Typography>
        <Typography
          variant="h3"
          className="mx-auto text-center w-full !blue-gray-700 lg:w-10/12 mt-20 mb-8"
        >
          Наши преимущества:
        </Typography>
        <div className="benefits text-center">
          <div className="flex items-center justify-center text-lg mb-4">
            <span className="mr-2" role="img" aria-label="Focus">🎯</span> Фокус на автоматизацию бизнес-процессов
          </div>
          <div className="flex items-center justify-center text-lg mb-4">
            <span className="mr-2" role="img" aria-label="Innovation">💡</span> Инновационный подход и современные
            технологии
          </div>
          <div className="flex items-center justify-center text-lg mb-4">
            <span className="mr-2" role="img" aria-label="Team">⚡️</span> Команда профессиональных разработчиков
          </div>
          <div className="flex items-center justify-center text-lg mb-4">
            <span className="mr-2" role="img" aria-label="Result">💵</span> Ориентация на результат клиента
          </div>
        </div>
        <Typography
          variant="lead"
          className="mx-auto text-center w-full !text-gray-500 lg:w-10/12 mt-8"
        >
          Мы готовы стать вашим технологическим партнером и воплотить любые идеи в жизнь - от сайтов до веб и мобильных
          приложений.
        </Typography>
        <Typography
          variant="h3"
          className="mx-auto text-center w-full !blue-gray-700 lg:w-10/12 mt-10 mb-10"
        >
          Создавать - это наша страсть, это то, что делает нас живыми.
        </Typography>
      </div>
    </section>
  );
}
