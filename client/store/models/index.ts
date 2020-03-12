import settingModel, { Model as SettingModel } from '~/store/models/setting'

export interface StoreModel {
  setting: SettingModel
}

const storeModel: StoreModel = {
  setting: settingModel
}

export default storeModel