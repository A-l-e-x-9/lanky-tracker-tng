import DropPool from '@renderer/components/pools/Drops'
import { useDefeatKlump } from '@renderer/hooks/enemies'
import { useJapesMine, useSlamJapes } from '@renderer/hooks/japes'
import { useCharge, useCamera } from '@renderer/hooks/kongs'
import JapesCheck from '../check'

const CaveEnemies: React.FC = () => {
  const canSlam = useSlamJapes()
  const mine = useJapesMine()
  const klump = useDefeatKlump()
  const charge = useCharge()
  const hasFairyCam = useCamera()
  return (
    <DropPool>
      <JapesCheck
        id={1325}
        name="Japes Enemy: Mountain Start 0"
        region="Japes Caves And Mines"
        canGetLogic={mine}
      />
      <JapesCheck
        id={1326}
        name="Japes Enemy: Mountain Start 1"
        region="Japes Caves And Mines"
        canGetLogic={mine}
      />
      <JapesCheck
        id={1327}
        name="Japes Enemy: Mountain Start 2"
        region="Japes Caves And Mines"
        canGetLogic={mine}
      />
      <JapesCheck
        id={1328}
        name="Japes Enemy: Mountain Start 3"
        region="Japes Caves And Mines"
        canGetLogic={mine}
      />
      <JapesCheck
        id={1329}
        name="Japes Enemy: Mountain Start 4"
        region="Japes Caves And Mines"
        canGetLogic={mine}
      />
      <JapesCheck
        id={1330}
        name="Japes Enemy: Mountain Gate 0"
        region="Japes Caves And Mines"
        canGetLogic={mine}
      />
      <JapesCheck
        id={1331}
        name="Japes Enemy: Mountain Gate 1"
        region="Japes Caves And Mines"
        canGetLogic={mine}
      />
      <JapesCheck
        id={1332}
        name="Japes Enemy: Mountain Charge Switch"
        region="Japes Caves And Mines"
        canGetLogic={mine && charge && klump}
      />
      <JapesCheck
        id={1333}
        name="Japes Enemy: Mountain Conveyor 0"
        region="Japes Caves And Mines"
        canGetLogic={mine && canSlam && klump}
      />
      <JapesCheck
        id={1334}
        name="Japes Enemy: Mountain Conveyor 1"
        region="Japes Caves And Mines"
        canGetLogic={mine && canSlam && klump}
      />
      <JapesCheck
        id={1425}
        name="Japes Enemy Photo: Mountain Start 0"
        region="Japes Caves And Mines"
        canGetLogic={mine && hasFairyCam}
      />
      <JapesCheck
        id={1426}
        name="Japes Enemy Photo: Mountain Start 1"
        region="Japes Caves And Mines"
        canGetLogic={mine && hasFairyCam}
      />
      <JapesCheck
        id={1427}
        name="Japes Enemy Photo: Mountain Start 2"
        region="Japes Caves And Mines"
        canGetLogic={mine && hasFairyCam}
      />
      <JapesCheck
        id={1428}
        name="Japes Enemy Photo: Mountain Start 3"
        region="Japes Caves And Mines"
        canGetLogic={mine && hasFairyCam}
      />
      <JapesCheck
        id={1429}
        name="Japes Enemy Photo: Mountain Start 4"
        region="Japes Caves And Mines"
        canGetLogic={mine && hasFairyCam}
      />
      <JapesCheck
        id={1430}
        name="Japes Enemy Photo: Mountain Gate 0"
        region="Japes Caves And Mines"
        canGetLogic={mine && hasFairyCam}
      />
      <JapesCheck
        id={1431}
        name="Japes Enemy Photo: Mountain Gate 1"
        region="Japes Caves And Mines"
        canGetLogic={mine && hasFairyCam}
      />
      <JapesCheck
        id={1432}
        name="Japes Enemy Photo: Mountain Charge Switch"
        region="Japes Caves And Mines"
        canGetLogic={mine && charge && klump && hasFairyCam}
      />
      <JapesCheck
        id={1433}
        name="Japes Enemy Photo: Mountain Conveyor 0"
        region="Japes Caves And Mines"
        canGetLogic={mine && canSlam && klump && hasFairyCam}
      />
      <JapesCheck
        id={1434}
        name="Japes Enemy Photo: Mountain Conveyor 1"
        region="Japes Caves And Mines"
        canGetLogic={mine && canSlam && klump && hasFairyCam}
      />
    </DropPool>
  )
}

export default CaveEnemies
