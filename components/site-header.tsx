"use client"

import Link from "next/link"
import Image from "next/image"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto flex items-center justify-center h-20 px-4">
        <Link href="/" className="flex items-center gap-3 group">
          <Image src="/favicon.ico" alt="logo" width={48} height={48} />
          <span className="uppercase text-3xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-blue-600">
            kladionicehr
          </span>
        </Link>
      </div>
    </header>
    // </CHANGE>
  )
}
