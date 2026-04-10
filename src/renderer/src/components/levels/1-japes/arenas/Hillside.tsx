import ArenaPool from '@renderer/components/pools/Arenas'
import { useShuffledArenas } from '@renderer/hooks/settings'
import JapesCheck from '../check'
import { useArena, useJapesPaintingOutside, useGeneralThing } from '@renderer/hooks/japes'
import {  } from '@renderer/hooks/kongs'

const Shuffled: React.FC = () => {
const canReachFunky = useArena()
const canReachPaintingRoom = useJapesPaintingOutside()
const isBreathing = useGeneralThing()
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
        id={11000}
        name="Shuffled Battle Arena: In front of door to Lanky's painting room"
        region="Japes Hillside"
        canGetLogic={canReachPaintingRoom.in}
        canGetBreak={canReachPaintingRoom.out}
      />
      <JapesCheck
        id={11000}
        name="Shuffled Battle Arena: In front of the Painting Hill"
        region="Japes Hillside"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <JapesCheck
        id={11000}
        name="Shuffled Battle Arena: At the minecart exit"
        region="Japes Hillside"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <JapesCheck
        id={11000}
        name="Shuffled Battle Arena: Near Snide's"
        region="Japes Hillside"
        canGetLogic={canReachFunky.in}
        canGetBreak={canReachFunky.out}
      />
      <JapesCheck
        id={11000}
        name="Shuffled Battle Arena: Behind Diddy's Mountain"
        region="Japes Hillside"
        canGetLogic={canDoVanillaCrate1.in}
        canGetBreak={canDoVanillaCrate1.out}
      />
      <JapesCheck
        id={11000}
        name="Shuffled Battle Arena: In front of Diddy's cage"
        region="Japes Hillside"
        canGetLogic={canReachDiddyCage.in}
        canGetBreak={canReachDiddyCage.out}
      />
      <JapesCheck
        id={11000}
        name="Shuffled Battle Arena: Near the Barrel Cannon to Diddy's cage"
        region="Japes Hillside"
        canGetLogic={canReachDiddyCage.in}
        canGetBreak={canReachDiddyCage.out}
      />
      <JapesCheck
        id={11000}
        name="Shuffled Battle Arena: Behind Diddy's Mountain"
        region="Japes Hillside"
        canGetLogic={canReachMtn.in}
        canGetBreak={canReachMtn.out}
      />
      <JapesCheck
        id={11000}
        name="Shuffled Battle Arena: Near the cannon platform"
        region="Japes Hillside"
        canGetLogic={canReachDiddyCage.in}
        canGetBreak={canReachDiddyCage.out}
      />
      <JapesCheck
        id={11000}
        name="Shuffled Battle Arena: In the Troff 'n' Scoff alcove"
        region="Japes Hillside"
        canGetLogic={isBreathing.in && hasClimbing && hasVines}
        canGetBreak={isBreathing.out && canReachDiddyCage.out}
      />
      <JapesCheck
        id={11000}
        name="Shuffled Battle Arena: Vanilla Warp 2, in front of Diddy's mountain"
        region="Japes Hillside"
        canGetLogic={canReachMtn.in}
        canGetBreak={canReachMtn.out}
      />
      <JapesCheck
        id={11000}
        name="Shuffled Battle Arena: Vanilla Warp 3, at the painting room"
        region="Japes Hillside"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <JapesCheck
        id={11000}
        name="Shuffled Battle Arena: Vanilla Warp 5, on top of Diddy's Mountain"
        region="Japes Hillside"
        canGetLogic={didGB[1011] || hasAllBananaports}
      />
    </ArenaPool>
  )
}

const HillsideArenas: React.FC = () => (useShuffledArenas() ? <Shuffled /> : null)
export default HillsideArenas
