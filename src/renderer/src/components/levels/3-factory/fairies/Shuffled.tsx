import FairyPool from '@renderer/components/pools/Fairies'
import StartFairies from './Start'
import StarcadeFairies from './Starcade'
import TestingFairies from './Testing'
import RNDFairies from './RND'
import ProdRoomFairies from './ProdRoom'

const ShuffledFairies: React.FC = () => {
  return (
    <FairyPool>
      <StartFairies />
      <StarcadeFairies />
      <TestingFairies />
      <RNDFairies />
      <ProdRoomFairies />
    </FairyPool>
  )
}

export default ShuffledFairies
