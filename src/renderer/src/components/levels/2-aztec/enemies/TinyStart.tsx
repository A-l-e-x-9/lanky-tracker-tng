import DropPool from '@renderer/components/pools/Drops'
import { useAztecTinyTemple } from '@renderer/hooks/aztec'
import AztecCheck from '../check'
import { useDefeatToughEnemy } from '@renderer/hooks/enemies'

const TinyStartEnemies: React.FC = () => {
  const tiny = useAztecTinyTemple()
  const klobber = useDefeatToughEnemy()
  return (
    <DropPool>
      <AztecCheck
        id={2362}
        name="Chunky Klaptrap Guard 0"
        region="Tiny Temple"
        canGetLogic={tiny.in && klobber}
        canGetBreak={tiny.out && klobber}
      />
      <AztecCheck
        id={2363}
        name="Chunky Klaptrap Guard 1"
        region="Tiny Temple"
        canGetLogic={tiny.in && klobber}
        canGetBreak={tiny.out && klobber}
      />
      <AztecCheck
        id={2364}
        name="Main Room Enemy 0"
        region="Tiny Temple"
        canGetLogic={tiny.in}
        canGetBreak={tiny.out}
      />
      <AztecCheck
        id={2365}
        name="Main Room Enemy 1"
        region="Tiny Temple"
        canGetLogic={tiny.in}
        canGetBreak={tiny.out}
      />
      <AztecCheck
        id={2366}
        name="Main Room Enemy 2"
        region="Tiny Temple"
        canGetLogic={tiny.in}
        canGetBreak={tiny.out}
      />
    </DropPool>
  )
}

export default TinyStartEnemies
