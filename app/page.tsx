import { Container, FormUser, TableRow } from "./_components"
import { prisma } from "./_libs/prisma"
import { TABLE } from "./_utils/table"

const Home = async () => {
  const users = await prisma.user.findMany()

  return (
    <Container className="flex flex-col gap-10 p-10">
      <h1 className="text-center text-xl font-bold sm:text-3xl">
        Cadastro de usuários
      </h1>
      <FormUser />

      <table className="w-full border-collapse *:w-full">
        <thead>
          <tr>
            {TABLE.map((t) => (
              <th className="py-3 text-left font-bold uppercase" key={t.thead}>
                {t.thead}
              </th>
            ))}
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
