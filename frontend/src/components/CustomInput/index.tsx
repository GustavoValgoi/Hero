import { ReactElement } from 'react';
import { Col, Form } from 'react-bootstrap';

type Props = {
  id: string;
  title: string;
  value: string;
  type: string;
  placeholder: string;
  size: number;
  required: boolean;
  setValue: (param: string) => void;
};

/**
 * Componente de input customizado que renderiza um campo de entrada de dados com suporte
 * para diferentes tipos, placeholders, tamanho e validação de obrigatoriedade.
 *
 * @param {string} id - Identificador único para o campo de entrada.
 * @param {string} title - Título que será exibido como label do campo.
 * @param {string} value - Valor atual do campo de entrada.
 * @param {string} type - Tipo do campo de entrada, como "text", "password", etc.
 * @param {string} placeholder - Texto que aparece dentro do campo de entrada quando vazio.
 * @param {number} size - Tamanho do campo (quantidade de colunas na grid).
 * @param {boolean} required - Define se o campo é obrigatório.
 * @param {(param: string) => void} setValue - Função para atualizar o valor do campo.
 *
 * @return {ReactElement} - Retorna o componente `<Form.Control>` dentro de um `<Form.Group>`.
 */
export const CustomInput = (props: Props): ReactElement => {
  return (
    <Form.Group className="p-3" xs={props.size} as={Col} controlId={props.id}>
      <Form.Label className="fw-semibold">{props.title}</Form.Label>
      <Form.Control
        required={props.required}
        type={props.type}
        placeholder={props.placeholder}
        className="rounded-5"
        value={props.value || ''}
        onChange={e => props.setValue(e.target.value)}
      />
    </Form.Group>
  );
};
