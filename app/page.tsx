import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import Link from 'next/link'
import type { Metadata } from 'next'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata ={
  title: 'Home',
  description: 'Welcome to Next.js',
}

export default function Home() {
  return (
    <main>
      <h1>Hello World!</h1>
      <Link href="/about">Link to About Page</Link>
          </main>
  )
}
