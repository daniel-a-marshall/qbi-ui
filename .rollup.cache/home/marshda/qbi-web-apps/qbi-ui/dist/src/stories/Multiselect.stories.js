import React from "react";
import { Multiselect } from "../components";
const meta = {
    title: "Selects/Multiselect",
    component: Multiselect,
    tags: ["autodocs"],
};
export default meta;
export const Primary = {
    args: {
        options: ["Option 1", "Option 2", "Option 3", "Option 4"],
        value: [],
    },
    render: args => {
        const [value, setValue] = React.useState([]);
        return React.createElement(Multiselect, Object.assign({}, args, { onChange: setValue, value: value }));
    },
};
//# sourceMappingURL=Multiselect.stories.js.map