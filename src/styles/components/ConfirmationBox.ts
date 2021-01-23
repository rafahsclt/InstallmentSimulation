import styled from 'styled-components'

interface ConfirmationBoxProps {
    backColor: 'green' | 'grey'
    size: 'small' | 'medium'
}

export const ConfirmationBoxContainer = styled.div<ConfirmationBoxProps>`
    width: ${props => props.size === 'small' ? '473px' : '600px'};
    height: 97px;
    background: ${props => props.backColor === 'green' ? '#E8FFE3' : '#F8F8F8'};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    border-radius: 5px;

    strong {
        font-size: 20px;
        color: #228a95;
        font-style: italic;
        font-weight: bold;
    }

    section {
        width: 238px;
        height: 62px;
        background: #fff;
        display: flex;
        align-items: center;
        border-radius: 5px;

        span {
            font-size: 22px;
            color: #ef9c4b;
            font-style: italic;
            font-weight: bold;
            margin-left: 20px;
        }
    }
`