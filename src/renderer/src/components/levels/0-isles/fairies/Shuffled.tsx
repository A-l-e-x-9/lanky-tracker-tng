import FairyPool from '@renderer/components/pools/Fairies'
import { useCheckLankyCastle, useCastleLobbyGeneric, useCavesKasplat } from '@renderer/hooks/isles'
import { useShuffleFairies } from '@renderer/hooks/settings'
import { useCamera } from '@renderer/hooks/kongs'
import IslesCheck from '../check'
import DKIslandFairies from './DKIsland'
import KremIslandFairies from './KremIsland'
import OuterFairies from './OuterRim'
import JapesForestFairies from './JapesForest'

const Shuffled: React.FC = () => {
  const hasCam = useCamera()
  const canReachCastleLobbyLanky = useCheckLankyCastle()
  const canReachCastleLobby = useCastleLobbyGeneric()
  const iceWallBreakdown = useCavesKasplat()
  return (
    <FairyPool>
      <DKIslandFairies />
      <KremIslandFairies />
      <OuterFairies />
      <JapesForestFairies />
      <IslesCheck
        id={40012}
        name="Shuffled Fairy: At Lanky's Castle Lobby checks"
        region="Caves-Helm Lobbies"
        canGetLogic={canReachCastleLobbyLanky.in && hasCam}
        canGetBreak={canReachCastleLobby.out && hasCam}
      />
      <IslesCheck
        id={40013}
        name="Shuffled Fairy: At DK's lava Banana"
        region="Caves-Helm Lobbies"
        canGetLogic={iceWallBreakdown.in && hasCam}
        canGetBreak={iceWallBreakdown.out && hasCam}
      />
    </FairyPool>
  )
}

const ShuffledFairies: React.FC = () => (useShuffleFairies() ? <Shuffled /> : null)
export default ShuffledFairies
