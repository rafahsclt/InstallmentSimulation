import styled from 'styled-components'

interface HomeContainerProps {
    footerVisible: boolean
}

interface TableRowProps {
    isSelected: boolean
}

export const HomeContainer = styled.div<HomeContainerProps>`
    height: 1fr;
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-bottom: ${props => props.footerVisible ? '136px' : '50px'};
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

export const TableBodyRow = styled.tr<TableRowProps>`
    background-color: ${props => props.isSelected ? '#EFDF4B' : '#FFF'};

    td {
        padding: 10px 0;
        text-align: center;
        border-style: solid;
        border-width: 1px;
        border-color: rgba(0,0,0, 0.1)
    }
    
`