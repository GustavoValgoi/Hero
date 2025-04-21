import { ReactElement } from 'react';
import { Button, Col, Form, Modal, Row } from 'react-bootstrap';

type Props = {
  show: boolean;
  handleClose: () => void;
};

export const AddEditHeroModal = (props: Props): ReactElement => {
  return (
    <Modal show={props.show} onHide={props.handleClose} centered>
      <Modal.Header className="p-4" closeButton>
        <Modal.Title>Criar herói</Modal.Title>
      </Modal.Header>
      <Modal.Body className="px-4">
        <Form>
          <Row>
            <Form.Group
              className="p-3"
              xs="12"
              as={Col}
              controlId="validationName"
            >
              <Form.Label className="fw-semibold">Nome completo</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Digite o nome completo"
                className="rounded-5"
              />
            </Form.Group>
            <Form.Group
              className="p-3"
              xs="12"
              as={Col}
              controlId="validationNickname"
            >
              <Form.Label className="fw-semibold">Nome de guerra</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Digite o nome de guerra"
                className="rounded-5"
              />
            </Form.Group>
            <Form.Group
              className="p-3"
              as={Col}
              md="6"
              controlId="validationDateofbirth"
            >
              <Form.Label className="fw-semibold">
                Data de nascimento
              </Form.Label>
              <Form.Control
                required
                type="date"
                placeholder="Digite a data"
                className="rounded-5"
              />
            </Form.Group>
            <Form.Group
              className="p-3"
              as={Col}
              md="6"
              controlId="validationUniverse"
            >
              <Form.Label className="fw-semibold">Universo</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Digite o universo"
                className="rounded-5"
              />
            </Form.Group>
            <Form.Group
              className="p-3"
              as={Col}
              md="6"
              controlId="validationMainpower"
            >
              <Form.Label className="fw-semibold">Habilidade</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Digite a habilidade"
                className="rounded-5"
              />
            </Form.Group>
            <Form.Group
              className="p-3"
              as={Col}
              md="6"
              controlId="validationAvatar"
            >
              <Form.Label className="fw-semibold">Avatar</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Digite a URL"
                className="rounded-5"
              />
            </Form.Group>
          </Row>
        </Form>
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
          variant="primary"
          onClick={props.handleClose}
        >
          Salvar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
