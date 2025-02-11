import { FC } from 'react'
import BasicButton from '../components/atoms/buttons/Basic'
import SelectBox from '../components/atoms/inputs/Select'

const Home: FC = () => {
  return (
    <div>
      <BasicButton isNext>次の質問へ</BasicButton>
      <SelectBox
        onChange={() => {}}
        options={[{ value: 'test', label: 'テスト' }]}
      ></SelectBox>
    </div>
  )
}

export default Home
