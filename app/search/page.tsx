import { Header, SearchInput, SearchContent } from '@/components'
import getSongsByTitle from '@/actions/getSongsByTitle'

interface SearchProps {
   searchParams: {
      title: string;
   }
}

export const revalidate = 0; // not cached

const Search = async ({ searchParams }: SearchProps) => {
   const songs = await getSongsByTitle(searchParams.title);
   return (
      <div className='bg-neutral-900 rounded-lg h-full w-full overflow-hidden overflow-y-auto'>
         <Header className='from-bg-neutral-900'>
            <div className='flex flex-col gap-y-6 mb-2'>
               <h1 className='text-white text-3xl font-semibold'>Search</h1>
               <SearchInput />
            </div>
         </Header>
         <SearchContent songs={songs} />
      </div>
   )
}

export default Search