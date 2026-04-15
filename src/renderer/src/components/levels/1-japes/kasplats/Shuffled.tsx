import KasplatPool from '@renderer/components/pools/Kasplats'
import LowlandKasplats from './Lowlands'
import HillsideKasplats from './Hillside'
import MineKasplats from './Mine'
import HiveKasplats from './Hive'
import StormyKasplats from './Stormy'

const ShuffledKasplats: React.FC = () => {
  return (
    <KasplatPool>
      <LowlandKasplats />
      <HillsideKasplats />
      <MineKasplats />
      <HiveKasplats />
      <StormyKasplats />
    </KasplatPool>
  )
}

export default ShuffledKasplats
