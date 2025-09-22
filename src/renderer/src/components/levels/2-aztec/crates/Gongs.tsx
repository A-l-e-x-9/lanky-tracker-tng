import CratePool from '@renderer/src/components/pools/Crates'
import VanillaCrate from '@renderer/src/components/pools/VanillaCrate'
import { useAztecBack } from '@renderer/src/hooks/aztec'
import { logicBreak } from '@renderer/src/hooks/world'
import AztecCheck from '../check'

const GongCrate: React.FC = () => {
  const aztecBack = useAztecBack()
  return (
    <CratePool>
      <VanillaCrate>
        <AztecCheck
          id={2062}
          name="Aztec Crate: Near Gong Tower"
          region="Aztec Oasis And Totem Area"
          canGetLogic={aztecBack.in}
          canGetBreak={logicBreak(aztecBack)}
        />
      </VanillaCrate>
    </CratePool>
  )
}

export default GongCrate
