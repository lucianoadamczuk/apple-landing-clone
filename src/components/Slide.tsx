import { Button } from ".";

interface Props {
  image: string;
}
export default function Slide({ image }: Props) {
  return (
    <div
      className=" w-full h-full bg-cover bg-center"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className=" w-full h-full py-16 absolute inset-0 flex flex-col justify-end items-center gap-5 bg-gradient-to-t from-dark text-light">
        <div className=" text-center">
          <b>Type</b>
          <p>Program/Movie description</p>
        </div>
        <Button />
      </div>
    </div>
  );
}
