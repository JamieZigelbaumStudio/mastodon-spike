import React from "react";
import {AssetContent, AssetName, AssetNotSelected, AssetPrice, AssetShares, AssetWrapper} from "../styles/Asset";
import TextField from '@material-ui/core/TextField';

export const Asset = (props) => {

    function displayAssetName() {
        const assetCoin = `${props.asset.name}Coin`;
        return <AssetName>
            Asset Name: {assetCoin}
        </AssetName>;
    }

    function displayAssetShare() {
        return <AssetShares>
            Coins available: {props.asset.shares}
        </AssetShares>;
    }

    const handlePriceChange = (event) => {
        props.callback(event.target.value);
    };

    const displayAssetPrice = () => {
        return <AssetPrice>
            Set Price Per Coin:
            <TextField required id="standard-required" label="Enter Price" type="number" onChange={handlePriceChange}/>
        </AssetPrice>
    };

    return props.asset ? <AssetWrapper>
        {displayAssetName()}
        <AssetContent>
            {displayAssetPrice()}
            {displayAssetShare()}
        </AssetContent>
    </AssetWrapper> : <AssetNotSelected>No asset selected</AssetNotSelected>
};