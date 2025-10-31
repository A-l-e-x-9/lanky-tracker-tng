import GBPool from '@renderer/components/pools/GB'
import ToughGoldenBanana from '@renderer/components/pools/ToughGoldenBanana'
import { useDiddyMinecartGb } from '@renderer/hooks/japes'
import JapesCheck from '../../check'

const Minecart: React.FC = () => {
  const mineGb = useDiddyMinecartGb()
  return (
  <GBPool>
    <ToughGoldenBanana>
      <JapesCheck
        id={1013}
        name="Diddy's Minecart"
        region="Japes Caves and Mines"
        canGetLogic={mineGb.in}
        canGetBreak={mineGb.out}
      />
    </ToughGoldenBanana>
    </GBPool>
  )
}
export default Minecart
