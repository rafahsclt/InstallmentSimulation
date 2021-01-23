import styled, { css } from 'styled-components'

interface ButtonProps {
    size: 'small' | 'medium' | 'large' | 'low-medium'
    isDisabled: boolean
    revertColor: boolean
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

    ${props => props.size === 'low-medium' && css`
        height: 98px;
        width: 300px;
        font-size: 39px;
    `}

    ${props => props.size === 'large' && css`
        height: 98px;
        width: 600px;
        font-size: 39px;
    `}

    border: none;
    border-radius: 5px;
    opacity: ${props => props.isDisabled && '0.3'};
    font-weight: bold;

    background: ${props => props.revertColor ? '#fff' : '#228a95'};
    color:  ${props => props.revertColor ? '#228a95' : '#fff'};

    transition: background-color 0.3s;
    transition: color 0.3s;
`