import { Rocket } from 'lucide-react'

export function Widget() {
  return (
    <div className="w-[448px] rounded overflow-hidden">
      <div className="bg-zinc-800 py-4 px-6 flex items-center justify-between">
        <span className="font-bold">Notifications</span>
        <button className="text-violet-500 font-bold text-xs hover:text-violet-400">MARCAR TODAS COMO LIDAS</button>
      </div>

      {/* Recent Section*/}
      <div>
        <div className="bg-zinc-950 px-5 py-2 text-small text-zinc-400">Recentes</div>

        <div className="bg-zinc-900 px-8 py-4 flex items-start gap-6">
          <Rocket className='text-violet-500 w-6 h-6'/>
          <div className='flex-1 flex flex-col gap-1'>
            <p className='text-sm leading-relaxed text-zinc-100'>Você recebeu um convite para fazer parte da empresa Rocketseat</p>
            <div className='text-xxs text-zinc-400 flex items-center gap-1'>
              <span>Convite</span>
              <span>Há 3 min</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) 
}

// https://www.youtube.com/watch?v=4qpgwR6JZPY&t=157s  13:08