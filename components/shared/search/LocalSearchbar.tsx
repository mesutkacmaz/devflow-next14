"use client";

import { Input } from "@/components/ui/input";
import Image from "next/image";

interface Props {
  route: string;
  iconPosition: string;
  imgSrc: string;
  placeholder: string;
  otherClasses?: string;
}

const LocalSearchbar = ({
  route,
  iconPosition,
  imgSrc,
  placeholder,
  otherClasses,
}: Props) => {
  return (
    <div
      className={`${otherClasses} background-light800_darkgradient relative flex min-h-[56px] grow items-center gap-4 rounded-[10px] px-4 ${iconPosition === "right" ? "flex-row-reverse" : "flex-row"}`}
    >
      <Image
        src={imgSrc}
        width={24}
        height={24}
        alt="search icon"
        className="cursor-pointer"
      />

      <Input
        type="text"
        placeholder={placeholder}
        onChange={() => {}}
        className="paragraph-regular no-focus placeholder background-light800_darkgradient border-none shadow-none outline-none"
      />
    </div>
  );
};

export default LocalSearchbar;
