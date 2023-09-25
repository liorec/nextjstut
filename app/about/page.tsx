import React from 'react'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata ={
    title: 'About',
    description: 'About Page',
}

export default function About() {
    //throw new Error('Not today!');
  return (
    <>
    <h1>About</h1>
    <Link href="/">Link to Home Page</Link>
    </>
  )
}
