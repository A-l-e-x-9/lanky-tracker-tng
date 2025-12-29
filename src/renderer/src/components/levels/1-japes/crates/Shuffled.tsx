import { useShallow } from 'zustand/react/shallow'
import CratePool from '@renderer/components/pools/Crates'
import { useGeneralThing, useArena, useJapesPaintingOutside, useJapesSideArea, useJapesHive, useJapesKongGates, useJapesRambi, useMtnCrate, useRambiCrate, useDkFreebieGb, useJapesMine, useJapesUnderground, useTinyStumpGb, useTinyHiveGb } from '@renderer/hooks/japes'
import { useShuffleCrates, useBananaportAll } from '@renderer/hooks/settings'
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
const canDoVanillaCrate2 = useRambiCrate()
const canReachDiddyCage = useDkFreebieGb()
const canReachMtn = useJapesMine()
const hasVines = useVine()
const [didGB] = useDonkStore(useShallow((state) => [state.checks]))
const hasAllBananaports = useBananaportAll()
const canReachChunkyCave = useJapesUnderground()
const canGetInHive = useTinyStumpGb()
const canGetInHivePastRoom1 = useTinyHiveGb()
  return (
    <CratePool>
      <JapesCheck
        id={21000}
        name="Shuffled Melon Crate: In front of Funky's"
        region="Japes Hillside"
        canGetLogic={canReachFunky.in}
        canGetBreak={canReachFunky.out}
      />
      <JapesCheck
        id={21001}
        name="Shuffled Melon Crate: In front of door to Lanky's painting room"
        region="Japes Hillside"
        canGetLogic={canReachPaintingRoom.in}
        canGetBreak={canReachPaintingRoom.out}
      />
      <JapesCheck
        id={21002}
        name="Shuffled Melon Crate: Near vanilla level entrance"
        region="Japes Lowlands"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <JapesCheck
        id={21003}
        name="Shuffled Melon Crate: On a tree in the starting area"
        region="Japes Lowlands"
        canGetLogic={isBreathing.in && hasClimbing}
        canGetBreak={isBreathing.out && hasClimbing}
      />
      <JapesCheck
        id={21004}
        name="Shuffled Melon Crate: Next to first tunnel entrance"
        region="Japes Lowlands"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <JapesCheck
        id={21005}
        name="Shuffled Melon Crate: In the first tunnel"
        region="Japes Lowlands"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <JapesCheck
        id={21006}
        name="Shuffled Melon Crate: In Diddy's sub-tunnel"
        region="Japes Lowlands"
        canGetLogic={canReachDiddyTunnel.in}
        canGetBreak={canReachDiddyTunnel.out}
      />
      <JapesCheck
        id={21007}
        name="Shuffled Melon Crate: In the first tunnel, main area-side"
        region="Japes Lowlands"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <JapesCheck
        id={21009}
        name="Shuffled Melon Crate: Under Chunky's barrel in the hive zone"
        region="Hive Area"
        canGetLogic={canReachHiveZone.in}
        canGetBreak={canReachHiveZone.out}
      />
      <JapesCheck
        id={21010}
        name="Shuffled Melon Crate: Near Tiny's stump"
        region="Hive Area"
        canGetLogic={canReachHiveZone.in}
        canGetBreak={canReachHiveZone.out}
      />
      <JapesCheck
        id={21011}
        name="Shuffled Melon Crate: Near one of Tiny's logs"
        region="Hive Area"
        canGetLogic={canReachHiveZone.in}
        canGetBreak={canReachHiveZone.out}
      />
      <JapesCheck
        id={21012}
        name="Shuffled Melon Crate: Near the vine pit"
        region="Stormy Area"
        canGetLogic={canReachStormyZone.in}
        canGetBreak={canReachStormyZone.out}
      />
      <JapesCheck
        id={21013}
        name="Shuffled Melon Crate: In the vine pit"
        region="Stormy Area"
        canGetLogic={canReachStormyZone.in}
        canGetBreak={canReachStormyZone.out}
      />
      <JapesCheck
        id={21014}
        name="Shuffled Melon Crate: On Lanky's &quot;useless&quot; slope"
        region="Stormy Area"
        canGetLogic={canReachStormyZone.in && hasOStand}
        canGetBreak={canReachStormyZone.out}
      />
      <JapesCheck
        id={21016}
        name="Shuffled Melon Crate: The Stormy Tunnel's 4-way intersection"
        region="Stormy Area"
        canGetLogic={canReachStormyZone.in}
        canGetBreak={canReachStormyZone.out}
      />
      <JapesCheck
        id={21017}
        name="Shuffled Melon Crate: Vanilla Location 1 (behind Chunky's hut switch)"
        region="Stormy Area"
        canGetLogic={canDoVanillaCrate2.in}
        canGetBreak={canDoVanillaCrate2.out}
      />
      <JapesCheck
        id={21018}
        name="Shuffled Melon Crate: The Banana Fairy's pool"
        region="Stormy Area"
        canGetLogic={hasRambi.in}
        canGetBreak={hasRambi.out}
      />
      <JapesCheck
        id={21019}
        name="Shuffled Melon Crate: Behind Lanky's Hut"
        region="Stormy Area"
        canGetLogic={canReachStormyZone.in}
        canGetBreak={canReachStormyZone.out}
      />
      <JapesCheck
        id={21020}
        name="Shuffled Melon Crate: Behind DK's hut"
        region="Stormy Area"
        canGetLogic={canReachStormyZone.in}
        canGetBreak={canReachStormyZone.out}
      />
      <JapesCheck
        id={21021}
        name="Shuffled Melon Crate: Near Rambi's cage"
        region="Stormy Area"
        canGetLogic={canReachStormyZone.in}
        canGetBreak={canReachStormyZone.out}
      />
      <JapesCheck
        id={21022}
        name="Shuffled Melon Crate: Behind Cranky's"
        region="Stormy Area"
        canGetLogic={canReachStormyZone.in}
        canGetBreak={canReachStormyZone.out}
      />
      <JapesCheck
        id={21023}
        name="Shuffled Melon Crate: At the minecart exit"
        region="Japes Hillside"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <JapesCheck
        id={21024}
        name="Shuffled Melon Crate: Near Snide's"
        region="Japes Hillside"
        canGetLogic={canReachFunky.in}
        canGetBreak={canReachFunky.out}
      />
      <JapesCheck
        id={21025}
        name="Shuffled Melon Crate: Behind Diddy's Mountain"
        region="Japes Hillside"
        canGetLogic={canDoVanillaCrate1.in}
        canGetBreak={canDoVanillaCrate1.out}
      />
      <JapesCheck
        id={21026}
        name="Shuffled Melon Crate: In front of Diddy's cage"
        region="Japes Hillside"
        canGetLogic={canReachDiddyCage.in}
        canGetBreak={canReachDiddyCage.out}
      />
      <JapesCheck
        id={21027}
        name="Shuffled Melon Crate: Near the Barrel Cannon to Diddy's cage"
        region="Japes Hillside"
        canGetLogic={canReachDiddyCage.in}
        canGetBreak={canReachDiddyCage.out}
      />
      <JapesCheck
        id={21028}
        name="Shuffled Melon Crate: Vanilla Location 2 (behind Diddy's Mountain)"
        region="Japes Hillside"
        canGetLogic={canReachMtn.in}
        canGetBreak={canReachMtn.out}
      />
      <JapesCheck
        id={21029}
        name="Shuffled Melon Crate: Near the cannon platform"
        region="Japes Hillside"
        canGetLogic={canReachDiddyCage.in}
        canGetBreak={canReachDiddyCage.out}
      />
      <JapesCheck
        id={21030}
        name="Shuffled Melon Crate: In the Troff 'n' Scoff alcove"
        region="Japes Hillside"
        canGetLogic={isBreathing.in && hasClimbing && hasVines}
        canGetBreak={canReachDiddyCage.out}
      />
      <JapesCheck
        id={21031}
        name="Shuffled Melon Crate: In front of the river"
        region="Japes Lowlands"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <JapesCheck
        id={21032}
        name="Shuffled Melon Crate: Vanilla Warp 1, level start"
        region="Japes Lowlands"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <JapesCheck
        id={21033}
        name="Shuffled Melon Crate: Vanilla Warp 1, after the early cave"
        region="Japes Lowlands"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <JapesCheck
        id={21034}
        name="Shuffled Melon Crate: Vanilla Warp 2, main area"
        region="Japes Lowlands"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <JapesCheck
        id={21035}
        name="Shuffled Melon Crate: Vanilla Warp 2, in front of Diddy's mountain"
        region="Japes Hillside"
        canGetLogic={canReachMtn.in}
        canGetBreak={canReachMtn.out}
      />
      <JapesCheck
        id={21036}
        name="Shuffled Melon Crate: Vanilla Warp 3, at the hive tunnel"
        region="Japes Lowlands"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <JapesCheck
        id={21037}
        name="Shuffled Melon Crate: Vanilla Warp 3, at the painting room"
        region="Japes Hillside"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <JapesCheck
        id={21038}
        name="Shuffled Melon Crate: Vanilla Warp 4, Stormy Tunnel entrance"
        region="Stormy Area"
        canGetLogic={canReachStormyZone.in}
        canGetBreak={canReachStormyZone.out}
      />
      <JapesCheck
        id={21039}
        name="Shuffled Melon Crate: Vanilla Warp 4, in front of Cranky's"
        region="Stormy Area"
        canGetLogic={canReachStormyZone.in}
        canGetBreak={canReachStormyZone.out}
      />
      <JapesCheck
        id={21040}
        name="Shuffled Melon Crate: Vanilla Warp 5, on top of Diddy's Mountain"
        region="Japes Hillside"
        canGetLogic={didGB[1011] || hasAllBananaports}
      />
      <JapesCheck
        id={21041}
        name="Shuffled Melon Crate: Vanilla Warp 5, hive area"
        region="Hive Area"
        canGetLogic={canReachHiveZone.in}
        canGetBreak={canReachHiveZone.out}
      />
      <JapesCheck
        id={21042}
        name="Shuffled Melon Crate: Behind the boulder leading to Chunky's underground"
        region="Japes Lowlands"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <JapesCheck
        id={21043}
        name="Shuffled Melon Crate: Chunky's underground, behind exit cannon"
        region="Japes Caves and Mines"
        canGetLogic={canReachChunkyCave.in}
        canGetBreak={canReachChunkyCave.out}
      />
      <JapesCheck
        id={21044}
        name="Shuffled Melon Crate: Chunky's underground, at vines"
        region="Japes Caves and Mines"
        canGetLogic={canReachChunkyCave.in}
        canGetBreak={canReachChunkyCave.out}
      />
      <JapesCheck
        id={21045}
        name="Shuffled Melon Crate: In between the pegs in Lanky's painting room"
        region="Japes Caves and Mines"
        canGetLogic={canReachPaintingRoom.in}
        canGetBreak={canReachPaintingRoom.out}
      />
      <JapesCheck
        id={21046}
        name="Shuffled Melon Crate: Near entrance to Diddy's mountain"
        region="Japes Caves and Mines"
        canGetLogic={canReachMtn.in}
        canGetBreak={canReachMtn.out}
      />
      <JapesCheck
        id={21047}
        name="Shuffled Melon Crate: On platform opposide Diddy's mountain switch"
        region="Japes Caves and Mines"
        canGetLogic={canReachMtn.in}
        canGetBreak={canReachMtn.out}
      />
      <JapesCheck
        id={21048}
        name="Shuffled Melon Crate: On the barrel with Diddy's mountain switch"
        region="Japes Caves and Mines"
        canGetLogic={canReachMtn.in}
        canGetBreak={canReachMtn.out}
      />
      <JapesCheck
        id={21049}
        name="Shuffled Melon Crate: Near the hi-lo machine"
        region="Japes Caves and Mines"
        canGetLogic={canReachMtn.in}
        canGetBreak={canReachMtn.out}
      />
      <JapesCheck
        id={21051}
        name="Shuffled Melon Crate: In the main room of Tiny's hive"
        region="Hive Area"
        canGetLogic={canGetInHive.in}
        canGetBreak={canGetInHive.out}
      />
      <JapesCheck
        id={21052}
        name="Shuffled Melon Crate: In the first room of Tiny's hive"
        region="Hive Area"
        canGetLogic={canGetInHive.in}
        canGetBreak={canGetInHive.out}
      />
      <JapesCheck
        id={21053}
        name="Shuffled Melon Crate: In the final room of Tiny's hive"
        region="Hive Area"
        canGetLogic={canGetInHivePastRoom1.in}
        canGetBreak={canGetInHivePastRoom1.out}
      />
    </CratePool>
  )
}

const ShuffledCrates: React.FC = () => (useShuffleCrates() ? <Shuffled /> : null)
export default ShuffledCrates
