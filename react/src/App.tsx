import React, {Component} from "react";
import {hot} from "react-hot-loader";
import List from "./List";
import {IEditInfos, IEntry} from "./types";


export class AppComponent extends Component<{}> {

    render() {

        const listData: IEntry[] = [{id: "1"}, {id: "2"}, {id: "3"}];

        const editInfos: IEditInfos = {
            editCheckboxes: {
                1: false,
                2: true,
                3: false
            }
        };

        return (
            <div>
                <List entries={listData} editInfos={editInfos} dispatch={x => console.log(x)}/>
            </div>
        );
    }
}

export default hot(module)(AppComponent);
