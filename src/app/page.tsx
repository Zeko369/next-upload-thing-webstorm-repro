import { utapi } from "uploadthing/server"

export default async function Home() {
  const foo = await utapi.deleteFiles(['asd'])

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24"></main>
  )
}
