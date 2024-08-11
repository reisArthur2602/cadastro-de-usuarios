'use client';

import { AtSign, Phone, User } from 'lucide-react';
import { Form } from './ui/form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { UserSchema } from '../_libs/zod';
import { UserProps } from '../_dtos/user';
import { useEffect } from 'react';
import { normalizePhoneNumber } from '../_utils/mask';
import { createUser } from '../_actions/create-user';

export const FormUser = () => {
  const {
    handleSubmit,
    register,
    watch,
    setValue,
    formState: { errors },
  } = useForm<UserProps>({
    resolver: zodResolver(UserSchema),
  });

  const phoneValue = watch('phone');

  useEffect(() => {
    setValue('phone', normalizePhoneNumber(phoneValue));
  }, [phoneValue]);

  const onSubmit = async (data: UserProps) => {
    try {
      await createUser(data);
      console.log('Usuário cadastrado com sucesso');
    } catch (error) {
      console.log('Falha ao cadastrar usuário', error);
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Label>
        <User size={25} />
        <Form.Field placeholder="Nome Completo" {...register('name')} />
      </Form.Label>

      <Form.Label>
        <AtSign size={25} />
        <Form.Field placeholder="email@email.com" {...register('email')} />
      </Form.Label>

      <Form.Label>
        <Phone size={25} />
        <Form.Field placeholder="(99) 99999-9999" {...register('phone')} />
      </Form.Label>
      <Form.Submit>Salvar</Form.Submit>
    </Form>
  );
};
