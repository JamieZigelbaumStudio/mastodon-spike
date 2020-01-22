import React from "react";
import parse, {domToReact} from "html-react-parser";

export const Toot = (props) => {
    const options = {
        replace: ({attribs, children}) => {
            if (attribs?.class === 'u-url mention') {
                const reactChildren = domToReact(children, options);
                return React.createElement(
                    'span',
                    {
                        style: {color: 'blue'}
                    },
                    reactChildren.filter(child => child !== '@')
                );
            }
        }
    };

    const addHighlightToAsset = () => {
        if (!props.asset) {
            return props.status;
        }
        const regExp = new RegExp(`${props.asset.name}`, 'gi');
        return props.status.replace(regExp, `<mark>${props.asset.name}</mark>`);
    };

    const parseStatus = () => {
        const highlightedString = addHighlightToAsset();
        return parse(highlightedString, options);
    };

    return props.status ? parseStatus() : "Fetching status"
};