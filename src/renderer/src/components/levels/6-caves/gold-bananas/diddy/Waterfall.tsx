import GBPool from '@renderer/components/pools/GB'
import { useDiddyWaterfallGb } from '@renderer/hooks/caves'
import CavesCheck from '../../check'

const WaterfallBarrel: React.FC = () => {
  const waterfallGb = useDiddyWaterfallGb()
  return (
  <GBPool>
    <CavesCheck
      id={6010}
      name="Diddy's Waterfall Barrel"
      region="Crystal Caves Main"
      canGetLogic={waterfallGb.in}
      canGetBreak={waterfallGb.out}
    />
    </GBPool>
  )
}

export default WaterfallBarrel
