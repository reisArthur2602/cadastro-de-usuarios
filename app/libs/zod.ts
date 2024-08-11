import { z } from 'zod';

export const UserSchema = z.object({
  name: z.string().min(1, 'O campo nome é obrigatório').trim(),
  email: z
    .string()
    .min(1, 'O campo email é obrigatório')
    .trim()
    .email('Insira um formato de email valido'),
  phone: z
    .string()
    .min(1, 'O campo telefone é obrigatório')
    .refine(
      (value) => /\([1-9]{2}\) 9[1-9]\d{3}-\d{4}/.test(value),
      'O número de telefone deve estar no formato (99) 99999-9999.'
    ),
});
