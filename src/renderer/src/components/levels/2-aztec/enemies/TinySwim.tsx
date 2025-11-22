import DropPool from '@renderer/components/pools/Drops'
import { useAztecTinyTemple, useTinyTempleIce } from '@renderer/hooks/aztec'
import { useDive } from '@renderer/hooks/kongs'
import AztecCheck from '../check'

const TinySwimEnemies: React.FC = () => {
  const tiny = useAztecTinyTemple()
  const dive = useDive()
  const iceMelted = useTinyTempleIce()
  return (
    <DropPool>
      <AztecCheck
        id={2367}
        name="Tiny's Prison Guard 0"
        region="Tiny Temple"
        canGetLogic={tiny.in && iceMelted && dive.in}
        canGetBreak={tiny.out && iceMelted && dive.out}
      />
      <AztecCheck
        id={2368}
        name="Tiny's Prison Guard 1"
        region="Tiny Temple"
        canGetLogic={tiny.in && iceMelted && dive.in}
        canGetBreak={tiny.out && iceMelted && dive.out}
      />
      <AztecCheck
        id={2369}
        name="Tiny's Prison Guard 2"
        region="Tiny Temple"
        canGetLogic={tiny.in && iceMelted && dive.in}
        canGetBreak={tiny.out && iceMelted && dive.out}
      />
      <AztecCheck
        id={2370}
        name="Tiny's Prison Guard 3"
        region="Tiny Temple"
        canGetLogic={tiny.in && iceMelted && dive.in}
        canGetBreak={tiny.out && iceMelted && dive.out}
      />
      <AztecCheck
        id={2371}
        name="Tiny's Prison Guard 4"
        region="Tiny Temple"
        canGetLogic={tiny.in && iceMelted && dive.in}
        canGetBreak={tiny.out && iceMelted && dive.out}
      />
    </DropPool>
  )
}

export default TinySwimEnemies
