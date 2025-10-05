import { useCheckTinyMusicPad } from '@renderer/hooks/isles'
import IslesCheck from '../../check'

const SaxPad: React.FC = () => {
  const pad = useCheckTinyMusicPad()
  return <IslesCheck id={31} name="Tiny's Saxophone Pad" region="K. Rool's Island" canGetLogic={pad} />
}

export default SaxPad
