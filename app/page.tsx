import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton';

interface typeA {
  name: number;
  book: string;
}

interface typeB {
  roll: number
}

interface typeC extends typeA, typeB {
  address: string;
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6">
      {/* videos caraousel */}
      <Skeleton className='w-full h-80 py-6 bg-gray-200 mt-14 flex items-center justify-center' >
        <Skeleton className='w-1/2 h-full  bg-gray-300' ></Skeleton>
      </Skeleton>
      {/* vidoes list */}
      <div></div>
      <Button variant={'destructive'}> this is a sample button</Button>
    </main>
  )
}
