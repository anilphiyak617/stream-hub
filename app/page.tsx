import { Button } from '@/components/ui/button'
import Image from 'next/image'

interface typeA {
  name: number;
  book:string;
}

interface typeB {
  roll:number
}

interface typeC extends typeA,typeB{
  address: string;
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button variant={'destructive'}> this is a sample button</Button>
    </main>
  )
}
