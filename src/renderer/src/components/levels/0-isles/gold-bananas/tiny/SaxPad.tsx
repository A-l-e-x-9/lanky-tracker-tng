import GBPool from '@renderer/components/pools/GB'
import { useCheckTinyMusicPad } from '@renderer/hooks/isles'
import IslesCheck from '../../check'

const SaxPad: React.FC = () => {
  const pad = useCheckTinyMusicPad()
  return <GBPool>
  <IslesCheck id={31} name="Tiny's Saxophone Pad" region="K. Rool's Island" canGetLogic={pad} />
  </GBPool>
}

export default SaxPad
