
"use client";

import { useEffect } from "react";
import { useParams } from "next/navigation";

import { useStoreModal } from "@/hooks/useStoreModal";

const HomePage=()=> {
    const onOpen = useStoreModal((state: { onOpen: any; }) => state.onOpen);
    const isOpen = useStoreModal((state: { isOpen: any; }) => state.isOpen);
  
    useEffect(() => {
      if (!isOpen) {
        onOpen();
      }
    }, [isOpen, onOpen]);
  return null
}
export default HomePage