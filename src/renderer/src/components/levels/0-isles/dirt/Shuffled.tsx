import RainbowCoinPool from '@renderer/components/pools/RainbowCoins'
import { useCastleDirt, usePlayLobby, useAztecLobbyChunky, useFactoryLobbyUpper, useCheckTinyGalleonLobby, useCavesKasplat, useCheckChunkyHelm, useHelmKasplat } from '@renderer/hooks/isles'
import { useShuffleDirt } from '@renderer/hooks/settings'
import { useShockwave, useTwirl, useBoulderTech, useStrong, useRocket } from '@renderer/hooks/kongs'
import IslesCheck from '../check'
import DKIslandDirt from './DKIsland'
import KremIslandDirt from './KremIsland'
import OuterDirt from './OuterRim'

const Shuffled: React.FC = () => {
const hasShockwave = useShockwave()
const canGetInForestLobby = usePlayLobby('Fungi Forest')
const canDoIslesArena2In = canGetInForestLobby.in && hasShockwave
const canDoIslesArena2Out = canGetInForestLobby.out && hasShockwave
const canDoIslesDirt4 = useCastleDirt()
const canGetInJapesLobby = usePlayLobby('Jungle Japes')
const canGetInAztecLobby = usePlayLobby('Angry Aztec')
const canGetInFactoryLobby = usePlayLobby('Frantic Factory')
const canGetInGalleonLobby = usePlayLobby('Gloomy Galleon')
const canGetInCavesLobby = usePlayLobby('Crystal Caves')
const canGetInCastleLobby = usePlayLobby('Creepy Castle')
const canGetInHelmLobby = usePlayLobby('Hideout Helm')
const isHinaKagiyama = useTwirl()
const hasBoulderTech = useBoulderTech()
const canGetInAztecBack = useAztecLobbyChunky()
const canGetInFactoryUpper = useFactoryLobbyUpper()
const canGetInGalleonTiny = useCheckTinyGalleonLobby()
const canGetInCavesKasplat = useCavesKasplat()
const canGetInHelmChunky = useCheckChunkyHelm()
const canGetInHelmDK = useHelmKasplat()
const hasStrongKong = useStrong()
const hasJetbarrel = useRocket()
  return (
    <RainbowCoinPool>
      <DKIslandDirt />
      <KremIslandDirt />
      <OuterDirt />
      <IslesCheck
        id={30001}
        name="Shuffled Dirt Patch: Check of Legends 2"
        region="Japes-Forest Lobbies"
        canGetLogic={canDoIslesArena2In}
        canGetBreak={canDoIslesArena2Out}
      />
      <IslesCheck
        id={30005}
        name="Shuffled Dirt Patch: Vanilla Location 4 (under Lanky's Castle Lobby barrel)"
        region="Caves-Helm Lobbies"
        canGetLogic={canDoIslesDirt4.in}
        canGetBreak={canDoIslesDirt4.out}
      />
      <IslesCheck
        id={30044}
        name="Shuffled Dirt Patch: At Japes Lobby Tag Barrel"
        region="Japes-Forest Lobbies"
        canGetLogic={canGetInJapesLobby.in && hasShockwave}
        canGetBreak={canGetInJapesLobby.out && hasShockwave}
      />
      <IslesCheck
        id={30045}
        name="Shuffled Dirt Patch: At Japes Lobby DK Portal"
        region="Japes-Forest Lobbies"
        canGetLogic={canGetInJapesLobby.in && hasShockwave}
        canGetBreak={canGetInJapesLobby.out && hasShockwave}
      />
      <IslesCheck
        id={30046}
        name="Shuffled Dirt Patch: In front of DK's Wrinkly Door in Aztec Lobby"
        region="Japes-Forest Lobbies"
        canGetLogic={canGetInAztecLobby.in && hasShockwave}
        canGetBreak={canGetInAztecLobby.out && hasShockwave}
      />
      <IslesCheck
        id={30047}
        name="Shuffled Dirt Patch: Right side of the Aztec Lobby back room"
        region="Japes-Forest Lobbies"
        canGetLogic={canGetInAztecBack.in && hasShockwave}
        canGetBreak={canGetInAztecBack.out && hasShockwave}
      />
      <IslesCheck
        id={30048}
        name="Shuffled Dirt Patch: Left side of the Aztec Lobby back room"
        region="Japes-Forest Lobbies"
        canGetLogic={canGetInAztecBack.in && hasShockwave}
        canGetBreak={canGetInAztecBack.out && hasShockwave}
      />
      <IslesCheck
        id={30049}
        name="Shuffled Dirt Patch: Near the Grab lever in Factory Lobby"
        region="Japes-Forest Lobbies"
        canGetLogic={canGetInFactoryLobby.in && hasShockwave}
        canGetBreak={canGetInFactoryLobby.out && hasShockwave}
      />
      <IslesCheck
        id={30050}
        name="Shuffled Dirt Patch: On a Factory Lobby high platform"
        region="Japes-Forest Lobbies"
        canGetLogic={canGetInFactoryUpper.in && hasShockwave}
        canGetBreak={canGetInFactoryUpper.out && hasShockwave}
      />
      <IslesCheck
        id={30051}
        name="Shuffled Dirt Patch: Over the Factory DK Portal"
        region="Japes-Forest Lobbies"
        canGetLogic={canGetInFactoryUpper.in && hasShockwave}
        canGetBreak={canGetInFactoryUpper.out && hasShockwave}
      />
      <IslesCheck
        id={30052}
        name="Shuffled Dirt Patch: To the right of the Galleon DK Portal"
        region="Japes-Forest Lobbies"
        canGetLogic={canGetInGalleonLobby.in && hasShockwave}
        canGetBreak={canGetInGalleonLobby.out && hasShockwave}
      />
      <IslesCheck
        id={30053}
        name="Shuffled Dirt Patch: To the left of the Galleon DK Portal"
        region="Japes-Forest Lobbies"
        canGetLogic={canGetInGalleonLobby.in && hasShockwave}
        canGetBreak={canGetInGalleonLobby.out && hasShockwave}
      />
      <IslesCheck
        id={30054}
        name="Shuffled Dirt Patch: Galleon Lobby Mini Monkey room"
        region="Japes-Forest Lobbies"
        canGetLogic={canGetInGalleonTiny.in && hasShockwave}
        canGetBreak={canGetInGalleonTiny.out && hasShockwave}
      />
      <IslesCheck
        id={30055}
        name="Shuffled Dirt Patch: On the Tag Barrel crate in Forest Lobby"
        region="Japes-Forest Lobbies"
        canGetLogic={canGetInForestLobby.in && hasShockwave}
        canGetBreak={canGetInForestLobby.out && hasShockwave}
      />
      <IslesCheck
        id={30056}
        name="Shuffled Dirt Patch: Somehow not frying in the Caves Lobby lava room"
        region="Caves-Helm Lobbies"
        canGetLogic={canGetInCavesKasplat.in && hasStrongKong && hasShockwave}
        canGetBreak={canGetInCavesKasplat.out && hasStrongKong && hasShockwave}
      />
      <IslesCheck
        id={30057}
        name="Shuffled Dirt Patch: To the right of the Caves DK Portal"
        region="Caves-Helm Lobbies"
        canGetLogic={canGetInCavesLobby.in && hasShockwave}
        canGetBreak={canGetInCavesLobby.out && hasShockwave}
      />
      <IslesCheck
        id={30058}
        name="Shuffled Dirt Patch: Diddy's ledge in Caves Lobby"
        region="Caves-Helm Lobbies"
        canGetLogic={canGetInCavesLobby.in && hasJetbarrel && hasShockwave}
        canGetBreak={canGetInCavesLobby.out && hasBoulderTech && isHinaKagiyama && hasShockwave}
      />
      <IslesCheck
        id={30059}
        name="Shuffled Dirt Patch: Caves Lobby boulder room"
        region="Caves-Helm Lobbies"
        canGetLogic={canGetInCavesKasplat.in && hasShockwave}
        canGetBreak={canGetInCavesKasplat.out && hasShockwave}
      />
      <IslesCheck
        id={30060}
        name="Shuffled Dirt Patch: Behind Castle Lobby entrance"
        region="Caves-Helm Lobbies"
        canGetLogic={canGetInCastleLobby.in && hasShockwave}
        canGetBreak={canGetInCastleLobby.out && hasShockwave}
      />
      <IslesCheck
        id={30061}
        name="Shuffled Dirt Patch: To the right of the Castle Lobby entrance"
        region="Caves-Helm Lobbies"
        canGetLogic={canGetInCastleLobby.in && hasShockwave}
        canGetBreak={canGetInCastleLobby.out && hasShockwave}
      />
      <IslesCheck
        id={30062}
        name="Shuffled Dirt Patch: To the left of the Castle DK Portal"
        region="Caves-Helm Lobbies"
        canGetLogic={canGetInCastleLobby.in && hasShockwave}
        canGetBreak={canGetInCastleLobby.out && hasShockwave}
      />
      <IslesCheck
        id={30063}
        name="Shuffled Dirt Patch: Next to the Helm Lobby Tag Barrel"
        region="Caves-Helm Lobbies"
        canGetLogic={canGetInHelmLobby.in && hasShockwave}
        canGetBreak={canGetInHelmLobby.out && hasShockwave}
      />
      <IslesCheck
        id={30064}
        name="Shuffled Dirt Patch: Under Chunky's Bonus Barrel in Helm Lobby"
        region="Caves-Helm Lobbies"
        canGetLogic={canGetInHelmChunky.in && hasShockwave}
        canGetBreak={canGetInHelmChunky.out && hasShockwave}
      />
      <IslesCheck
        id={30065}
        name="Shuffled Dirt Patch: On the island with DK's Kasplat in Helm Lobby"
        region="Caves-Helm Lobbies"
        canGetLogic={canGetInHelmDK.in && hasShockwave}
        canGetBreak={canGetInHelmDK.out && hasShockwave}
      />
    </RainbowCoinPool>
  )
}

const ShuffledDirt: React.FC = () => (useShuffleDirt() ? <Shuffled /> : null)
export default ShuffledDirt
