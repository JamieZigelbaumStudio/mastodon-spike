import React, {useState} from "react";
import {FormControl, InputLabel, MenuItem, Select} from '@material-ui/core';
import {MockAssets} from "../../mock_assets"
import {AssetsTitle, AssetsWrapper} from "../../styles/assets/Assets";
import {Asset} from "./asset/components/Asset";
import {AssetBuyButton, AssetNotSelected, DropdownOverride} from "./asset/styles/Asset";
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";

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
                <Select labelId="asset-label" value={selectedAsset?.name || ''} onChange={handleChange}>
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

    const displayBuyButton = () => {
        if (selectedAsset) {
            return <AssetBuyButton>
                <Button variant="contained">
                    <Link to={{
                        pathname: "/marketplace",
                        asset: selectedAsset
                    }}>
                        Buy
                    </Link>
                </Button>
            </AssetBuyButton>;
        }
    };

    const priceCallback = (price) => {
        setSelectedAsset(prevState => {
            return {...prevState, price}
        });
    };

    const createAsset = () => {
        return <div>
            {selectAssetFromDropdown()}
            <Asset asset={selectedAsset} callback={priceCallback}/>
            {displayBuyButton()}
        </div>;
    };

    return <AssetsWrapper>
        <AssetsTitle>
            ASSETS
        </AssetsTitle>
        {assets ? createAsset() : <AssetNotSelected>No new assets found</AssetNotSelected>}
    </AssetsWrapper>
};