import CratePool from '@renderer/src/components/pools/Crates'
import { useGeneralThing } from '@renderer/src/hooks/caves'
import { useShuffleCrates } from '@renderer/src/hooks/settings'
import CavesCheck from '../check'

const Shuffled: React.FC = () => {
  const thing = useGeneralThing()
  return (
    <CratePool>
      <CavesCheck id={6260} name="Caves Crate Location #1 (maybe)" canGetLogic={thing} />
      <CavesCheck id={6261} name="Caves Crate Location #2 (maybe)" canGetLogic={thing} />
    </CratePool>
  )
}

const ShuffledCrates: React.FC = () => (useShuffleCrates() ? <Shuffled /> : null)
export default ShuffledCrates
