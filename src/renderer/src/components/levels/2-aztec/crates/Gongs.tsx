import CratePool from '@renderer/components/pools/Crates'
import VanillaCrate from '@renderer/components/pools/VanillaCrate'
import { useAztecBack } from '@renderer/hooks/aztec'
import AztecCheck from '../check'

const GongCrate: React.FC = () => {
  const aztecBack = useAztecBack()
  return (
    <CratePool>
      <VanillaCrate>
        <AztecCheck
          id={2062}
          name="Crate Near the Gong Tower"
          region="Aztec Main Area"
          canGetLogic={aztecBack.in}
          canGetBreak={aztecBack.out}
        />
      </VanillaCrate>
    </CratePool>
  )
}

export default GongCrate
