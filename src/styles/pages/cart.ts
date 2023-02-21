import { keyframes } from "@stitches/react"
import { styled } from "../styles"

export const Container = styled("div", {
    maxWidth: "900px",
    // margin: "0 auto",
    // marginTop: "4rem",
    // background: "blue",
    paddingBottom: "4rem",

    h2: {
        color: "$blue500",
    },

    display: "flex",
    flexDirection: "column",
    // gridTemplateColumns: "200px 1fr",
    // gap: "2rem",

    "@bp1": {
        overflow: "auto",
    },
})

export const CartTable = styled("table", {
    marginBlock: "2rem 1rem",
    width: "100%",
    maxWidth: "900px",
    textAlign: "center",

    // border: "1px solid blue",
    // borderCollapse: "collapse",
    // borderColor: "$gray500",
    borderSpacing: "0 0.5rem",

    th: {
        lineHeight: "1.5rem",
        padding: ".5rem",
        // borderTopLeftRadius: "0.25rem",
    },

    "td:first-child": {
        borderTopLeftRadius: ".5rem",
        borderBottomLeftRadius: ".5rem",
    },

    "td:last-child": {
        borderTopRightRadius: ".5rem",
        borderBottomRightRadius: ".5rem",
    },

    td: {
        // borderTopLeftRadius: "1rem",
        border: 0,
        backgroundColor: "$gray200",
        padding: ".6rem 1.2rem",
        height: "6rem",
    },

    "table, th, td": {
        // border: "1px solid black",
        // borderColor: "$gray300",
        // borderCollapse: "collapse",
    },

    "tr td:first-child": {
        textAlign: "left",
        // background: "red",
    },

    // td: {
    //     display: "flex",
    //     gap: ".2rem",
    //     flexDirection: "row",
    // },

    // "tr th": {
    //     width: "30%",
    // },

    "th:nth-child(1)": {
        width: "40%",
    },

    "@bp1": {
        "th:nth-child(1)": {
            width: "50%",
        },
        td: {
            height: "10rem",
        },
    },
})

export const TdProduct = styled("td", {
    // display: "flex",
    // flexDirection: "column",
    // position: "relative",

    img: {
        borderRadius: 4,
    },

    span: {
        // marginBottom: "1rem",
        // display: "inline-block",
        // textAlign: "center",
        fontSize: "$sm",
        position: "absolute",
        marginLeft: "1rem",
    },

    "@bp1": {
        span: {
            position: "initial",
            margin: 0,
            fontSize: "$xsm",
        },
        // display: "flex",
    },
})

export const TdAmount = styled("td", {
    display: "flex",
    gap: ".6rem",
    justifyContent: "center",
    // alignItems: "streeth",
    // flexDirection: "row",
    // border: "none",
    alignItems: "center",
    // borderCollapse: "collapse",
    // borderColor: "transparent",
    // padding: "1rem",
    // width: "100%",
    height: "6rem",

    "@bp1": {
        flexDirection: "column",
        gap: ".4rem",
    },
})

export const Total = styled("th", {
    color: "$green500",
    fontSize: "$lg",
})

export const ButtonHandleAmount = styled("button", {
    // border: "0",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    backgroundColor: "transparent",
    lineHeight: "0",
    height: "2rem",
    width: "2rem",
    // padding: "0rem 0.4rem ",
    borderRadius: 4,

    svg: {
        width: "1rem",
    },
    "&:hover": {
        cursor: "pointer",
    },

    variants: {
        type: {
            add: {
                border: "1px solid green",
            },

            remove: {
                border: "1px solid #b52e24",
            },
        },
    },

    "@bp1": {
        height: "1.8rem",
        width: "1.8rem",
    },
})

const rotate = keyframes({
    "100%": { transform: "rotate(360deg)" },
})

export const ButtonCheckout = styled("button", {
    // marginTop: "1rem",
    backgroundColor: "$green500",
    border: 0,
    color: "$white",
    borderRadius: 6,
    padding: ".6rem",
    cursor: "pointer",
    fontWeight: "500",
    fontSize: "$sm",
    width: "16rem",
    // marginLeft: "auto",
    // display: "inline-block",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    "@bp1": {
        width: "10rem",
    },

    svg: {
        animation: `${rotate} 1s infinite`,
        width: "1.4rem",
        // height: "1.4rem",
    },
})

export const ContainerActions = styled("div", {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
})
