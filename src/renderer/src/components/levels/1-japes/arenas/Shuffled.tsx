import { useShallow } from 'zustand/react/shallow'
import ArenaPool from '@renderer/components/pools/Arenas'
import { useGeneralThing, useArena, useJapesPaintingOutside, useJapesSideArea, useJapesHive, useJapesKongGates, useJapesRambi, useMtnCrate, useDkFreebieGb, useJapesMine, useJapesUnderground, useTinyStumpGb, useTinyHiveGb } from '@renderer/hooks/japes'
import { useShuffledArenas, useBananaportAll } from '@renderer/hooks/settings'
import { useClimbing, useStand, useVine } from '@renderer/hooks/kongs'
import JapesCheck from '../check'
import useDonkStore from '@renderer/store'

const Shuffled: React.FC = () => {
const isBreathing = useGeneralThing()
const canReachFunky = useArena()
const canReachPaintingRoom = useJapesPaintingOutside()
const hasClimbing = useClimbing()
const canReachDiddyTunnel = useJapesSideArea()
const canReachHiveZone = useJapesHive()
const canReachStormyZone = useJapesKongGates()
const hasOStand = useStand()
const hasRambi = useJapesRambi()
const canDoVanillaCrate1 = useMtnCrate()
const canReachDiddyCage = useDkFreebieGb()
const canReachMtn = useJapesMine()
const hasVines = useVine()
const [didGB] = useDonkStore(useShallow((state) => [state.checks]))
const hasAllBananaports = useBananaportAll()
const canReachChunkyCave = useJapesUnderground()
const canGetInHive = useTinyStumpGb()
const canGetInHivePastRoom1 = useTinyHiveGb()
  return (
    <ArenaPool>
      <JapesCheck
        id={11000}
        name="Shuffled Battle Arena: Vanilla Arena (what a Funky's!)"
        region="Japes Hillside"
        canGetLogic={canReachFunky.in}
        canGetBreak={canReachFunky.out}
      />
      <JapesCheck
        id={11001}
        name="Shuffled Battle Arena: In front of door to Lanky's painting room"
        region="Japes Hillside"
        canGetLogic={canReachPaintingRoom.in}
        canGetBreak={canReachPaintingRoom.out}
      />
      <JapesCheck
        id={11002}
        name="Shuffled Battle Arena: Near vanilla level entrance"
        region="Japes Lowlands"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <JapesCheck
        id={11003}
        name="Shuffled Battle Arena: On a tree in the starting area"
        region="Japes Lowlands"
        canGetLogic={isBreathing.in && hasClimbing}
        canGetBreak={isBreathing.out && hasClimbing}
      />
      <JapesCheck
        id={11004}
        name="Shuffled Battle Arena: Next to first tunnel entrance"
        region="Japes Lowlands"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <JapesCheck
        id={11005}
        name="Shuffled Battle Arena: In the first tunnel"
        region="Japes Lowlands"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <JapesCheck
        id={11006}
        name="Shuffled Battle Arena: In Diddy's sub-tunnel"
        region="Japes Lowlands"
        canGetLogic={canReachDiddyTunnel.in}
        canGetBreak={canReachDiddyTunnel.out}
      />
      <JapesCheck
        id={11007}
        name="Shuffled Battle Arena: In the first tunnel, main area-side"
        region="Japes Lowlands"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <JapesCheck
        id={11008}
        name="Shuffled Battle Arena: In front of the Painting Hill"
        region="Japes Hillside"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <JapesCheck
        id={11009}
        name="Shuffled Battle Arena: Under Chunky's barrel in the hive zone"
        region="Hive Area"
        canGetLogic={canReachHiveZone.in}
        canGetBreak={canReachHiveZone.out}
      />
      <JapesCheck
        id={11010}
        name="Shuffled Battle Arena: Near Tiny's stump"
        region="Hive Area"
        canGetLogic={canReachHiveZone.in}
        canGetBreak={canReachHiveZone.out}
      />
      <JapesCheck
        id={11011}
        name="Shuffled Battle Arena: Near one of Tiny's logs"
        region="Hive Area"
        canGetLogic={canReachHiveZone.in}
        canGetBreak={canReachHiveZone.out}
      />
      <JapesCheck
        id={11012}
        name="Shuffled Battle Arena: Near the vine pit"
        region="Stormy Area"
        canGetLogic={canReachStormyZone.in}
        canGetBreak={canReachStormyZone.out}
      />
      <JapesCheck
        id={11013}
        name="Shuffled Battle Arena: In the vine pit"
        region="Stormy Area"
        canGetLogic={canReachStormyZone.in}
        canGetBreak={canReachStormyZone.out}
      />
      <JapesCheck
        id={11014}
        name="Shuffled Battle Arena: On Lanky's &quot;useless&quot; slope"
        region="Stormy Area"
        canGetLogic={canReachStormyZone.in && hasOStand}
        canGetBreak={canReachStormyZone.out}
      />
      <JapesCheck
        id={11015}
        name="Shuffled Battle Arena: On the left of Lanky's &quot;useless&quot; slope"
        region="Stormy Area"
        canGetLogic={canReachStormyZone.in && hasOStand}
        canGetBreak={canReachStormyZone.out}
      />
      <JapesCheck
        id={11016}
        name="Shuffled Battle Arena: The Stormy Tunnel's 4-way intersection"
        region="Stormy Area"
        canGetLogic={canReachStormyZone.in}
        canGetBreak={canReachStormyZone.out}
      />
      <JapesCheck
        id={11018}
        name="Shuffled Battle Arena: The Banana Fairy's pool"
        region="Stormy Area"
        canGetLogic={hasRambi.in}
        canGetBreak={hasRambi.out}
      />
      <JapesCheck
        id={11019}
        name="Shuffled Battle Arena: Behind Lanky's Hut"
        region="Stormy Area"
        canGetLogic={canReachStormyZone.in}
        canGetBreak={canReachStormyZone.out}
      />
      <JapesCheck
        id={11020}
        name="Shuffled Battle Arena: Behind DK's hut"
        region="Stormy Area"
        canGetLogic={canReachStormyZone.in}
        canGetBreak={canReachStormyZone.out}
      />
      <JapesCheck
        id={11021}
        name="Shuffled Battle Arena: Near Rambi's cage"
        region="Stormy Area"
        canGetLogic={canReachStormyZone.in}
        canGetBreak={canReachStormyZone.out}
      />
      <JapesCheck
        id={11022}
        name="Shuffled Battle Arena: Behind Cranky's"
        region="Stormy Area"
        canGetLogic={canReachStormyZone.in}
        canGetBreak={canReachStormyZone.out}
      />
      <JapesCheck
        id={11023}
        name="Shuffled Battle Arena: At the minecart exit"
        region="Japes Hillside"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <JapesCheck
        id={11024}
        name="Shuffled Battle Arena: Near Snide's"
        region="Japes Hillside"
        canGetLogic={canReachFunky.in}
        canGetBreak={canReachFunky.out}
      />
      <JapesCheck
        id={11025}
        name="Shuffled Battle Arena: Behind Diddy's Mountain"
        region="Japes Hillside"
        canGetLogic={canDoVanillaCrate1.in}
        canGetBreak={canDoVanillaCrate1.out}
      />
      <JapesCheck
        id={11026}
        name="Shuffled Battle Arena: In front of Diddy's cage"
        region="Japes Hillside"
        canGetLogic={canReachDiddyCage.in}
        canGetBreak={canReachDiddyCage.out}
      />
      <JapesCheck
        id={11027}
        name="Shuffled Battle Arena: Near the Barrel Cannon to Diddy's cage"
        region="Japes Hillside"
        canGetLogic={canReachDiddyCage.in}
        canGetBreak={canReachDiddyCage.out}
      />
      <JapesCheck
        id={11028}
        name="Shuffled Battle Arena: Behind Diddy's Mountain"
        region="Japes Hillside"
        canGetLogic={canReachMtn.in}
        canGetBreak={canReachMtn.out}
      />
      <JapesCheck
        id={11029}
        name="Shuffled Battle Arena: Near the cannon platform"
        region="Japes Hillside"
        canGetLogic={canReachDiddyCage.in}
        canGetBreak={canReachDiddyCage.out}
      />
      <JapesCheck
        id={11030}
        name="Shuffled Battle Arena: In the Troff 'n' Scoff alcove"
        region="Japes Hillside"
        canGetLogic={hasClimbing && hasVines}
        canGetBreak={canReachDiddyCage.out}
      />
      <JapesCheck
        id={11031}
        name="Shuffled Battle Arena: In front of the river"
        region="Japes Lowlands"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <JapesCheck
        id={11032}
        name="Shuffled Battle Arena: Vanilla Warp 1, level start"
        region="Japes Lowlands"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <JapesCheck
        id={11033}
        name="Shuffled Battle Arena: Vanilla Warp 1, after the early cave"
        region="Japes Lowlands"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <JapesCheck
        id={11034}
        name="Shuffled Battle Arena: Vanilla Warp 2, main area"
        region="Japes Lowlands"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <JapesCheck
        id={11035}
        name="Shuffled Battle Arena: Vanilla Warp 2, in front of Diddy's mountain"
        region="Japes Hillside"
        canGetLogic={canReachMtn.in}
        canGetBreak={canReachMtn.out}
      />
      <JapesCheck
        id={11036}
        name="Shuffled Battle Arena: Vanilla Warp 3, at the hive tunnel"
        region="Japes Lowlands"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <JapesCheck
        id={11037}
        name="Shuffled Battle Arena: Vanilla Warp 3, at the painting room"
        region="Japes Hillside"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <JapesCheck
        id={11038}
        name="Shuffled Battle Arena: Vanilla Warp 4, Stormy Tunnel entrance"
        region="Stormy Area"
        canGetLogic={canReachStormyZone.in}
        canGetBreak={canReachStormyZone.out}
      />
      <JapesCheck
        id={11039}
        name="Shuffled Battle Arena: Vanilla Warp 4, in front of Cranky's"
        region="Stormy Area"
        canGetLogic={canReachStormyZone.in}
        canGetBreak={canReachStormyZone.out}
      />
      <JapesCheck
        id={11040}
        name="Shuffled Battle Arena: Vanilla Warp 5, on top of Diddy's Mountain"
        region="Japes Hillside"
        canGetLogic={didGB[1011] || hasAllBananaports}
      />
      <JapesCheck
        id={11041}
        name="Shuffled Battle Arena: Vanilla Warp 5, hive area"
        region="Hive Area"
        canGetLogic={canReachHiveZone.in}
        canGetBreak={canReachHiveZone.out}
      />
      <JapesCheck
        id={11042}
        name="Shuffled Battle Arena: Behind the boulder leading to Chunky's underground"
        region="Japes Lowlands"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <JapesCheck
        id={11043}
        name="Shuffled Battle Arena: Chunky's underground, behind exit cannon"
        region="Japes Caves and Mines"
        canGetLogic={canReachChunkyCave.in}
        canGetBreak={canReachChunkyCave.out}
      />
      <JapesCheck
        id={11044}
        name="Shuffled Battle Arena: Chunky's underground, at vines"
        region="Japes Caves and Mines"
        canGetLogic={canReachChunkyCave.in}
        canGetBreak={canReachChunkyCave.out}
      />
      <JapesCheck
        id={11046}
        name="Shuffled Battle Arena: Near entrance to Diddy's mountain"
        region="Japes Caves and Mines"
        canGetLogic={canReachMtn.in}
        canGetBreak={canReachMtn.out}
      />
      <JapesCheck
        id={11047}
        name="Shuffled Battle Arena: On platform opposide Diddy's mountain switch"
        region="Japes Caves and Mines"
        canGetLogic={canReachMtn.in}
        canGetBreak={canReachMtn.out}
      />
      <JapesCheck
        id={11048}
        name="Shuffled Battle Arena: On the barrel with Diddy's mountain switch"
        region="Japes Caves and Mines"
        canGetLogic={canReachMtn.in}
        canGetBreak={canReachMtn.out}
      />
      <JapesCheck
        id={11049}
        name="Shuffled Battle Arena: Near the hi-lo machine"
        region="Japes Caves and Mines"
        canGetLogic={canReachMtn.in}
        canGetBreak={canReachMtn.out}
      />
      <JapesCheck
        id={11051}
        name="Shuffled Battle Arena: In the main room of Tiny's hive"
        region="Hive Area"
        canGetLogic={canGetInHive.in}
        canGetBreak={canGetInHive.out}
      />
      <JapesCheck
        id={11052}
        name="Shuffled Battle Arena: In the first room of Tiny's hive"
        region="Hive Area"
        canGetLogic={canGetInHive.in}
        canGetBreak={canGetInHive.out}
      />
      <JapesCheck
        id={11053}
        name="Shuffled Battle Arena: In the final room of Tiny's hive"
        region="Hive Area"
        canGetLogic={canGetInHivePastRoom1.in}
        canGetBreak={canGetInHivePastRoom1.out}
      />
    </ArenaPool>
  )
}

const ShuffledArenas: React.FC = () => (useShuffledArenas() ? <Shuffled /> : null)
export default ShuffledArenas
