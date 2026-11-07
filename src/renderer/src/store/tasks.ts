import { StateCreator } from 'zustand'
import { AllSlice, Task, TaskState, donkResetFns } from './common'

export const initialTask: TaskState = {
  task: {
    task1: '',
    task2: '',
    task3: '',
    task4: '',
    task5: '',
    task6: '',
    task7: '',
    task8: ''
  },
  taskCount: {
    task1: '0',
    task2: '0',
    task3: '0',
    task4: '0',
    task5: '0',
    task6: '0',
    task7: '0',
    task8: '0'
  }
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
