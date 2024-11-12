import { PencilIcon } from "./PencilIcon"

export const Input = () => {
  return (
    <div className="relative w-full">
      <input
        type="text"
        className="flex w-full border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10"
      />
      <button
        className="absolute flex items-center justify-center h-full w-12 right-0 top-0 text-gray-400 hover:text-gray-600"
      >
        <PencilIcon />
      </button>
    </div>
  )
}