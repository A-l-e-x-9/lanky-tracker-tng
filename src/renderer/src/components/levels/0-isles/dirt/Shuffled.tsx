import RainbowCoinPool from '@renderer/components/pools/RainbowCoins'
import { useCastleDirt, usePlayLobby, useCavesKasplat, useCheckChunkyHelm, useHelmKasplat } from '@renderer/hooks/isles'
import { useShuffleDirt } from '@renderer/hooks/settings'
import { useShockwave, useTwirl, useBoulderTech, useStrong, useRocket } from '@renderer/hooks/kongs'
import IslesCheck from '../check'
import DKIslandDirt from './DKIsland'
import KremIslandDirt from './KremIsland'
import OuterDirt from './OuterRim'
import JapesForestDirt from './JapesForest'

const Shuffled: React.FC = () => {
const hasShockwave = useShockwave()
const canDoIslesDirt4 = useCastleDirt()
const canGetInCavesLobby = usePlayLobby('Crystal Caves')
const canGetInCastleLobby = usePlayLobby('Creepy Castle')
const canGetInHelmLobby = usePlayLobby('Hideout Helm')
const isHinaKagiyama = useTwirl()
const hasBoulderTech = useBoulderTech()
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
      <JapesForestDirt />
      <IslesCheck
        id={30005}
        name="Shuffled Dirt Patch: Vanilla Location 4 (under Lanky's Castle Lobby barrel)"
        region="Caves-Helm Lobbies"
        canGetLogic={canDoIslesDirt4.in}
        canGetBreak={canDoIslesDirt4.out}
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
