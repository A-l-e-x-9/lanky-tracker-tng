import ToughGoldenBanana from '@renderer/components/pools/ToughGoldenBanana'
import { useDkCryptGb } from '@renderer/hooks/castle'
import CastleCheck from '../../check'

const DkMinecart: React.FC = () => {
const doCheck = useDkCryptGb()
return (
<ToughGoldenBanana>
  <CastleCheck
    id={7003}
    name="Castle DK Minecart"
    region="Castle Underground"
    canGetLogic={doCheck.in}
    canGetBreak={doCheck.out}
  />
</ToughGoldenBanana>
)
}

export default DkMinecart
