import KasplatPool from '@renderer/components/pools/Kasplats'
import { useCactusKasplat, useChunkySeasickGb, useDiddyMechGb, useLankyGoldGb } from '@renderer/hooks/galleon'
import { useShuffleKasplats } from '@renderer/hooks/settings'
import { useClimbing, usePunch } from '@renderer/hooks/kongs'
import GalleonCheck from '../check'

const Shuffled: React.FC = () => {
const chunkyVanillaKasplat = useCactusKasplat()
const mechfishAgenda = useDiddyMechGb()
const canDoLankyGoldTower = useLankyGoldGb()
const canDoChunkyShip = useChunkySeasickGb()
const hasClimbing = useClimbing()
const hasPrimatePunch = usePunch()
  return (
    <KasplatPool>
      <GalleonCheck
        id={54004}
        name="Shuffled Kasplat: Chunky's Vanilla Location (the &quot;cactus&quot;)"
        region="Shipyard Outskirts"
        canGetLogic={chunkyVanillaKasplat.in}
        canGetBreak={chunkyVanillaKasplat.out}
      />
      <GalleonCheck
        id={54015}
        name="Shuffled Kasplat: Also on the &quot;cactus&quot;"
        region="Shipyard Outskirts"
        canGetLogic={chunkyVanillaKasplat.in}
        canGetBreak={chunkyVanillaKasplat.out}
      />
    </KasplatPool>
  )
}

const OutskirtKasplats: React.FC = () => (useShuffleKasplats() ? <Shuffled /> : null)
export default OutskirtKasplats
