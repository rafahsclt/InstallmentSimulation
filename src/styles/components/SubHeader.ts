import styled from 'styled-components'

export const SubHeaderContainer = styled.header`
    width: 100%;
    height: 20%;
    margin-top: 60px;
    padding: 30px 70px;
    display: flex;
    align-items: center;
    justify-content: space-around;

    div {
        display: flex;
        align-items: center;

        img + img {
            margin-left: 52px;
        }
    }
`

export const Title = styled.h1`
    font-size: 48px;
    font-weight: bold;
    color: #228a95;
    margin-left: 38px;
`