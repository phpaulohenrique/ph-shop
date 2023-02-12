import { styled } from "@/styles/styles"

export const Container = styled("div", {
    // background: "red",
    paddingBlock: ".8rem",
    // borderBottom: "1px solid blue",
    boxShadow: "0px 0px 20px -10px rgba(0,0,0,0.75)",
    zIndex: 100,
    // position: "fixed",
    top: 0,
    width: "100%",
    marginBottom: "4rem",
})

export const ContainerWrapper = styled("nav", {
    maxWidth: "1200px",
    margin: "0 auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
})

export const BoxSearch = styled("label", {
    display: "flex",
    alignItems: "center",
    width: "24rem",
    // background: "gray",
    borderRadius: 4,
    overflow: "hidden",

    input: {
        flex: 1,
        border: "none",
        padding: ".2rem .6rem",
        outline: "none",
        fontSize: "1rem",
        height: "1.8rem",
        // overflow: "hidden",
    },

    button: {
        width: "4rem",
        // paddingInline: ".4rem",
        border: "none",
        height: "1.8rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",

        "&:hover": {
            // opacity: 0.5,
            cursor: "pointer",
        },
    },
})

export const ContainerNav = styled("ul", {
    display: "flex",
    alignItems: "center",
    gap: ".6rem",
    border: 0,

    svg: {
        color: "#008490",
    },

    li: {
        listStyle: "none",
        border: 0,
        // background: "blue",
        borderRadius: 4,
        padding: ".2rem",
    },

    "li:hover": {
        cursor: "pointer",
        // filter: "brightness(.7)",
        background: "$gray300",
    },

    "li a:nth-child(1)": {
        // content: "",
        // width: "10px",
        // height: "10px",
        // padding: "1px",
        // backgroundColor: "red",
        // right: 0,
        // top: 0,
        // position: "absolute",
        // content: "\00B7",
        // width: "50px",
        // height: "50px",
        // borderRadius: "50%",
        // background: "#b83b3b",
        // display: "inlineBlock",
        position: "relative",

        span: {
            background: "#E52626",
            width: "7px",
            height: "7px",
            // fontSize: "1rem",
            top: "-5px",
            left: "18px",
            borderRadius: "50%",
            position: "absolute",
            color: "transparent",
        },
    },
})
