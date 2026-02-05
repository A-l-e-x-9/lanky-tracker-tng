import GBPool from '@renderer/components/pools/GB'
import { useCheckBananaFairyIsle } from '@renderer/hooks/isles'
import IslesCheck from '../../check'

export const ReturnFairies: React.FC = () => {
  const checkBfi = useCheckBananaFairyIsle()
  return (
<GBPool>
      <IslesCheck
        id={47}
        name="Returning the Banana Fairies"
        region="Outer Isles"
        canGetLogic={checkBfi}
      />
      </GBPool>
  )
}

export default ReturnFairies
