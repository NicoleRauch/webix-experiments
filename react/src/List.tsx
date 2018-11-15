import React, {Component} from "react";
import Webix from './Webix';
import {IEditProps, IDispatchProps, IListDataProps, IListData, IColumn, MyDispatch} from "./types";

const column = (): IColumn => {
    return {
        id: "id",
        header: "Identifier",
        sort: false,
        adjust: true,
    }
};

const editColumn = (dispatch: MyDispatch): IColumn[] =>
    [{
        id: "switch",
        header: "Switch",
        sort: false,
        adjust: true,
        template: "{common.active()}",
        on: {
            onChange: (newValue: 0 | 1) => {
                dispatch({text: "Change", id: "data.id", newValue});
            }
        },
    },
        {
            id: "check",
            header: "Checkbox",
            sort: false,
            adjust: true,
            template: "{common.edit()}",
            on: {
                onChange: (newValue: 0 | 1) => {
                    dispatch({text: "Change", id: "data.id", newValue});
                }
            },
        }];


const view = (dispatch: MyDispatch) => ({
    view: "activeDatatable",
    // view: "datatable",
    columns: editColumn(dispatch).concat([column()]),
    autoheight: true,
    activeContent: {
        active: {
            view: "switch",
            width: 100,
            on: {
                onChange: (newValue: 0 | 1) => {
                    dispatch({text: "Change switch", id: "data.id", newValue});
                }
            },
        },
        edit: {
            view: "checkbox",
            id: "edit",
            value: 1, // "data.edit",
            on: {
                onChange: (newValue: 0 | 1) => {
                    dispatch({text: "Change 2", id: "data.id", newValue});
                }
            },
            // template: (obj, common) => "<div>Hello2 "+common.bearbeitung(obj, common)+"</div>",
        }
    },
    checkboxRefresh: true,
});


export default class List extends Component<IListDataProps & IEditProps & IDispatchProps> {

    render() {

        const {entries, editInfos, dispatch} = this.props;

        return (
            <div>
                <Webix
                    ui={view(dispatch)}
                    data={entries
                        .map((entry: IListData): object => {
                            return {...entry,
                                active: editInfos.editCheckboxes[entry.id] ? 1 : 0,
                                edit: editInfos.editCheckboxes[entry.id] ? 1 : 0
                            };
                        })}/>
            </div>
        );
    }
}
