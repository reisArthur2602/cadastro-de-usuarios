'use client';

import { DeleteUser } from '@/app/_actions/delete-user';
import { UserResponse } from '@/app/_dtos/user';
import { Edit, Trash } from 'lucide-react';

type TableUserProps = {
  users: UserResponse[];
};

export const TableUser = ({ users }: TableUserProps) => {
  const handleDelete = async (id: string) => {
    await DeleteUser(id);
  };

  return (
    <table className="w-full *:w-full border-collapse ">
      <thead>
        <tr>
          <th className="text-left py-3 font-bold uppercase">Nome</th>
          <th className="text-left py-3 font-bold uppercase">Email</th>
          <th className="text-left py-3 font-bold uppercase">Telefone</th>
          <th className="text-left py-3 font-bold uppercase">@</th>
        </tr>
      </thead>

      <tbody>
        {users.map((user) => (
          <tr className="border-y border-solid border-indigo-200" key={user.id}>
            <td className="text-left py-4">{user.name}</td>

            <td className="text-left py-4">{user.email}</td>

            <td className="text-left py-4">{user.phone}</td>

            <td className="flex items-center py-4 gap-4">
            
              <button
                className="hover:text-indigo-600 duration-200"
                onClick={() => handleDelete(user.id)}
              >
                <Trash size={18} />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
