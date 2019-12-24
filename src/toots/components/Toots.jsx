import React, {useState} from "react";
import {Toot} from "./Toot";

export const Toots = (props) => {
    const [toots,] = useState(props.content);

    console.log(toots);

    return <div>
        <ul>
            {
                toots.map(data => {
                    console.log(data);
                    return <li>
                        <Toot content={data}/>
                    </li>
                })
            }
        </ul>
    </div>
};