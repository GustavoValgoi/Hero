import { ReactElement } from 'react';
import { Button, Col, Container, Modal, Row } from 'react-bootstrap';
import { ViewModal } from './styled';
import { IHero } from '../../../../interfaces/hero/hero.interface';
import { CustomImage } from '../../../../components/CustomImage';

type Props = {
  show: boolean;
  hero: IHero | null;
  handleClose: () => void;
};

export const ViewHeroModal = (props: Props): ReactElement => {
  return (
    <ViewModal show={props.show} onHide={props.handleClose} centered>
      {props.hero && (
        <>
          <Modal.Header className="p-4 border-bottom" closeButton>
            <Modal.Title>{props.hero.nickname}</Modal.Title>
          </Modal.Header>
          <Modal.Body className="border-bottom">
            <Container>
              <Col className="text-center w-100 pt-3">
                <CustomImage
                  src={props.hero.avatar_url}
                  alt={props.hero.nickname}
                  fallbackSrc="/no-image.jpg"
                />
              </Col>
              <Row className="mt-5">
                <Col className="w-50">
                  <p className="fw-semibold mb-2">Nome completo</p>
                  <p>{props.hero.name}</p>
                </Col>
                <Col className="w-50">
                  <p className="fw-semibold mb-2">Data de Nascimento</p>
                  <p>
                    {new Date(props.hero.date_of_birth).toLocaleDateString(
                      'pt-BR',
                      { timeZone: 'UTC' },
                    )}
                  </p>
                </Col>
              </Row>
              <Row className="mt-4">
                <Col className="w-50">
                  <p className="fw-semibold mb-2">Univero</p>
                  <p>{props.hero.universe}</p>
                </Col>
                <Col className="w-50">
                  <p className="fw-semibold mb-2">Habilidade</p>
                  <p>{props.hero.main_power}</p>
                </Col>
              </Row>
            </Container>
          </Modal.Body>
          <Modal.Footer className="d-flex justify-content-center py-4">
            <Button
              className="rounded-1 border"
              variant="light"
              onClick={props.handleClose}
            >
              Fechar
            </Button>
          </Modal.Footer>{' '}
        </>
      )}
    </ViewModal>
  );
};
