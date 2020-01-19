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

    return props.status ? parse(props.status, options) : "Fetching status"
};