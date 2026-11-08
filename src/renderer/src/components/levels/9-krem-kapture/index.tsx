import KremKapture from './enemy-list'
import { useKRoolKontracts } from '@renderer/hooks/isles'

const KKChecks: React.FC = () => {
const isKremKaptureSeed = useKRoolKontracts('Kremling Kapture') ? 'foolish' : ''
  return (
    <div className={`grid ${isKremKaptureSeed}`}>
      <KremKapture />
    </div>
  )
}

export default KKChecks
