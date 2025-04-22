import { ReactElement } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { IHero } from '../../../../interfaces/hero/hero.interface';

type Props = {
  show: boolean;
  hero: IHero | null;
  handleClose: () => void;
  executeDelete: () => void;
};

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
