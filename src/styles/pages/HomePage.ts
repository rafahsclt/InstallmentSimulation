import styled from 'styled-components'

export const HomeContainer = styled.div`
    height: 1fr;
    width: 100%;
    display: flex;
    flex-direction: column;
`

export const HomeContent = styled.main`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    justify-content: center;

    h2 {
        color: #228a95;
        font-weight: bold;
        font-size: 40px;
        margin-bottom: 36px;
    }

    span {
        color: red;
        font-size: 12px;
        font-weight: bold;
    }

    section {
        display: flex;
        align-items: center;
        justify-content: center;
    }
`

export const Table = styled.table`
    margin-top: 40px;
    border-spacing: 0;
    border-collapse: collapse;

    thead {
        background: #f8f8f8;
        font-weight: bold;
        font-size: 20px;

        th {
            padding: 10px 20px;
            text-align: center;
            border-style: solid;
            border-width: 1px;
            border-color: rgba(0,0,0, 0.1)
        }
    }

    tbody {
        font-size: 20px;

        td {
            padding: 10px 0;
            text-align: center;
            border-style: solid;
            border-width: 1px;
            border-color: rgba(0,0,0, 0.1)
        }
    }
`