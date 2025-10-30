import GBPool from '@renderer/components/pools/GB'
import { useCheckDiddyCaves } from '@renderer/hooks/isles'
import IslesCheck from '../../check'

const GuitarPad: React.FC = () => {
  const cave = useCheckDiddyCaves()
  return (
  <GBPool>
    <IslesCheck
      id={13}
      name="Diddy's Guitar Pad"
      region="Caves-Helm Lobbies"
      canGetLogic={cave.in}
      canGetBreak={cave.out}
    />
    </GBPool>
  )
}

export default GuitarPad
