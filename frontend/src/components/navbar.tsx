import React from "react";
import {Collapse, IconButton, Navbar as MTNavbar, Typography,} from "@material-tailwind/react";
import {useGetNavbarsQuery} from "@/services/navbar.services";
import {Bars3Icon, XMarkIcon} from "@heroicons/react/20/solid";
import Image from "next/image";
import config from "@/config";
import Link from "next/link";

interface NavItemProps {
  children: React.ReactNode;
  href: string;
  imgSrc: string;
  imgAlt: string;
}

function NavItem({children, href, imgSrc, imgAlt}: NavItemProps) {
  return (
    <li>
      <Link
        href={href}
        // target={href ? "_self" : "_self"}
        className="flex items-center gap-2 font-medium text-gray-900"
      >
        <Image src={imgSrc}
               alt={imgAlt}
               width={512}
               height={512}
               className="h-5 w-5"/>

        {children}
      </Link>
    </li>
  );
}

export function Navbar() {

  const {data, isLoading} = useGetNavbarsQuery();

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  return (
    <MTNavbar shadow={false} fullWidth className="border-0 sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="text-blue-500 hover:text-blue-700">
          <Typography color="blue-gray" className="text-lg font-bold">
            {data?.data[0]?.attributes?.companyName}
          </Typography>
        </Link>
        <ul className="ml-10 hidden items-center gap-8 lg:flex">
          {isLoading === false && data?.data[0]?.attributes?.nav_items?.data?.map(({id, attributes}) => (
            <NavItem
              key={id}
              href={attributes?.href}
              imgSrc={`${config.api}${attributes?.icon?.data[0]?.attributes?.url}`}
              imgAlt="Image"
            >
              {attributes?.name}
            </NavItem>
          ))}
        </ul>
        <IconButton
          variant="text"
          color="gray"
          onClick={handleOpen}
          className="ml-auto inline-block lg:hidden"
        >
          {open ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6"/>
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6"/>
          )}
        </IconButton>
      </div>
      <Collapse open={open}>
        <div className="container mx-auto mt-3 border-t border-gray-200 px-2 pt-4">
          <ul className="flex flex-col gap-4">
            {data?.data[0]?.attributes?.nav_items?.data?.map(({id, attributes}: any) => (
              <NavItem
                key={id}
                href={attributes?.href}
                imgSrc={`${config.api}${attributes?.icon?.data[0]?.attributes?.url}`}
                imgAlt="Image"
              >
                {attributes?.name}
              </NavItem>
            ))}
          </ul>
        </div>
      </Collapse>
    </MTNavbar>
  );
}

export default Navbar;
