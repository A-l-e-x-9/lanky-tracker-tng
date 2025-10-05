import { useCheckChunkyMusicPad } from '@renderer/hooks/isles'
import IslesCheck from '../../check'

const TrianglePad: React.FC = () => {
  const music = useCheckChunkyMusicPad()
  return (
    <IslesCheck id={41} name="Chunky's Triangle Pad" region="DK Island" canGetLogic={music} />
  )
}

export default TrianglePad
