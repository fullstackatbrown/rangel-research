import ButtonLink from "@/components/buttonLink";
import React from "react";

type Props = {
    color1: string;
    color2: string;
};

const QualtricsButton = (props: Props) => {
    return (
        <ButtonLink text="Qualtrics Survey" url="https://brown.co1.qualtrics.com/jfe/form/SV_2seiVuFl1tCmNim" color1={props.color1} color2={props.color2}/>
    )
};

export default QualtricsButton;