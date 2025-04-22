import { FormEvent, ReactElement } from 'react';
import { Button, Col, Form, InputGroup } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import { InputGroupSearch } from './styled';

type Props = {
  value: string;
  setValue: (param: string) => void;
  create: () => void;
  handleSearch: (e: FormEvent<HTMLFormElement>) => void;
};

export const SearchBar = (props: Props): ReactElement => {
  return (
    <Form className="row" onSubmit={props.handleSearch}>
      <Col lg={1}>
        <Button
          type="button"
          onClick={props.create}
          variant="primary rounded-5 w-100"
        >
          Criar
        </Button>
      </Col>
      <Col lg={10} className="d-flex justify-content-center">
        <InputGroupSearch className="mb-3 bg-white rounded-5 px-1">
          <InputGroup.Text
            className="border-0 bg-transparent"
            id="basic-addon1"
          >
            <FaSearch />
          </InputGroup.Text>
          <Form.Control
            className="border-0 bg-transparent rounded-start rounded-5"
            placeholder="Digite o nome do herói"
            type="text"
            value={props.value || ''}
            onChange={e => props.setValue(e.target.value)}
          />
        </InputGroupSearch>
      </Col>
      <Col lg={1}>
        <Button variant="light rounded-5 border w-100" type="submit">
          Buscar
        </Button>
      </Col>
    </Form>
  );
};
