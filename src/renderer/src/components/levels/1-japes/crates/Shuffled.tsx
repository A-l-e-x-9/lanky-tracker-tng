import CratePool from '@renderer/components/pools/Crates'
import LowlandCrates from './Lowlands'
import HillsideCrates from './Hillside'
import MineCrates from './Mine'
import HiveCrates from './Hive'
import StormyCrates from './Stormy'

const ShuffledCrates: React.FC = () => {
  return (
    <CratePool>
      <LowlandCrates />
      <HillsideCrates />
      <MineCrates />
      <HiveCrates />
      <StormyCrates />
    </CratePool>
  )
}

export default ShuffledCrates
