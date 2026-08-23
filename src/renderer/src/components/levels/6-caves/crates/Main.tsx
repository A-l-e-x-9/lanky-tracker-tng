import CratePool from '@renderer/components/pools/Crates'
import { useGeneralThing, useCavesPillar, useLankyCastleGb } from '@renderer/hooks/caves'
import { useShuffleCrates } from '@renderer/hooks/settings'
import { useRocket, useTwirl, useDk, useBalloon, useHighGrab } from '@renderer/hooks/kongs'
import CavesCheck from '../check'

const Shuffled: React.FC = () => {
const isBreathing = useGeneralThing()
const hasJetbarrel = useRocket()
const isHinaKagiyama = useTwirl()
const hasDK = useDk()
const canDoLankyKasplat = useCavesPillar()
const canDoIceCastle = useLankyCastleGb()
const hasBalloon = useBalloon()
const canHighGrab = useHighGrab()
  return (
    <CratePool>
      <CavesCheck
        id={26009}
        name="Shuffled Melon Crate: Near ice wall to big boulder"
        region="Crystal Caves Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CavesCheck
        id={26012}
        name="Shuffled Melon Crate: A yellow rock below the Ice Castle"
        region="Crystal Caves Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CavesCheck
        id={26013}
        name="Shuffled Melon Crate: A blue rock below the Ice Castle"
        region="Crystal Caves Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CavesCheck
        id={26014}
        name="Shuffled Melon Crate: Tag Barrel at the Ice Castle"
        region="Crystal Caves Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CavesCheck
        id={26015}
        name="Shuffled Melon Crate: Near the Ice Castle"
        region="Crystal Caves Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CavesCheck
        id={26016}
        name="Shuffled Melon Crate: On top of the Ice Castle"
        region="Crystal Caves Main"
        canGetLogic={hasBalloon}
        canGetBreak={canHighGrab}
      />
      <CavesCheck
        id={26017}
        name="Shuffled Melon Crate: Near the small boulder"
        region="Crystal Caves Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CavesCheck
        id={26018}
        name="Shuffled Melon Crate: Near ice wall to Snide's"
        region="Crystal Caves Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CavesCheck
        id={26021}
        name="Shuffled Melon Crate: Near vanilla level entrance"
        region="Crystal Caves Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CavesCheck
        id={26022}
        name="Shuffled Melon Crate: Near starting Gorilla Gone room"
        region="Crystal Caves Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CavesCheck
        id={26024}
        name="Shuffled Melon Crate: Near Lanky's Kasplat"
        region="Crystal Caves Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CavesCheck
        id={26025}
        name="Shuffled Melon Crate: Near Funky's"
        region="Crystal Caves Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CavesCheck
        id={26026}
        name="Shuffled Melon Crate: Near Funky's, under Jetbarrel"
        region="Crystal Caves Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CavesCheck
        id={26040}
        name="Shuffled Melon Crate: Vanilla Warp 1 at level start"
        region="Crystal Caves Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CavesCheck
        id={26042}
        name="Shuffled Melon Crate: Vanilla Warp 2 at level start"
        region="Crystal Caves Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CavesCheck
        id={26046}
        name="Shuffled Melon Crate: Vanilla Warp 4 on spire near Cranky's"
        region="Crystal Caves Main"
        canGetLogic={isBreathing.in && (hasDK || hasJetbarrel || isHinaKagiyama)}
        canGetBreak={isBreathing.out}
      />
      <CavesCheck
        id={26049}
        name="Shuffled Melon Crate: Vanilla Warp 5, near Funky's"
        region="Crystal Caves Main"
        canGetLogic={canDoLankyKasplat.in}
        canGetBreak={canDoLankyKasplat.out}
      />
      <CavesCheck
        id={26059}
        name="Shuffled Melon Crate: Ice Castle, left"
        region="Crystal Caves Main"
        canGetLogic={canDoIceCastle.in}
        canGetBreak={canDoIceCastle.out}
      />
      <CavesCheck
        id={26060}
        name="Shuffled Melon Crate: Ice Castle, right"
        region="Crystal Caves Main"
        canGetLogic={canDoIceCastle.in}
        canGetBreak={canDoIceCastle.out}
      />
    </CratePool>
  )
}

const MainCrates: React.FC = () => (useShuffleCrates() ? <Shuffled /> : null)
export default MainCrates
