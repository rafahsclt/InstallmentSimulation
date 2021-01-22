import styled from 'styled-components'

export const ClientContainer = styled.div`
    height: 1fr;
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-bottom: 50px;
`

export const ClientContent = styled.main`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    justify-content: center;

    section {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    article {
        margin-top: 50px;
        width: 428px;
        background: #f8f8f8;
        padding: 36px;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;

        font-size: 28px;

        span {
            color: #ef9c4b;
            margin: 30px 0;
        }

        p {
            color: #228a95;
            font-weight: bold;
            margin-bottom: 30px;
        }

        h4 {
            color: red;
        }
    }
`