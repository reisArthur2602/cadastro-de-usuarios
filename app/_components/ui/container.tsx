import React, { ReactNode } from "react"
import { twMerge } from "tailwind-merge"

type ContainerProps = {
  children: ReactNode
  className?: string
}

export const Container = ({ children, className }: ContainerProps) => {
  return (
    <main className={twMerge("mx-auto w-full max-w-7xl flex-1 p-3", className)}>
      {children}
    </main>
  )
}
