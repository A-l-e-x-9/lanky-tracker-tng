import ToughGoldenBanana from '@renderer/components/pools/ToughGoldenBanana'
import { useDkCryptGb } from '@renderer/hooks/castle'
import CastleCheck from '../../check'

const DkMinecart: React.FC = () => {
const doCheck = useDkCryptGb()
return (
<ToughGoldenBanana>
  <CastleCheck
    id={7003}
    name="DK's Minecart"
    region="Castle Crypt and Dungeon"
    canGetLogic={doCheck.in}
    canGetBreak={doCheck.out}
  />
</ToughGoldenBanana>
)
}

export default DkMinecart
