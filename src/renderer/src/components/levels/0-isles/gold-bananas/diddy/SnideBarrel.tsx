import { useCheckDiddySnide } from '@renderer/hooks/isles'
import IslesCheck from '../../check'

const SnideBarrel: React.FC = () => {
  const snide = useCheckDiddySnide()
  return (
    <IslesCheck
      id={10}
      name="Spring Barrel at Snide's"
      region="K. Rool's Island"
      canGetLogic={snide.in}
      canGetBreak={snide.out}
    />
  )
}

export default SnideBarrel
