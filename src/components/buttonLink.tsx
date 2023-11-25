import React from "react";
import Link from "next/link";

type Props = {
    text: string;
    url: string;
    color1: string;
    color2: string;
};

const ButtonLink = (props: Props) => {
  return (
    <Link href={props.url} className="group bg-transparent">
      <button className={`font-sans font-normal bg-transparent hover:bg-${props.color1} text-${props.color1} hover:text-${props.color2} border-2 border-${props.color1} hover:border-transparent rounded ease-out duration-300 py-1.5 px-6`}>
        <text className="text-xl bg-transparent">{props.text}</text>
        <span className="mx-1"/>
        <span className={`text-xl inline-block bg-transparent transition ease-in-out group-hover:translate-x-3 text-${props.color1} group-hover:text-${props.color2} duration-300`}>→</span>
      </button>
    </Link>
  )
};

export default ButtonLink;