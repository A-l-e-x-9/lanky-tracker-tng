import GBPool from '@renderer/components/pools/GB'
import { useCheckChunkyHelm } from '@renderer/hooks/isles'
import IslesCheck from '../../check'

const HelmBarrel: React.FC = () => {
  const helm = useCheckChunkyHelm()
  return (
  <GBPool>
    <IslesCheck
      id={43}
      name="Chunky's Helm Lobby Barrel"
      region="Caves-Helm Lobbies"
      canGetLogic={helm.in}
      canGetBreak={helm.out}
    />
    </GBPool>
  )
}

export default HelmBarrel
