import { ReactElement } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { IHero } from '../../../../interfaces/hero/hero.interface';

type Props = {
  show: boolean;
  hero: IHero | null;
  handleClose: () => void;
  executeSwitch: () => void;
};

/**
 * Componente de modal para ativar ou desativar um herói. O modal pergunta ao usuário se ele tem certeza
 * de que deseja ativar ou desativar o herói, com base no estado atual de atividade do herói.
 *
 * @param {Props} props - As propriedades que o componente recebe.
 * @param {boolean} props.show - Indica se o modal está visível ou não.
 * @param {IHero | null} props.hero - O objeto do herói a ser ativado/desativado ou `null` se não houver herói.
 * @param {function} props.handleClose - Função para fechar o modal.
 * @param {function} props.executeSwitch - Função que será chamada para ativar ou desativar o herói.
 *
 * @returns {ReactElement} - O modal de ativação/desativação do herói.
 */
export const SwitchHeroModal = (props: Props): ReactElement => {
  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header className="p-4 border-bottom" closeButton>
        <Modal.Title>
          {props.hero && props.hero.is_active
            ? 'Desativar herói'
            : 'Ativar herói'}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="border-bottom">
        <p>
          Tem certeza que deseja{' '}
          {props.hero && props.hero.is_active ? 'desativar' : 'ativar'}{' '}
          <strong>{props.hero && props.hero.nickname}</strong> ?
        </p>
      </Modal.Body>
      <Modal.Footer className="d-flex justify-content-center py-4">
        <Button
          className="rounded-1 border"
          variant="light"
          onClick={props.handleClose}
        >
          Fechar
        </Button>
        <Button
          className="rounded-1"
          variant="primary"
          onClick={props.executeSwitch}
        >
          Confirmar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
