import { ReactElement } from 'react';
import { Button, Col, Form, InputGroup, Row } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';

export const SearchBar = (): ReactElement => {
  return (
    <Row>
      <Col lg={1}>
        <Button variant="primary rounded-5 px-4">Criar</Button>
      </Col>
      <Col lg={10}>
        <InputGroup className="mb-3 bg-white rounded-5 px-1">
          <InputGroup.Text
            className="border-0 bg-transparent"
            id="basic-addon1"
          >
            <FaSearch />
          </InputGroup.Text>
          <Form.Control
            className="border-0 bg-transparent rounded-start rounded-5"
            placeholder="Digite o nome do herói"
          />
        </InputGroup>
      </Col>
      <Col lg={1}>
        <Button variant="light rounded-5 border px-4">Buscar</Button>
      </Col>
    </Row>
  );
};
