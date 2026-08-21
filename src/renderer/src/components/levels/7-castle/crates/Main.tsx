import CratePool from '@renderer/components/pools/Crates'
import { useGeneralThing, useLankyGreenhouseGb } from '@renderer/hooks/castle'
import { useShuffleCrates } from '@renderer/hooks/settings'
import { useRocket } from '@renderer/hooks/kongs'
import CastleCheck from '../check'

const Shuffled: React.FC = () => {
const isBreathing = useGeneralThing()
const canDoGreenhouse = useLankyGreenhouseGb()
const hasJetbarrel = useRocket()
  return (
    <CratePool>
      <CastleCheck
        id={27000}
        name="Shuffled Melon Crate: In Lanky's greenhouse"
        region="Creepy Castle Main"
        canGetLogic={canDoGreenhouse.in}
        canGetBreak={canDoGreenhouse.out}
      />
      <CastleCheck
        id={27001}
        name="Shuffled Melon Crate: Behind Snide's"
        region="Creepy Castle Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CastleCheck
        id={27002}
        name="Shuffled Melon Crate: Where the Banana spawns in the Greenhouse"
        region="Creepy Castle Main"
        canGetLogic={canDoGreenhouse.in}
        canGetBreak={canDoGreenhouse.out}
      />
      <CastleCheck
        id={27003}
        name="Shuffled Melon Crate: Near the big tree"
        region="Creepy Castle Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CastleCheck
        id={27011}
        name="Shuffled Melon Crate: Near steps to lower dungeon entrance"
        region="Creepy Castle Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CastleCheck
        id={27012}
        name="Shuffled Melon Crate: Near the lower dungeon entrance"
        region="Creepy Castle Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CastleCheck
        id={27013}
        name="Shuffled Melon Crate: On a square stone"
        region="Creepy Castle Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CastleCheck
        id={27014}
        name="Shuffled Melon Crate: Near the lower Jetbarrel"
        region="Creepy Castle Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CastleCheck
        id={27015}
        name="Shuffled Melon Crate: Near the central area's Tag Barrel"
        region="Creepy Castle Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CastleCheck
        id={27016}
        name="Shuffled Melon Crate: Near the headphones"
        region="Creepy Castle Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CastleCheck
        id={27017}
        name="Shuffled Melon Crate: Near the drawbridge"
        region="Creepy Castle Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CastleCheck
        id={27018}
        name="Shuffled Melon Crate: Near Cranky's"
        region="Creepy Castle Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CastleCheck
        id={27019}
        name="Shuffled Melon Crate: Near Chunky's shed"
        region="Creepy Castle Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CastleCheck
        id={27020}
        name="Shuffled Melon Crate: Next to Lanky's greenhouse"
        region="Creepy Castle Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CastleCheck
        id={27021}
        name="Shuffled Melon Crate: Next to Lanky's wind tunnel"
        region="Creepy Castle Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CastleCheck
        id={27022}
        name="Shuffled Melon Crate: Near fence at the top of the Castle"
        region="Creepy Castle Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CastleCheck
        id={27023}
        name="Shuffled Melon Crate: Near Snide's"
        region="Creepy Castle Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CastleCheck
        id={27024}
        name="Shuffled Melon Crate: On top of Lanky's wind tunnel"
        region="Creepy Castle Main"
        canGetLogic={isBreathing.in && hasJetbarrel}
        canGetBreak={isBreathing.out && hasJetbarrel}
      />
      <CastleCheck
        id={27025}
        name="Shuffled Melon Crate: Vanilla Warp 1, central area"
        region="Creepy Castle Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CastleCheck
        id={27026}
        name="Shuffled Melon Crate: Vanilla Warp 1, dungeon lower entrance"
        region="Creepy Castle Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CastleCheck
        id={27027}
        name="Shuffled Melon Crate: Vanilla Warp 2, central area"
        region="Creepy Castle Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CastleCheck
        id={27028}
        name="Shuffled Melon Crate: Vanilla Warp 2 at halfway point"
        region="Creepy Castle Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CastleCheck
        id={27029}
        name="Shuffled Melon Crate: Vanilla Warp 3, central area"
        region="Creepy Castle Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CastleCheck
        id={27030}
        name="Shuffled Melon Crate: Vanilla Warp 3, in front of Cranky's"
        region="Creepy Castle Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CastleCheck
        id={27031}
        name="Shuffled Melon Crate: Vanilla Warp 4, central area"
        region="Creepy Castle Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CastleCheck
        id={27032}
        name="Shuffled Melon Crate: Vanilla Warp 4, in front of the greenhouse and shed"
        region="Creepy Castle Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CastleCheck
        id={27033}
        name="Shuffled Melon Crate: Vanilla Warp 5, central area"
        region="Creepy Castle Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CastleCheck
        id={27034}
        name="Shuffled Melon Crate: Vanilla Warp 5, top of the Castle"
        region="Creepy Castle Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
    </CratePool>
  )
}

const CastleMainCrates: React.FC = () => (useShuffleCrates() ? <Shuffled /> : null)
export default CastleMainCrates
