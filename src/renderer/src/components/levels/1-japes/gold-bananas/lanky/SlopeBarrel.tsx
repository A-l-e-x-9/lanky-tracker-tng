import GBPool '@renderer/components/pools/GB'
import { useLankySlopeGb } from '@renderer/hooks/japes'
import JapesCheck from '../../check'

const SlopeBarrel: React.FC = () => {
  const slopeGb = useLankySlopeGb()
  return (
  <GBPool>
    <JapesCheck
      id={1022}
      name="Lanky's Slope Barrel"
      region="Stormy Area"
      canGetLogic={slopeGb.in}
      canGetBreak={slopeGb.out}
    />
    </GBPool>
  )
}

export default SlopeBarrel
