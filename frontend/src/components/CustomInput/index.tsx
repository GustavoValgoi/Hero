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
