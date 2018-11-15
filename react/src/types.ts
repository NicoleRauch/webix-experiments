
export interface IColumn {
    id: "id" | "switch" | "check",
    header: string,
    sort: false,
    adjust: "data" | "header" | true,
    template?: any,
    on?: object,
}

export interface IEntry {
    id: string,
}

export interface IEditCheckboxes {
    [id: string]: boolean
}

export interface IListDataProps {
    entries: IEntry[],
}

export interface IEditInfos {
    editCheckboxes: IEditCheckboxes
}

export interface IEditProps {
    editInfos: IEditInfos
}

export interface IListData {
    id: string,
}

////////////////////////////////////////////////////////////////////////////////////

export type MyDispatch = (x:any) => void

export interface IDispatchProps {
    dispatch: MyDispatch
}
