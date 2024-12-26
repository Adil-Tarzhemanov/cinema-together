import { LuLoader } from 'react-icons/lu'

export const Loading = () => {
  return (
    <div className='h-[100vh] w-full flex items-center justify-center'>
      <LuLoader className='size-[100px] text-slate-400 animate-spin' />
    </div>
  )
}
