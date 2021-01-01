import styled, { css } from "styled-components";

const googleStyle = css`
    background-color: #4285f4;
    color: white;
    &:hover {
        background-color: #357ae8;
    }
`;
const invertedStyle = css`
    background-color: white;
    color: black;
    border: 1px solid black;
    &:hover {
        background-color: black;
        color: white;
        border: none;
    }
`;

const defaultStyle = css`
    background-color: black;
    color: white;
    &:hover {
        background-color: white;
        color: black;
        border: 1px solid black;
    }
`;

const ChangeStyle = ({ signInGoogle, inverted }) => {
    if (signInGoogle) return googleStyle;

    return inverted ? invertedStyle : defaultStyle;
};

export const CustomButtonContainer = styled.button`
    min-width: 165px;
    width: auto;
    height: 50px;
    display: flex;
    justify-content: center;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 35px 0 35px;
    font-size: 15px;
    text-transform: uppercase;
    font-family: "Open Sans Condensed";
    font-weight: bolder;
    border: none;
    cursor: pointer;
    ${ChangeStyle}
`;
