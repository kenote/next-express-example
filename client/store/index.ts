import { createStore, Store, EasyPeasyConfig } from 'easy-peasy'
import model, { StoreModel } from '~/store/models'
import { NextTypes } from '@/types/restful'
import { Channel } from '@/types/channel'
import { NextPage, NextPageContext } from 'next'

const store: Store<StoreModel, EasyPeasyConfig<{}, any>> = createStore(model)

export function initializeStore (initialState: Store<StoreModel, EasyPeasyConfig<{}, any>> = store): Store<StoreModel, EasyPeasyConfig<{}, any>> {
  return createStore(
    model,
    {
      initialState
    }
  )
}

export interface InitialProps {
  name: string
  channels: Channel.element[]
  channelId: number
}

export function withProps (PageComponent: NextPage<InitialProps>): NextPage<InitialProps> {
  PageComponent.getInitialProps = async ({ req, isServer }: NextPageContext) => {
    let { __name, __channels } = (req || {}) as NextTypes.request
    return { name: __name, channels: __channels, channelId: 1 }
  }
  return PageComponent
}