import { ReactNode, useState } from "react";

interface Props {
  title: string;
  children: ReactNode;
}
export default function Dropdown({ title, children }: Props) {
  const [isOpen, setIsOpen] = useState<boolean>();
  return (
    <section className=" text-sm border-b-2 border-gray">
      <div
        className=" flex items-center justify-between cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className=" capitalize "> {title} </p>
        <p className={` text-2xl duration-200  ${isOpen && "rotate-45"} `}>+</p>
      </div>
      <div className={!isOpen ? "hidden" : "flex flex-col ps-5 pb-5 pt-2"}>
        {children}
      </div>
    </section>
  );
}
