import React from "react";
import {AssetWrapper} from "../styles/Asset";

export const Asset = (props) => {
    return <AssetWrapper>
        {props.asset}
    </AssetWrapper>
};