import { Header, AccountContent } from '@/components'

const Account = () => {
   return (
     <div className='bg-neutral-900 rounded-lg h-full w-full overflow-hidden overflow-y-auto'>
       <Header className='from-bg-neutral-900'>
         <div className='flex flex-col gap-y-6 mb-2'>
            <h1 className='text-white text-3xl font-semibold'>
               Account Settings
            </h1>
         </div>
       </Header>
       <AccountContent />
     </div>
   )
}

export default Account