import { Action, action, Thunk, thunk, Computed, computed } from 'easy-peasy'
import { Channel } from '@/types/channel'

export interface Model {
  name: string
  channels: Channel.element[]
  channelId: number
  setName: Action<Model, string>
  setChannels: Action<Model, Channel.element[]>
  setChannelId: Action<Model, number>
  selectChannel: Thunk<Model, number>
  selectedChannel: Computed<Model>
}

const model: Model = {
  name: '',
  channels: [],
  channelId: 1,
  setName: action((state, name) => {
    state.name = name
  }),
  setChannels: action((state, channels) => {
    state.channels = channels
  }),
  setChannelId: action((state, channelId) => {
    state.channelId = channelId
  }),
  selectChannel: thunk(async (actions, channelId) => {
    // ...
    actions.setChannelId(channelId)
  }),
  selectedChannel: computed(state => state.channels?.find( o => o.id === state.channelId ))
}

export default model
