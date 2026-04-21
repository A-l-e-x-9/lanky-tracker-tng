import CratePool from '@renderer/components/pools/Crates'
import CaveCrates from './Cave'
import AztecMainCrates from './AztecMain'
import TTCrates from './TinyTemple'
import LlamaCrates from './LlamaTemple'
import FDTCrates from './5DT'

const ShuffledCrates: React.FC = () => {
  return (
    <CratePool>
      <CaveCrates />
      <AztecMainCrates />
      <TTCrates />
      <LlamaCrates />
      <FDTCrates />
    </CratePool>
  )
}

export default ShuffledCrates
