import { Avatar } from "../components";
const meta = {
    title: "Misc/Avatar",
    component: Avatar,
    tags: ["autodocs"],
};
export default meta;
export const Primary = {
    //render: () => <Button>Primary</Button>,
    args: { imageUrl: "https://i.pravatar.cc/300" },
};
export const NoImageUrl = {
    //render: () => <Button>Primary</Button>,
    args: { alt: "User" },
};
export const FallbackText = {
    //render: () => <Button>Primary</Button>,
    args: { imageUrl: "./fake-image", alt: "U" },
};
//# sourceMappingURL=Avatar.stories.js.map