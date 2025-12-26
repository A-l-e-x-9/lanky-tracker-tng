import DropPool from '@renderer/components/pools/Drops'
import { useCavesIgloo } from '@renderer/hooks/caves'
import { useDefeatKosha } from '@renderer/hooks/enemies'
import { useBongos, useSax } from '@renderer/hooks/kongs'
import CavesCheck from '../check'

const IglooEnemies: React.FC = () => {
  const igloo = useCavesIgloo()
  const kosha = useDefeatKosha()
  const bongos = useBongos()
  const sax = useSax()
  return (
    <DropPool>
      <CavesCheck
        id={6309}
        name="DK's 5-Door Igloo Right Enemy"
        region="Caves Igloo"
        canGetLogic={igloo.in && bongos && kosha.in}
        canGetBreak={igloo.out && bongos && kosha.out}
      />
      <CavesCheck
        id={6310}
        name="DK's 5-Door Igloo Left Enemy"
        region="Caves Igloo"
        canGetLogic={igloo.in && bongos && kosha.in}
        canGetBreak={igloo.out && bongos && kosha.out}
      />
      <CavesCheck
        id={6316}
        name="Enemy in Tiny's 5-Door Igloo"
        region="Caves Igloo"
        canGetLogic={igloo.in && sax && kosha.in}
        canGetBreak={igloo.out && sax && kosha.out}
      />
    </DropPool>
  )
}
export default IglooEnemies
