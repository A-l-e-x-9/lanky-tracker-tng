import { useCheckDkMusicPad } from '@renderer/hooks/isles'
import IslesCheck from '../../check'

const BongosPad: React.FC = () => {
  const pad = useCheckDkMusicPad()
  return (
    <IslesCheck
      id={3}
      name="DK's Bongo Pad"
      region="Japes-Forest Lobbies"
      canGetLogic={pad.in}
      canGetBreak={pad.out}
    />
  )
}

export default BongosPad
