import { ChangeEvent, useMemo } from 'react'
import Text from '../Text'
import * as S from './styles'

export interface InputFileProps
    extends React.ButtonHTMLAttributes<HTMLInputElement> {
    thumbnail: any
    setThumbnail: any
}
const InputFile = ({ thumbnail, setThumbnail }: InputFileProps) => {
    const preview = useMemo(() => {
        return thumbnail ? URL.createObjectURL(thumbnail) : null
    }, [thumbnail])

    return (
        <S.DragDropFile
            id="thumbnail"
            style={{ backgroundImage: `url(${preview})` }}
            className={thumbnail ? 'has-thumbnail' : ''}
        >
            <input
                type="file"
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                    setThumbnail(event.target.files?.[0])
                }
            />
            <Text fullWidth color="gray">
                Adicione seu video ou imagem
            </Text>
        </S.DragDropFile>
    )
}
export default InputFile
