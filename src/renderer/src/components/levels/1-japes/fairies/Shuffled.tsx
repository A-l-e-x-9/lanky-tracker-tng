import FairyPool from '@renderer/components/pools/Fairies'
import LowlandFairies from './Lowlands'
import HillsideFairies from './Hillside'
import MineFairies from './Mine'
import HiveFairies from './Hive'
import StormyFairies from './Stormy'

const ShuffledFairies: React.FC = () => {
  return (
    <FairyPool>
      <LowlandFairies />
      <HillsideFairies />
      <MineFairies />
      <HiveFairies />
      <StormyFairies />
    </FairyPool>
  )
}

export default ShuffledFairies
