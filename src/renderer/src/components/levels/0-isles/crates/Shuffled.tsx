import CratePool from '@renderer/components/pools/Crates'
import { useIslesFungiIsland, usePlayLobby, useCheckBFIInitial, useCheckBananaFairyIsle, useAztecLobbyChunky, useFactoryLobbyUpper, useCavesKasplat, useCheckChunkyHelm, useHelmKasplat, useCheckTinyGalleonLobby } from '@renderer/hooks/isles'
import { useShuffleCrates } from '@renderer/hooks/settings'
import { useAnyKong, useDiddy, useTiny, useBoulderTech, useTwirl, useRocket, useBalloon, useStrong } from '@renderer/hooks/kongs'
import IslesCheck from '../check'
import DKIslandCrates from './DKIsland'
import KremIslandCrates from './KremIsland'
import OuterCrates from './OuterRim'

const Shuffled: React.FC = () => {
const isBreathing = useAnyKong()
const hasDiddy = useDiddy()
const hasTiny = useTiny()
const hasBoulderTech = useBoulderTech()
const isHinaKagiyama = useTwirl()
const hasJetbarrel = useRocket()
const canGetInForestLobby = usePlayLobby('Fungi Forest')
const canDoIslesArena2 = canGetInForestLobby
const canReachFungiLobby = useIslesFungiIsland()
const canGetInCastleLobby = usePlayLobby('Creepy Castle')
const canDoIslesDirt1 = canReachFungiLobby
const canGetInJapesLobby = usePlayLobby('Jungle Japes')
const canGetInAztecLobby = usePlayLobby('Angry Aztec')
const canGetInFactoryLobby = usePlayLobby('Frantic Factory')
const canGetInGalleonLobby = usePlayLobby('Gloomy Galleon')
const canGetInCavesLobby = usePlayLobby('Crystal Caves')
const canGetInHelmLobby = usePlayLobby('Hideout Helm')
const canReachBFI = useCheckBFIInitial()
const canGetRareBanana = useCheckBananaFairyIsle()
const canGetInAztecBack = useAztecLobbyChunky()
const canGetInFactoryUpper = useFactoryLobbyUpper()
const canGetInGalleonTiny = useCheckTinyGalleonLobby()
const canGetInCavesKasplat = useCavesKasplat()
const canGetInHelmChunky = useCheckChunkyHelm()
const canGetInHelmDK = useHelmKasplat()
const hasStrongKong = useStrong()
const hasBalloon = useBalloon()
return (
    <CratePool>
      <DKIslandCrates />
      <KremIslandCrates />
      <OuterCrates />
      <IslesCheck
        id={20001}
        name="Shuffled Melon Crate: Where the Check of Legends 2 Battle Arena would spawn in vanilla"
        region="Japes-Forest Lobbies"
        canGetLogic={canDoIslesArena2.in}
        canGetBreak={canDoIslesArena2.out}
      />
      <IslesCheck
        id={20005}
        name="Shuffled Melon Crate: Under Lanky's Castle Lobby barrel"
        region="Caves-Helm Lobbies"
        canGetLogic={canGetInCastleLobby.in && hasBoulderTech && hasBalloon}
        canGetBreak={canGetInCastleLobby.out && (hasDiddy || hasTiny)}
      />
      <IslesCheck
        id={20044}
        name="Shuffled Melon Crate: At Japes Lobby Tag Barrel"
        region="Japes-Forest Lobbies"
        canGetLogic={canGetInJapesLobby.in}
        canGetBreak={canGetInJapesLobby.out}
      />
      <IslesCheck
        id={20045}
        name="Shuffled Melon Crate: At Japes Lobby DK Portal"
        region="Japes-Forest Lobbies"
        canGetLogic={canGetInJapesLobby.in}
        canGetBreak={canGetInJapesLobby.out}
      />
      <IslesCheck
        id={20046}
        name="Shuffled Melon Crate: In front of DK's Wrinkly Door in Aztec Lobby"
        region="Japes-Forest Lobbies"
        canGetLogic={canGetInAztecLobby.in}
        canGetBreak={canGetInAztecLobby.out}
      />
      <IslesCheck
        id={20047}
        name="Shuffled Melon Crate: Right side of the Aztec Lobby back room"
        region="Japes-Forest Lobbies"
        canGetLogic={canGetInAztecBack.in}
        canGetBreak={canGetInAztecBack.out}
      />
      <IslesCheck
        id={20048}
        name="Shuffled Melon Crate: Left side of the Aztec Lobby back room"
        region="Japes-Forest Lobbies"
        canGetLogic={canGetInAztecBack.in}
        canGetBreak={canGetInAztecBack.out}
      />
      <IslesCheck
        id={20049}
        name="Shuffled Melon Crate: Near the Grab lever in Factory Lobby"
        region="Japes-Forest Lobbies"
        canGetLogic={isBreathing && canGetInFactoryLobby.in}
        canGetBreak={isBreathing && canGetInFactoryLobby.out}
      />
      <IslesCheck
        id={20050}
        name="Shuffled Melon Crate: On a Factory Lobby high platform"
        region="Japes-Forest Lobbies"
        canGetLogic={canGetInFactoryUpper.in}
        canGetBreak={canGetInFactoryUpper.out}
      />
      <IslesCheck
        id={20051}
        name="Shuffled Melon Crate: Over the Factory DK Portal"
        region="Japes-Forest Lobbies"
        canGetLogic={canGetInFactoryUpper.in}
        canGetBreak={canGetInFactoryUpper.out}
      />
      <IslesCheck
        id={20052}
        name="Shuffled Melon Crate: To the right of the Galleon DK Portal"
        region="Japes-Forest Lobbies"
        canGetLogic={canGetInGalleonLobby.in}
        canGetBreak={canGetInGalleonLobby.out}
      />
      <IslesCheck
        id={20053}
        name="Shuffled Melon Crate: To the left of the Galleon DK Portal"
        region="Japes-Forest Lobbies"
        canGetLogic={canGetInGalleonLobby.in}
        canGetBreak={canGetInGalleonLobby.out}
      />
      <IslesCheck
        id={20054}
        name="Shuffled Melon Crate: Galleon Lobby Mini Monkey room"
        region="Japes-Forest Lobbies"
        canGetLogic={canGetInGalleonTiny.in}
        canGetBreak={canGetInGalleonTiny.out}
      />
      <IslesCheck
        id={20056}
        name="Shuffled Melon Crate: Somehow not frying in the Caves Lobby lava room"
        region="Caves-Helm Lobbies"
        canGetLogic={canGetInCavesKasplat.in && hasStrongKong}
        canGetBreak={canGetInCavesKasplat.out && hasStrongKong}
      />
      <IslesCheck
        id={20057}
        name="Shuffled Melon Crate: To the right of the Caves DK Portal"
        region="Caves-Helm Lobbies"
        canGetLogic={canGetInCavesLobby.in}
        canGetBreak={canGetInCavesLobby.out}
      />
      <IslesCheck
        id={20058}
        name="Shuffled Melon Crate: Diddy's ledge in Caves Lobby"
        region="Caves-Helm Lobbies"
        canGetLogic={canGetInCavesLobby.in && hasJetbarrel}
        canGetBreak={canGetInCavesLobby.out && hasBoulderTech && isHinaKagiyama}
      />
      <IslesCheck
        id={20059}
        name="Shuffled Melon Crate: Caves Lobby boulder room"
        region="Caves-Helm Lobbies"
        canGetLogic={canGetInCavesKasplat.in}
        canGetBreak={canGetInCavesKasplat.out}
      />
      <IslesCheck
        id={20060}
        name="Shuffled Melon Crate: Behind Castle Lobby entrance"
        region="Caves-Helm Lobbies"
        canGetLogic={canGetInCastleLobby.in}
        canGetBreak={canGetInCastleLobby.out}
      />
      <IslesCheck
        id={20061}
        name="Shuffled Melon Crate: To the right of the Castle Lobby entrance"
        region="Caves-Helm Lobbies"
        canGetLogic={canGetInCastleLobby.in}
        canGetBreak={canGetInCastleLobby.out}
      />
      <IslesCheck
        id={20062}
        name="Shuffled Melon Crate: To the left of the Castle DK Portal"
        region="Caves-Helm Lobbies"
        canGetLogic={canGetInCastleLobby.in}
        canGetBreak={canGetInCastleLobby.out}
      />
      <IslesCheck
        id={20063}
        name="Shuffled Melon Crate: Next to the Helm Lobby Tag Barrel"
        region="Caves-Helm Lobbies"
        canGetLogic={isBreathing && canGetInHelmLobby.in}
        canGetBreak={isBreathing && canGetInHelmLobby.out}
      />
      <IslesCheck
        id={20064}
        name="Shuffled Melon Crate: Under Chunky's Bonus Barrel in Helm Lobby"
        region="Caves-Helm Lobbies"
        canGetLogic={canGetInHelmChunky.in}
        canGetBreak={canGetInHelmChunky.out}
      />
      <IslesCheck
        id={20065}
        name="Shuffled Melon Crate: On the island with DK's Kasplat in Helm Lobby"
        region="Caves-Helm Lobbies"
        canGetLogic={canGetInHelmDK.in}
        canGetBreak={canGetInHelmDK.out}
      />
    </CratePool>
  )
}

const ShuffledCrates: React.FC = () => (useShuffleCrates() ? <Shuffled /> : null)
export default ShuffledCrates
