"use client";

import React from 'react'
import { Modal } from '@/components'
import useUploadModal from '@/hooks/useUploadModal'

const UploadModal = () => {
  const { onClose, isOpen } = useUploadModal();
  const onChange = (open: boolean) => {
     // Reset the form
     if (!open) { onClose() };
  };

  return (
    <Modal
      title='Upload modal title'
      description='Upload modal description'
      isOpen={isOpen}
      onChange={onChange}
    >
      Upload Content
    </Modal>
  )
}

export default UploadModal