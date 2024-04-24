'use client'
import React, {useState} from "react";
import emailjs from 'emailjs-com';
import {Button, Card, CardBody, IconButton, Input, Radio, Textarea, Typography,} from "@material-tailwind/react";
import {EnvelopeIcon, PhoneIcon} from "@heroicons/react/24/solid";
import {useGetContactsQuery} from "@/services/contact.services";

function ContactForm() {
  const {data} = useGetContactsQuery();
  const [messageSent, setMessageSent] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    interest: "",
    message: ""
  });

  const handleChange = (e: any) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    // Параметры для отправки письма
    const params = {
      from_name: `
        Имя: ${formData.firstName}
        Фамилия: ${formData.lastName}
        Email: ${formData.email}
        Интерес: ${formData.interest}
        Сообщение: ${formData.message}
      `,
      to_email: 'aksoftkg@gmail.com',
    };

    emailjs.send(
      'service_gmail_sender',
      'template_1e8880k',
      params,
      'LLiv4-u-Z42d_ukaA'
    )
      .then((response) => {
        console.log('Письмо успешно отправлено!', response);
        setMessageSent(true);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          interest: "",
          message: ""
        });

        setTimeout(() => {
          setMessageSent(false);
        }, 3000);
      })
      .catch((error) => {
        console.error('Ошибка отправки письма:', error);
      });
  };

  return (
    <section className="px-8 py-16">
      <div className="container mx-auto mb-20 text-center">
        <Typography variant="h1" color="blue-gray" className="mb-4">
          {data?.data[0]?.attributes?.mainTitle}
        </Typography>
        <Typography variant="lead" className="mx-auto w-full lg:w-5/12 !text-gray-500">
          {data?.data[0]?.attributes?.mainDescription}
        </Typography>
      </div>
      <div>
        <Card shadow={true} className="container mx-auto border border-gray/50">
          <CardBody className="grid grid-cols-1 lg:grid-cols-7 md:gap-10">
            <div className="w-full col-span-3 rounded-lg h-full py-8 p-5 md:p-16 bg-gray-900">
              <Typography variant="h4" color="white" className="mb-2">
                {data?.data[0]?.attributes?.contactTitle}
              </Typography>
              <Typography
                variant="lead"
                className="mx-auto mb-8 text-base !text-gray-500"
              >
                {data?.data[0]?.attributes?.contactDescription}
              </Typography>
              <div className="flex gap-5">
                <PhoneIcon className="h-6 w-6 text-white"/>
                <Typography variant="h6" color="white" className="mb-2">
                  {data?.data[0]?.attributes?.phone}
                </Typography>
              </div>
              <div className="flex my-2 gap-5">
                <EnvelopeIcon className="h-6 w-6 text-white"/>
                <Typography variant="h6" color="white" className="mb-2">
                  {data?.data[0]?.attributes?.mail}
                </Typography>
              </div>
              <div className="flex items-center gap-5">
                <IconButton variant="text" color="white">
                  <i className="fa-brands fa-facebook text-lg"/>
                </IconButton>
                <IconButton variant="text" color="white">
                  <i className="fa-brands fa-instagram text-lg"/>
                </IconButton>
                <IconButton variant="text" color="white">
                  <i className="fa-brands fa-github text-lg"/>
                </IconButton>
              </div>
            </div>
            <div className="w-full mt-8 md:mt-0 md:px-10 col-span-4 h-full p-5">
              <form onSubmit={handleSubmit}>
                <div className="mb-8 grid gap-4 lg:grid-cols-2">
                  <Input
                    required={true}
                    color="gray"
                    size="lg"
                    variant="static"
                    label="Имя"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    containerProps={{
                      className: "!min-w-full mb-3 md:mb-0",
                    }}
                  />
                  <Input
                    required={true}
                    color="gray"
                    size="lg"
                    variant="static"
                    label="Фамилия"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    containerProps={{
                      className: "!min-w-full",
                    }}
                  />
                </div>
                <Input
                  required={true}
                  type={"email"}
                  color="gray"
                  size="lg"
                  variant="static"
                  label="Aдрес электронной почты"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  containerProps={{
                    className: "!min-w-full mb-8",
                  }}
                />
                <Typography
                  variant="lead"
                  className="!text-blue-gray-500 text-sm mb-2"
                >
                  В чем вы заинтересованы ?
                </Typography>
                <div className="-ml-3 mb-14 ">
                  <Radio
                    color="gray"
                    name="interest"
                    label="Дизайн"
                    value="Design"
                    checked={formData.interest === "Design"}
                    onChange={handleChange}
                  />
                  <Radio
                    color="gray"
                    name="interest"
                    label="Разработка"
                    value="Development"
                    checked={formData.interest === "Development"}
                    onChange={handleChange}
                  />
                  <Radio
                    color="gray"
                    name="interest"
                    label="Поддержкa"
                    value="Support"
                    checked={formData.interest === "Support"}
                    onChange={handleChange}
                  />
                  <Radio
                    color="gray"
                    name="interest"
                    label="Другоe"
                    value="Other"
                    checked={formData.interest === "Other"}
                    onChange={handleChange}
                  />
                </div>
                <Textarea
                  required={true}
                  color="gray"
                  size="lg"
                  variant="static"
                  label="Ваше сообщение"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  containerProps={{
                    className: "!min-w-full mb-8",
                  }}
                />
                {messageSent && <p>Обращение успешно отправлено!</p>}
                <div className="w-full flex justify-end">
                  <Button className="w-full md:w-fit" color="gray" size="md" type="submit">
                    Отправить сообщение
                  </Button>
                </div>
              </form>
            </div>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}

export default ContactForm;
