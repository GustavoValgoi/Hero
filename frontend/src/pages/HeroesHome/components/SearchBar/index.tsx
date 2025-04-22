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

/**
 * Componente de barra de pesquisa para buscar heróis, incluindo um campo de texto e um botão de "Criar".
 * Ele permite que o usuário pesquise heróis pelo nome e também crie um novo herói.
 * A barra de pesquisa chama as funções `handleSearch` e `create` quando os respectivos botões são acionados.
 *
 * @param {Props} props - As propriedades que o componente recebe.
 * @param {string} props.value - O valor atual da pesquisa (texto digitado pelo usuário).
 * @param {function} props.setValue - Função para atualizar o valor da pesquisa.
 * @param {function} props.create - Função para criar um novo herói.
 * @param {function} props.handleSearch - Função para lidar com a pesquisa de heróis.
 *
 * @returns {ReactElement} - A barra de pesquisa com a funcionalidade de pesquisa e criação.
 */
export const SearchBar = (props: Props): ReactElement => {
  return (
    <Form className="row" onSubmit={props.handleSearch}>
      <Col lg={1} className="my-2">
        <Button
          type="button"
          onClick={props.create}
          variant="primary rounded-5 w-100"
        >
          Criar
        </Button>
      </Col>
      <Col lg={10} className="my-2">
        <InputGroupSearch className="bg-white rounded-5 px-1">
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
      <Col lg={1} className="my-2">
        <Button variant="light rounded-5 border w-100" type="submit">
          Buscar
        </Button>
      </Col>
    </Form>
  );
};
