import GBPool from '@renderer/components/pools/GB'
import { useCheckDkMusicPad } from '@renderer/hooks/isles'
import IslesCheck from '../../check'

const BongosPad: React.FC = () => {
  const pad = useCheckDkMusicPad()
  return (
  <GBPool>
    <IslesCheck
      id={3}
      name="DK's Bongo Pad"
      region="Japes-Forest Lobbies"
      canGetLogic={pad.in}
      canGetBreak={pad.out}
    />
    </GBPool>
  )
}

export default BongosPad
