import styled, { css } from 'styled-components'

interface ButtonProps {
    size: 'small' | 'medium' | 'large'
}

export const ButtonContainer = styled.button<ButtonProps>`
    ${props => props.size === 'small' && css`
        height: 61px;
        width: 78px;
        font-size: 18px;
    `}

    ${props => props.size === 'medium' && css`
        height: 98px;
        width: 391px;
        font-size: 39px;
    `}

    border: none;
    border-radius: 5px;
    background: #228a95;

    color: #fff;
    font-weight: bold;
`