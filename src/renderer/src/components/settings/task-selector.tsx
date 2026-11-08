import { WheelEvent } from 'react'
import { useShallow } from 'zustand/react/shallow'

import useDonkStore from '@renderer/store'
import { Task } from '@renderer/store/common'
import CountSelector from '@renderer/components/settings/CountSelector'

import unknownIcon from '../../assets/images/unknown.png'
import keyIcon from '../../assets/images/key.png'
import filmIcon from '../../assets/images/film.png'
import gbIcon from '../../assets/images/GB.png'
import bpIcon from '../../assets/images/lanky_bp.png'
import coCoinIcon from '../../assets/images/n64rw_coin.png'
import medalIcon from '../../assets/images/bananamedal.gif'
import crownIcon from '../../assets/images/crown.png'
import fairyIcon from '../../assets/images/fairy.png'
import rainbowCoinIcon from '../../assets/images/rainbowcoin.png'
import theBean from '../../assets/images/bean.png'
import pearlIcon from '../../assets/images/pearl.png'
import bonusBarrelIcon from '../../assets/images/bonus.png'
import dkc2BarrelCannon from '../../assets/images/dkc2-arrow-cannon.png'
import wabbit from '../../assets/images/rabbit.png'
import crankyIcon from '../../assets/images/cranky.png'
import mechfishIcon from '../../assets/images/mechfish-agenda.png'
import chunkyIcon from '../../assets/images/chunky.png'

type TaskSelectorProps = {
  storeKey: string
}

const taskToIcon = (task: Task): string => {
  switch (task) {
    case 'Keys':
    case 'Bosses':
    case 'Get Key 8 only':
      return keyIcon
    case 'Kremling Kapture':
      return filmIcon
    case 'Golden Bananas':
      return gbIcon
    case 'Blueprints':
      return bpIcon
    case 'Company Coins':
      return coCoinIcon
    case 'Medals':
      return medalIcon
    case 'Crowns':
      return crownIcon
    case 'Fairies':
    case 'Get the Rareware Banana':
      return fairyIcon
    case 'Rainbow Coins':
      return rainbowCoinIcon
    case 'The Bean™':
      return theBean
    case 'Pearls':
      return pearlIcon
    case 'Bonus Levels':
      return bonusBarrelIcon
    case 'Barrel Blast Courses':
      return dkc2BarrelCannon
    case 'Kill the Wabbit':
      return wabbit
    case 'Complete the DK Rap':
    case 'Round 2 of DK Arcade':
    case 'Jetpac':
      return crankyIcon
    case 'Take Down the Mechfish Agenda':
      return mechfishIcon
    case 'Defeat the Toy Monster':
      return chunkyIcon
    default:
      return unknownIcon
  }
}

const nextTask = (task: Task): Task => {
  switch (task) {
    case 'Keys':
      return 'Kremling Kapture'
    case 'Kremling Kapture':
      return 'Golden Bananas'
    case 'Golden Bananas':
      return 'Blueprints'
    case 'Blueprints':
      return 'Company Coins'
    case 'Company Coins':
      return 'Medals'
    case 'Medals':
      return 'Crowns'
    case 'Crowns':
      return 'Fairies'
    case 'Fairies':
      return 'Rainbow Coins'
    case 'Rainbow Coins':
      return 'The Bean™'
    case 'The Bean™':
      return 'Pearls'
    case 'Pearls':
      return 'Bosses'
    case 'Bosses':
      return 'Bonus Levels'
    case 'Bonus Levels':
      return 'Barrel Blast Courses'
    case 'Barrel Blast Courses':
      return 'Get Key 8 only'
    case 'Get Key 8 only':
      return 'Kill the Wabbit'
    case 'Kill the Wabbit':
      return 'Complete the DK Rap'
    case 'Complete the DK Rap':
      return 'Take Down the Mechfish Agenda'
    case 'Take Down the Mechfish Agenda':
      return 'Round 2 of DK Arcade'
    case 'Round 2 of DK Arcade':
      return 'Jetpac'
    case 'Jetpac':
      return 'Defeat the Toy Monster'
    case 'Defeat the Toy Monster':
      return 'Get the Rareware Banana'
    case 'Get the Rareware Banana':
      return ''
    default:
      return 'Keys'
  }
}

