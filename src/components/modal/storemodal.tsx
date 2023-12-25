"use client"

import { useStoreModal } from "@/hooks/useStoreModal"
import { Modal } from "@/components/ui/modal"

export const StoreModal =()=>{
    const storeModal= useStoreModal()
    return(
        <Modal title={"create store"} description={"Add a new store to manage your products and categories"} isOpen={storeModal.isOpen} onClose={storeModal.onClose}>
Future Create store
        </Modal>
    )
}