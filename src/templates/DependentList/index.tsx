import Icon from 'components/Atoms/Icon'
import LinkTo from 'components/Atoms/Link'
import Logo from 'components/Atoms/Logo'
import Text from 'components/Atoms/Text'
import Title from 'components/Atoms/Title'
import Modal from 'components/Molecules/Modal'
import { useAuth } from 'contexts/auth/auth.provider'
import { IDependent } from 'libs/IDepedent'
import { useState } from 'react'

import TemplateWithCarrouselIntroduce from 'templates/TemplateWithCarrouselIntroduce'
import * as S from './styles'

export type DependentProps = {
    name: string
    id: number
}

export default function DependentList() {
    const { user, saveUser } = useAuth()

    const messages = [
        'O <strong>last message</strong> é serviço que entrega sua mensagem aos seus queridos',
        'message2',
        'message3',
    ]

    const listDependents: IDependent[] = user?.dependentes?.reverse()

    const DependentListComponent = () => {
        const [showModal, setShowModal] = useState(false)
        const [descriptionModal, setDescriptionModal] = useState<string>('')
        const [deleteDependent, setDeleteDependent] = useState<IDependent>(
            {} as IDependent
        )

        const openDeleteModal = (dependent: IDependent) => {
            setDescriptionModal(
                `Deseja remover o dependente <strong>${dependent.nome_dependente}</strong> ?`
            )
            setShowModal(true)
            setDeleteDependent(dependent)
        }

        const removeDependent = () => {
            const userTemp = user.dependentes
                .filter(
                    (item) =>
                        item.id_dependente !== deleteDependent.id_dependente
                )
                .reverse()
            saveUser({ ...user, dependentes: userTemp })
            setDeleteDependent({} as IDependent)
            setShowModal(false)
        }

        return (
            <S.WrapperLogin>
                {showModal && (
                    <Modal
                        title="Excluir  dependente"
                        description={descriptionModal}
                        buttonAction={{
                            label: 'Remover',
                            type: 'danger',
                            handleClick: () => removeDependent(),
                        }}
                        buttonCancel={{
                            label: 'Cancelar',
                            type: 'info',
                            handleClick: () => setShowModal(false),
                        }}
                    />
                )}
                <div>
                    <Logo size="normal" />
                </div>
                <section>
                    <Title size="normal">Listagem de dependentes</Title>
                    <S.ListDepentents>
                        {listDependents?.map((dependent: IDependent) => (
                            <S.Item
                                key={dependent.id_dependente}
                                className="dependentItem"
                            >
                                <Text>{dependent.nome_dependente}</Text>
                                <S.DeleteItem
                                    onClick={() => openDeleteModal(dependent)}
                                >
                                    <Icon iconName="trash" size="small" />
                                </S.DeleteItem>
                            </S.Item>
                        ))}
                    </S.ListDepentents>
                </section>
                <LinkTo url="/dependentes">Cadastrar dependentes</LinkTo>
            </S.WrapperLogin>
        )
    }

    return (
        <TemplateWithCarrouselIntroduce
            animationName="pair"
            messages={messages}
            Component={DependentListComponent}
            carrouselFirst
        />
    )
}
