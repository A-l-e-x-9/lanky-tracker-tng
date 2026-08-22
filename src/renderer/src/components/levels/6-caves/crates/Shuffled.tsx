import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import CratePool from '@renderer/components/pools/Crates'
import { useGeneralThing, useChunkyClearGb, useTinyPortGb, useTinyCaveGb, useIceWalls, useCavesMiniFunky, useLankyIglooGb, useChunkyCabinGb } from '@renderer/hooks/caves'
import { useShuffleCrates } from '@renderer/hooks/settings'
import { useMonkeyport, useRocket, usePunch, useBalloon, useHighGrab, useChunky, useBarrel, useTrombone, useTriangle } from '@renderer/hooks/kongs'
import CavesCheck from '../check'

const Shuffled: React.FC = () => {
const isBreathing = useGeneralThing()
const canDoKoshaGB = useChunkyClearGb()
const hasMonkeyport = useMonkeyport()
const canDoTinyIglooGB = useTinyPortGb()
const hasJetbarrel = useRocket()
const canDoShrinkGB = useTinyCaveGb()
const hasPunch = usePunch()
const canGetPastIceWalls = useIceWalls()
const hasBalloon = useBalloon()
const canHighGrab = useHighGrab()
const hasChunky = useChunky()
const hasBarrels = useBarrel()
const canReachWarp4 = useCavesMiniFunky()
const [didCheck] = useDonkStore(useShallow((state) => [state.checks]))
const canDoLanky5DI = useLankyIglooGb()
const hasTrombone = useTrombone()
const canDoChunky5DC = useChunkyCabinGb()
const hasTriangle = useTriangle()
  return (
    <CratePool>
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
        id={26016}
        name="Shuffled Melon Crate: On top of the Ice Castle"
        region="Crystal Caves Main"
        canGetLogic={hasBalloon}
        canGetBreak={canHighGrab}
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
      <CavesCheck
        id={26052}
        name="Shuffled Melon Crate: A high platform in Lanky's 5DI room"
        region="Caves Igloo"
        canGetLogic={canDoLanky5DI.in}
        canGetBreak={canDoLanky5DI.out}
      />
      <CavesCheck
        id={26055}
        name="Shuffled Melon Crate: In the back left corner of Chunky's 5DC room"
        region="Caves Cabins"
        canGetLogic={canDoChunky5DC.in}
        canGetBreak={hasTriangle}
      />
      <CavesCheck
        id={26058}
        name="Shuffled Melon Crate: Called to the carpet of Lanky's cabin"
        region="Caves Cabins"
        canGetLogic={hasBalloon && hasTrombone}
        canGetBreak={hasJetbarrel && hasTrombone}
      />
    </CratePool>
  )
}

const ShuffledCrates: React.FC = () => (useShuffleCrates() ? <Shuffled /> : null)
export default ShuffledCrates
