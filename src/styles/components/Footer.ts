import styled from 'styled-components'

export const FooterContainer = styled.footer`
    position: fixed;
    bottom: 0;
    left: 0;
    height: 86px;
    width: 100%;
    background: #228a95;
    
    display: flex;
    justify-content: center;
    align-items: center;

    span {
        color: #fff;
        font-size: 30px;
    }

    span + span {
        margin-left: 40px;
    }

    button {
        margin-left: 30px;
    }
`