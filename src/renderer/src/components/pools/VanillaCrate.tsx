import { useShuffleCrates } from '@renderer/src/hooks/settings'

const VanillaCrate: React.FC<React.PropsWithChildren> = ({ children }) =>
  useShuffleCrates() ? null : <>{children}</>

export default VanillaCrate
