import styled from 'styled-components'

interface InputProps {
    kindof: string
}

export const InputContainer = styled.div<InputProps>`
    width: 473px;
    height: 60px;
    display: flex;
    background: #f8f8f8;
    align-items: center;
    padding: 5px 20px;

    span {
        color: #777777;
        font-size: 24px;
        margin-right: 7px;
    }

    input {
        background: #f8f8f8;
        border: none;
        flex: 1;

        font-size: 24px;
        color: #777777;
    }
`