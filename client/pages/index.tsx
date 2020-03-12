import * as React from 'react'
import * as Layout from '~/layouts'
import { Button, Radio, Input } from 'antd'
import { Channel } from '@/types/channel'
import { useStoreState, useStoreActions, Actions } from 'easy-peasy'
import { StoreModel } from '~/store/models'
import { Model as SettingModel } from '~/store/models/setting'
import { InitialProps, withProps } from '~/store'
import { NextPage } from 'next'

const Home: NextPage<InitialProps> = (): JSX.Element => {
  let state: StoreModel = useStoreState( state => state ) as StoreModel
  let actions = useStoreActions( actions => actions.setting ) as Actions<SettingModel>
  let channelsJSON: string = JSON.stringify(state.setting.channels, null, 2)
  return (
    <Layout.HomePage>
      <h1>Home page 🚀</h1>
      <div>
        <Button type="primary">Primary</Button>
        <Button>Default</Button>
        <Button type="dashed">Dashed</Button>
        <Button type="link">Link</Button>
      </div>
      <div style={{ marginTop: 20 }}>
        <Radio.Group defaultValue={state.setting.channelId} buttonStyle="solid" onChange={evt => actions.setChannelId(evt.target.value)}>
          {state.setting.channels.map((item: Channel.element, index: number) => {
            return (
              <Radio.Button value={item.id} key={index}>{ item.name }</Radio.Button>
            )
          })}
        </Radio.Group>
      </div>
      <div style={{ marginTop: 20 }}>
        <p>name: { state.setting.name }</p>
        <p>channelId: { state.setting.channelId }</p>
        <p>{ JSON.stringify(state.setting.selectedChannel, null, 2) }</p>
      </div>
      <div>
        <Input.TextArea rows={12} value={channelsJSON} />
      </div>
    </Layout.HomePage>
  )
}

export default withProps(Home)