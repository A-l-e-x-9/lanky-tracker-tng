import { usePoolMiniboss } from '@renderer/hooks/settings'

const Miniboss: React.FC<React.PropsWithChildren> = ({ children }) =>
  usePoolMiniboss() ? <>{children}</> : null

export default Miniboss
