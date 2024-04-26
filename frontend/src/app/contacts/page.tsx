"use client"
import {Typography} from "@material-tailwind/react";

export default function Contacts() {
  const handlePhoneClick = (phoneNumber: any) => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleEmailClick = (email: any) => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <section className="px-8">
      <div className="container mx-auto">
        <Typography variant="h1" color="blue-gray" className="text-center font-bold mt-10 mb-12">
          Контакты
        </Typography>
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-between">
          <div style={{minHeight: '500px'}} className="w-full lg:w-1/3 bg-white p-6 rounded-lg shadow-lg mb-8 lg:mb-0">
            <h2 className="font-bold text-lg mb-4">Головной офис</h2>
            <div className="mb-4">
              <h3 className="font-bold">Адрес</h3>
              <p>г. Бишкек, ул.Игембердиева 1A/1, БЦ Aurora 3 этаж</p>
            </div>
            <div className="mb-4">
              <h3 className="font-bold">Телефон</h3>
              <p onClick={() => handlePhoneClick('+996999886644')}
                 className="cursor-pointer text-green-500 hover:text-red-500">+996 (999) 88-66-44</p>
              <p onClick={() => handlePhoneClick('+996505088099')}
                 className="cursor-pointer text-green-500 hover:text-red-500">+996 (505) 08-80-99</p>
            </div>
            <div className="mb-4">
              <h3 className="font-bold">Email</h3>
              <p onClick={() => handleEmailClick('aksoftkg@gmail.com')}
                 className="cursor-pointer text-green-500 hover:text-red-500">aksoftkg@gmail.com</p>
            </div>
            <div className="mb-4">
              <h3 className="font-bold">Соц. сети</h3>
              <p><a href="https://www.facebook.com/profile.php?id=100090742837257" target="_blank"
                    rel="noopener noreferrer" className="text-green-500 hover:text-red-500">Facebook</a></p>
              <p><a href="https://wa.me/996999886644" target="_blank" rel="noopener noreferrer"
                    className="text-green-500 hover:text-red-500">WhatsApp</a></p>
              <p><a href="https://t.me/jakshybala" target="_blank" rel="noopener noreferrer"
                    className="text-green-500 hover:text-red-500">Telegram</a></p>
            </div>
          </div>
          <div className="w-full lg:w-2/3 mb-8 lg:mb-0">
            <iframe
              src="https://yandex.ru/map-widget/v1/?um=constructor%3A406d7d6e921b80f80183c94a9f668b2166c945eb33ac669f0fb7cd92fa2dc73e&amp;source=constructor"
              width="100%" height="500" frameBorder="0"></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
