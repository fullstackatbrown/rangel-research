import React from "react";
import Link from "next/link";

type Props = {
    text: string;
    url: string;
};

const ButtonLink = (props: Props) => {
  return (
    <div>
        <Link href={props.url}>
            <button className="font-sans font-normal hover:bg-slate-200 hover:text-black text-slate-200  ease-out duration-100 border-2 border-slate-200 m-3 py-1 px-3.5">{props.text}</button>
        </Link>
    </div>
  )
};

export default ButtonLink;