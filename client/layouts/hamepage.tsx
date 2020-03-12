import * as React from 'react'
import Head from 'next/head'
import Link from '~/components/link'
import '~/assets/scss/common.scss'

const { Fragment } = React

export default ({ children }) => {
  return (
    <Fragment>
      <Head>
        <title>Site Name</title>
        <link rel="stylesheet" type="text/css" href="/nprogress.css" />
      </Head>
      <header>
        <div className="container">
          <img src={require('~/assets/images/next-js.png')} />
          <ul>
            <li><Link href="/" >Home</Link></li>
            <li><Link href="/about" >About</Link></li>
          </ul>
        </div>
      </header>
      <main>
        { children }
      </main>
    </Fragment>
  )
}