import ArenaPool from '@renderer/src/components/pools/Arenas'
import { useHelmEnter } from '@renderer/src/hooks/helm'
import { useAnyKong } from '@renderer/src/hooks/kongs'
import { useShuffledArenas } from '@renderer/src/hooks/settings'
import HelmCheck from '../check'

const Shuffled: React.FC = () => {
  const inStage = useHelmEnter()
  const anyKong = useAnyKong()
  return (
    <ArenaPool>
      <HelmCheck id={8190} name="Helm Arena" canGetLogic={inStage && anyKong} />
    </ArenaPool>
  )
}

const ShuffledArenas: React.FC = () => (!useShuffledArenas() ? null : <Shuffled />)
export default ShuffledArenas
