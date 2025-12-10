import GBPool from '@renderer/components/pools/GB'
import { useTinyChasmGb } from '@renderer/hooks/castle'
import CastleCheck from '../../check'

const TinyChasm: React.FC = () => {
const hinacopter = useTinyChasmGb()
return (
<GBPool>
  <CastleCheck
    id={7033}
    name="Tiny's Bonus Barrel Over the Chasm"
    region="Castle Dungeon"
    canGetLogic={hinacopter.in}
    canGetBreak={hinacopter.out}
  />
  </GBPool>
)
}

export default TinyChasm

/*And if you want to know what a "Hinacopter" is, use https://en.touhouwiki.net/wiki/Hina_Kagiyama as a starting point. ~ku kuru kuru kuru kuru kuru~~~ D:*/
