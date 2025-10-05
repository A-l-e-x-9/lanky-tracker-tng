import { useCheckLankyCage } from '@renderer/hooks/isles'
import IslesCheck from '../../check'

const GrapeCage: React.FC = () => {
  const cage = useCheckLankyCage()
  return <IslesCheck id={20} name="Lanky's Grape Cage at Back of K. Lumsy's Island" region="K. Rool's Island" canGetLogic={cage} />
}

export default GrapeCage
