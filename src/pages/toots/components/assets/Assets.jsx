import React, {useState} from "react";
import {MenuItem, Select} from '@material-ui/core';
import {MockAssets} from "../../mock_assets"

export const Assets = () => {

    const [assets] = useState(MockAssets);
    const [selectedAsset, setSelectedAsset] = useState(assets[0]);

    function handleChange(event) {
        setSelectedAsset(event.target.value);
    }

    return <div>
        Assets
        <div>
            <Select value={selectedAsset} onChange={handleChange}>
                {assets.map(asset =>
                    <MenuItem value={asset}>
                        {asset}
                    </MenuItem>)}
            </Select>
        </div>
    </div>
};