import KasplatPool from '@renderer/components/pools/Kasplats'
import { useHelmKasplat, useCastleKasplat, useCavesKasplat, useFactoryKasplat, useGalleonKasplat, useCavesLobbyGeneric, usePlayLobby } from '@renderer/hooks/isles'
import { useShuffleKasplats } from '@renderer/hooks/settings'
import { useGrab, useHighGrab, useRocket, useBoulderTech, useTwirl } from '@renderer/hooks/kongs'
import IslesCheck from '../check'
import DKIslandKasplats from './DKIsland'
import KremIslandKasplats from './KremIsland'
import OuterKasplats from './OuterRim'
import JapesForestKasplats from './JapesForest'

const Shuffled: React.FC = () => {
const DKKasplat = useHelmKasplat()
const diddyKasplat = useCastleKasplat()
const lankyKasplat = useCavesKasplat()
const tinyKasplat = useFactoryKasplat()
const chunkyKasplat = useGalleonKasplat()
const canReachFactoryLobby = usePlayLobby('Frantic Factory')
const hasGrab = useGrab()
const highGrab = useHighGrab()
const canDoGuitarGB = useCavesLobbyGeneric()
const hasJetbarrel = useRocket()
const boulderTech = useBoulderTech()
const hinaKagiyama = useTwirl()
  return (
    <KasplatPool>
      <DKIslandKasplats />
      <KremIslandKasplats />
      <OuterKasplats />
      <JapesForestKasplats />
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
      <IslesCheck
        id={50002}
        name="Shuffled Kasplat: Lanky's Vanilla Location (a wall in Caves Lobby)"
        region="Caves-Helm Lobbies"
        canGetLogic={lankyKasplat.in}
        canGetBreak={lankyKasplat.out}
      />
      <IslesCheck
        id={50003}
        name="Shuffled Kasplat: Tiny's Vanilla Location (a box in Factory Lobby)"
        region="Japes-Forest Lobbies"
        canGetLogic={tinyKasplat.in}
        canGetBreak={tinyKasplat.out}
      />
      <IslesCheck
        id={50004}
        name="Shuffled Kasplat: Chunky's Vanilla Location (Galleon Lobby)"
        region="Japes-Forest Lobbies"
        canGetLogic={chunkyKasplat.in}
        canGetBreak={chunkyKasplat.out}
      />
      <IslesCheck
        id={50006}
        name="Shuffled Kasplat: Factory Lobby, above the DK Portal"
        region="Japes-Forest Lobbies"
        canGetLogic={canReachFactoryLobby.in && hasGrab}
        canGetBreak={highGrab}
      />
      <IslesCheck
        id={50011}
        name="Shuffled Kasplat: On Diddy's platform in Caves Lobby"
        region="Caves-Helm Lobbies"
        canGetLogic={canDoGuitarGB.in && hasJetbarrel}
        canGetBreak={canDoGuitarGB.out && boulderTech && hinaKagiyama}
      />
    </KasplatPool>
  )
}

const ShuffledKasplats: React.FC = () => (useShuffleKasplats() ? <Shuffled /> : null)
export default ShuffledKasplats
