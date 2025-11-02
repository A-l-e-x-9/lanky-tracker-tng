import GBPool from '@renderer/components/pools/GB'
import { useCheckChunkyMusicPad } from '@renderer/hooks/isles'
import IslesCheck from '../../check'

const TrianglePad: React.FC = () => {
  const music = useCheckChunkyMusicPad()
  return (
  <GBPool>
    <IslesCheck id={41} name="Chunky's Triangle Pad" region="DK Island" canGetLogic={music.in}
    canGetBreak={music.out} />
    </GBPool>
  )
}

export default TrianglePad
