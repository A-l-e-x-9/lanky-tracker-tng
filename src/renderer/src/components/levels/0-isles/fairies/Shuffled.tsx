import FairyPool from '@renderer/components/pools/Fairies'
import { useFactoryFairy, useForestFairy, useAztecLobbyChunky, useCheckLankyCastle, useCastleLobbyGeneric, useCavesKasplat } from '@renderer/hooks/isles'
import { useShuffleFairies } from '@renderer/hooks/settings'
import { useCamera } from '@renderer/hooks/kongs'
import IslesCheck from '../check'
import DKIslandFairies from './DKIsland'
import KremIslandFairies from './KremIsland'
import OuterFairies from './OuterRim'
import JapesForestFairies from './JapesForest'

const Shuffled: React.FC = () => {
  const hasCam = useCamera()
  const vanillaFairy3 = useFactoryFairy()
  const vanillaFairy4 = useForestFairy()
  const canReachAztecLobbyChunky = useAztecLobbyChunky()
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
        id={40002}
        name="Shuffled Fairy: Vanilla Location #3 (crate inside Factory Lobby)"
        region="Japes-Forest Lobbies"
        canGetLogic={vanillaFairy3.in}
        canGetBreak={vanillaFairy3.out}
      />
      <IslesCheck
        id={40003}
        name="Shuffled Fairy: Vanilla Location #4 (my condolences...)"
        region="Japes-Forest Lobbies"
        canGetLogic={vanillaFairy4.in}
        canGetBreak={vanillaFairy4.out}
      />
      <IslesCheck
        id={40011}
        name="Shuffled Fairy: Inside Chunky's room in Aztec Lobby"
        region="Japes-Forest Lobbies"
        canGetLogic={canReachAztecLobbyChunky.in && hasCam}
        canGetBreak={canReachAztecLobbyChunky.out && hasCam}
      />
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
