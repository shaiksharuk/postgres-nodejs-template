import HomePage from "@/components/home"
import { getAllMessages } from "@/lib/postgres";

export default async function Home() {
  const initialItems = await getAllMessages();
  return (
    <main>
      <HomePage initialItems={initialItems}/>
    </main>
  )
}
