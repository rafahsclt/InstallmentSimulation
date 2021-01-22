import styled from 'styled-components'

interface CardInputProps {
    kindof: string
}

export const InputContainer = styled.div<CardInputProps>`
    width: 350px;
    height: 61px;
    display: flex;
    background: #f8f8f8;
    align-items: center;
    padding: 5px 5px;
    margin-top: 27px;
    border-radius: 5px;

    label {
        flex: 1;
        color: #777777;
        font-size: 16px;
        margin-right: 7px;
        font-weight: bold;
        font-style: italic;

        display: flex;
        align-items: center;
        justify-content: space-between;
        
        input {
            display: none;
        }

        p {
            text-decoration: underline;
            font-size: 14px;
            font-weight: 300;
            align-self: flex-end;
        }
    }
    

    input {
        background: #f8f8f8;
        border: none;
        flex: 1;

        color: #777777;
        font-size: 16px;
        font-style: italic;
        font-weight: bold;
    }

    input::placeholder {
        color: #777777;
        font-size: 18px;
        font-style: italic;
    }
`