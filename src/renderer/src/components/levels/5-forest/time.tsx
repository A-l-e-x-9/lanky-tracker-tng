import { TimePool } from '@renderer/components/pools/Misc'
import { usePlayForest } from '@renderer/hooks/forest'
import { useAnyKong, useCannons, useRocket, useClimbing, useAnyGun, useOrange } from '@renderer/hooks/kongs'
import ForestCheck from './check'

const ForestTime: React.FC = () => {
  const inStage = usePlayForest()
  const anyKong = useAnyKong()
  const hasCannons = useCannons()
  const hasJetbarrel = useRocket()
  const hasClimbing = useClimbing()
  const hasAGun = useAnyGun()
  const hasOranges = useOrange()
  return (
    <TimePool>
      <ForestCheck
        id={5067}
        name="Daytime switch on the big clock"
        region="Forest Central Area"
        canGetLogic={inStage.in && anyKong && (hasCannons || hasJetbarrel) && hasAGun}
        canGetBreak={inStage.out && anyKong && hasClimbing && hasOranges}
      />
      <ForestCheck
        id={5069}
        name="Night switch on the big clock"
        region="Forest Central Area"
        canGetLogic={inStage.in && anyKong && (hasCannons || hasJetbarrel) && hasAGun}
        canGetBreak={inStage.out && anyKong && hasClimbing && hasOranges}
      />
    </TimePool>
  )
}

export default ForestTime
