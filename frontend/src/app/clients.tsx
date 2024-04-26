"use client"
import Image from "next/image";
import {Typography} from "@material-tailwind/react";
import {useGetClientsQuery} from "@/services/client.services";
import config from "@/config";

export function Clients() {
  const {data, isLoading} = useGetClientsQuery();

  return (
    <section className="px-8 py-28">
      <div className="container mx-auto text-center">
        <Typography variant="h6" color="blue-gray" className="mb-8">
          {data?.data[0]?.attributes?.title}
        </Typography>
        <div className="flex flex-wrap items-center justify-center gap-6">
          {isLoading === false &&
            data?.data[0]?.attributes?.client_imgs?.data?.map((client: any) => (
              <div key={client.id} className="w-40">
                <Image
                  src={`${config.api}${client?.attributes?.image?.data?.attributes?.url}`}
                  alt="Client Logo"
                  width={512}
                  height={512}
                />
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}

export default Clients;
