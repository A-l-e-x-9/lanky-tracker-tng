import DropPool from '@renderer/components/pools/Drops'
import { useDefeatKlump, useDefeatZinger } from '@renderer/hooks/enemies'
import { useJapesMine, useSlamJapes } from '@renderer/hooks/japes'
import { useCharge, useCamera } from '@renderer/hooks/kongs'
import JapesCheck from '../check'

const CaveEnemies: React.FC = () => {
  const canSlam = useSlamJapes()
  const mine = useJapesMine()
  const klump = useDefeatKlump()
  const charge = useCharge()
  const hasFairyCam = useCamera()
  const isZinger = useDefeatZinger()
  return (
    <DropPool>
      <JapesCheck
        id={1325}
        name="Diddy's Mountain Start Area Enemy 0"
        region="Japes Caves and Mines"
        canGetLogic={mine}
      />
      <JapesCheck
        id={1326}
        name="Diddy's Mountain Start Area Enemy 1"
        region="Japes Caves and Mines"
        canGetLogic={mine}
      />
      <JapesCheck
        id={1327}
        name="Diddy's Mountain Start Area Enemy 2"
        region="Japes Caves and Mines"
        canGetLogic={mine}
      />
      <JapesCheck
        id={1328}
        name="Diddy's Mountain Start Area Enemy 3"
        region="Japes Caves and Mines"
        canGetLogic={mine && isZinger.in}
        canGetBreak={mine && isZinger.out}
      />
      <JapesCheck
        id={1329}
        name="Diddy's Mountain Start Area Start 4"
        region="Japes Caves and Mines"
        canGetLogic={mine && isZinger.in}
        canGetBreak={mine && isZinger.out}
      />
      <JapesCheck
        id={1330}
        name="Diddy's Mountain Enemy 0 at the Gate"
        region="Japes Caves and Mines"
        canGetLogic={mine && isZinger.in}
        canGetBreak={mine && isZinger.out}
      />
      <JapesCheck
        id={1331}
        name="Diddy's Mountain Enemy 1 at the Gate"
        region="Japes Caves and Mines"
        canGetLogic={mine && isZinger.in}
        canGetBreak={mine && isZinger.out}
      />
      <JapesCheck
        id={1332}
        name="Diddy's Mountain Enemy at the Conveyor Belt Controls"
        region="Japes Caves and Mines"
        canGetLogic={mine && charge && klump}
      />
      <JapesCheck
        id={1333}
        name="Diddy's Mountain Enemy 0 in the Conveyor Area"
        region="Japes Caves and Mines"
        canGetLogic={mine && canSlam && klump}
      />
      <JapesCheck
        id={1334}
        name="Diddy's Mountain Enemy 1 in the Conveyor Area"
        region="Japes Caves and Mines"
        canGetLogic={mine && canSlam && klump}
      />
      <JapesCheck
        id={1425}
        name="Photo of Diddy's Mountain Start Area Enemy 0"
        region="Japes Caves and Mines"
        canGetLogic={mine && hasFairyCam}
      />
      <JapesCheck
        id={1426}
        name="Photo of Diddy's Mountain Start Area Enemy 1"
        region="Japes Caves and Mines"
        canGetLogic={mine && hasFairyCam}
      />
      <JapesCheck
        id={1427}
        name="Photo of Diddy's Mountain Start Area Enemy 2"
        region="Japes Caves and Mines"
        canGetLogic={mine && hasFairyCam}
      />
      <JapesCheck
        id={1428}
        name="Photo of Diddy's Mountain Start Area Enemy 3"
        region="Japes Caves and Mines"
        canGetLogic={mine && hasFairyCam}
      />
      <JapesCheck
        id={1429}
        name="Photo of Diddy's Mountain Start Area Enemy 4"
        region="Japes Caves and Mines"
        canGetLogic={mine && hasFairyCam}
      />
      <JapesCheck
        id={1430}
        name="Photo of Diddy's Mountain Enemy 0 at the Gate"
        region="Japes Caves and Mines"
        canGetLogic={mine && hasFairyCam}
      />
      <JapesCheck
        id={1431}
        name="Photo of Diddy's Mountain Enemy 1 at the Gate"
        region="Japes Caves and Mines"
        canGetLogic={mine && hasFairyCam}
      />
      <JapesCheck
        id={1432}
        name="Photo of Diddy's Mountain Enemy at the Conveyor Belt Controls"
        region="Japes Caves and Mines"
        canGetLogic={mine && charge && klump && hasFairyCam}
      />
      <JapesCheck
        id={1433}
        name="Photo of Diddy's Mountain Enemy 0 in the Conveyor Area"
        region="Japes Caves and Mines"
        canGetLogic={mine && canSlam && klump && hasFairyCam}
      />
      <JapesCheck
        id={1434}
        name="Photo of Diddy's Mountain Enemy 1 in the Conveyor Area"
        region="Japes Caves and Mines"
        canGetLogic={mine && canSlam && klump && hasFairyCam}
      />
    </DropPool>
  )
}

export default CaveEnemies
