"use client"

import { DeleteUser } from "@/app/_actions/delete-user"
import { UserResponse } from "@/app/_dtos/user"
import { Trash } from "lucide-react"

type TableUserProps = {
  user: UserResponse
}

export const TableRow = ({ user }: TableUserProps) => {
  const handleDelete = async (id: string) => {
    await DeleteUser(id)
  }

  return (
    <tr className="border-y border-solid border-indigo-200" key={user.id}>
      <td className="py-4 text-left">{user.name}</td>

      <td className="py-4 text-left">{user.email}</td>

      <td className="py-4 text-left">{user.phone}</td>

      <td className="flex items-center gap-4 py-4">
        <button
          className="duration-200 hover:text-indigo-600"
          onClick={() => handleDelete(user.id)}
        >
          <Trash size={18} />
        </button>
      </td>
    </tr>
  )
}
