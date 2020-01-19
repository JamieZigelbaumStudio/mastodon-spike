import React, {useState} from "react";
import {FormControl, InputLabel, MenuItem, Select} from '@material-ui/core';
import {MockAssets} from "../../mock_assets"
import {AssetsTitle, AssetsWrapper} from "../../styles/assets/Assets";
import {Asset} from "./asset/components/Asset";
import {TextField} from "./asset/styles/Asset";

export const Assets = (props) => {
    const [assets] = useState(MockAssets);
    const [selectedAsset, setSelectedAsset] = useState(assets[0]);

    const handleChange = (event) => {
        const selectedAsset = fetchAsset(event.target.value);
        setSelectedAsset(selectedAsset[0]);
        props.assetCallback(selectedAsset);
    };

    const fetchAsset = (assetName) => {
        return assets.filter(asset => asset.name === assetName);
    };

    const selectAssetFromDropdown = () => {
        return <div>
            <Select value={selectedAsset.name} onChange={handleChange}>
                {
                    assets.map(asset =>
                        <MenuItem value={asset.name} key={asset.id}>
                            {asset.name}
                        </MenuItem>)
                }
            </Select>
        </div>;
    };

    return (
        <AssetsWrapper>
            <AssetsTitle>
                ASSETS
            </AssetsTitle>
            {selectAssetFromDropdown()}
            <Asset asset={selectedAsset}/>
        </AssetsWrapper>
    );
};