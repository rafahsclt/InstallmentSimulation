import styled from 'styled-components'

export const SolicitationContainer = styled.div`
    height: 1fr;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 50px;

    h2 {
        font-size: 40px;
        color: #228a95;
        text-align: center;
        font-weight: bold;
    }

    main {
        display: flex;
        flex-direction: column;
        width: 70%;
        height: 100%;   
        align-items: flex-start;   

        h4 {
            margin-top: 20px;
            font-size: 24px;
            color: #228a95; 
        }

        article {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-top: 20px;

            div + div {
                margin-left: 20px;
            }
        } 
    }

    fieldset {
        align-self: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-top: 20px;
        border: none;

        h4 {
            font-size: 14px;
            color: #228a95;
        }
    }
`