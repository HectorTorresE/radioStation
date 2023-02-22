import React, { useState } from "react";
import {
  PlayCircleIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { SpeakerWaveIcon } from "@heroicons/react/24/solid";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

function NavBar() {
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [date, setDate] = useState(new Date());
  const [isVisible, setIsVisible] = useState(false);
  const [navigation, setNavigation] = useState([
    { name: "Inicio", href: "#inicio", current: true },
    { name: "Internacionales", href: "#skills", current: false },
    { name: "Espectáculo", href: "#contact", current: false },
    { name: "Deportes", href: "#contact", current: false },
    { name: "Tecnología", href: "#contact", current: false },
    { name: "Salud", href: "#contact", current: false },
  ]);

  const dateOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const toggleFade = () => {
    setIsVisible(!isVisible);
  };

  const handleNavigation = (index) => {
    const updatedNavigation = navigation.map((item, i) => {
      return {
        ...item,
        current: i === index,
      };
    });
    setNavigation(updatedNavigation);
  };

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <Disclosure as="nav" className="bg-navbar sticky top-0 w-full z-50">
      {({ open }) => (
        <>
          <div className="flex border-0 border-gray-500">
            <div className="flex flex-row w-full lg:w-1/2">
              <div className="hidden flex-row w-1/4 bg-white text-black m-auto items-center justify-center lg:flex">
                <h5 className="uppercase font-black text-xl font-syne mr-4">
                  Now Playing
                </h5>
                {isVisible && (
                  <div
                    className="h-4 w-4 animate-ping bg-red-500 rounded-full"
                    style={{ animationDuration: "1.5s" }}
                  />
                )}
              </div>
              <div className="w-full bg-black text-white py-2 px-4 border-x border-gray-500 lg:inline-flex">
                <div className="flex flex-row lg:w-1/3 items-center">
                  <PlayCircleIcon
                    className={`h-14 w-14 text-white hover:fill-green-800 ${
                      isVisible ? "fill-green-800" : "hover:fill-green-800"
                    }`}
                    onClick={toggleFade}
                  />
                  <div className="flex flex-1 justify-center">
                    <h5 className="font-bold text-xl font-syne lg:mr-6 lg:pl-4">
                      Radio Universal
                    </h5>
                  </div>
                  <div className="inset-y-0 right-0 flex items-center lg:hidden">
                    {/* Mobile menu button*/}
                    <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      ) : (
                        <Bars3Icon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
                <div className="hidden flex-row w-1/3 items-center justify-center lg:flex ">
                  <SpeakerWaveIcon className="h-7 w-7 text-white hover:text-green-700 mr-6" />
                  <input
                    type="range"
                    min={0}
                    max={1}
                    step={0.01}
                    value={volume}
                    onChange={(e) => setVolume(e.target.value)}
                    className="w-24 appearance-none bg-gray-500 outline-none focus:outline-none focus:shadow-outline h-1 vSlider mr-4"
                    id="myRange"
                  />
                </div>
                <div className="hidden flex-row w-1/3 justify-center items-center lg:flex">
                  <h1 className="text-white uppercase font-syne text-lg">
                    {date.toLocaleDateString(undefined, dateOptions)}
                  </h1>
                </div>
              </div>
            </div>
            <div className="hidden flex-row w-1/2 bg-black lg:flex">
              <div className="flex flex-row w-1/3 items-center justify-center border-x border-gray-500">
                <MagnifyingGlassIcon className="h-7 w-7 text-white mr-6 " />
                <input
                  type="text"
                  className="bg-black text-white w-1/2 border-0 border-gray-500"
                  placeholder="Search"
                />
              </div>
              <div className="flex flex-row w-2/3 items-center justify-center border-x border-gray-500">
                {navigation.map((item, index) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-green-800 text-white"
                        : "text-gray-300 hover:bg-green-800 hover:text-white",
                      "px-3 py-2 rounded-md text-sm font-medium mx-2"
                    )}
                    aria-current={item.current ? "page" : undefined}
                    onClick={() => handleNavigation(index)}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <Disclosure.Panel className="lg:hidden bg-black border-x border-gray-500">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item, index) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-green-800 text-white"
                      : "text-gray-300 hover:bg-green-800 hover:text-white",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                  onClick={() => handleNavigation(index)}

                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

export default NavBar;
