import { FormUser } from './_components';
import { Edit, Trash } from 'lucide-react';

const Home = () => {
  return (
    <main className="max-w-7xl w-full p-3 mx-auto mt-10 flex flex-col gap-10">
      <h1 className="text-center font-bold text-xl sm:text-3xl">
        Lista de Contatos
      </h1>
      <FormUser />

      <table className="w-full *:w-full table-fixed border-collapse ">
        <thead>
          <tr>
            <th className="text-left py-3 font-bold uppercase">Nome</th>
            <th className="text-left py-3 font-bold uppercase">Email</th>
            <th className="text-left py-3 font-bold uppercase">Telefone</th>
            <th className="text-left py-3 font-bold uppercase">@</th>
          </tr>
        </thead>

        <tbody>
          <tr className="border-y border-solid border-indigo-200">
            <td className="text-left py-4">User</td>
            <td className="text-left py-4">email@email.com</td>
            <td className="text-left py-4">(99) 99999-9999</td>
            <td className="flex items-center py-4 gap-4">
              <button className="hover:text-indigo-600 duration-200">
                <Edit size={18} />
              </button>
              <button className="hover:text-indigo-600 duration-200">
                <Trash size={18} />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </main>
  );
};

export default Home;
