import ArenaPool from '@renderer/components/pools/Arenas'
import { usePlayLobby, useCheckChunkyHelm, useHelmKasplat } from '@renderer/hooks/isles'
import { useShuffledArenas } from '@renderer/hooks/settings'
import { useAnyKong, useDiddy, useTiny, useBoulderTech, useBalloon } from '@renderer/hooks/kongs'
import IslesCheck from '../check'
import DKIslandArenas from './DKIsland'
import KremIslandArenas from './KremIsland'
import OuterArenas from './OuterRim'
import JapesForestArenas from './JapesForest'
import CavesHelmArenas from './CavesHelm'

const Shuffled: React.FC = () => {
const isBreathing = useAnyKong()
const hasDiddy = useDiddy()
const hasTiny = useTiny()
const hasBoulderTech = useBoulderTech()
const canGetInCastleLobby = usePlayLobby('Creepy Castle')
const canGetInHelmLobby = usePlayLobby('Hideout Helm')
const canGetInHelmChunky = useCheckChunkyHelm()
const canGetInHelmDK = useHelmKasplat()
const hasBalloon = useBalloon()
  return (
    <ArenaPool>
      <DKIslandArenas />
      <KremIslandArenas />
      <OuterArenas />
      <JapesForestArenas />
      <CavesHelmArenas />
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
