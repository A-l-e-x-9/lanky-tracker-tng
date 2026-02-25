import KasplatPool from '@renderer/components/pools/Kasplats'
import { useGeneralThing, useGateKasplat, useChunkyUndergroundGb, useJapesRambi, useJapesMine, useJapesHive, useTinyCagedGb, useJapesSideArea, useJapesKongGates, useDkFreebieGb, useJapesPaintingOutside } from '@renderer/hooks/aztec'
import { useShuffleKasplats } from '@renderer/hooks/settings'
import { useDive, useAnyGun, useOrange, useAnyMusic, useMini, useVine, useClimbing } from '@renderer/hooks/kongs'
import AztecCheck from '../check'

const Shuffled: React.FC = () => {
const notChunkyKasplat = useGateKasplat()
const chunkyKasplat = useChunkyUndergroundGb()
const isBreathing = useGeneralThing()
const canReachRambiArea = useJapesRambi()
const canDoDiddyMtnGB = useJapesMine()
const canReachHiveArea = useJapesHive()
const canDoTinyCageGB = useTinyCagedGb()
const canReachDiddyCave = useJapesSideArea()
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
      <AztecCheck
        id={52000}
        name="Shuffled Kasplat: DK's Vanilla Location (lower portion of Hive Tunnel)"
        region="Hive Area"
        canGetLogic={notChunkyKasplat.in}
        canGetBreak={notChunkyKasplat.out}
      />
      <AztecCheck
        id={52001}
        name="Shuffled Kasplat: Diddy's Vanilla Location (Stormy Cave, near Lanky's painting room)"
        region="Stormy Area"
        canGetLogic={notChunkyKasplat.in}
        canGetBreak={notChunkyKasplat.out}
      />
      <AztecCheck
        id={52002}
        name="Shuffled Kasplat: Lanky's Vanilla Location (near his slope barrel in the Stormy Cave)"
        region="Stormy Area"
        canGetLogic={notChunkyKasplat.in}
        canGetBreak={notChunkyKasplat.out}
      />
      <AztecCheck
        id={52003}
        name="Shuffled Kasplat: Tiny's Vanilla Location (upper portion of Hive Tunnel)"
        region="Hive Area"
        canGetLogic={notChunkyKasplat.in}
        canGetBreak={notChunkyKasplat.out}
      />
      <AztecCheck
        id={52004}
        name="Shuffled Kasplat: Chunky's Vanilla Location (end of his mine, to the right)"
        region="Japes Caves and Mines"
        canGetLogic={chunkyKasplat.in}
        canGetBreak={chunkyKasplat.out}
      />
      <AztecCheck
        id={52005}
        name="Shuffled Kasplat: Behind the Rambi Wall"
        region="Stormy Area"
        canGetLogic={canReachRambiArea.in}
        canGetBreak={canReachRambiArea.out}
      />
      <AztecCheck
        id={52006}
        name="Shuffled Kasplat: Top of Diddy's Mountain"
        region="Japes Hillside"
        canGetLogic={canDoDiddyMtnGB.in}
        canGetBreak={canDoDiddyMtnGB.out}
      />
      <AztecCheck
        id={52007}
        name="Shuffled Kasplat: Under Chunky's giant GB"
        region="Hive Area"
        canGetLogic={canReachHiveArea.in}
        canGetBreak={canReachHiveArea.out}
      />
      <AztecCheck
        id={52008}
        name="Shuffled Kasplat: With Tiny's caged GB"
        region="Japes Hillside"
        canGetLogic={canDoTinyCageGB.in}
        canGetBreak={canDoTinyCageGB.out}
      />
      <AztecCheck
        id={52009}
        name="Shuffled Kasplat: At the vanilla level start"
        region="Japes Lowlands"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <AztecCheck
        id={52010}
        name="Shuffled Kasplat: In Diddy's cave"
        region="Japes Lowlands"
        canGetLogic={canReachDiddyCave.in}
        canGetBreak={canReachDiddyCave.out}
      />
      <AztecCheck
        id={52011}
        name="Shuffled Kasplat: In the river"
        region="Japes Lowlands"
        canGetLogic={isBreathing.in && (hasAGun || hasAnInstrument) && hasDiving.in}
        canGetBreak={isBreathing.out && hasOranges && hasDiving.out}
      />
      <AztecCheck
        id={52012}
        name="Shuffled Kasplat: In the Rambi tunnel's pool"
        region="Stormy Area"
        canGetLogic={canReachRambiArea.in && (hasAGun || hasAnInstrument) && hasDiving.in}
        canGetBreak={canReachRambiArea.out && hasOranges && hasDiving.out}
      />
      <AztecCheck
        id={52013}
        name="Shuffled Kasplat: Behind Cranky's"
        region="Stormy Area"
        canGetLogic={canReachStormyArea.in}
        canGetBreak={canReachStormyArea.out}
      />
      <AztecCheck
        id={52014}
        name="Shuffled Kasplat: The Troff 'n' Scoff door on the Hillside"
        region="Japes Hillside"
        canGetLogic={isBreathing.in && hasVines && hasClimbing}
        canGetBreak={canReachDiddyCage.out}
      />
      <AztecCheck
        id={52015}
        name="Shuffled Kasplat: In Diddy's mountain"
        region="Japes Caves and Mines"
        canGetLogic={canDoDiddyMtnGB.in}
        canGetBreak={canDoDiddyMtnGB.out}
      />
      <AztecCheck
        id={52016}
        name="Shuffled Kasplat: In the hive"
        region="Hive Area"
        canGetLogic={canReachHiveArea.in && hasMiniMonkey}
        canGetBreak={canReachHiveArea.out && hasMiniMonkey}
      />
      <AztecCheck
        id={52017}
        name="Shuffled Kasplat: In front of Lanky's painting room entrance"
        region="Japes Hillside"
        canGetLogic={canReachPaintingRoom.in}
        canGetBreak={canReachPaintingRoom.out}
      />
      <AztecCheck
        id={52018}
        name="Shuffled Kasplat: The minecart game's exit"
        region="Japes Hillside"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
    </KasplatPool>
  )
}

const ShuffledKasplats: React.FC = () => (useShuffleKasplats() ? <Shuffled /> : null)
export default ShuffledKasplats
