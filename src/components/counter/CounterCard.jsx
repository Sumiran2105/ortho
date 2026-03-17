import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount, reset } from '../../features/counter/counterSlice'

export function CounterCard() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
      <p className="text-sm font-medium uppercase tracking-wide text-slate-500">Vite + Tailwind + Redux</p>
      <h1 className="mt-2 text-3xl font-bold text-slate-900">Counter</h1>
      <p className="mt-6 text-center text-6xl font-bold text-indigo-600">{count}</p>
      <div className="mt-8 grid grid-cols-2 gap-3">
        <button
          onClick={() => dispatch(decrement())}
          className="rounded-lg bg-slate-800 px-4 py-2 font-medium text-white transition hover:bg-slate-700"
        >
          -1
        </button>
        <button
          onClick={() => dispatch(increment())}
          className="rounded-lg bg-indigo-600 px-4 py-2 font-medium text-white transition hover:bg-indigo-500"
        >
          +1
        </button>
        <button
          onClick={() => dispatch(incrementByAmount(5))}
          className="rounded-lg bg-emerald-600 px-4 py-2 font-medium text-white transition hover:bg-emerald-500"
        >
          +5
        </button>
        <button
          onClick={() => dispatch(reset())}
          className="rounded-lg bg-rose-600 px-4 py-2 font-medium text-white transition hover:bg-rose-500"
        >
          Reset
        </button>
      </div>
    </div>
  )
}
