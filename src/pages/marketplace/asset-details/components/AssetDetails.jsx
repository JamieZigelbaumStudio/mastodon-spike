import React, {useState} from "react";
import {AssetBody, AssetDetailsTitle, AssetDetailsWrapper, AssetDetail} from "../styles/AssetDetails";

export const AssetDetails = (props) => {
    const [asset] = useState(props.asset);

    const displayAssetDetails = () => {
        return <AssetBody>
            <AssetDetail>
                Asset Name : {asset.name}
            </AssetDetail>
            <AssetDetail>
                Asset Price : {asset.price}
            </AssetDetail>
            <AssetDetail>
                Asset Shares: {asset.shares}
            </AssetDetail>
        </AssetBody>
    };

    return <AssetDetailsWrapper>
        <AssetDetailsTitle>
            Asset Details
        </AssetDetailsTitle>

        {displayAssetDetails()}
    </AssetDetailsWrapper>;
};