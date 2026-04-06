import KasplatPool from '@renderer/components/pools/Kasplats'
import { useHelmKasplat, useCastleKasplat } from '@renderer/hooks/isles'
import IslesCheck from '../check'
import DKIslandKasplats from './DKIsland'
import KremIslandKasplats from './KremIsland'
import OuterKasplats from './OuterRim'
import JapesForestKasplats from './JapesForest'
import CavesHelmKasplats from './CavesHelm'

const ShuffledKasplats: React.FC = () => {
const DKKasplat = useHelmKasplat()
const diddyKasplat = useCastleKasplat()
  return (
    <KasplatPool>
      <DKIslandKasplats />
      <KremIslandKasplats />
      <OuterKasplats />
      <JapesForestKasplats />
      <CavesHelmKasplats />
      <IslesCheck
        id={50000}
        name="Shuffled Kasplat: DK's Vanilla Location (Helm Lobby)"
        region="Caves-Helm Lobbies"
        canGetLogic={DKKasplat.in}
        canGetBreak={DKKasplat.out}
      />
      <IslesCheck
        id={50001}
        name="Shuffled Kasplat: Diddy's Vanilla Location (a cage in Castle Lobby)"
        region="Caves-Helm Lobbies"
        canGetLogic={diddyKasplat.in}
        canGetBreak={diddyKasplat.out}
      />
    </KasplatPool>
  )
}

export default ShuffledKasplats
