import { Container, FormUser, TableRow } from "./_components"
import { prisma } from "./_libs/prisma"

const Home = async () => {
  const users = await prisma.user.findMany()

  return (
    <Container className="flex flex-col gap-10 p-10">
      <h1 className="text-center text-xl font-bold sm:text-3xl">
        Lista de Contatos
      </h1>
      <FormUser />

      <table className="w-full border-collapse *:w-full">
        <thead>
          <tr>
            <th className="py-3 text-left font-bold uppercase">Nome</th>
            <th className="py-3 text-left font-bold uppercase">Email</th>
            <th className="py-3 text-left font-bold uppercase">Telefone</th>
            <th className="py-3 text-left font-bold uppercase">@</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <TableRow user={user} key={user.id} />
          ))}
        </tbody>
      </table>
    </Container>
  )
}

export default Home
