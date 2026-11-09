import { StateCreator } from 'zustand'
import { AllSlice, Task, TaskState, taskCountCollection, donkResetFns } from './common'

export const initialTask: TaskState = {
  task1: '',
  task2: '',
  task3: '',
  task4: '',
  task5: '',
  task6: '',
  task7: '',
  task8: '',
  taskCount: {
    taskCount1: 0,
    taskCount2: 0,
    taskCount3: 0,
    taskCount4: 0,
    taskCount5: 0,
    taskCount6: 0,
    taskCount7: 0,
    taskCount8: 0
  }
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
  taskCount: taskCountCollection
  setTask: (index: number, name: string) => void
  setTaskCount: (id: string, val: number) => void
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
    setTaskCount: (id, val): void => {
      set((state) => {
        const target: Record<string, number> = {}
        target[id] = val
        state = {
          ...state,
          taskCount: {
            ...state.taskCount,
            ...target
          }
        }
        return state
      })
    }
  }
}

export default taskSlice
