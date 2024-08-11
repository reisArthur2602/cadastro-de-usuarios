import React from 'react';
import { Form } from './_components';
import { AtSign, Phone, User } from 'lucide-react';

const Home = () => {
  return (
    <main className="max-w-7xl w-full p-3 mx-auto mt-10 flex flex-col gap-10">
      <h1 className="text-center font-bold text-xl sm:text-3xl">
        Lista de Contatos
      </h1>
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
    </main>
  );
};

export default Home;
