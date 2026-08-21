import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
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
        id={26054}
        name="Shuffled Melon Crate: Opposite DK's 5DC room entrance"
        region="Caves Cabins"
        canGetLogic={isBreathing.in && hasBongoes}
        canGetBreak={isBreathing.out && hasBongoes}
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
