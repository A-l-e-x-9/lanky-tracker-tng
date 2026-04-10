import KasplatPool from '@renderer/components/pools/Kasplats'
import { useGeneralThing, useGateKasplat, useChunkyUndergroundGb, useJapesRambi, useJapesMine, useJapesHive, useTinyCagedGb, useJapesKongGates, useDkFreebieGb, useJapesPaintingOutside } from '@renderer/hooks/japes'
import { useDive, useAnyGun, useOrange, useAnyMusic, useMini, useVine, useClimbing } from '@renderer/hooks/kongs'
import JapesCheck from '../check'
import LowlandKasplats from './Lowlands'
import HillsideKasplats from './Hillside'

const ShuffledKasplats: React.FC = () => {
const notChunkyKasplat = useGateKasplat()
const chunkyKasplat = useChunkyUndergroundGb()
const isBreathing = useGeneralThing()
const canReachRambiArea = useJapesRambi()
const canDoDiddyMtnGB = useJapesMine()
const canReachHiveArea = useJapesHive()
const canDoTinyCageGB = useTinyCagedGb()
const canReachStormyArea = useJapesKongGates()
const canReachDiddyCage = useDkFreebieGb()
const canReachPaintingRoom = useJapesPaintingOutside()
const hasDiving = useDive()
const hasMiniMonkey = useMini()
const hasAGun = useAnyGun()
const hasOranges = useOrange()
const hasAnInstrument = useAnyMusic()
const hasVines = useVine()
const hasClimbing = useClimbing()
  return (
    <KasplatPool>
      <LowlandKasplats />
      <HillsideKasplats />
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
        id={51004}
        name="Shuffled Kasplat: Chunky's Vanilla Location (end of his mine, to the right)"
        region="Japes Caves and Mines"
        canGetLogic={chunkyKasplat.in}
        canGetBreak={chunkyKasplat.out}
      />
      <JapesCheck
        id={51005}
        name="Shuffled Kasplat: Behind the Rambi Wall"
        region="Stormy Area"
        canGetLogic={canReachRambiArea.in}
        canGetBreak={canReachRambiArea.out}
      />
      <JapesCheck
        id={51006}
        name="Shuffled Kasplat: Top of Diddy's Mountain"
        region="Japes Hillside"
        canGetLogic={canDoDiddyMtnGB.in}
        canGetBreak={canDoDiddyMtnGB.out}
      />
      <JapesCheck
        id={51007}
        name="Shuffled Kasplat: Under Chunky's giant GB"
        region="Hive Area"
        canGetLogic={canReachHiveArea.in}
        canGetBreak={canReachHiveArea.out}
      />
      <JapesCheck
        id={51008}
        name="Shuffled Kasplat: With Tiny's caged GB"
        region="Japes Hillside"
        canGetLogic={canDoTinyCageGB.in}
        canGetBreak={canDoTinyCageGB.out}
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
        id={51014}
        name="Shuffled Kasplat: The Troff 'n' Scoff door on the Hillside"
        region="Japes Hillside"
        canGetLogic={isBreathing.in && hasVines && hasClimbing}
        canGetBreak={canReachDiddyCage.out}
      />
      <JapesCheck
        id={51015}
        name="Shuffled Kasplat: In Diddy's mountain"
        region="Japes Caves and Mines"
        canGetLogic={canDoDiddyMtnGB.in}
        canGetBreak={canDoDiddyMtnGB.out}
      />
      <JapesCheck
        id={51016}
        name="Shuffled Kasplat: In the hive"
        region="Hive Area"
        canGetLogic={canReachHiveArea.in && hasMiniMonkey}
        canGetBreak={canReachHiveArea.out && hasMiniMonkey}
      />
      <JapesCheck
        id={51017}
        name="Shuffled Kasplat: In front of Lanky's painting room entrance"
        region="Japes Hillside"
        canGetLogic={canReachPaintingRoom.in}
        canGetBreak={canReachPaintingRoom.out}
      />
      <JapesCheck
        id={51018}
        name="Shuffled Kasplat: The minecart game's exit"
        region="Japes Hillside"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
    </KasplatPool>
  )
}

export default ShuffledKasplats
