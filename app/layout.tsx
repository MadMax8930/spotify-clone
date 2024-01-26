import type { Metadata } from 'next'
import { Figtree } from 'next/font/google'
import { Sidebar, Player } from '@/components'
import ToasterProvider from '@/providers/ToasterProvider'
import SupabaseProvider from '@/providers/SupabaseProvider'
import UserProvider from '@/providers/UserProvider'
import ModalProvider from '@/providers/ModalProvider'
import getSongsByUserId from '@/actions/getSongsByUserId'
import './globals.css'

const font = Figtree({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Spotify Clone',
  description: 'Music application where you can listen the best hits and upload your own!',
};

export const revalidate = 0; // not cached

export default async function RootLayout({ children }: { children: React.ReactNode }) {
   const userSongs = await getSongsByUserId();
   return (
    <html lang="en">
      <body className={font.className}>
         <ToasterProvider />
         <SupabaseProvider>
            <UserProvider>
               <ModalProvider />
               <Sidebar songs={userSongs}>
                  {children}
               </Sidebar>
               <Player />
            </UserProvider>
         </SupabaseProvider>
      </body>
    </html>
  )
}
