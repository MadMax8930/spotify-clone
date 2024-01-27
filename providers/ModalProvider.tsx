"use client";

import { useState, useEffect } from 'react'
import { AuthModal, UploadModal, SubscribeModal } from '@/components'

const ModalProvider = () => {
   const [isMounted, setIsMounted] = useState(false);

   useEffect(() => {
      setIsMounted(true);
   }, []);

   if (!isMounted) { return null };

   return (
     <>
       <AuthModal/>
       <UploadModal />
       <SubscribeModal />
     </>
   )
}

export default ModalProvider