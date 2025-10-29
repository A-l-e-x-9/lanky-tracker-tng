import GBPool from '@renderer/components/pools/GB'
import { useCheckTinyFeatherCage } from '@renderer/hooks/isles'
import IslesCheck from '../../check'

const FeatherCage: React.FC = () => {
  const checkFeatherCage = useCheckTinyFeatherCage()
  return (
  <GBPool>
    <IslesCheck
      id={30}
      name="Tiny's Feather Cage"
      region="Outer Isles"
      canGetLogic={checkFeatherCage}
    />
    </GBPool>
  )
}

export default FeatherCage
