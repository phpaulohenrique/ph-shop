import { styled } from "../styles"

export const Container = styled("main", {
    display: "grid",
    gridTemplateColumns: "8rem 1fr",
    // alignItems: "stretch",
    // gap: "2rem",

    // maxWidth: 1180,
    // margin: "0 auto",
    // background: "blue",

    img: {
        borderRadius: 12,
        overflow: "hidden",
        border: 0,
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

export const ContainerUserOrders = styled("section", {
    // border: "1px solid red",
    marginTop: "1rem",
    paddingTop: "4rem",
    borderTop: "1px solid  $gray300",

    h3: {
        color: "$blue500",
        fontSize: "$lg",
    },

    h4: {
        display: "inline-block",
    },
    time: {
        fontSize: "$xsm",
        // display: "inline-block",
        // lineHeight: "2",
        color: "$gray500",
        marginLeft: "4rem",
        marginBottom: ".2rem",
    },

    ul: {
        listStyle: "none",
        marginTop: "1rem",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",

        li: {
            display: "inline-block",
            padding: "1.6rem 1.6rem",
            borderRadius: "8px",
            // marginTop: "1rem",

            border: "1px solid  $gray300",
        },
    },

    "div.products": {
        display: "flex",
        // background: "red",
        flexWrap: "wrap",
        gap: "3rem",
        // marginLeft: "1rem",
        marginTop: "2rem",

        span: {
            fontSize: "$sm",
            color: "$gray700",
        },
    },
})
