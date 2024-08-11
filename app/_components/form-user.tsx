import { AtSign, Phone, User } from 'lucide-react';
import { Form } from './ui/form';

export const FormUser = () => {
  return (
    <Form>
      <Form.Label>
        <User size={25} />
        <Form.Field placeholder="Nome Completo" />
      </Form.Label>

      <Form.Label>
        <AtSign size={25} />
        <Form.Field placeholder="Nome Completo" />
      </Form.Label>

      <Form.Label>
        <Phone size={25} />
        <Form.Field placeholder="Nome Completo" />
      </Form.Label>
      <Form.Submit>Salvar</Form.Submit>
    </Form>
  );
};
