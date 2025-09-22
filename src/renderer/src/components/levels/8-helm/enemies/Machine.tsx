import { useDefeatKlump } from '@renderer/src/hooks/enemies'
import { useHelmMachine } from '@renderer/src/hooks/helm'
import {
  useBongos,
  useGuitar,
  useRocket,
  useSax,
  useTriangle,
  useTrombone,
  useCamera
} from '@renderer/src/hooks/kongs'
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
  const hasCamera = useCamera()
  return (
    <>
      <HelmCheck
        id={8309}
        name="Helm Enemy: DK Room"
        canGetLogic={helmMachine.in && bongos}
        canGetBreak={helmMachine.out && bongos}
      />
      <HelmCheck
        id={8310}
        name="Helm Enemy: Chunky Room 0"
        canGetLogic={helmMachine.in && triangle}
        canGetBreak={helmMachine.out && triangle}
      />
      <HelmCheck
        id={8311}
        name="Helm Enemy: Chunky Room 1"
        canGetLogic={helmMachine.in && triangle}
        canGetBreak={helmMachine.out && triangle}
      />
      <HelmCheck
        id={8312}
        name="Helm Enemy: Tiny Room"
        canGetLogic={helmMachine.in && sax}
        canGetBreak={helmMachine.out && sax && klump}
      />
      <HelmCheck
        id={8313}
        name="Helm Enemy: Lanky Room 0"
        canGetLogic={helmMachine.in && trombone}
        canGetBreak={helmMachine.out && trombone && klump}
      />
      <HelmCheck
        id={8314}
        name="Helm Enemy: Lanky Room 1"
        canGetLogic={helmMachine.in && trombone}
        canGetBreak={helmMachine.out && trombone}
      />
      <HelmCheck
        id={8315}
        name="Helm Enemy: Diddy Room 0"
        canGetLogic={helmMachine.in && guitar && rocket}
        canGetBreak={helmMachine.out && guitar && rocket}
      />
      <HelmCheck
        id={8316}
        name="Helm Enemy: Diddy Room 1"
        canGetLogic={helmMachine.in && guitar && rocket}
        canGetBreak={helmMachine.out && guitar && rocket}
      />
      <HelmCheck
        id={8409}
        name="Helm Enemy Photo: DK Room"
        canGetLogic={helmMachine.in && bongos && hasCamera}
        canGetBreak={helmMachine.out && bongos && hasCamera}
      />
      <HelmCheck
        id={8410}
        name="Helm Enemy Photo: Chunky Room 0"
        canGetLogic={helmMachine.in && triangle && hasCamera}
        canGetBreak={helmMachine.out && triangle && hasCamera}
      />
      <HelmCheck
        id={8411}
        name="Helm Enemy Photo: Chunky Room 1"
        canGetLogic={helmMachine.in && triangle && hasCamera}
        canGetBreak={helmMachine.out && triangle && hasCamera}
      />
      <HelmCheck
        id={8412}
        name="Helm Enemy Photo: Tiny Room"
        canGetLogic={helmMachine.in && sax && hasCamera}
        canGetBreak={helmMachine.out && sax && klump && hasCamera}
      />
      <HelmCheck
        id={8413}
        name="Helm Enemy Photo: Lanky Room 0"
        canGetLogic={helmMachine.in && trombone && hasCamera}
        canGetBreak={helmMachine.out && trombone && klump && hasCamera}
      />
      <HelmCheck
        id={8414}
        name="Helm Enemy Photo: Lanky Room 1"
        canGetLogic={helmMachine.in && trombone && hasCamera}
        canGetBreak={helmMachine.out && trombone && hasCamera}
      />
      <HelmCheck
        id={8415}
        name="Helm Enemy Photo: Diddy Room 0"
        canGetLogic={helmMachine.in && guitar && rocket && hasCamera}
        canGetBreak={helmMachine.out && guitar && rocket && hasCamera}
      />
      <HelmCheck
        id={8416}
        name="Helm Enemy Photo: Diddy Room 1"
        canGetLogic={helmMachine.in && guitar && rocket && hasCamera}
        canGetBreak={helmMachine.out && guitar && rocket && hasCamera}
      />
    </>
  )
}

export default HelmMachineEnemies
