interface LetterTextProps {
  text: string;
  letter: string;
}

export default function LetterText({ text, letter }: LetterTextProps) {
  return (
    <span className="relative text-[150px] md:text-[200px] lg:text-[250px] font-notoSerif leading-none">
      {letter}
      <h1>
        <div
          className={`bg-[#FFF] text-center absolute top-[calc(50%)] -translate-y-1/2 w-full px-[0] py-[5px] text-[16px] md:text-[18px] lg:text-[20px] font-montserrat`}
        >
          {text}
        </div>
      </h1>
    </span>
  );
}
