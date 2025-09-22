import { useDefeatKlump } from '@renderer/src/hooks/enemies'
import { usePlayHelm } from '@renderer/src/hooks/helm'
import { useAnyKong, useCamera } from '@renderer/src/hooks/kongs'
import HelmCheck from '../check'

const HelmEntryEnemies: React.FC = () => {
  const helmEntry = usePlayHelm()
  const anyKong = useAnyKong()
  const klump = useDefeatKlump()
  const hasFairyCam = useCamera()
  return (
    <>
      <HelmCheck id={8300} name="Helm Enemy: Start 0" canGetLogic={helmEntry && anyKong} />
      <HelmCheck id={8301} name="Helm Enemy: Start 1" canGetLogic={helmEntry && anyKong} />
      <HelmCheck id={8302} name="Helm Enemy: Hill" canGetLogic={helmEntry && anyKong && klump} />
      <HelmCheck
        id={8303}
        name="Helm Enemy: Switch Room 0"
        canGetLogic={helmEntry && anyKong && klump}
      />
      <HelmCheck id={8304} name="Helm Enemy: Switch Room 1" canGetLogic={helmEntry && anyKong} />
      <HelmCheck id={8305} name="Helm Enemy: Mini Room 0" canGetLogic={helmEntry && anyKong} />
      <HelmCheck id={8306} name="Helm Enemy: Mini Room 1" canGetLogic={helmEntry && anyKong} />
      <HelmCheck id={8307} name="Helm Enemy: Mini Room 2" canGetLogic={helmEntry && anyKong} />
      <HelmCheck id={8308} name="Helm Enemy: Mini Room 3" canGetLogic={helmEntry && anyKong} />
      <HelmCheck id={8400} name="Helm Enemy Photo: Start 0" canGetLogic={helmEntry && anyKong && hasFairyCam} />
      <HelmCheck id={8401} name="Helm Enemy Photo: Start 1" canGetLogic={helmEntry && anyKong && hasFairyCam} />
      <HelmCheck id={8402} name="Helm Enemy Photo: Hill" canGetLogic={helmEntry && anyKong && klump && hasFairyCam} />
      <HelmCheck
        id={8403}
        name="Helm Enemy Photo: Switch Room 0"
        canGetLogic={helmEntry && anyKong && klump && hasFairyCam}
      />
      <HelmCheck id={8404} name="Helm Enemy Photo: Switch Room 1" canGetLogic={helmEntry && anyKong && hasFairyCam} />
      <HelmCheck id={8405} name="Helm Enemy Photo: Mini Room 0" canGetLogic={helmEntry && anyKong && hasFairyCam} />
      <HelmCheck id={8406} name="Helm Enemy Photo: Mini Room 1" canGetLogic={helmEntry && anyKong && hasFairyCam} />
      <HelmCheck id={8407} name="Helm Enemy Photo: Mini Room 2" canGetLogic={helmEntry && anyKong && hasFairyCam} />
      <HelmCheck id={8408} name="Helm Enemy Photo: Mini Room 3" canGetLogic={helmEntry && anyKong && hasFairyCam} />

    </>
  )
}
export default HelmEntryEnemies
