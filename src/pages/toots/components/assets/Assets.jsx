import React, {useState} from "react";
import {MenuItem, Select} from '@material-ui/core';
import {MockAssets} from "../../mock_assets"
import {AssetsTitle, AssetsWrapper} from "../../styles/assets/Assets";
import {Asset} from "./asset/components/Asset";

export const Assets = () => {

    const [assets] = useState(MockAssets);
    const [selectedAsset, setSelectedAsset] = useState(assets[0]);

    const handleChange = (event) => {
        setSelectedAsset(event.target.value);
    };

    const selectAssetFromDropdown = () => {
        return <div>
            <Select value={selectedAsset} onChange={handleChange}>
                {
                    assets.map(asset =>
                        <MenuItem value={asset}>
                            {asset}
                        </MenuItem>)
                }
            </Select>
        </div>;
    };

    return (
        <AssetsWrapper>
            <AssetsTitle>
                Assets
            </AssetsTitle>
            {selectAssetFromDropdown()}
            <Asset asset={selectedAsset}/>
        </AssetsWrapper>
    );
};