import { useCheckDkJapesRock } from '@renderer/hooks/isles'
import IslesCheck from '../../check'

export const JapesRock: React.FC = () => {
  const japesRock = useCheckDkJapesRock()
  return (
    <IslesCheck
      id={1}
      name="The First Banana (Japes lobby entrance)"
      region="DK Island"
      canGetLogic={japesRock}
    />
  )
}

export default JapesRock
