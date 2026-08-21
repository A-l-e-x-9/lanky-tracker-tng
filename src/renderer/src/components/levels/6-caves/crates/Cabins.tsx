import CratePool from '@renderer/components/pools/Crates'
import { useGeneralThing } from '@renderer/hooks/caves'
import { useShuffleCrates } from '@renderer/hooks/settings'
import { useBongos, useGuitar } from '@renderer/hooks/kongs'
import CavesCheck from '../check'

const Shuffled: React.FC = () => {
const isBreathing = useGeneralThing()
const hasBongoes = useBongos()
const hasGuitar = useGuitar()
  return (
    <CratePool>
      <CavesCheck
        id={26000}
        name="Shuffled Melon Crate: Inside DK's rotating cabin"
        region="Caves Cabins"
        canGetLogic={canReachVanillaArena.in}
        canGetBreak={canReachVanillaArena.out}
      />
      <CavesCheck
        id={26028}
        name="Shuffled Melon Crate: Near the headphones"
        region="Caves Cabins"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CavesCheck
        id={26029}
        name="Shuffled Melon Crate: Ledge near headphones"
        region="Caves Cabins"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CavesCheck
        id={26030}
        name="Shuffled Melon Crate: Near Lanky's cabin"
        region="Caves Cabins"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CavesCheck
        id={26031}
        name="Shuffled Melon Crate: Left of the rotating cabin"
        region="Caves Cabins"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CavesCheck
        id={26032}
        name="Shuffled Melon Crate: Next to the rotating cabin"
        region="Caves Cabins"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CavesCheck
        id={26033}
        name="Shuffled Melon Crate: Right of the rotating cabin"
        region="Caves Cabins"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CavesCheck
        id={26035}
        name="Shuffled Melon Crate: Near cabin area Jetbarrel"
        region="Caves Cabins"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CavesCheck
        id={26036}
        name="Shuffled Melon Crate: Near Tiny's 5DC room"
        region="Caves Cabins"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CavesCheck
        id={26037}
        name="Shuffled Melon Crate: Near 5DC Tag Barrel"
        region="Caves Cabins"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CavesCheck
        id={26038}
        name="Shuffled Melon Crate: Near Diddy's upper 5DC room"
        region="Caves Cabins"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CavesCheck
        id={26039}
        name="Shuffled Melon Crate: Also near Diddy's upper 5DC room, closer to door"
        region="Caves Cabins"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CavesCheck
        id={26043}
        name="Shuffled Melon Crate: Vanilla Warp 2 at DK's rotating cabin"
        region="Caves Cabins"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CavesCheck
        id={26048}
        name="Shuffled Melon Crate: Vanilla Warp 5 at 5DC"
        region="Caves Cabins"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CavesCheck
        id={26054}
        name="Shuffled Melon Crate: Opposite DK's 5DC room entrance"
        region="Caves Cabins"
        canGetLogic={isBreathing.in && hasBongoes}
        canGetBreak={isBreathing.out && hasBongoes}
      />
      <CavesCheck
        id={26056}
        name="Shuffled Melon Crate: Inside Tiny's 5DC room"
        region="Caves Cabins"
        canGetLogic={hasSax}
      />
      <CavesCheck
        id={26057}
        name="Shuffled Melon Crate: Inside Diddy's upper 5DC room"
        region="Caves Cabins"
        canGetLogic={isBreathing.in && hasGuitar}
        canGetBreak={isBreathing.out && hasGuitar}
      />
    </CratePool>
  )
}

const CabinCrates: React.FC = () => (useShuffleCrates() ? <Shuffled /> : null)
export default CabinCrates
