import { useCamera } from '@renderer/hooks/kongs'
import KKCheck from '../check'

const KremKapture: React.FC = () => {
  const hasFairyCam = useCamera()
  return (
    <>
      <KKCheck
        id={-1}
        name="Gnawty"
        canGetLogic={hasFairyCam}
      />
    </>
  )
}

export default KremKapture
