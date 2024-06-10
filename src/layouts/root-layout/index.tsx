import { RootMain } from './root-main'

export default function RootLayout() {
  return (
    <div className="scrollbar h-screen w-full overflow-auto bg-background text-[2.4rem] phones:text-[2.8rem]">
      <RootMain />
    </div>
  )
}
