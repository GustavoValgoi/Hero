import { ReactElement } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { IHero } from '../../../../interfaces/hero/hero.interface';

type Props = {
  show: boolean;
  hero: IHero | null;
  handleClose: () => void;
  executeDelete: () => void;
};

/**
 * Componente de modal para confirmar a exclusão de um herói.
 * Este modal exibe uma mensagem perguntando ao usuário se ele tem certeza de que deseja excluir o herói selecionado.
 * A ação de exclusão é irreversível, e o modal contém botões para cancelar ou confirmar a exclusão.
 *
 * @param {Props} props - As propriedades que o componente recebe.
 * @param {boolean} props.show - Controla se o modal está visível ou não.
 * @param {IHero | null} props.hero - O herói a ser excluído, ou `null` caso não haja herói selecionado.
 * @param {function} props.handleClose - Função para fechar o modal.
 * @param {function} props.executeDelete - Função para executar a exclusão do herói.
 *
 * @returns {ReactElement} - O modal com a confirmação de exclusão.
 */
export const DeleteHeroModal = (props: Props): ReactElement => {
  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header className="border-bottom" closeButton>
        <Modal.Title className="text-danger">Excluir herói</Modal.Title>
      </Modal.Header>
      <Modal.Body className="border-bottom">
        {props.hero && (
          <>
            Tem certeza que deseja excluir{' '}
            <strong>{props.hero.nickname}</strong> ? Essa ação é irreversível!
          </>
        )}
      </Modal.Body>
      <Modal.Footer className="d-flex justify-content-center py-4">
        <Button
          className="border rounded-1"
          variant="light"
          onClick={props.handleClose}
        >
          Cancelar
        </Button>
        <Button
          className="rounded-1"
          variant="danger"
          onClick={props.executeDelete}
        >
          Confirmar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
