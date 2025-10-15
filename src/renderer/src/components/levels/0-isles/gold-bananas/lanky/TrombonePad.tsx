import { useCheckLankyMusicPad } from '@renderer/hooks/isles'
import IslesCheck from '../../check'

const TrombonePad: React.FC = () => {
  const music = useCheckLankyMusicPad()
  return (
    <IslesCheck
      id={22}
      name="Trombone Pad in Japes Lobby"
      region="Japes-Forest Lobbies"
      canGetLogic={music}
    />
  )
}

export default TrombonePad
