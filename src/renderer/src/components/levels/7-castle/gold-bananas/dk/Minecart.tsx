import ToughGoldenBanana from '@renderer/src/components/pools/ToughGoldenBanana'
import { useDkCryptGb } from '@renderer/src/hooks/castle'
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
