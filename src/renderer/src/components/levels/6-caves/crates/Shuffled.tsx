import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import CratePool from '@renderer/components/pools/Crates'
import { useGeneralThing, useChunkyClearGb, useTinyPortGb, useTinyCaveGb, useIceWalls, useCavesMiniFunky } from '@renderer/hooks/caves'
import { useShuffleCrates } from '@renderer/hooks/settings'
import { useMonkeyport, usePunch, useChunky, useBarrel } from '@renderer/hooks/kongs'
import CavesCheck from '../check'
import CabinCrates from './Cabins'

const Shuffled: React.FC = () => {
const isBreathing = useGeneralThing()
const canDoKoshaGB = useChunkyClearGb()
const hasMonkeyport = useMonkeyport()
const canDoTinyIglooGB = useTinyPortGb()
const canDoShrinkGB = useTinyCaveGb()
const hasPunch = usePunch()
const canGetPastIceWalls = useIceWalls()
const hasChunky = useChunky()
const hasBarrels = useBarrel()
const canReachWarp4 = useCavesMiniFunky()
const [didCheck] = useDonkStore(useShallow((state) => [state.checks]))
  return (
    <CratePool>
      <CabinCrates />
      <CavesCheck
        id={26001}
        name="Shuffled Melon Crate: In the Giant Kosha's area"
        region="Caves Igloo"
        canGetLogic={canDoKoshaGB.in && hasMonkeyport}
        canGetBreak={canDoKoshaGB.out && hasMonkeyport}
      />
      <CavesCheck
        id={26002}
        name="Shuffled Melon Crate: In Tiny's Monkeyport igloo"
        region="Caves Igloo"
        canGetLogic={canDoTinyIglooGB.in}
        canGetBreak={canDoTinyIglooGB.out}
      />
      <CavesCheck
        id={26003}
        name="Shuffled Melon Crate: In the Giant Kosha igloo"
        region="Caves Igloo"
        canGetLogic={canDoKoshaGB.in}
        canGetBreak={canDoKoshaGB.out}
      />
      <CavesCheck
        id={26008}
        name="Shuffled Melon Crate: In Tiny's Mini Monkey cave near Cranky's"
        region="Crystal Caves Main"
        canGetLogic={canDoShrinkGB.in}
        canGetBreak={canDoShrinkGB.out}
      />
      <CavesCheck
        id={26010}
        name="Shuffled Melon Crate: In giant boulder room"
        region="Crystal Caves Main"
        canGetLogic={isBreathing.in && (hasPunch || canGetPastIceWalls)}
        canGetBreak={isBreathing.out && (hasPunch || canGetPastIceWalls)}
      />
      <CavesCheck
        id={26019}
        name="Shuffled Melon Crate: Near Snide's"
        region="Crystal Caves Main"
        canGetLogic={hasPunch || canGetPastIceWalls}
      />
      <CavesCheck
        id={26023}
        name="Shuffled Melon Crate: In starting Gorilla Gone room"
        region="Crystal Caves Main"
        canGetLogic={hasChunky && hasBarrels}
      />
      <CavesCheck
        id={26027}
        name="Shuffled Melon Crate: In the Warp 4/Monkeyport cave"
        region="Crystal Caves Main"
        canGetLogic={canReachWarp4.in}
        canGetBreak={canReachWarp4.out}
      />
      <CavesCheck
        id={26045}
        name="Shuffled Melon Crate: Vanilla Warp 3 from Tiny's Mini room"
        region="Crystal Caves Main"
        canGetLogic={didCheck[6030]}
      />
      <CavesCheck
        id={26047}
        name="Shuffled Melon Crate: Vanilla Warp 4, near Funky's"
        region="Crystal Caves Main"
        canGetLogic={canReachWarp4.in}
        canGetBreak={canReachWarp4.out}
      />
    </CratePool>
  )
}

const ShuffledCrates: React.FC = () => (useShuffleCrates() ? <Shuffled /> : null)
export default ShuffledCrates
