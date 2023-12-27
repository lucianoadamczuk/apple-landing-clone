interface Props {
  title: string;
  subtitle: string;
}
export default function TempTextBox({ title, subtitle }: Props) {
  return (
    <article className={`w-fit text-center `}>
      <h3 className=" text-5xl font-bold"> {title} </h3>
      <h6 className=" text-2xl"> {subtitle} </h6>
    </article>
  );
}
