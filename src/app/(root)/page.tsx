import { Button } from '@/components/ui/button'
import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='p-10'>
        <UserButton afterSignOutUrl="/"/>
    </div>
  )
}
