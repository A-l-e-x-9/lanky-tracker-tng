import { WheelEvent } from 'react'
import { useShallow } from 'zustand/react/shallow'

import useDonkStore from '@renderer/store'
import { Boss } from '@renderer/store/common'
import { useAnyKong, useBarrel, useBlast, useDk, useFeather, useGone, useHunky, useMini, useOrange, usePeanut, usePunch, useRocket, useSlam, useTiny, useTrombone, useTwirl } from '@renderer/hooks/kongs'
import { useBalancedRoolPhase } from '@renderer/hooks/settings'

import dogadon1Icon from '../../assets/images/dogadon-1.png'
import kutoutIcon from '../../assets/images/kutout.png'
import armyDillo2Icon from '../../assets/images/army-dillo-2.png'
import madJackIcon from '../../assets/images/mad-jack.png'
import dogadon2Icon from '../../assets/images/dogadon-2.png'
import puftossIcon from '../../assets/images/puftoss.png'
import armyDillo1Icon from '../../assets/images/army-dillo-1.png'
import kRoolDKIcon from '../../assets/images/krool-dk.png'
import kRoolDiddyIcon from '../../assets/images/krool-diddy.png'
import kRoolLankyIcon from '../../assets/images/krool-lanky.png'
import kRoolTinyIcon from '../../assets/images/krool-tiny.png'
import kRoolChunkyIcon from '../../assets/images/krool-chunky.png'
import unknownIcon from '../../assets/images/unknown-small.png'

type BossSelectorProps = {
  storeKey: string
}

const bossToIcon = (boss: Boss): string => {
  switch (boss) {
    case 'Army Dillo 1':
      return armyDillo1Icon
    case 'Dogadon 1':
      return dogadon1Icon
    case 'Mad Jack':
      return madJackIcon
    case 'Puftoss':
      return puftossIcon
    case 'Dogadon 2':
      return dogadon2Icon
    case 'Army Dillo 2':
      return armyDillo2Icon
    case 'Kutout':
      return kutoutIcon
    case 'DK Phase of K. Rool':
      return kRoolDKIcon
    case 'Diddy Phase of K. Rool':
      return kRoolDiddyIcon
    case 'Lanky Phase of K. Rool':
      return kRoolLankyIcon
    case 'Tiny Phase of K. Rool':
      return kRoolTinyIcon
    case 'Chunky Phase of K. Rool':
      return kRoolChunkyIcon
    default:
      return unknownIcon
  }
}

const bossState = (boss: Boss): string => {
  const anyKong = useAnyKong()
  const barrel = useBarrel()
  const blast = useBlast()
  const dk = useDk()
  const dkRequiresBlast = useBalancedRoolPhase()
  const feathers = useFeather()
  const gone = useGone()
  const jetbarrel = useRocket()
  const hunky = useHunky()
  const mini = useMini()
  const oranges = useOrange()
  const peanuts = usePeanut()
  const punch = usePunch()
  const slam = useSlam()
  const trombone = useTrombone()
  const twirl = useTwirl()
  const tiny = useTiny()
  switch (boss) {
    case 'Army Dillo 1':
      if (anyKong && barrel) {
        return 'available'
      } else {
        return 'not-available'
      }
    case 'Dogadon 1':
      if (anyKong && barrel) {
        return 'available'
      } else {
        return 'not-available'
      }
    case 'Mad Jack':
      if (twirl) {
        return 'available'
      } else if (tiny || dk) {
        return 'logic-break'
      } else  {
        return 'not-available'
      }
    case 'Puftoss':
      if (anyKong) {
        return 'available'
      } else {
        return 'not-available'
      }
    case 'Dogadon 2':
      if (hunky && barrel) {
        return 'available'
      } else {
        return 'not-available'
      }
    case 'Army Dillo 2':
      if (anyKong && barrel) {
        return 'available'
      } else {
        return 'not-available'
      }
    case 'Kutout':
      if (anyKong) {
        return 'available'
      } else {
        return 'not-available'
      }
    case 'DK Phase of K. Rool':
      if (dkRequiresBlast && blast) {
        return 'available'
      } else if (dk != dkRequiresBlast) {
        return 'available'
      } else {
        return 'not-available'
      }
    case 'Diddy Phase of K. Rool':
      if (peanuts && jetbarrel) {
        return 'available'
      } else {
        return 'not-available'
      }
    case 'Lanky Phase of K. Rool':
      if (trombone && barrel) {
        return 'available'
      } else {
        return 'not-available'
      }
    case 'Tiny Phase of K. Rool':
      if (mini && feathers) {
        return 'available'
      } else if (mini && oranges) {
        return 'logic-break'
      } else {
        return 'not-available'
      }
    case 'Chunky Phase of K. Rool':
      if (slam && gone && hunky && punch) { /*Right now, this just checks if you have a Simian Slam at all. I'll make it check the level of Slam later...*/
        return 'available'
      } else {
        return 'not-available'
      }
    default:
      return 'not-available'
  }
}

