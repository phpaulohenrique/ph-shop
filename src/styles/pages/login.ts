import { styled } from "@stitches/react"

export const Container = styled("div", {
    // backgroundColor: "blue",

    h1: {
        color: "$blue500",
    },

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
    display: "flex",
    flexDirection: "column",
    alignItens: "center",
    justifyContent: "center",
    gap: ".8rem",
    padding: "2rem",
    borderRadius: 4,
    border: "1px solid $gray300",

    a: {
        textDecoration: "none",
    },

    form: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "1rem",

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
})
