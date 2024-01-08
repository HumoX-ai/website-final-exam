import { CiSearch } from "react-icons/ci";
import { FaRegCircleUser } from "react-icons/fa6";
import { IoBagHandleOutline } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";
import { Fragment, useState } from "react";
import { Transition } from "@headlessui/react";
const Header = () => {
  const [open, setOpen] = useState(false);

  function ScrollTo(to: string | undefined) {
    const targetElement = document.getElementById(to || "home");
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  }
  return (
    <div>
      <div className="flex items-center justify-between border-b-2 py-4 transition-all">
        <img
          className="w-40 md:w-60 xl:w-80"
          src="https://www.partytimemalta.com/cdn/shop/files/xmas_logo_1938.png?v=1614369358"
          alt="Logo"
        />
        <div className="gap-4 hidden md:flex">
          <CiSearch
            size={28}
            className="cursor-pointer hover:scale-125 transition-transform"
          />
          <FaRegCircleUser
            size={28}
            className="cursor-pointer hover:scale-125 transition-transform"
          />
          <IoBagHandleOutline
            size={28}
            className="cursor-pointer hover:scale-125 transition-transform"
          />
        </div>
        <div className="md:hidden">
          <FiMenu size={28} onClick={() => setOpen(!open)} />
        </div>
      </div>
      <div className="md:flex gap-8 lg:gap-12 xl:gap-14 py-4 justify-center transition-all hidden ">
        {data.map((item, index) => (
          <h1
            className="hover:text-neutral-500 hover:underline cursor-pointer text-[12px] xl:text-lg"
            key={index}
            onClick={() => ScrollTo(item.to)}
          >
            {item.title}
          </h1>
        ))}
      </div>
      <Transition show={open} as={Fragment}>
        <div
          className="fixed inset-0 z-40 flex md:hidden"
          onClick={() => setOpen(false)}
        >
          <Transition.Child
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div
              className="fixed inset-0 bg-black bg-opacity-45"
              onClick={() => setOpen(false)}
            />
          </Transition.Child>

          <Transition.Child
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="relative flex flex-col flex-1 w-64 max-w-xs bg-white focus:outline-none h-screen p-6">
              <div className="flex flex-col gap-4">
                {data.map((item, index) => (
                  <h1
                    className="hover:text-neutral-500 hover:underline cursor-pointer text-[12px] xl:text-lg "
                    key={index}
                    onClick={() => ScrollTo(item.to)}
                  >
                    {item.title}
                  </h1>
                ))}
              </div>
            </div>
          </Transition.Child>
        </div>
      </Transition>
    </div>
  );
};

export default Header;

const data = [
  {
    title: "PARTY",
    to: "special",
  },
  {
    title: "OPEN THEMES",
    to: "funevents",
  },
  {
    title: "KIDS THEMES",
  },
  {
    title: "SELL",
    to: "sell",
  },
  {
    title: "PRICING",
    to: "pricing",
  },
  {
    title: "DELIVERY",
    to: "delivery",
  },
  {
    title: "CONTACT",
    to: "contact",
  },
];
