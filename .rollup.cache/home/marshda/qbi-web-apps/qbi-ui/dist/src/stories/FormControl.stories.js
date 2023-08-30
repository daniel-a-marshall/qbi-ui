import React from "react";
import { Input, FormControl } from "../components";
const meta = {
    title: "FormControls/FormControl",
    component: FormControl,
    tags: ["autodocs"],
};
export default meta;
export const Primary = {
    //render: () => <Button>Primary</Button>,
    args: { id: "name", children: React.createElement(Input, null) },
};
export const Label = {
    //render: () => <Button>Primary</Button>,
    args: { id: "name", label: "Full Name", children: React.createElement(Input, null) },
};
export const HelperText = {
    //render: () => <Button>Primary</Button>,
    args: {
        id: "name",
        label: "Full Name",
        children: React.createElement(Input, null),
        helperText: "helper text goes here",
    },
};
export const Error = {
    //render: () => <Button>Primary</Button>,
    args: {
        id: "name",
        children: React.createElement(Input, null),
        label: "Full Name",
        errorText: "Full Name is a required field",
    },
};
//# sourceMappingURL=FormControl.stories.js.map