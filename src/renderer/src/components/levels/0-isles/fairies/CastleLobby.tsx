import FairyPool from '@renderer/components/pools/Fairies'
import { useShuffleFairies } from '@renderer/hooks/settings'
import IslesCheck from '../check'
import { useCheckLankyCastle, useCastleLobbyGeneric } from '@renderer/hooks/isles'
import { useCamera } from '@renderer/hooks/kongs'

const Shuffled: React.FC = () => {
  const hasCam = useCamera()
  const canReachCastleLobbyLanky = useCheckLankyCastle()
  const canReachCastleLobby = useCastleLobbyGeneric()
  return (
    <FairyPool>
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

const CastleLobbyFairies: React.FC = () => (useShuffleFairies() ? <Shuffled /> : null)
export default CastleLobbyFairies
