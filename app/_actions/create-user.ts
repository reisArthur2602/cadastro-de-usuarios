'use server';

import { UserProps } from '../_dtos/user';
import { prisma } from '../_libs/prisma';

export const createUser = async (data: UserProps) => {
  try {
    await prisma.user.create({ data });
    return { message: 'Usuário cadastrado com sucesso' };
  } catch (error) {
    throw new Error('Falha ao cadastrar usuário');
  }
};
