import { styled } from "@stitches/react"

export const Container = styled("div", {
    // backgroundColor: "blue",

    display: "grid",
    gridTemplateColumns: "1fr 24rem",
    gap: "2rem",
    // background: "red",
    strong: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
})

export const ContainerLogin = styled("div", {
    // backgroundColor: "blue",
    display: "flex",
    flexDirection: "column",
    alignItens: "center",
    justifyContent: "center",
    // justifyItems: "center",
    gap: ".8rem",
    // backgroundColor: "$gray300",
    padding: "2rem",
    borderRadius: 4,
    border: "1px solid $gray300",

    a: {
        // display: "block",
        // textAlign: "center",
        textDecoration: "none",
        // margin: "auto",
    },
    // height: "100%",
    // maxWidth: "20rem",
    // a: {
    //     marginTop: "1rem",
    //     color: "$blue300",
    //     border: "1px solid $blue300",
    //     backgroundColor: "transparent",
    //     borderRadius: 4,
    //     padding: ".4rem",
    //     cursor: "pointer",
    //     fontWeight: "bold",
    //     fontSize: "$sm",
    //     width: "8rem",
    //     textDecoration: "none",
    //     // width: "100%",
    //     textAlign: "center",
    //     // display: "inline-block",
    //     display: "block",
    //     alignItems: "center",
    //     justifyContent: "center",
    // },

    form: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "1rem",
        // justifyContent: "center",
        // backgroundColor: "blue",

        input: {
            width: "18rem",
        },

        "button[type=submit]": {
            marginTop: "2rem",
            backgroundColor: "$blue300",
            border: 0,
            color: "$white",
            borderRadius: 4,
            padding: ".6rem",
            cursor: "pointer",
            // fontWeight: "bold",
            fontSize: "$sm",
            height: "2.4rem",
            width: "18rem",
        },
    },

    span: {
        textAlign: "center",
        display: "block",
        position: "relative",

        // "&:after": {
        //     content: "",
        //     height: "1px",
        //     width: "6rem",
        //     background: "$blue300",
        //     display: "block",
        //     position: "absolute",
        //     top: "50%",
        //     right: "0",
        //     left: "50%",
        //     transform: "translate(50%)",
        // },

        // "&:before": {
        //     content: "",
        //     height: "1px",
        //     width: "6rem",
        //     background: "$blue300",
        //     display: "block",
        //     position: "absolute",
        //     top: "50%",
        //     right: "0",
        //     // left: "50%",
        //     transform: "translate(50%)",
        // },
    },
})

export const ButtonLoginGoogle = styled("button", {
    marginTop: "1rem",
    backgroundColor: "transparent",
    border: "1px solid $blue300",
    borderRadius: 4,
    color: "$gray500",

    padding: ".6rem",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "$sm",
    height: "2.4rem",

    width: "18rem",
    margin: "auto",
    display: "flex",
    alignItems: "center",

    justifyContent: "center",
    gap: ".4rem",
})
export const ButtonSignUp = styled("button", {
    marginTop: "2rem",
    color: "$blue300",
    border: "1px solid $blue300",
    backgroundColor: "transparent",

    borderRadius: 4,
    padding: ".4rem",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "$sm",
    margin: "auto",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",

    width: "6rem",
    // textDecoration: "none",
})
