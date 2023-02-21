import { styled } from "@/styles/styles"
import * as Popover from "@radix-ui/react-popover"

export const Container = styled("div", {
    // marginTop: "1rem",
    display: "flex",
    position: "relative",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: ".4rem",
    // zIndex: 99999,

    span: {
        marginBottom: ".6rem",
        fontSize: "$xsm",
    },

    a: {
        width: "100%",
        textDecoration: "none",
    },

    button: {
        // marginTop: "2rem",
        alignSelf: "flex-start",
        backgroundColor: "transparent",
        color: "$blue300",
        borderRadius: 4,
        // padding: ".4rem",
        cursor: "pointer",
        fontWeight: "500",
        fontSize: "$xsm",
        // height: "2.4rem",
        width: "100%",
        // border: "1px solid $blue300",
        border: 0,

        display: "flex",
        alignItems: "center",
        // justifyContent: "center",
        gap: "0.4rem",
        textDecoration: "none",

        svg: {
            width: "1.6rem",
            height: "1.6rem",
            weight: "thin",
        },
    },
})

export const PopoverTrigger = styled(Popover.Trigger, {
    // borderBottom: "1px solid red",
    // background: "red",
    border: 0,
})

export const PopoverContent = styled(Popover.Content, {
    // borderBottom: "1px solid red",
    // background: "red",
    minWidth: "180px",
    padding: ".6rem",
    borderRadius: 8,
    border: "2px solid $gray300",
    background: "$gray200",

    // position: "relative",
})
