import { styled } from "@/styles/styles"

export const Container = styled("div", {
    // background: "red",
    padding: "1rem .5rem",
    width: "10rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    // border: "1px solid blue",
    // boxShadow: "0px 0px 20px -10px rgba(0,0,0,0.75)",
    // border: "1px solid blue",
    color: "$gray800",

    img: {
        borderRadius: 8,
    },

    "&:hover": {
        cursor: "pointer",
    },
})

export const ProductInfo = styled("div", {
    display: "flex",
    // background: "red",
    width: "100%",
    alignItems: "center",
    marginTop: ".5rem",
    justifyContent: "space-between",
    textDecoration: "none",

    strong: {
        // color: "$green500",
    },

    // span: {
    //     display: "inline-block",
    // },
    // flexDirection: "column",
})