const nextBoss = (boss: Boss): Boss => {
  switch (boss) {
    case 'Army Dillo 1':
      return 'Dogadon 1'
    case 'Dogadon 1':
      return 'Mad Jack'
    case 'Mad Jack':
      return 'Puftoss'
    case 'Puftoss':
      return 'Dogadon 2'
    case 'Dogadon 2':
      return 'Army Dillo 2'
    case 'Army Dillo 2':
      return 'Kutout'
    case 'Kutout':
      return 'DK Phase of K. Rool'
    case 'DK Phase of K. Rool':
      return 'Diddy Phase of K. Rool'
    case 'Diddy Phase of K. Rool':
      return 'Lanky Phase of K. Rool'
    case 'Lanky Phase of K. Rool':
      return 'Tiny Phase of K. Rool'
    case 'Tiny Phase of K. Rool':
      return 'Chunky Phase of K. Rool'
    case 'Chunky Phase of K. Rool':
      return ''
    default:
      return 'Army Dillo 1'
  }
}

const prevBoss = (boss: Boss): Boss => {
  switch (boss) {
    case 'Army Dillo 1':
      return ''
    case 'Dogadon 1':
      return 'Army Dillo 1'
    case 'Mad Jack':
      return 'Dogadon 1'
    case 'Puftoss':
      return 'Mad Jack'
    case 'Dogadon 2':
      return 'Puftoss'
    case 'Army Dillo 2':
      return 'Dogadon 2'
    case 'Kutout':
      return 'Army Dillo 2'
    case 'DK Phase of K. Rool':
      return 'Kutout'
    case 'Diddy Phase of K. Rool':
      return 'DK Phase of K. Rool'
    case 'Lanky Phase of K. Rool':
      return 'Diddy Phase of K. Rool'
    case 'Tiny Phase of K. Rool':
      return 'Lanky Phase of K. Rool'
    case 'Chunky Phase of K. Rool':
      return 'Tiny Phase of K. Rool'
    default:
      return 'Chunky Phase of K. Rool'
  }
}

const BossSelector: React.FC<BossSelectorProps> = ({ storeKey }) => {
  const [boss, setBoss] = useDonkStore(
    useShallow((state) => [state[storeKey] as Boss, state.setBoss])
  )
  const bossNum = Number.parseInt(storeKey.slice(4), 13)

  const handleNextBoss = (): void => {
    setBoss(bossNum, nextBoss(boss))
  }

  const handlePrevBoss = (): void => {
    setBoss(bossNum, prevBoss(boss))
  }

  const handleWheel = (e: WheelEvent<HTMLImageElement>): void => {
      if (e.deltaY >= 0) {
        setBoss(bossNum, nextBoss(boss))
      } else {
        setBoss(bossNum, prevBoss(boss))
      }
  }

  const bossTitle = boss !== '' ? boss : 'Unknown'
  
  return (
    <>
      <img
        title={bossTitle}
        height={24}
        src={bossToIcon(boss)}
        onClick={handleNextBoss}
        onContextMenu={handlePrevBoss}
        onWheel={handleWheel}
      />
      <span className={bossState(boss)}>⬤</span>
    </>
  )
}

export default BossSelector
