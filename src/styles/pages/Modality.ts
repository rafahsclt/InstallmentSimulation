import styled from 'styled-components'

export const ModalityContainer = styled.div`
    height: 1fr;
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-bottom: 50px;

    main {
        display: flex;
        flex-direction: column;
        width: 100%;
        align-items: center;
        justify-content: center;

        font-size: 28px;

        h2 {
            color: #228a95;
            margin-bottom: 38px;
        }

        h3 {
            margin: 22px 0;
        }

        section {
            display: flex;
            flex-direction: column;
            align-items: flex-end;

            span {
                font-size: 23px;
            }
        }
    }
`