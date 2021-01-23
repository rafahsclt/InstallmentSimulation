interface ConfirmationBoxProps {
    backColor?: 'green' | 'grey'
    size?: 'small' | 'medium'
    title: string
    value: string
}

import { ConfirmationBoxContainer } from '../styles/components/ConfirmationBox'

const ConfirmationBox: React.FC<ConfirmationBoxProps> = ({ backColor = "grey", size = "medium", title, value }) => {
    return (
        <ConfirmationBoxContainer backColor={backColor} size={size} >
            <strong>{title}</strong>
            <section><span>{value}</span></section>
        </ConfirmationBoxContainer>
    )
}

export default ConfirmationBox