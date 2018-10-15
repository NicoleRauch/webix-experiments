export const data = new webix.DataCollection();

data.parse([{
    id: "root", value: "Cars", open: true, data: [
        {
            id: "1", open: true, value: "Toyota", data: [
                {id: "1.1", value: "Avalon"},
                {id: "1.2", value: "Corolla"},
                {id: "1.3", value: "Camry"}
            ]
        },
        {
            id: "2", value: "Skoda", open: true, data: [
                {id: "2.1", value: "Octavia"},
                {id: "2.2", value: "Superb"}
            ]
        }
    ]
}], "json");
