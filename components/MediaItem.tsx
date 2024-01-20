"use client";

import Image from 'next/image'
import { Song } from '@/types'
import useLoadImage from '@/hooks/useLoadImage'

interface MediaItemProps {
   data: Song;
   onClick?: (id: string) => void;
}

const MediaItem: React.FC<MediaItemProps> = ({ data, onClick }) => {
   const imageUrl = useLoadImage(data);
   const handleClick = () => {
      if (onClick) { return onClick(data.id); }
      // Todo: Default turn on player
   };

   return (
    <div onClick={handleClick} className='flex items-center gap-x-3 w-full hover:bg-neutral-800/50 rounded-md p-2 cursor-pointer'>
      <div className='relative rounded-md min-h-[48px] min-w-[48px] bg-red-500 overflow-hidden'>
         <Image src={imageUrl || '/images/liked.png'} alt='Media Song Item' fill className='object-cover' />
      </div>
      <div className='flex flex-col gap-y-1 overflow-hidden'>
         <p className='text-white truncate'>{data.title}</p>
         <p className='text-neutral-400 text-sm truncate'>{data.author}</p>
      </div>
    </div>
  )
}

export default MediaItem