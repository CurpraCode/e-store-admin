import { Button } from '@/components/ui/button'
import { Modal } from '@/components/ui/modal'
import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='p-10'>
        <UserButton afterSignOutUrl="/"/>
        <Modal title="add store" description="add them" isOpen onClose={()=>{}}> 
            
        </Modal>
    </div>
  )
}
