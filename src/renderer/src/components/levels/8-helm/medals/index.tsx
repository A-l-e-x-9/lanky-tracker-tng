import BananaMedalPool from '@renderer/src/components/pools/BananaMedals'
import { useHelmMachine } from '@renderer/src/hooks/helm'
import {
  useBongos,
  useGuitar,
  useRocket,
  useSax,
  useTriangle,
  useTrombone
} from '@renderer/src/hooks/kongs'
import HelmCheck from '../check'

const MedalLocations: React.FC = () => {
  const helmMachine = useHelmMachine()
  const bongos = useBongos()
  const guitar = useGuitar()
  const rocket = useRocket()
  const trombone = useTrombone()
  const sax = useSax()
  const triangle = useTriangle()
  return (
    <BananaMedalPool>
      <HelmCheck id={8100} name="Helm DK Banana Medal" canGetLogic={helmMachine.in && bongos} canGetBreak={helmMachine.out && bongos} />
      <HelmCheck
        id={8101}
        name="Helm Diddy Banana Medal"
        canGetLogic={helmMachine.in && guitar && rocket}
        canGetBreak={helmMachine.out && guitar && rocket}
      />
      <HelmCheck id={8102} name="Helm Lanky Banana Medal" canGetLogic={helmMachine.in && trombone} canGetBreak={helmMachine.out && trombone} />
      <HelmCheck id={8103} name="Helm Tiny Banana Medal" canGetLogic={helmMachine.in && sax} canGetBreak={helmMachine.out && sax} />
      <HelmCheck id={8104} name="Helm Chunky Banana Medal" canGetLogic={helmMachine.in && triangle} canGetBreak={helmMachine.out && triangle} />
    </BananaMedalPool>
  )
}

export default MedalLocations
