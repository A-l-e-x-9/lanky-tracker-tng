import GBPool '@renderer/components/pools/GB'
import { useCheckDiddySnide } from '@renderer/hooks/isles'
import IslesCheck from '../../check'

const SnideBarrel: React.FC = () => {
  const snide = useCheckDiddySnide()
  return (
  <GBPool>
    <IslesCheck
      id={10}
      name="Spring Barrel at Snide's"
      region="K. Rool's Island"
      canGetLogic={snide.in}
      canGetBreak={snide.out}
    />
    </GBPool>
  )
}

export default SnideBarrel
