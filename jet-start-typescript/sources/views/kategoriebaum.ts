import {JetView} from "webix-jet";

import {data} from "models/kategoriebaumData";


export default class DataView extends JetView{
    config(){
        return {
            view: "tree",
            select: true,
            hidden: false,
            minHeight: 300,
            multiselect: "touch",
            type: "lineTree",
            template: "{common.icon()}<span>#value#</span>",
        };

    }
    init(view){
        view.parse(data);  // <<--- Daten aus records.ts
    }
}
