import { useCheckDkJapesRock } from '@renderer/src/hooks/isles'
import IslesCheck from '../../check'

export const JapesRock: React.FC = () => {
  const japesRock = useCheckDkJapesRock()
  return (
    <IslesCheck
      id={1}
      name="Isles Japes Lobby Entrance Item"
      region="Main Isle"
      canGetLogic={japesRock}
    />
  )
}

export default JapesRock
