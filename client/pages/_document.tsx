// Document...
import * as React from 'react'
import Document, {
  DocumentContext,
  DocumentInitialProps,
  Head,
  Main,
  NextScript
} from 'next/document'

export default class MyDocument extends Document<any> {

  static async getInitialProps (ctx: DocumentContext) {
    let initialProps: DocumentInitialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render () {
    return (
      <html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}