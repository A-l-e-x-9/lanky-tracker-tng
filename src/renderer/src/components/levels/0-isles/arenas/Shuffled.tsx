import ArenaPool from '@renderer/components/pools/Arenas'
import { useForestArena, usePlayLobby, useAztecLobbyChunky, useFactoryLobbyUpper, useCavesKasplat, useCheckChunkyHelm, useHelmKasplat } from '@renderer/hooks/isles'
import { useShuffledArenas } from '@renderer/hooks/settings'
import { useAnyKong, useDiddy, useTiny, useBoulderTech, useTwirl, useRocket, useBalloon } from '@renderer/hooks/kongs'
import IslesCheck from '../check'
import DKIslandArenas from './DKIsland'
import KremIslandArenas from './KremIsland'
import OuterArenas from './OuterRim'
import JapesForestArenas from './JapesForest'

const Shuffled: React.FC = () => {
const isBreathing = useAnyKong()
const hasDiddy = useDiddy()
const hasTiny = useTiny()
const hasBoulderTech = useBoulderTech()
const isHinaKagiyama = useTwirl()
const hasJetbarrel = useRocket()
const canDoIslesArena2 = useForestArena()
const canGetInCastleLobby = usePlayLobby('Creepy Castle')
const canGetInAztecLobby = usePlayLobby('Angry Aztec')
const canGetInFactoryLobby = usePlayLobby('Frantic Factory')
const canGetInGalleonLobby = usePlayLobby('Gloomy Galleon')
const canGetInForestLobby = usePlayLobby('Fungi Forest')
const canGetInCavesLobby = usePlayLobby('Crystal Caves')
const canGetInHelmLobby = usePlayLobby('Hideout Helm')
const canGetInAztecBack = useAztecLobbyChunky()
const canGetInFactoryUpper = useFactoryLobbyUpper()
const canGetInCavesKasplat = useCavesKasplat()
const canGetInHelmChunky = useCheckChunkyHelm()
const canGetInHelmDK = useHelmKasplat()
const hasBalloon = useBalloon()
  return (
    <ArenaPool>
      <DKIslandArenas />
      <KremIslandArenas />
      <OuterArenas />
      <JapesForestArenas />
      <IslesCheck
        id={10001}
        name="Shuffled Battle Arena: Vanilla Arena 2 (Check of Legends 2)"
        region="Japes-Forest Lobbies"
        canGetLogic={canDoIslesArena2.in}
        canGetBreak={canDoIslesArena2.out}
      />
      <IslesCheck
        id={10005}
        name="Shuffled Battle Arena: Under Lanky's Castle Lobby barrel"
        region="Caves-Helm Lobbies"
        canGetLogic={canGetInCastleLobby.in && hasBoulderTech && hasBalloon}
        canGetBreak={canGetInCastleLobby.out && (hasDiddy || hasTiny)}
      />
      <IslesCheck
        id={10049}
        name="Shuffled Battle Arena: Near the Grab lever in Factory Lobby"
        region="Japes-Forest Lobbies"
        canGetLogic={isBreathing && canGetInFactoryLobby.in}
        canGetBreak={isBreathing && canGetInFactoryLobby.out}
      />
      <IslesCheck
        id={10050}
        name="Shuffled Battle Arena: On a Factory Lobby high platform"
        region="Japes-Forest Lobbies"
        canGetLogic={canGetInFactoryUpper.in}
        canGetBreak={canGetInFactoryUpper.out}
      />
      <IslesCheck
        id={10051}
        name="Shuffled Battle Arena: Over the Factory DK Portal"
        region="Japes-Forest Lobbies"
        canGetLogic={canGetInFactoryUpper.in}
        canGetBreak={canGetInFactoryUpper.out}
      />
      <IslesCheck
        id={10052}
        name="Shuffled Battle Arena: To the right of the Galleon DK Portal"
        region="Japes-Forest Lobbies"
        canGetLogic={isBreathing && canGetInGalleonLobby.in}
        canGetBreak={isBreathing && canGetInGalleonLobby.out}
      />
      <IslesCheck
        id={10053}
        name="Shuffled Battle Arena: To the left of the Galleon DK Portal"
        region="Japes-Forest Lobbies"
        canGetLogic={isBreathing && canGetInGalleonLobby.in}
        canGetBreak={isBreathing && canGetInGalleonLobby.out}
      />
      <IslesCheck
        id={10055}
        name="Shuffled Battle Arena: On the Tag Barrel crate in Forest Lobby"
        region="Japes-Forest Lobbies"
        canGetLogic={canGetInForestLobby.in}
        canGetBreak={canGetInForestLobby.out}
      />
      <IslesCheck
        id={10057}
        name="Shuffled Battle Arena: To the right of the Caves DK Portal"
        region="Caves-Helm Lobbies"
        canGetLogic={canGetInCavesLobby.in}
        canGetBreak={canGetInCavesLobby.out}
      />
      <IslesCheck
        id={10058}
        name="Shuffled Battle Arena: Diddy's ledge in Caves Lobby"
        region="Caves-Helm Lobbies"
        canGetLogic={canGetInCavesLobby.in && hasJetbarrel}
        canGetBreak={canGetInCavesLobby.out && hasBoulderTech && isHinaKagiyama}
      />
      <IslesCheck
        id={10059}
        name="Shuffled Battle Arena: Caves Lobby boulder room"
        region="Caves-Helm Lobbies"
        canGetLogic={canGetInCavesKasplat.in}
        canGetBreak={canGetInCavesKasplat.out}
      />
      <IslesCheck
        id={10060}
        name="Shuffled Battle Arena: Behind Castle Lobby entrance"
        region="Caves-Helm Lobbies"
        canGetLogic={isBreathing && canGetInCastleLobby.in}
        canGetBreak={isBreathing && canGetInCastleLobby.out}
      />
      <IslesCheck
        id={10061}
        name="Shuffled Battle Arena: To the right of the Castle Lobby entrance"
        region="Caves-Helm Lobbies"
        canGetLogic={isBreathing && canGetInCastleLobby.in}
        canGetBreak={isBreathing && canGetInCastleLobby.out}
      />
      <IslesCheck
        id={10062}
        name="Shuffled Battle Arena: To the left of the Castle DK Portal"
        region="Caves-Helm Lobbies"
        canGetLogic={isBreathing && canGetInCastleLobby.in}
        canGetBreak={isBreathing && canGetInCastleLobby.out}
      />
      <IslesCheck
        id={10063}
        name="Shuffled Battle Arena: Next to the Helm Lobby Tag Barrel"
        region="Caves-Helm Lobbies"
        canGetLogic={isBreathing && canGetInHelmLobby.in}
        canGetBreak={isBreathing && canGetInHelmLobby.out}
      />
      <IslesCheck
        id={10064}
        name="Shuffled Battle Arena: Under Chunky's Bonus Barrel in Helm Lobby"
        region="Caves-Helm Lobbies"
        canGetLogic={canGetInHelmChunky.in}
        canGetBreak={canGetInHelmChunky.out}
      />
      <IslesCheck
        id={10065}
        name="Shuffled Battle Arena: On the island with DK's Kasplat in Helm Lobby"
        region="Caves-Helm Lobbies"
        canGetLogic={canGetInHelmDK.in}
        canGetBreak={canGetInHelmDK.out}
      />
    </ArenaPool>
  )
}

const ShuffledArenas: React.FC = () => (useShuffledArenas() ? <Shuffled /> : null)
export default ShuffledArenas
