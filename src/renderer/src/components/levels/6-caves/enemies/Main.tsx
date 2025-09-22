import DropPool from '@renderer/src/components/pools/Drops'
import { usePlayCaves } from '@renderer/src/hooks/caves'
import { useDefeatKosha, useDefeatZinger } from '@renderer/src/hooks/enemies'
import { useAnyKong, useCamera } from '@renderer/src/hooks/kongs'
import CavesCheck from '../check'

const MainEnemies: React.FC = () => {
  const inStage = usePlayCaves()
  const anyKong = useAnyKong()
  const zinger = useDefeatZinger()
  const kosha = useDefeatKosha()
  const hasFairyCam = useCamera()
  return (
    <DropPool>
      <CavesCheck
        id={6300}
        name="Caves Enemy: Start"
        region="Main Caves Area"
        canGetLogic={inStage && anyKong}
      />
      <CavesCheck
        id={6301}
        name="Caves Enemy: Near Ice Castle"
        region="Main Caves Area"
        canGetLogic={inStage && anyKong}
      />
      <CavesCheck
        id={6304}
        name="Caves Enemy: Near Funky"
        region="Main Caves Area"
        canGetLogic={inStage && zinger.in}
        canGetBreak={inStage && zinger.out}
      />
      <CavesCheck
        id={6306}
        name="Caves Enemy: Near Bonus Room"
        region="Main Caves Area"
        canGetLogic={inStage && kosha.in}
        canGetBreak={inStage && kosha.out}
      />
      <CavesCheck
        id={6305}
        name="Caves Enemy: Near Snide"
        region="Main Caves Area"
        canGetLogic={inStage && kosha.in}
        canGetBreak={inStage && kosha.out}
      />
      <CavesCheck
        id={6400}
        name="Caves Enemy Photo: Start"
        region="Main Caves Area"
        canGetLogic={inStage && anyKong && hasFairyCam}
      />
      <CavesCheck
        id={6401}
        name="Caves Enemy Photo: Near Ice Castle"
        region="Main Caves Area"
        canGetLogic={inStage && anyKong && hasFairyCam}
      />
      <CavesCheck
        id={6404}
        name="Caves Enemy Photo: Near Funky"
        region="Main Caves Area"
        canGetLogic={inStage && hasFairyCam}
      />
      <CavesCheck
        id={6406}
        name="Caves Enemy Photo: Near Bonus Room"
        region="Main Caves Area"
        canGetLogic={inStage && hasFairyCam}
      />
      <CavesCheck
        id={6405}
        name="Caves Enemy Photo: Near Snide"
        region="Main Caves Area"
        canGetLogic={inStage && hasFairyCam}
      />
    </DropPool>
  )
}

export default MainEnemies
