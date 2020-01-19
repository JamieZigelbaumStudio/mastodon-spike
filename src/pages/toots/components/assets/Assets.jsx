import React, {useState} from "react";
import {FormControl, InputLabel, MenuItem, Select} from '@material-ui/core';
import {MockAssets} from "../../mock_assets"
import {AssetsTitle, AssetsWrapper} from "../../styles/assets/Assets";
import {Asset} from "./asset/components/Asset";
import {AssetBuyButton, DropdownOverride} from "./asset/styles/Asset";
import Button from "@material-ui/core/Button";

export const Assets = (props) => {
    const [assets] = useState(MockAssets[`${props.tootID}`]);
    const [selectedAsset, setSelectedAsset] = useState();

    const handleChange = (event) => {
        const selectedAsset = fetchAsset(event.target.value);
        setSelectedAsset(selectedAsset[0]);
        props.assetCallback(selectedAsset);
    };

    const fetchAsset = (assetName) => {
        return assets.filter(asset => asset.name === assetName);
    };

    const selectAssetFromDropdown = () => {
        const style = DropdownOverride();
        return <div>
            <FormControl className={style.root}>
                <InputLabel id="asset-label">Asset</InputLabel>
                <Select value={selectedAsset?.name} onChange={handleChange}
                        labelId="asset-label">
                    {
                        assets.map(asset =>
                            <MenuItem value={asset.name} key={asset.id}>
                                {asset.name}
                            </MenuItem>)
                    }
                </Select>
            </FormControl>
        </div>;
    };

    const redirectToMarketplace = () => {
        //TODO: Use alternate reroute mechanism
        window.location.href = "#/marketplace";
    };

    function displayBuyButton() {
        if (selectedAsset) {
            return <AssetBuyButton>
                <Button variant="contained" color="primary" onClick={redirectToMarketplace}>
                    Buy
                </Button>
            </AssetBuyButton>;
        }
    }

    return (
        <AssetsWrapper>
            <AssetsTitle>
                ASSETS
            </AssetsTitle>
            {selectAssetFromDropdown()}
            <Asset asset={selectedAsset}/>
            {displayBuyButton()}
        </AssetsWrapper>
    );
};