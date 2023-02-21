import { styled } from "../styles"

export const Container = styled("main", {
    display: "grid",
    gridTemplateColumns: "10rem 1fr",
    // alignItems: "stretch",
    // gap: "2rem",

    // maxWidth: 1180,
    // margin: "0 auto",
    // background: "blue",

    img: {
        borderRadius: 12,
        overflow: "hidden",
    },
})

export const ContainerUserData = styled("div", {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    span: {
        display: "block",
    },
    "span:first-child": {
        fontSize: "$md",
    },
    strong: {
        display: "block",
        marginTop: "1rem",
    },
})
