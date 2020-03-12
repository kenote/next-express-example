import * as React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

interface LinkProps {
  href: string
  children: React.ReactNode
  activeName?: string
}

export default ({ href, children, activeName = 'next-link-active' }: LinkProps): JSX.Element  => {
  let { pathname } = useRouter()
  let activeClassName = (linkname: string): string => linkname === pathname ? activeName : ''
  return (
    <Link href={href || '/'} >
      <a className={activeClassName(href)}>{ children }</a>
    </Link>
  )
}