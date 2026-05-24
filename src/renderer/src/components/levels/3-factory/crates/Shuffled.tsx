import CratePool from '@renderer/components/pools/Crates'
import StartCrates from './Start'
import StarcadeCrates from './Starcade'
import TestingCrates from './Testing'
import RNDCrates from './RND'
import ProdRoomCrates from './ProdRoom'

const ShuffledCrates: React.FC = () => {
  return (
    <CratePool>
      <StartCrates />
      <StarcadeCrates />
      <TestingCrates />
      <RNDCrates />
      <ProdRoomCrates />
    </CratePool>
  )
}

export default ShuffledCrates
