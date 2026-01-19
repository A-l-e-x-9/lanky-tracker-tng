import { useDefeatKlump } from '@renderer/hooks/enemies'
import { usePlayHelm } from '@renderer/hooks/helm'
import { useAnyKong, useVine, useStand, usePineapple } from '@renderer/hooks/kongs'
import HelmCheck from '../check'

const HelmEntryEnemies: React.FC = () => {
  const helmEntry = usePlayHelm()
  const hasOStand = useStand()
  const hasPineapples = usePineapple()
  const hasVines = useVine()
  const anyKong = useAnyKong()
  const klump = useDefeatKlump()
  return (
    <>
      <HelmCheck id={8300} name="Enemy 0 at Start" canGetLogic={helmEntry.in && anyKong}
        canGetBreak={helmEntry.out && anyKong}
      />
      <HelmCheck id={8301} name="Enemy 1 at Start" canGetLogic={helmEntry.in && anyKong}
        canGetBreak={helmEntry.out && anyKong}
      />
      <HelmCheck id={8302} name="Enemy Halfway Up Hill" canGetLogic={helmEntry.in && anyKong && klump}
        canGetBreak={helmEntry.out && anyKong && klump}
      />
      <HelmCheck
        id={8303}
        name="Enemy 0 Near Pineapple Switch"
        canGetLogic={helmEntry.in && anyKong && klump}
        canGetBreak={helmEntry.out && anyKong && klump}
      />
      <HelmCheck id={8304} name="Enemy 1 Near Pineapple Switch" canGetLogic={helmEntry.in && anyKong}
        canGetBreak={helmEntry.out && anyKong}
      />
      <HelmCheck id={8305} name="Enemy 0 at Mini Room" canGetLogic={helmEntry.in && hasOStand && hasPineapples && hasVines}
        canGetBreak={helmEntry.out && hasOStand && hasPineapples && hasVines}
      />
      <HelmCheck id={8306} name="Enemy 1 at Mini Room" canGetLogic={helmEntry.in && hasOStand && hasPineapples && hasVines}
        canGetBreak={helmEntry.out && hasOStand && hasPineapples && hasVines}
      />
      <HelmCheck id={8307} name="Enemy 2 at Mini Room" canGetLogic={helmEntry.in && hasOStand && hasPineapples && hasVines}
        canGetBreak={helmEntry.out && hasOStand && hasPineapples && hasVines}
      />
      <HelmCheck id={8308} name="Enemy 3 at Mini Room" canGetLogic={helmEntry.in && hasOStand && hasPineapples && hasVines}
        canGetBreak={helmEntry.out && hasOStand && hasPineapples && hasVines}
      />
    </>
  )
}
export default HelmEntryEnemies
