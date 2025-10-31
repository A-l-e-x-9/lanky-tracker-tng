import GBPool from '@renderer/components/pools/GB'
import ToughGoldenBanana from '@renderer/components/pools/ToughGoldenBanana'
import { useDiddyOwlGb } from '@renderer/hooks/forest'
import ForestCheck from '../../check'

const OwlRace: React.FC = () => {
  const owlGb = useDiddyOwlGb()
  return (
  <GBPool>
    <ToughGoldenBanana>
      <ForestCheck
        id={5011}
        name="Diddy's Owl Race"
        region="Forest Area 4"
        canGetLogic={owlGb.in}
        canGetBreak={owlGb.out}
      />
    </ToughGoldenBanana>
    </GBPool>
  )
}

export default OwlRace
