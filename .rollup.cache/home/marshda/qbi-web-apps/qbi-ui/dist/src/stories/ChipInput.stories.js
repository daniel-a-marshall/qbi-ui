import React from "react";
import { ChipInput } from "../components";
const meta = {
    title: "FormControls/ChipInput",
    component: ChipInput,
    tags: ["autodocs"],
};
export default meta;
export const Primary = {
    //render: () => <Button>Primary</Button>,
    //@ts-ignore
    args: {},
    render: args => {
        const [value, setValue] = React.useState([]);
        return React.createElement(ChipInput, { onChange: setValue, value: value });
    },
};
//# sourceMappingURL=ChipInput.stories.js.map