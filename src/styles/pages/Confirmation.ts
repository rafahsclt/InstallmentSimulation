import styled from 'styled-components'

export const ConfirmationContainer = styled.div`
    height: 1fr;
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-bottom: 50px;
    align-items: center;

    article {
        display: flex;
        align-items: center;
        
        div + div {
            margin-left: 20px;
        }
    }

    article + article {
        margin-top: 20px;
    }

    h4 {
        color: #228a95;
        font-size: 20px;
        margin: 20px;
    }
`

export const Table = styled.table`
    margin-top: 40px;
    border-spacing: 0;
    border-collapse: collapse;
    margin: 50px auto 20px;

    caption {
        background: #f8f8f8;
        color: #228a95;
        font-size: 29px;
        padding: 20px 0;
        font-weight: bold;
    }

    thead {
        background: #f8f8f8;
        font-weight: bold;
        font-size: 20px;

        th {
            padding: 10px 20px;
            text-align: center;
            border-style: solid;
            border-width: 1px;
            border-color: rgba(0,0,0, 0.1);
            border-top: 0;
        }
    }

    tbody {
        font-size: 20px;
    }
`

export const TableBodyRow = styled.tr`
    background-color: #FFF;

    td {
        padding: 10px 0;
        text-align: center;
        border-style: solid;
        border-width: 1px;
        border-color: rgba(0,0,0, 0.1)
    }
    
`