const prevTask = (task: Task): Task => {
  switch (task) {
    case 'Keys':
      return ''
    case 'Kremling Kapture':
      return 'Keys'
    case 'Golden Bananas':
      return 'Kremling Kapture'
    case 'Blueprints':
      return 'Golden Bananas'
    case 'Company Coins':
      return 'Blueprints'
    case 'Medals':
      return 'Company Coins'
    case 'Crowns':
      return 'Medals'
    case 'Fairies':
      return 'Crowns'
    case 'Rainbow Coins':
      return 'Fairies'
    case 'The Bean™':
      return 'Rainbow Coins'
    case 'Pearls':
      return 'The Bean™'
    case 'Bosses':
      return 'Pearls'
    case 'Bonus Levels':
      return 'Bosses'
    case 'Barrel Blast Courses':
      return 'Bonus Levels'
    case 'Get Key 8 only':
      return 'Barrel Blast Courses'
    case 'Kill the Wabbit':
      return 'Get Key 8 only'
    case 'Complete the DK Rap':
      return 'Kill the Wabbit'
    case 'Take Down the Mechfish Agenda':
      return 'Complete the DK Rap'
    case 'Round 2 of DK Arcade':
      return 'Take Down the Mechfish Agenda'
    case 'Jetpac':
      return 'Round 2 of DK Arcade'
    case 'Defeat the Toy Monster':
      return 'Jetpac'
    case 'Get the Rareware Banana':
      return 'Defeat the Toy Monster'
    default:
      return 'Get the Rareware Banana'
  }
}

const TaskSelector: React.FC<TaskSelectorProps> = ({ storeKey }) => {
  const [task, setTask] = useDonkStore(
    useShallow((state) => [state[storeKey] as Task, state.setTask])
  )
  const setTaskCount = useDonkStore(useShallow((state) => state.setTaskCount))
  const taskNum = Number.parseInt(storeKey.slice(4), 23)

  const handleNextTask = (): void => {
    setTask(taskNum, nextTask(task))
  }

  const handlePrevTask = (): void => {
    setTask(taskNum, prevTask(task))
  }

  const handleWheel = (e: WheelEvent<HTMLImageElement>): void => {
      if (e.deltaY >= 0) {
        setTask(taskNum, nextTask(task))
      } else {
        setTask(taskNum, prevTask(task))
      }
  }

  const taskTitle = task !== '' ? task : 'None'

  switch (task) {
    case 'Keys':
    case 'Kremling Kapture':
    case 'Golden Bananas':
    case 'Blueprints':
    case 'Company Coins':
    case 'Medals':
    case 'Crowns':
    case 'Fairies':
    case 'Rainbow Coins':
    case 'The Bean™':
    case 'Pearls':
    case 'Bosses':
    case 'Bonus Levels':
    case 'Barrel Blast Courses':
      return (
        <>
          <img
            alt={taskTitle}
            title={taskTitle}
            height={24}
            src={taskToIcon(task)}
            onClick={handleNextTask}
            onContextMenu={handlePrevTask}
            onWheel={handleWheel}
          />
          <CountSelector
            imgUrl={taskToIcon(task)}
            title="Number of this item you need to complete this task."
            storeKey={task}
            prefix="taskCount"
            setCount={setTaskCount}
            maxValue={255}
          />
        </>
      )
    case 'Get Key 8 only':
    case 'Kill the Wabbit':
    case 'Complete the DK Rap':
    case 'Take Down the Mechfish Agenda':
    case 'Round 2 of DK Arcade':
    case 'Jetpac':
    case 'Defeat the Toy Monster':
    case 'Get the Rareware Banana':
    default:
      return (
        <>
          <img
            alt={taskTitle}
            title={taskTitle}
            height={24}
            src={taskToIcon(task)}
            onClick={handleNextTask}
            onContextMenu={handlePrevTask}
            onWheel={handleWheel}
          />
        </>
      )
  }
}

export default TaskSelector
