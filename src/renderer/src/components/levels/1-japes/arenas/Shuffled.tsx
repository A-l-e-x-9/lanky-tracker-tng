import ArenaPool from '@renderer/components/pools/Arenas'
import LowlandArenas from './Lowlands'
import HillsideArenas from './Hillside'
import MineArenas from './Mine'
import HiveArenas from './Hive'
import StormyArenas from './Stormy'

const ShuffledArenas: React.FC = () => {
  return (
    <ArenaPool>
      <LowlandArenas />
      <HillsideArenas />
      <MineArenas />
      <HiveArenas />
      <StormyArenas />
    </ArenaPool>
  )
}

export default ShuffledArenas
