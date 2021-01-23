import styled from 'styled-components'

interface InputProps {
    kindof: string
}

export const InputContainer = styled.div<InputProps>`
    width: 350px;
    height: 61px;
    display: flex;
    background: #f8f8f8;
    align-items: center;
    padding: 5px 20px;
    border-radius: 5px;

    input {
        background: #f8f8f8;
        border: none;
        flex: 1;

        font-size: 24px;
        color: #777777;
    }
`