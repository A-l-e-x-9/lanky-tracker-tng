import { useShallow } from 'zustand/react/shallow'
import RainbowCoinPool from '@renderer/components/pools/RainbowCoins'
import { useGeneralDirt, useArena, useJapesPaintingOutside, useJapesSideArea, useJapesHive, useJapesKongGates, useJapesRambi, useMtnCrate, useRambiCrate, useDkFreebieGb, useJapesMine, useJapesUnderground, useTinyStumpGb, useTinyHiveGb, usePaintingDirt } from '@renderer/hooks/japes'
import { useShuffleDirt, useBananaportAll } from '@renderer/hooks/settings'
import { useClimbing, useStand, useVine, useShockwave } from '@renderer/hooks/kongs'
import JapesCheck from '../check'
import useDonkStore from '@renderer/store'

const Shuffled: React.FC = () => {
const isBreathing = useGeneralDirt()
const hasShockwave = useShockwave()
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
const canDoVanillaDirt = usePaintingDirt()
  return (
    <RainbowCoinPool>
      <JapesCheck
        id={31000}
        name="Shuffled Dirt Patch: In front of Funky's"
        region="Japes Hillside"
        canGetLogic={canReachFunky.in && hasShockwave}
        canGetBreak={canReachFunky.out && hasShockwave}
      />
      <JapesCheck
        id={31001}
        name="Shuffled Dirt Patch: Vanilla Location (in front of door to Lanky's painting room)"
        region="Japes Hillside"
        canGetLogic={canDoVanillaDirt.in}
        canGetBreak={canDoVanillaDirt.out}
      />
      <JapesCheck
        id={31002}
        name="Shuffled Dirt Patch: Near vanilla level entrance"
        region="Japes Lowlands"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <JapesCheck
        id={31003}
        name="Shuffled Dirt Patch: On a tree in the starting area"
        region="Japes Lowlands"
        canGetLogic={isBreathing.in && hasClimbing}
        canGetBreak={isBreathing.out && hasClimbing}
      />
      <JapesCheck
        id={31004}
        name="Shuffled Dirt Patch: Next to first tunnel entrance"
        region="Japes Lowlands"
        canGetLogic={isBreathing.in && hasShockwave}
        canGetBreak={isBreathing.out && hasShockwave}
      />
      <JapesCheck
        id={31005}
        name="Shuffled Dirt Patch: In the first tunnel"
        region="Japes Lowlands"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <JapesCheck
        id={31006}
        name="Shuffled Dirt Patch: In Diddy's sub-tunnel"
        region="Japes Lowlands"
        canGetLogic={canReachDiddyTunnel.in && hasShockwave}
        canGetBreak={canReachDiddyTunnel.out && hasShockwave}
      />
      <JapesCheck
        id={31007}
        name="Shuffled Dirt Patch: In the first tunnel, main area-side"
        region="Japes Lowlands"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <JapesCheck
        id={31008}
        name="Shuffled Dirt Patch: In front of the Painting Hill"
        region="Japes Hillside"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <JapesCheck
        id={31009}
        name="Shuffled Dirt Patch: Under Chunky's barrel in the hive zone"
        region="Hive Area"
        canGetLogic={canReachHiveZone.in && hasShockwave}
        canGetBreak={canReachHiveZone.out && hasShockwave}
      />
      <JapesCheck
        id={31010}
        name="Shuffled Dirt Patch: Near Tiny's stump"
        region="Hive Area"
        canGetLogic={canReachHiveZone.in && hasShockwave}
        canGetBreak={canReachHiveZone.out && hasShockwave}
      />
      <JapesCheck
        id={31011}
        name="Shuffled Dirt Patch: Near one of Tiny's logs"
        region="Hive Area"
        canGetLogic={canReachHiveZone.in && hasShockwave}
        canGetBreak={canReachHiveZone.out && hasShockwave}
      />
      <JapesCheck
        id={31012}
        name="Shuffled Dirt Patch: Near the vine pit"
        region="Stormy Area"
        canGetLogic={canReachStormyZone.in && hasShockwave}
        canGetBreak={canReachStormyZone.out && hasShockwave}
      />
      <JapesCheck
        id={31013}
        name="Shuffled Dirt Patch: In the vine pit"
        region="Stormy Area"
        canGetLogic={canReachStormyZone.in && hasShockwave}
        canGetBreak={canReachStormyZone.out && hasShockwave}
      />
      <JapesCheck
        id={31014}
        name="Shuffled Dirt Patch: On Lanky's &quot;useless&quot; slope"
        region="Stormy Area"
        canGetLogic={canReachStormyZone.in && hasOStand && hasShockwave}
        canGetBreak={canReachStormyZone.out && hasShockwave}
      />
      <JapesCheck
        id={31015}
        name="Shuffled Dirt Patch: On the left of Lanky's &quot;useless&quot; slope"
        region="Stormy Area"
        canGetLogic={canReachStormyZone.in && hasOStand && hasShockwave}
        canGetBreak={canReachStormyZone.out && hasShockwave}
      />
      <JapesCheck
        id={31016}
        name="Shuffled Dirt Patch: The Stormy Tunnel's 4-way intersection"
        region="Stormy Area"
        canGetLogic={canReachStormyZone.in && hasShockwave}
        canGetBreak={canReachStormyZone.out && hasShockwave}
      />
      <JapesCheck
        id={31017}
        name="Shuffled Dirt Patch: Behind Chunky's hut switch"
        region="Stormy Area"
        canGetLogic={canDoVanillaCrate2.in && hasShockwave}
        canGetBreak={canDoVanillaCrate2.out && hasShockwave}
      />
      <JapesCheck
        id={31018}
        name="Shuffled Dirt Patch: The Banana Fairy's pool"
        region="Stormy Area"
        canGetLogic={hasRambi.in && hasShockwave}
        canGetBreak={hasRambi.out && hasShockwave}
      />
      <JapesCheck
        id={31019}
        name="Shuffled Dirt Patch: Behind Lanky's Hut"
        region="Stormy Area"
        canGetLogic={canReachStormyZone.in && hasShockwave}
        canGetBreak={canReachStormyZone.out && hasShockwave}
      />
      <JapesCheck
        id={31020}
        name="Shuffled Dirt Patch: Behind DK's hut"
        region="Stormy Area"
        canGetLogic={canReachStormyZone.in && hasShockwave}
        canGetBreak={canReachStormyZone.out && hasShockwave}
      />
      <JapesCheck
        id={31021}
        name="Shuffled Dirt Patch: Near Rambi's cage"
        region="Stormy Area"
        canGetLogic={canReachStormyZone.in && hasShockwave}
        canGetBreak={canReachStormyZone.out && hasShockwave}
      />
      <JapesCheck
        id={31022}
        name="Shuffled Dirt Patch: Behind Cranky's"
        region="Stormy Area"
        canGetLogic={canReachStormyZone.in && hasShockwave}
        canGetBreak={canReachStormyZone.out && hasShockwave}
      />
      <JapesCheck
        id={31023}
        name="Shuffled Dirt Patch: At the minecart exit"
        region="Japes Hillside"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <JapesCheck
        id={31024}
        name="Shuffled Dirt Patch: Near Snide's"
        region="Japes Hillside"
        canGetLogic={canReachFunky.in && hasShockwave}
        canGetBreak={canReachFunky.out && hasShockwave}
      />
      <JapesCheck
        id={31025}
        name="Shuffled Dirt Patch: Behind Diddy's Mountain"
        region="Japes Hillside"
        canGetLogic={canDoVanillaCrate1.in && hasShockwave}
        canGetBreak={canDoVanillaCrate1.out && hasShockwave}
      />
      <JapesCheck
        id={31026}
        name="Shuffled Dirt Patch: In front of Diddy's cage"
        region="Japes Hillside"
        canGetLogic={canReachDiddyCage.in && hasShockwave}
        canGetBreak={canReachDiddyCage.out && hasShockwave}
      />
      <JapesCheck
        id={31027}
        name="Shuffled Dirt Patch: Near the Barrel Cannon to Diddy's cage"
        region="Japes Hillside"
        canGetLogic={canReachDiddyCage.in && hasShockwave}
        canGetBreak={canReachDiddyCage.out && hasShockwave}
      />
      <JapesCheck
        id={31028}
        name="Shuffled Dirt Patch: Vanilla Location 2 (behind Diddy's Mountain)"
        region="Japes Hillside"
        canGetLogic={canReachMtn.in && hasShockwave}
        canGetBreak={canReachMtn.out && hasShockwave}
      />
      <JapesCheck
        id={31029}
        name="Shuffled Dirt Patch: Near the cannon platform"
        region="Japes Hillside"
        canGetLogic={canReachDiddyCage.in && hasShockwave}
        canGetBreak={canReachDiddyCage.out && hasShockwave}
      />
      <JapesCheck
        id={31030}
        name="Shuffled Dirt Patch: In the Troff 'n' Scoff alcove"
        region="Japes Hillside"
        canGetLogic={isBreathing.in && hasClimbing && hasVines}
        canGetBreak={isBreathing.out && canReachDiddyCage.out}
      />
      <JapesCheck
        id={31031}
        name="Shuffled Dirt Patch: In front of the river"
        region="Japes Lowlands"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <JapesCheck
        id={31032}
        name="Shuffled Dirt Patch: Vanilla Warp 1, level start"
        region="Japes Lowlands"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <JapesCheck
        id={31033}
        name="Shuffled Dirt Patch: Vanilla Warp 1, after the early cave"
        region="Japes Lowlands"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <JapesCheck
        id={31034}
        name="Shuffled Dirt Patch: Vanilla Warp 2, main area"
        region="Japes Lowlands"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <JapesCheck
        id={31035}
        name="Shuffled Dirt Patch: Vanilla Warp 2, in front of Diddy's mountain"
        region="Japes Hillside"
        canGetLogic={canReachMtn.in && hasShockwave}
        canGetBreak={canReachMtn.out && hasShockwave}
      />
      <JapesCheck
        id={31036}
        name="Shuffled Dirt Patch: Vanilla Warp 3, at the hive tunnel"
        region="Japes Lowlands"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <JapesCheck
        id={31037}
        name="Shuffled Dirt Patch: Vanilla Warp 3, at the painting room"
        region="Japes Hillside"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <JapesCheck
        id={31038}
        name="Shuffled Dirt Patch: Vanilla Warp 4, Stormy Tunnel entrance"
        region="Stormy Area"
        canGetLogic={canReachStormyZone.in && hasShockwave}
        canGetBreak={canReachStormyZone.out && hasShockwave}
      />
      <JapesCheck
        id={31039}
        name="Shuffled Dirt Patch: Vanilla Warp 4, in front of Cranky's"
        region="Stormy Area"
        canGetLogic={canReachStormyZone.in && hasShockwave}
        canGetBreak={canReachStormyZone.out && hasShockwave}
      />
      <JapesCheck
        id={31040}
        name="Shuffled Dirt Patch: Vanilla Warp 5, on top of Diddy's Mountain"
        region="Japes Hillside"
        canGetLogic={isBreathing.in && (didGB[1011] || hasAllBananaports)}
        canGetBreak={isBreathing.out && (didGB[1011] || hasAllBananaports)}
      />
      <JapesCheck
        id={31041}
        name="Shuffled Dirt Patch: Vanilla Warp 5, hive area"
        region="Hive Area"
        canGetLogic={canReachHiveZone.in && hasShockwave}
        canGetBreak={canReachHiveZone.out && hasShockwave}
      />
      <JapesCheck
        id={31042}
        name="Shuffled Dirt Patch: Behind the boulder leading to Chunky's underground"
        region="Japes Lowlands"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <JapesCheck
        id={31043}
        name="Shuffled Dirt Patch: Chunky's underground, behind exit cannon"
        region="Japes Caves and Mines"
        canGetLogic={canReachChunkyCave.in && hasShockwave}
        canGetBreak={canReachChunkyCave.out && hasShockwave}
      />
      <JapesCheck
        id={31044}
        name="Shuffled Dirt Patch: Chunky's underground, at vines"
        region="Japes Caves and Mines"
        canGetLogic={canReachChunkyCave.in && hasShockwave}
        canGetBreak={canReachChunkyCave.out && hasShockwave}
      />
      <JapesCheck
        id={31045}
        name="Shuffled Dirt Patch: In between the pegs in Lanky's painting room"
        region="Japes Caves and Mines"
        canGetLogic={canReachPaintingRoom.in && hasShockwave}
        canGetBreak={canReachPaintingRoom.out && hasShockwave}
      />
      <JapesCheck
        id={31046}
        name="Shuffled Dirt Patch: Near entrance to Diddy's mountain"
        region="Japes Caves and Mines"
        canGetLogic={canReachMtn.in && hasShockwave}
        canGetBreak={canReachMtn.out && hasShockwave}
      />
      <JapesCheck
        id={31047}
        name="Shuffled Dirt Patch: On platform opposide Diddy's mountain switch"
        region="Japes Caves and Mines"
        canGetLogic={canReachMtn.in && hasShockwave}
        canGetBreak={canReachMtn.out && hasShockwave}
      />
      <JapesCheck
        id={31048}
        name="Shuffled Dirt Patch: On the barrel with Diddy's mountain switch"
        region="Japes Caves and Mines"
        canGetLogic={canReachMtn.in && hasShockwave}
        canGetBreak={canReachMtn.out && hasShockwave}
      />
      <JapesCheck
        id={31049}
        name="Shuffled Dirt Patch: Near the hi-lo machine"
        region="Japes Caves and Mines"
        canGetLogic={canReachMtn.in && hasShockwave}
        canGetBreak={canReachMtn.out && hasShockwave}
      />
      <JapesCheck
        id={31051}
        name="Shuffled Dirt Patch: In the main room of Tiny's hive"
        region="Hive Area"
        canGetLogic={canGetInHive.in && hasShockwave}
        canGetBreak={canGetInHive.out && hasShockwave}
      />
      <JapesCheck
        id={31052}
        name="Shuffled Dirt Patch: In the first room of Tiny's hive"
        region="Hive Area"
        canGetLogic={canGetInHive.in && hasShockwave}
        canGetBreak={canGetInHive.out && hasShockwave}
      />
      <JapesCheck
        id={31053}
        name="Shuffled Dirt Patch: In the final room of Tiny's hive"
        region="Hive Area"
        canGetLogic={canGetInHivePastRoom1.in && hasShockwave}
        canGetBreak={canGetInHivePastRoom1.out && hasShockwave}
      />
    </RainbowCoinPool>
  )
}

const ShuffledDirt: React.FC = () => (useShuffleDirt() ? <Shuffled /> : null)
export default ShuffledDirt
