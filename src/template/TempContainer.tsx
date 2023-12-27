import { v4 as uuidv4 } from "uuid";
import { TempTextBox } from ".";

interface Props {
  dark?: boolean;
  title: string;
  subtitle: string;
  link: string | string[];
  src: string;
}

export default function TempContainer({
  dark,
  title,
  subtitle,
  link,
  src,
}: Props) {
  return (
    <section
      className={`
      pt-16 flex flex-col items-center justify-between gap-10 overflow-hidden 
    ${dark && "bg-dark text-light"}
    `}
      style={{ height: "90vh" }}
    >
      <div className=" space-y-5 ">
        <TempTextBox title={title} subtitle={subtitle} />
        <div className=" flex justify-center gap-5">
          {Array?.isArray(link) ? (
            link.map((item) => (
              <p key={uuidv4()} className=" text-link hover:underline">
                {item}
              </p>
            ))
          ) : (
            <p className=" text-link hover:underline"> {link} </p>
          )}
        </div>
      </div>

      <img src={src} alt={`An ${title}`} className=" h-3/4 object-contain" />
    </section>
  );
}
