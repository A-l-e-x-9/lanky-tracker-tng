import FairyPool from '@renderer/components/pools/Fairies'
import { useCheckLankyCastle, useCastleLobbyGeneric } from '@renderer/hooks/isles'
import { useCamera } from '@renderer/hooks/kongs'
import IslesCheck from '../check'
import DKIslandFairies from './DKIsland'
import KremIslandFairies from './KremIsland'
import OuterFairies from './OuterRim'
import JapesForestFairies from './JapesForest'
import CavesHelmFairies from './CavesHelm'

const ShuffledFairies: React.FC = () => {
  const hasCam = useCamera()
  const canReachCastleLobbyLanky = useCheckLankyCastle()
  const canReachCastleLobby = useCastleLobbyGeneric()
  return (
    <FairyPool>
      <DKIslandFairies />
      <KremIslandFairies />
      <OuterFairies />
      <JapesForestFairies />
      <CavesHelmFairies />
      <IslesCheck
        id={40012}
        name="Shuffled Fairy: At Lanky's Castle Lobby checks"
        region="Caves-Helm Lobbies"
        canGetLogic={canReachCastleLobbyLanky.in && hasCam}
        canGetBreak={canReachCastleLobby.out && hasCam}
      />
    </FairyPool>
  )
}

export default ShuffledFairies
