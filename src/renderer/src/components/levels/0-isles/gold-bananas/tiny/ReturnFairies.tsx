import FairyPool from '@renderer/components/pools/Fairies'
//import ToughGoldenBanana from '@renderer/components/pools/ToughGoldenBanana'
import GBPool from '@renderer/components/pools/GB'
import { useCheckBananaFairyIsle } from '@renderer/hooks/isles'
import IslesCheck from '../../check'

export const ReturnFairies: React.FC = () => {
  const checkBfi = useCheckBananaFairyIsle()
  return (
//    <ToughGoldenBanana>
<FairyPool>
<GBPool>
      <IslesCheck
        id={47}
        name="Returning the Banana Fairies"
        region="Outer Isles"
        canGetLogic={checkBfi}
      />
      </GBPool>
      </FairyPool>
//    </ToughGoldenBanana>
  )
}

export default ReturnFairies
