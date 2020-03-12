import * as React from 'react'
import * as Layout from '~/layouts'
import { DatePicker } from 'antd'
import dayjs from 'dayjs'
import { InitialProps, withProps } from '~/store'
import { NextPage } from 'next'

const { RangePicker } = DatePicker
const dateFormat: string = 'YYYY-MM-DD'

const About: NextPage<InitialProps> = (): JSX.Element => {
  return (
    <Layout.HomePage>
      <h1>About page</h1>
      <div>
        <DatePicker defaultValue={dayjs('2015/01/01', dateFormat) as any} format={dateFormat} />
        <RangePicker
          defaultValue={[dayjs('2015/01/01', dateFormat) as any, dayjs('2015/01/01', dateFormat) as any]}
          format={dateFormat}
        />
      </div>
    </Layout.HomePage>
  )
}

export default withProps(About)