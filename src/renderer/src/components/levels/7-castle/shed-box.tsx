import BreakablePool from '@renderer/components/pools/Breakable'
import { usePlayCastle } from '@renderer/hooks/castle'
import { usePunch } from '@renderer/hooks/kongs'
import CastleCheck from './check'

const ShedBox: React.FC = () => {
  const isBreathing = usePlayCastle()
  const canGetInShed = usePunch()
  return (
    <BreakablePool>
      <CastleCheck
        id={76700}
        name="? Box holding the Gone pad in Chunky's shed"
        region="Creepy Castle Main"
        canGetLogic={isBreathing.in && canGetInShed}
        canGetBreak={isBreathing.out && canGetInShed}
      />
    </BoulderPool>
  )
}

export default ShedBox
