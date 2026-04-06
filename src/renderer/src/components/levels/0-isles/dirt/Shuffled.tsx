import RainbowCoinPool from '@renderer/components/pools/RainbowCoins'
import { useCastleDirt, usePlayLobby, useCheckChunkyHelm, useHelmKasplat } from '@renderer/hooks/isles'
import { useShockwave } from '@renderer/hooks/kongs'
import IslesCheck from '../check'
import DKIslandDirt from './DKIsland'
import KremIslandDirt from './KremIsland'
import OuterDirt from './OuterRim'
import JapesForestDirt from './JapesForest'
import CavesHelmDirt from './CavesHelm'

const ShuffledDirt: React.FC = () => {
const hasShockwave = useShockwave()
const canGetInHelmLobby = usePlayLobby('Hideout Helm')
const canGetInHelmChunky = useCheckChunkyHelm()
const canGetInHelmDK = useHelmKasplat()
  return (
    <RainbowCoinPool>
      <DKIslandDirt />
      <KremIslandDirt />
      <OuterDirt />
      <JapesForestDirt />
      <CavesHelmDirt />
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

export default ShuffledDirt
