"use client";

import { Song } from '@/types'
import { LikeButton, MediaItem, Slider } from '@/components'
import { BsPauseFill, BsPlayFill } from 'react-icons/bs'
import { AiFillStepBackward, AiFillStepForward } from 'react-icons/ai'
import { HiSpeakerWave, HiSpeakerXMark } from 'react-icons/hi2'

interface PlayerContentProps {
   song: Song;
   songUrl: string;
}

const PlayerContent: React.FC<PlayerContentProps> = ({ song, songUrl }) => {
   const Icon = true ? BsPauseFill : BsPlayFill;
   const VolumeIcon = true ? HiSpeakerXMark : HiSpeakerWave;

   return (
     <div className='grid grid-cols-2 md:grid-cols-3 h-full'>
       {/* Left Song Info */}
       <div className='flex justify-start w-full'>
         <div className='flex items-center gap-x-4'>
           <MediaItem data={song} />
           <LikeButton songId={song.id} />
         </div>
       </div>
       {/* Right Mobile Controls */}
       <div className='flex md:hidden col-auto justify-end items-center w-full'>
         <div onClick={() => {}} className='h-10 w-10 flex items-center justify-center rounded-full bg-white p-1 cursor-pointer'>
            <Icon size={30} className='text-black' />
         </div>
       </div>
       {/* Middle Desktop Controls */}
       <div className='hidden md:flex h-full justify-center items-center w-full max-w-[722px] gap-x-6'>
         <AiFillStepBackward onClick={() => {}} size={30} className='text-neutral-400 hover:text-white transition cursor-pointer' />
         <div onClick={() => {}} className='flex items-center justify-center h-10 w-10 rounded-full bg-white p-1 cursor-pointer'>
            <Icon size={30} className='text-black' />
         </div>
         <AiFillStepForward onClick={() => {}} size={30} className='text-neutral-400 hover:text-white transition cursor-pointer' />
       </div>
       {/* Right Desktop Volume & Slider */}
       <div className='hidden md:flex w-full justify-end pr-2'>
         <div className='flex items-center gap-x-2 w-[120px]'>
           <VolumeIcon onClick={() => {}} size={34} className='cursor-pointer' />
           <Slider />
         </div>
       </div>
     </div>
   )
}

export default PlayerContent