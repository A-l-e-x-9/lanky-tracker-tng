import { StateCreator } from 'zustand'
import { AllSlice, Task, TaskState, donkResetFns } from './common'

export const initialTask: TaskState = {
  task1: '',
  task2: '',
  task3: '',
  task4: '',
  task5: '',
  task6: '',
  task7: '',
  taskCount1: 0,
  taskCount2: 0,
  taskCount3: 0,
  taskCount4: 0,
  taskCount5: 0,
  taskCount6: 0,
  taskCount7: 0,
  taskCount8: 0,
}

interface TaskSlice {
  task1: Task
  task2: Task
  task3: Task
  task4: Task
  task5: Task
  task6: Task
  task7: Task
  task8: Task
  taskCount1: number
  taskCount2: number
  taskCount3: number
  taskCount4: number
  taskCount5: number
  taskCount6: number
  taskCount7: number
  taskCount8: number
  setTask: (index: number, name: string) => void
  setTaskCount: (index: number, val: number) => void
}

const taskSlice: StateCreator<AllSlice, [], [], TaskSlice> = (set) => {
  donkResetFns.add(() => set(initialTask))
  return {
    ...initialTask,
    setTask: (index, name) =>
      set((state) => {
        const newKey: Record<number, string> = {}
        newKey['task' + index] = name
        state = {
          ...state,
          ...newKey
        }
        return state
      }),
    setTaskCount: (index, val) =>
      set((state) => {
        const newKey: Record<number, number> = {}
        newKey['taskCount' + index] = val
        state = {
          ...state,
          ...newKey
        }
        return state
      })
  }
}

export default taskSlice
