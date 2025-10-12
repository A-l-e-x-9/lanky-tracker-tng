import { useDefeatKlump } from '@renderer/hooks/enemies'
import { useHelmMachine } from '@renderer/hooks/helm'
import {
  useBongos,
  useGuitar,
  useRocket,
  useSax,
  useTriangle,
  useTrombone
} from '@renderer/hooks/kongs'
import HelmCheck from '../check'

const HelmMachineEnemies: React.FC = () => {
  const helmMachine = useHelmMachine()
  const bongos = useBongos()
  const guitar = useGuitar()
  const rocket = useRocket()
  const trombone = useTrombone()
  const sax = useSax()
  const triangle = useTriangle()
  const klump = useDefeatKlump()
  return (
    <>
      <HelmCheck
        id={8309}
        name="Enemy in DK's Room"
        canGetLogic={helmMachine.in && bongos}
        canGetBreak={helmMachine.out && bongos}
      />
      <HelmCheck
        id={8310}
        name="Enemy 0 in Chunky's Room"
        canGetLogic={helmMachine.in && triangle}
        canGetBreak={helmMachine.out && triangle}
      />
      <HelmCheck
        id={8311}
        name="Enemy 1 in Chunky's Room"
        canGetLogic={helmMachine.in && triangle}
        canGetBreak={helmMachine.out && triangle}
      />
      <HelmCheck
        id={8312}
        name="Enemy in Tiny's Room"
        canGetLogic={helmMachine.in && sax}
        canGetBreak={helmMachine.out && sax && klump}
      />
      <HelmCheck
        id={8313}
        name="Enemy 0 in Lanky's Room"
        canGetLogic={helmMachine.in && trombone}
        canGetBreak={helmMachine.out && trombone && klump}
      />
      <HelmCheck
        id={8314}
        name="Enemy 1 in Lanky's Room"
        canGetLogic={helmMachine.in && trombone}
        canGetBreak={helmMachine.out && trombone}
      />
      <HelmCheck
        id={8315}
        name="Enemy 0 in Diddy's Room"
        canGetLogic={helmMachine.in && guitar && rocket}
        canGetBreak={helmMachine.out && guitar && rocket}
      />
      <HelmCheck
        id={8316}
        name="Enemy 1 in Diddy's Room"
        canGetLogic={helmMachine.in && guitar && rocket}
        canGetBreak={helmMachine.out && guitar && rocket}
      />
    </>
  )
}

export default HelmMachineEnemies
