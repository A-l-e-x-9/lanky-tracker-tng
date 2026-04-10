import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import CratePool from '@renderer/components/pools/Crates'
import { useShuffleCrates, useBananaportAll } from '@renderer/hooks/settings'
import JapesCheck from '../check'
import { useArena, useJapesPaintingOutside, useGeneralThing, useMtnCrate, useDkFreebieGb, useJapesMine } from '@renderer/hooks/japes'
import { useClimbing, useVine } from '@renderer/hooks/kongs'

const Shuffled: React.FC = () => {
const canReachFunky = useArena()
const canReachPaintingRoom = useJapesPaintingOutside()
const isBreathing = useGeneralThing()
const canDoVanillaCrate1 = useMtnCrate()
const canReachDiddyCage = useDkFreebieGb()
const canReachMtn = useJapesMine()
const hasClimbing = useClimbing()
const hasVines = useVine()
const [didGB] = useDonkStore(useShallow((state) => [state.checks]))
const hasAllBananaports = useBananaportAll()
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
        id={21035}
        name="Shuffled Melon Crate: Vanilla Warp 2, in front of Diddy's mountain"
        region="Japes Hillside"
        canGetLogic={canReachMtn.in}
        canGetBreak={canReachMtn.out}
      />
      <JapesCheck
        id={21037}
        name="Shuffled Melon Crate: Vanilla Warp 3, at the painting room"
        region="Japes Hillside"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <JapesCheck
        id={21040}
        name="Shuffled Melon Crate: Vanilla Warp 5, on top of Diddy's Mountain"
        region="Japes Hillside"
        canGetLogic={didGB[1011] || hasAllBananaports}
      />
    </CratePool>
  )
}

const HillsideCrates: React.FC = () => (useShuffleCrates() ? <Shuffled /> : null)
export default HillsideCrates
