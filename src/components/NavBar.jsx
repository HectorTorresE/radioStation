import React, { useState } from "react";
import { PlayCircleIcon , MagnifyingGlassIcon} from "@heroicons/react/24/outline";
import { SpeakerWaveIcon } from "@heroicons/react/24/solid";


function NavBar() {
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [date, setDate] = useState(new Date());
  const [isVisible, setIsVisible] = useState(false);

  const dateOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const toggleFade = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="flex w-full border-0 border-gray-500">
      <div className="flex flex-row w-1/2">
        <div className="flex flex-row w-1/4 bg-white text-black h-full m-auto items-center justify-center">
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
        <div className="flex flex-row w-3/4 bg-black text-white py-2 px-4 items-center border-x border-gray-500">
          <div className="flex flex-row w-1/3 items-center justify-center">
            <PlayCircleIcon
              className={`h-14 w-14 text-white hover:fill-green-800 ${
                isVisible ? "fill-green-80000" : "hover:fill-green-800"
              }`}
              onClick={toggleFade}
            />
            <h5 className="pl-4 font-syne text-lg mr-4">Radio Universal</h5>
          </div>
          <div className="flex flex-row w-1/3 items-center justify-center">
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
          <div className="flex flex-row w-1/3 justify-center">
            <h1 className="text-white uppercase font-syne text-base">
              {date.toLocaleDateString(undefined, dateOptions)}
            </h1>
          </div>
        </div>
      </div>
      <div className="flex flex-row w-1/2 bg-black">
        <div className="flex flex-row w-1/3 items-center justify-center border-x border-gray-500">
          <MagnifyingGlassIcon className="h-7 w-7 text-white mr-6 " />
          <input
            type="text"
            className="bg-black text-white w-1/2 border-0 border-gray-500"
            placeholder="Search"
          />
        </div>
        <div className="flex flex-row w-1/3 items-center justify-center border-x border-gray-500">
        </div>
        <div className="w-1/3"></div>
      </div>
    </div>
  );
}

export default NavBar;
