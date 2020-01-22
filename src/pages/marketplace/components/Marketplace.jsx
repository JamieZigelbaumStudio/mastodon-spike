import React from "react";
import {MarketplaceTitle, MarketplaceWrapper} from "../styles/Marketplace";
import {AssetDetails} from "../asset-details/components/AssetDetails";

export const Marketplace = (props) => {
    return props.location.asset ? <MarketplaceWrapper>
        <MarketplaceTitle>
            Welcome to Marketplace
        </MarketplaceTitle>

        <AssetDetails asset={props.location.asset}/>
    </MarketplaceWrapper> : <MarketplaceTitle>
        Nothing to buy/sell
    </MarketplaceTitle>;
};