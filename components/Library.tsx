"use client";

import { Song } from '@/types'
import { TbPlaylist } from 'react-icons/tb'
import { AiOutlinePlus } from 'react-icons/ai'
import { MediaItem } from '@/components'
import { useUser } from '@/hooks/useUser'
import useAuthModal from '@/hooks/useAuthModal'
import useUploadModal from '@/hooks/useUploadModal'
import useOnPlay from '@/hooks/useOnPlay'

interface LibraryProps {
   songs: Song[];
}

const Library: React.FC<LibraryProps> = ({ songs }) => {
   const authModal = useAuthModal();
   const uploadModal = useUploadModal();
   const { user } = useUser();

   const onPlay = useOnPlay(songs);

   const onClick = () => {
      if (!user) { return authModal.onOpen() };

      //Todo: Check for subscription

      return uploadModal.onOpen();
   };

  return (
    <div className='flex flex-col'>
      <div className='flex items-center justify-between px-5 pt-4'>
         <div className='inline-flex items-center gap-x-2'>
            <TbPlaylist size={26} className='text-neutral-400'/>
            <p className='text-neutral-400 font-medium text-md'>Your Library</p>
         </div>
         <AiOutlinePlus onClick={onClick} size={20} className='text-neutral-400 cursor-pointer hover:text-white transition' />
      </div>
      <div className='flex flex-col gap-y-2 mt-4 px-3'>
         {songs.map((item) => (
            <MediaItem key={item.id} data={item} onClick={(id: string) => onPlay(id)} />
         ))}
      </div>
    </div>
  )
}

export default Library