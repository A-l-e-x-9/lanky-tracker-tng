import GBPool from '@renderer/components/pools/GB'
import { useDkProdGb } from '@renderer/hooks/factory'
import FactoryCheck from '../../check'

const CrusherRoom: React.FC = () => {
  const prodGb = useDkProdGb()
  return (
  <GBPool>
    <FactoryCheck
      id={3004}
      name="DK's Crusher Room"
      region="Prod Room"
      canGetLogic={prodGb.in}
      canGetBreak={prodGb.out}
    />
    </GBPool>
  )
}

export default CrusherRoom
