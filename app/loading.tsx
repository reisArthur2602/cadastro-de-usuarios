import React from "react"
import { Container } from "./_components"
import { Loader2Icon } from "lucide-react"

const Loading = () => {
  return (
    <Container className="flex items-center justify-center">
      <Loader2Icon color="#4f46e5" />
    </Container>
  )
}

export default Loading
