'use server';

import { revalidatePath } from 'next/cache';
import { prisma } from '../_libs/prisma';

export const DeleteUser = async (id: string) => {
  try {
    await prisma.user.delete({ where: { id } });
    revalidatePath('/');
    return { message: 'Usuário deletado com sucesso' };
  } catch (error) {
    throw new Error('Falha ao deletar usuário');
  }
};
