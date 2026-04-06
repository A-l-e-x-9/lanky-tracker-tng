import CratePool from '@renderer/components/pools/Crates'
import { usePlayLobby, useCheckChunkyHelm, useHelmKasplat } from '@renderer/hooks/isles'
import { useShuffleCrates } from '@renderer/hooks/settings'
import { useAnyKong, useDiddy, useTiny, useBoulderTech, useBalloon } from '@renderer/hooks/kongs'
import IslesCheck from '../check'
import DKIslandCrates from './DKIsland'
import KremIslandCrates from './KremIsland'
import OuterCrates from './OuterRim'
import JapesForestCrates from './JapesForest'
import CavesHelmCrates from './CavesHelm'

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
    <CratePool>
      <DKIslandCrates />
      <KremIslandCrates />
      <OuterCrates />
      <JapesForestCrates />
      <CavesHelmCrates />
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
