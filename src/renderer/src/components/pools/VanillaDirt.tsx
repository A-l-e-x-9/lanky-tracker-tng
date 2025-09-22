import { useShuffleDirt } from '@renderer/src/hooks/settings'

const VanillaDirt: React.FC<React.PropsWithChildren> = ({ children }) =>
  useShuffleDirt() ? null : <>{children}</>

export default VanillaDirt
