import React from "react";
import {AssetContent, AssetName, AssetPrice, AssetShares, AssetWrapper} from "../styles/Asset";
import TextField from '@material-ui/core/TextField';

export const Asset = (props) => {

    function displayAssetName() {
        return <AssetName>
            Asset Name: {props.asset.name}
        </AssetName>;
    }

    function displayAssetShare() {
        return <AssetShares>
            Shares available: {props.asset.shares}
        </AssetShares>;
    }

    function displayAssetPrice() {
        return <AssetPrice>
            Set Asset Price:
            <TextField required id="standard-required" label="Required" type="number"/>
        </AssetPrice>;
    }

    return <AssetWrapper>
        {displayAssetName()}
        <AssetContent>
            {displayAssetPrice()}
            {displayAssetShare()}
        </AssetContent>
    </AssetWrapper>
};