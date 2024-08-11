import { FormUser, TableUser } from './_components';
import { prisma } from './_libs/prisma';

const Home = async () => {
  const users = await prisma.user.findMany();

  return (
    <main className="max-w-7xl w-full p-3 mx-auto mt-10 flex flex-col gap-10">
      <h1 className="text-center font-bold text-xl sm:text-3xl">
        Lista de Contatos
      </h1>
      <FormUser />
      <TableUser users={users} />
    </main>
  );
};

export default Home;
