/* @import '@radix-ui/colors/blackA.css';
@import '@radix-ui/colors/green.css';
@import '@radix-ui/colors/mauve.css';
@import '@radix-ui/colors/violet.css'; */
import * as Dialog from "@radix-ui/react-dialog"
import { styled } from "@/styles/styles"

/* reset */

export const DialogOverlay = styled(Dialog.Overlay, {
    backgroundColor: "rgba(8,8,8, 0.7)",
    position: "fixed",
    zIndex: 99999,

    inset: 0,
    // animation: "overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)",
})

export const DialogContent = styled(Dialog.Content, {
    backgroundColor: "$gray100",
    // borderRadius: 6,
    zIndex: 99999,
    width: 0,
    // boxShadow: "hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px",
    position: "fixed",
    top: 0,
    right: 0,
    // transform: "translateX(100%)",
    overflowX: "hidden",
    // maxWidth: "450px",
    height: "100vh",
    padding: "1.4rem",
    transition: "1000ms",
    // opacity: 0,

    // position: "relative",
    // animation: "contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)",

    '&[data-state="open"]': {
        // background: "#d8ebed",
        // transform: "translateX(0%)",
        // tr: "transform 300ms",
        transition: "3000ms",
        width: "64vw",

        // opacity: 1,
    },
})

// .DialogContent {

// }
// .DialogContent:focus {
//   outline: none;
// }
export const DialogTitle = styled(Dialog.Title, {
    margin: "0",
    fontWeight: 500,
    color: "$blue500",
    fontSize: "1rem",

    position: "absolute",
    top: 12,
    left: "1.4rem",
})

export const DialogDescription = styled(Dialog.Description, {
    margin: "10px 0 20px",
    color: "blue",
    fontSize: "1rem",
    lineHeight: "1.5",
})

export const DialogClose = styled(Dialog.Close, {
    // background: "red",
    border: 0,
    background: "transparent",
    position: "absolute",
    top: 12,
    right: 16,
})

// .Button {
//   display: inline-flex;
//   align-items: center;
//   justify-content: center;
//   border-radius: 4px;
//   padding: 0 15px;
//   font-size: 15px;
//   line-height: 1;
//   font-weight: 500;
//   height: 35px;
// }

// @keyframes overlayShow {
//   from {
//     opacity: 0;
//   }
//   to {
//     opacity: 1;
//   }
// }

// @keyframes contentShow {
//   from {
//     opacity: 0;
//     transform: translate(-50%, -48%) scale(0.96);
//   }
//   to {
//     opacity: 1;
//     transform: translate(-50%, -50%) scale(1);
//   }
// }

export const Container = styled("aside", {
    // background: "blue",
    marginTop: "4rem",

    ul: {
        listStyle: "none",
    },

    "li button": {
        // padding: "1rem",
        width: "80%",
        border: 0,
        background: "transparent",
    },

    "li > span": {
        marginLeft: ".4rem",
    },

    a: {
        display: "flex",
        alignItems: "center",
        // justifyContent: "center",
        // justifyContent: "f",
        flexDirection: "row",
        // color: "$gray800",
        borderRadius: 6,
        padding: ".4rem",
        gap: ".8rem",
        fontSize: "$sm",
        textDecoration: "none",
        border: "1px solid $blue500",
        color: "$blue300",

        // div: {
        //     display: "flex",
        //     alignItems: "center",
        //     justifyContent: "center",
        //     gap: ".4rem",
        //     border: "1px solid blue",
        // },
    },
    span: {
        display: "block",
        color: "$gray500",
        fontSize: "$xsm",
    },

    svg: {
        color: "#008490",
    },
})
