import styled from "styled-components";
import makeStyles from "@material-ui/core/styles/makeStyles";

export const AssetWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-top: 1.5rem;
`;

export const AssetName = styled.div`
  padding-top: 1rem;
  font-weight: 500;
`;

export const AssetPrice = styled.div`
  font-weight: 500;
  padding-top: 1.5rem;
`;

export const AssetShares = styled.div`
  padding-top: 1rem;
  font-weight: 500;
`;

export const AssetContent = styled.div`
  flex: 1;
`;

export const DropdownOverride = makeStyles({
    root: {
        width: '100%'
    }
});

export const AssetNotSelected = styled.div`
  margin-top: 4rem;
  padding: 1rem;
  font-size: 1.5rem;
  font-weight: 500;
  text-align: center;
`;

export const AssetBuyButton = styled.div`
  padding: 3rem 0 0 5rem;
`;
