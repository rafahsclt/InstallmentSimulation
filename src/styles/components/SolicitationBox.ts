import styled, { css } from 'styled-components'

interface SolicitationBoxProps {
    kindOf: 'client' | 'installment'
    installmentColor: 'orange' | 'green'
}

export const SolicitationBoxContainer = styled.div<SolicitationBoxProps>`
    width: 613px;
    height: 96px;
    background: #E8FFE3;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    border-radius: 5px;

    strong {
        font-size: 20px;
        color: ${props => props.kindOf === 'client' ? '#777777' : '#228a95'};
        font-style: italic;
    }

    section {
        width: 238px;
        height: 62px;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        border-radius: 5px;

        

        span {
            ${props => props.kindOf === 'client' ? 
            css`
                font-size: 20px;
                color: #777777;
                font-style: italic;
            `
            : 
            css`
                font-size: 30px;
                color: ${props.installmentColor === 'orange' ? '#ef9c4b' : '#31AC2B'};
                font-weight: bold;
            `}
            
        }

        svg {
            margin: 0 20px;
        }
    }
`