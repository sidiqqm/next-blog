import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CategoryList = () => {
  return (
    <div>
      <h1 className='my-8 text-xl font-semibold'>Popular Categories</h1>
      <div className="flex flex-wrap justify-center gap-6">
        <Link href="/blog?cat=style" className='flex items-center gap-4 bg-blue-100 w-40 h-16 justify-center rounded-lg text-black'>
          <Image src="/style.png" width={32} height={32} alt='...' className='rounded-[50%] object-cover max-h-8' />
          <p className='capitalize'>style</p>
        </Link>
        <Link href="/blog?cat=style" className='flex items-center gap-4 bg-pink-100 w-40 h-16 justify-center rounded-lg text-black'>
          <Image src="/fashion.png" width={32} height={32} alt='...' className='rounded-[50%] object-cover max-h-8' />
          <p className='capitalize'>fashion</p>
        </Link>
        <Link href="/blog?cat=style" className='flex items-center gap-4 bg-green-100 w-40 h-16 justify-center rounded-lg text-black'>
          <Image src="/food.png" width={32} height={32} alt='...' className='rounded-[50%] object-cover max-h-8' />
          <p className='capitalize'>food</p>
        </Link>
        <Link href="/blog?cat=style" className='flex items-center gap-4 bg-orange-100 w-40 h-16 justify-center rounded-lg text-black'>
          <Image src="/travel.png" width={32} height={32} alt='...' className='rounded-[50%] object-cover max-h-8' />
          <p className='capitalize'>travel</p>
        </Link>
        <Link href="/blog?cat=style" className='flex items-center gap-4 bg-red-100 w-40 h-16 justify-center rounded-lg text-black'>
          <Image src="/culture.png" width={32} height={32} alt='...' className='rounded-[50%] object-cover max-h-8' />
          <p className='capitalize'>culture</p>
        </Link>
        <Link href="/blog?cat=style" className='flex items-center gap-4 bg-purple-100 w-40 h-16 justify-center rounded-lg text-black'>
          <Image src="/coding.png" width={32} height={32} alt='...' className='rounded-[50%] object-cover h-8' />
          <p className='capitalize'>coding</p>
        </Link>
        
      </div>
    </div>
  )
}

export default CategoryList