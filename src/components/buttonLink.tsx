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
            <button>{props.text}</button>
        </Link>
    </div>
  )
};

export default ButtonLink;