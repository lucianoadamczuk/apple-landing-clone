import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

export default function Navbar() {
  const links = [
    "Store",
    "Mac",
    "iPan",
    "iPhone",
    "Watch",
    "AirPods",
    "TV & Home",
    "Only on Apple",
    "Accesories",
    "Support",
  ];

  const Menu = () => {
    return (
      <svg
        onClick={() => setIsOpen(!isOpen)}
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="fill-gray w-5 h-5"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
        />
      </svg>
    );
  };

  const Bag = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="fill-light w-5 h-5"
        viewBox="0 0 16 16"
      >
        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
      </svg>
    );
  };

  const [isOpen, setIsOpen] = useState<boolean>();
  return (
    <>
      <nav
        className={` lg:hidden w-full  py-2 fixed top-0 bg-dark ${
          !isOpen && `bg-opacity-80`
        } backdrop-blur-md`}
      >
        <div className=" container flex items-center justify-between">
          <Menu />
          <img src="/logotipoApple.png" alt="Apple logo" className=" w-5" />
          <div
            className={`container absolute  bg-dark top-10 left-0 flex flex-col justify-center gap-2 duration-300 ${
              !isOpen ? "h-0" : "h-screen"
            } overflow-hidden`}
          >
            {links.map((item) => (
              <p key={uuidv4()} className=" py-2 border-b-[1px] text-gray">
                {" "}
                {item}{" "}
              </p>
            ))}
          </div>
          <Bag />
        </div>
      </nav>

      <nav className=" w-full hidden fixed top-0 py-2 lg:flex bg-dark bg-opacity-80 backdrop-blur-md ">
        <div className="container flex justify-between">
          <img src="/logotipoApple.png" alt="Apple logo" className=" w-5" />
          <div className=" flex text-gray gap-5">
            {links.map((item) => (
              <p key={uuidv4()}> {item} </p>
            ))}
          </div>
          <Bag />
        </div>
      </nav>
    </>
  );
}
