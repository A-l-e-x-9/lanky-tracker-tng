import KasplatPool from '@renderer/components/pools/Kasplats'
import { useGateKasplat, useJapesRambi, useJapesHive, useJapesKongGates } from '@renderer/hooks/japes'
import { useDive, useAnyGun, useOrange, useAnyMusic, useMini } from '@renderer/hooks/kongs'
import JapesCheck from '../check'
import LowlandKasplats from './Lowlands'
import HillsideKasplats from './Hillside'
import MineKasplats from './Mine'

const ShuffledKasplats: React.FC = () => {
const notChunkyKasplat = useGateKasplat()
const canReachRambiArea = useJapesRambi()
const canReachHiveArea = useJapesHive()
const canReachStormyArea = useJapesKongGates()
const hasDiving = useDive()
const hasMiniMonkey = useMini()
const hasAGun = useAnyGun()
const hasOranges = useOrange()
const hasAnInstrument = useAnyMusic()
  return (
    <KasplatPool>
      <LowlandKasplats />
      <HillsideKasplats />
      <MineKasplats />
      <JapesCheck
        id={51000}
        name="Shuffled Kasplat: DK's Vanilla Location (lower portion of Hive Tunnel)"
        region="Hive Area"
        canGetLogic={notChunkyKasplat.in}
        canGetBreak={notChunkyKasplat.out}
      />
      <JapesCheck
        id={51001}
        name="Shuffled Kasplat: Diddy's Vanilla Location (Stormy Cave, near Lanky's painting room)"
        region="Stormy Area"
        canGetLogic={notChunkyKasplat.in}
        canGetBreak={notChunkyKasplat.out}
      />
      <JapesCheck
        id={51002}
        name="Shuffled Kasplat: Lanky's Vanilla Location (near his slope barrel in the Stormy Cave)"
        region="Stormy Area"
        canGetLogic={notChunkyKasplat.in}
        canGetBreak={notChunkyKasplat.out}
      />
      <JapesCheck
        id={51003}
        name="Shuffled Kasplat: Tiny's Vanilla Location (upper portion of Hive Tunnel)"
        region="Hive Area"
        canGetLogic={notChunkyKasplat.in}
        canGetBreak={notChunkyKasplat.out}
      />
      <JapesCheck
        id={51005}
        name="Shuffled Kasplat: Behind the Rambi Wall"
        region="Stormy Area"
        canGetLogic={canReachRambiArea.in}
        canGetBreak={canReachRambiArea.out}
      />
      <JapesCheck
        id={51007}
        name="Shuffled Kasplat: Under Chunky's giant GB"
        region="Hive Area"
        canGetLogic={canReachHiveArea.in}
        canGetBreak={canReachHiveArea.out}
      />
      <JapesCheck
        id={51012}
        name="Shuffled Kasplat: In the Rambi tunnel's pool"
        region="Stormy Area"
        canGetLogic={canReachRambiArea.in && (hasAGun || hasAnInstrument) && hasDiving.in}
        canGetBreak={canReachRambiArea.out && hasOranges && hasDiving.out}
      />
      <JapesCheck
        id={51013}
        name="Shuffled Kasplat: Behind Cranky's"
        region="Stormy Area"
        canGetLogic={canReachStormyArea.in}
        canGetBreak={canReachStormyArea.out}
      />
      <JapesCheck
        id={51016}
        name="Shuffled Kasplat: In the hive"
        region="Hive Area"
        canGetLogic={canReachHiveArea.in && hasMiniMonkey}
        canGetBreak={canReachHiveArea.out && hasMiniMonkey}
      />
    </KasplatPool>
  )
}

export default ShuffledKasplats
