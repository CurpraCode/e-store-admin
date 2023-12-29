import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import { ModalProvider } from '@/providers/modalprovider'
// import { Prisma } from '@prisma/client'
// import prismadb from '@/lib/prismadb'
import { ToastProvider } from '@/providers/toastProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Admin Dashboard',
  description: 'E-store || CMS for online web business',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // const getStore = prismadb.store
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={inter.className}>
        <ToastProvider/>   
         <ModalProvider />
        {children}
        </body>
    </html>
    </ClerkProvider>
  )
}
