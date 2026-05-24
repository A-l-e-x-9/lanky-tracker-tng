import ArenaPool from '@renderer/components/pools/Arenas'
import StartArenas from './Start'
import StarcadeArenas from './Starcade'
import TestingArenas from './Testing'
import RNDArenas from './RND'
import ProdRoomArenas from './ProdRoom'

const ShuffledArenas: React.FC = () => {
  return (
    <ArenaPool>
      <StartArenas />
      <StarcadeArenas />
      <TestingArenas />
      <RNDArenas />
      <ProdRoomArenas />
    </ArenaPool>
  )
}

export default ShuffledArenas
