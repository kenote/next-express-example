// Page Loading...
import * as React from 'react'
import App, { AppInitialProps, AppContext } from 'next/app'
import NProgress from 'nprogress'
import nextRouter from 'next/router'
import { StoreProvider, Actions, Store, EasyPeasyConfig } from 'easy-peasy'
import withRedux from 'next-redux-wrapper'
import { InitialProps, initializeStore } from '~/store'
import { StoreModel } from '~/store/models'

nextRouter.events.on('routeChangeStart', url => {
  NProgress.start()
})
nextRouter.events.on('routeChangeComplete', NProgress.done)
nextRouter.events.on('routeChangeError', NProgress.done)

export let store: Store<StoreModel, EasyPeasyConfig<{}, any>>

class MyApp extends App {
  static async getInitialProps ({ Component, ctx }: AppContext): Promise<AppInitialProps> {
    let pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {}
    return { pageProps }
  }

  constructor (props: Readonly<any>) {
    super(props)
    store = props.store
    if (props.isServer) {
      // 同步服务端数据
      let { name, channels, channelId } = props.pageProps as InitialProps
      let actions: Actions<StoreModel> = store.getActions()
      actions.setting.setName(name)
      actions.setting.setChannels(channels)
      actions.setting.setChannelId(channelId)
    }
  }

  render () {
    let { Component, pageProps } = this.props
    return (
      <>
        <StoreProvider store={store}>
          <Component {...pageProps} />
        </StoreProvider>
      </>
    )
  }
}

export default withRedux(initializeStore, { debug: false })(MyApp)
