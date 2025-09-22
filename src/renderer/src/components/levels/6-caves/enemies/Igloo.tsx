import DropPool from '@renderer/src/components/pools/Drops'
import { useCavesIgloo } from '@renderer/src/hooks/caves'
import { useDefeatKosha } from '@renderer/src/hooks/enemies'
import { useBongos, useSax, useCamera } from '@renderer/src/hooks/kongs'
import CavesCheck from '../check'

const IglooEnemies: React.FC = () => {
  const igloo = useCavesIgloo()
  const kosha = useDefeatKosha()
  const bongos = useBongos()
  const sax = useSax()
  const hasFairyCam = useCamera()
  return (
    <DropPool>
      <CavesCheck
        id={6309}
        name="Caves Enemy: DK Igloo Right"
        region="Igloo Area"
        canGetLogic={igloo && bongos && kosha.in}
        canGetBreak={igloo && bongos && kosha.out}
      />
      <CavesCheck
        id={6310}
        name="Caves Enemy: DK Igloo Left"
        region="Igloo Area"
        canGetLogic={igloo && bongos && kosha.in}
        canGetBreak={igloo && bongos && kosha.out}
      />
      <CavesCheck
        id={6316}
        name="Caves Enemy: Tiny Igloo Big"
        region="Igloo Area"
        canGetLogic={igloo && sax && kosha.in}
        canGetBreak={igloo && sax && kosha.out}
      />
      <CavesCheck
        id={6409}
        name="Caves Enemy Photo: DK Igloo Right"
        region="Igloo Area"
        canGetLogic={igloo && bongos && hasFairyCam}
      />
      <CavesCheck
        id={6410}
        name="Caves Enemy Photo: DK Igloo Left"
        region="Igloo Area"
        canGetLogic={igloo && bongos && hasFairyCam}
      />
      <CavesCheck
        id={6416}
        name="Caves Enemy Photo: Tiny Igloo Big"
        region="Igloo Area"
        canGetLogic={igloo && sax && hasFairyCam}
      />
    </DropPool>
  )
}
export default IglooEnemies
