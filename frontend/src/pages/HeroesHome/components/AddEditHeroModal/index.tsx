import { FormEvent, ReactElement } from 'react';
import { Button, Form, Modal, Row } from 'react-bootstrap';
import { CustomInput } from '../../../../components/CustomInput';
import { AddEditValues } from '../../hooks/useAddEditHero/types/use-add-edit.type';

type Props = {
  show: boolean;
  edit: boolean;
  validated: boolean;
  values: AddEditValues;
  handleClose: () => void;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
};

/**
 * Componente de modal para adicionar ou editar um herói.
 * Este modal exibe um formulário com campos para informações do herói.
 * Dependendo da propriedade 'edit', ele pode ser usado para criar ou editar um herói existente.
 *
 * @param {Props} props - As propriedades que o componente recebe.
 * @param {boolean} props.show - Controla se o modal está visível ou não.
 * @param {boolean} props.edit - Indica se é um modal de edição ou criação.
 * @param {boolean} props.validated - Controla se o formulário foi validado.
 * @param {AddEditValues} props.values - Valores do formulário, incluindo funções para alterar o estado.
 * @param {function} props.handleClose - Função para fechar o modal.
 * @param {function} props.handleSubmit - Função chamada ao submeter o formulário.
 *
 * @returns {ReactElement} - O modal com o formulário para adicionar ou editar o herói.
 */
export const AddEditHeroModal = (props: Props): ReactElement => {
  return (
    <Modal show={props.show} onHide={props.handleClose} centered>
      <Form
        noValidate
        validated={props.validated}
        onSubmit={props.handleSubmit}
      >
        <Modal.Header className="p-4 border-bottom" closeButton>
          <Modal.Title>
            {props.edit ? 'Editar herói' : 'Criar herói'}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="px-4 border-bottom">
          <Row>
            <CustomInput
              id="validationName"
              type="text"
              size={12}
              title="Nome completo"
              placeholder="Digite o nome completo"
              setValue={props.values.setName}
              value={props.values.name}
              required
            />
            <CustomInput
              id="validationNickname"
              type="text"
              size={12}
              title="Nome de guerra"
              placeholder="Digite o nome de guerra"
              setValue={props.values.setNickname}
              value={props.values.nickname}
              required
            />
            <CustomInput
              id="validationDateofbirth"
              type="date"
              size={6}
              title="Data de nascimento"
              placeholder="Digite a data"
              setValue={props.values.setDateOfBirth}
              value={props.values.dateOfBith}
              required
            />
            <CustomInput
              id="validationUniverse"
              type="text"
              size={6}
              title="Universo"
              placeholder="Digite o universo"
              setValue={props.values.setUniverse}
              value={props.values.universe}
              required
            />
            <CustomInput
              id="validationMainpower"
              type="text"
              size={6}
              title="Habilidade"
              placeholder="Digite a habilidade"
              setValue={props.values.setMainPower}
              value={props.values.mainPower}
              required
            />
            <CustomInput
              id="validationMainpower"
              type="text"
              size={6}
              title="Avatar URL"
              placeholder="Digite o URL"
              setValue={props.values.setAvatar}
              value={props.values.avatar}
              required
            />
          </Row>
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-center py-4">
          <Button
            className="border rounded-1"
            variant="light"
            onClick={props.handleClose}
          >
            Cancelar
          </Button>
          <Button className="rounded-1" variant="primary" type="submit">
            Salvar
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};
