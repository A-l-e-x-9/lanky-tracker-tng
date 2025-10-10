import { useCheckTinyGalleonLobby } from '@renderer/hooks/isles'
import IslesCheck from '../../check'

const GalleonSwim: React.FC = () => {
  const checkTinyGalleon = useCheckTinyGalleonLobby()
  return (
    <IslesCheck
      id={33}
      name="Tiny's Galleon Lobby Swimming Banana"
      region="Japes-Forest Lobbies"
      canGetLogic={checkTinyGalleon.in}
      canGetBreak={checkTinyGalleon.out}
    />
  )
}

export default GalleonSwim
