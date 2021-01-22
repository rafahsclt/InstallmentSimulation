import styled from 'styled-components'

export const CardContainer = styled.div`
    height: 1fr;
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-bottom: 50px;

    button {
        align-self: center;
        margin-top: 70px;
    }
`

export const CardContent = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;

    section {
        display: flex;
        flex-direction: column;
        align-items: center;
        color: #228a95;
        max-width: 350px;
        
        span {
            margin-top: 27px;
            padding: 20px 10px;
            width: 350px;
            height: 61px;
        }
    }

    section + section {
        margin-left: 40px;
    }
    
`