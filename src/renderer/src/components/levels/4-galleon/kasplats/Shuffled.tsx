import KasplatPool from '@renderer/components/pools/Kasplats'
import CavernKasplats from './Caverns'
import LighthouseKasplats from './Lighthouse'
import OutskirtKasplats from './Outskirts'
import TreasureKasplats from './Treasure'

const ShuffledKasplats: React.FC = () => {
  return (
    <KasplatPool>
      <CavernKasplats />
      <LighthouseKasplats />
      <OutskirtKasplats />
      <TreasureKasplats />
    </KasplatPool>
  )
}

export default ShuffledKasplats
