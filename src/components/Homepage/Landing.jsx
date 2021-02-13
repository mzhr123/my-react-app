import React from "react";
import { Mainheader } from "../Headersection/Mainbodyheader/Mainheader";
import { Leftnavigation } from "../leftnavigation/Leftnavigation";
import { Rightnavigation } from "../Rightnavigation/Rightnavigation";
import { Bodysection } from "../Bodysection/Bodysection";
import { Footersection } from "../Footersection/Footersection";
export const Landing = () => {
    return(

        <div>
            <Mainheader/>
            <Leftnavigation/>
            <Rightnavigation/>
            <Bodysection/>
            <Footersection/>


        </div>
    );
};