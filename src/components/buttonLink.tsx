import React from "react";
import Link from "next/link";

type Props = {
    text: string;
    url: string;
};

const ButtonLink = (props: Props) => {
  return (
    <Link href={props.url} className="group bg-transparent">
      <button className="font-sans font-normal bg-transparent hover:bg-medium-brown text-medium-brown hover:text-light-brown border-2 border-medium-brown hover:border-transparent rounded ease-out duration-300 py-1.5 px-6">
        <text className="text-xl bg-transparent">{props.text}</text>
        <span className="mx-1"/>
        <span className="text-xl inline-block bg-transparent transition ease-in-out group-hover:translate-x-3 text-medium-brown group-hover:text-light-brown duration-300">→</span>
      </button>
    </Link>
  );
};

export default ButtonLink;