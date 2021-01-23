import styled from 'styled-components'

export const DetailContainer = styled.div`
    height: 1fr;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 50px;
    position: relative;

    div {
        width: 70%;
        height: 20%;
        margin-top: 60px;
        padding: 30px 70px;
        display: flex;
        align-items: center;

        h1 {
            margin-left: 20px;
            color: #228a95;
            font-weight: bold;
        }
    }

    main {
        width: 100%;
        display: flex;
        justify-content: center;

    }
`

export const TitleSection = styled.section`
    display: flex;
    width: 585px;
    align-items: center;
    background: #f8f8f8;
    height: 78px;
    

    padding: 0 30px;
    justify-content: center;

    span {
        font-size: 24px;
    }

    strong {
        margin-left: 5px;
        font-weight: bold;
        color: #228a95;
        font-size: 24px;
    }
    

    & + section {
        margin-left: 30px;
    }
`

export const ValuesSection = styled.section`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 20px 20px 50px;
    background: #f8f8f8;
    width: 278px;
    height: 284px;

    span {
        font-size: 24px;
    }

    h3 {
        color: #31AC2B;
        font-weight: bold;
        font-size: 32px;
    }

    & + section {
        margin-left: 30px;
    }

    h5 {
        text-decoration: underline;
        color: blue;
    }
`

export const ModalSection = styled.section`
    margin-top: 20px;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 20px;
    background: #f8f8f8;
    margin-left: 30px;
    width: 586px;
    height: 284px;

    p {
        align-self: flex-start !important;
        margin-bottom: 10px;
    }

    span {
        font-size: 18px;
        font-weight: bold;
        margin-bottom: 10px;
    }

    strong {
        font-size: 18px;
        font-weight: bold;
        color: #31AC2B;
    }

    h4 {
        display: flex;
        align-items: center;
        font-size: 24px;
        font-weight: bold;
        margin-bottom: 10px;

        svg {
            margin-left: 10px;
        }
    }
`

export const GeneralInfo = styled.section`
    background: #E8F3F4;
    border: 1px dashed #187680;
    margin-top: 20px;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 20px;
    margin-left: 30px;
    width: 586px;
    height: 284px;
`

export const YellowCard = styled.article`
    margin-top: 25px;

    width: 240px;
    height: 53px;
    background: #EF9C4B;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    
    span {
        font-size: 16px;
        font-weight: bold;
        color: #fff;
    }

    svg {
        margin-right: 8px;
    }
`

export const BlueCard = styled.article`
    margin-top: 25px;

    width: 240px;
    height: 53px;
    background: #228a95;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    
    span {
        font-size: 16px;
        font-weight: bold;
        color: #fff;
    }

    svg {
        margin-right: 8px;
    }
`

export const RedCard = styled.article`
    margin-top: 25px;

    width: 240px;
    height: 53px;
    background: #bc3434;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    
    span {
        font-size: 16px;
        font-weight: bold;
        color: #fff;
    }

    svg {
        margin-right: 8px;
    }
`