import ArenaPool from '@renderer/components/pools/Arenas'
import { useGeneralThing, useTinyCaveGb } from '@renderer/hooks/caves'
import { useShuffledArenas } from '@renderer/hooks/settings'
import { useBalloon, useHighGrab } from '@renderer/hooks/kongs'
import CavesCheck from '../check'

const Shuffled: React.FC = () => {
const isBreathing = useGeneralThing()
const canDoShrinkGB = useTinyCaveGb()
const hasBalloon = useBalloon()
const canHighGrab = useHighGrab()
  return (
    <ArenaPool>
      <CavesCheck
        id={16000}
        name="Shuffled Battle Arena: On top of the Ice Castle"
        region="Crystal Caves Main"
        canGetLogic={isBreathing.in && hasBalloon}
        canGetBreak={isBreathing.out && canHighGrab}
      />
      <CavesCheck
        id={16000}
        name="Shuffled Battle Arena: Vanilla Warp 3 from Tiny's Mini room"
        region="Crystal Caves Main"
        canGetLogic={canDoShrinkGB.in}
        canGetBreak={canDoShrinkGB.out}
      />
      <CavesCheck
        id={16009}
        name="Shuffled Battle Arena: Near ice wall to big boulder"
        region="Crystal Caves Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CavesCheck
        id={16011}
        name="Shuffled Battle Arena: In front of Cranky's"
        region="Crystal Caves Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CavesCheck
        id={16012}
        name="Shuffled Battle Arena: A yellow rock below the Ice Castle"
        region="Crystal Caves Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CavesCheck
        id={16013}
        name="Shuffled Battle Arena: A blue rock below the Ice Castle"
        region="Crystal Caves Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CavesCheck
        id={16014}
        name="Shuffled Battle Arena: Tag Barrel at the Ice Castle"
        region="Crystal Caves Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CavesCheck
        id={16015}
        name="Shuffled Battle Arena: Near the Ice Castle"
        region="Crystal Caves Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CavesCheck
        id={16017}
        name="Shuffled Battle Arena: Near the small boulder"
        region="Crystal Caves Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CavesCheck
        id={16018}
        name="Shuffled Battle Arena: Near ice wall to Snide's"
        region="Crystal Caves Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CavesCheck
        id={16021}
        name="Shuffled Battle Arena: Near vanilla level entrance"
        region="Crystal Caves Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CavesCheck
        id={16022}
        name="Shuffled Battle Arena: Near starting Gorilla Gone room"
        region="Crystal Caves Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CavesCheck
        id={16024}
        name="Shuffled Battle Arena: Near Lanky's Kasplat"
        region="Crystal Caves Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CavesCheck
        id={16025}
        name="Shuffled Battle Arena: Near Funky's"
        region="Crystal Caves Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CavesCheck
        id={16026}
        name="Shuffled Battle Arena: Near Funky's, under Jetbarrel"
        region="Crystal Caves Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CavesCheck
        id={16040}
        name="Shuffled Battle Arena: Vanilla Warp 1 at level start"
        region="Crystal Caves Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CavesCheck
        id={16042}
        name="Shuffled Battle Arena: Vanilla Warp 2 at level start"
        region="Crystal Caves Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CavesCheck
        id={16046}
        name="Shuffled Battle Arena: Vanilla Warp 4 on spire near Cranky's"
        region="Crystal Caves Main"
        canGetLogic={isBreathing.in && (hasDK || hasJetbarrel || isHinaKagiyama)}
        canGetBreak={isBreathing.out && (hasDK || hasJetbarrel || isHinaKagiyama)}
      />
      <CavesCheck
        id={16059}
        name="Shuffled Battle Arena: Ice Castle, left"
        region="Crystal Caves Main"
        canGetLogic={canDoIceCastle.in}
        canGetBreak={canDoIceCastle.out}
      />
      <CavesCheck
        id={16060}
        name="Shuffled Battle Arena: Ice Castle, right"
        region="Crystal Caves Main"
        canGetLogic={canDoIceCastle.in}
        canGetBreak={canDoIceCastle.out}
      />
    </ArenaPool>
  )
}

const MainArenas: React.FC = () => (useShuffledArenas() ? <Shuffled /> : null)
export default MainArenas
