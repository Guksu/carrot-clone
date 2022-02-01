import { NextPage } from "next";

const Tailwind: NextPage = () => {
  return (
    <div className="flex-col space-y-5 bg-slate-400 py-20 px-10 sm:bg-red-200 md:bg-teal-200 lg:bg-purple-200 xl:bg-yellow-200 2xl:bg-black">
      <div className=" rounded-3xl bg-white p-10 shadow-xl">
        <span className="text-3xl font-semibold">Select Item</span>
        <ul>
          {[1, 2, 3, 4, 5].map((item) => (
            <div
              key={item}
              className="flex justify-between first:bg-blue-100 last:bg-blue-100 odd:text-yellow-500 even:text-red-500"
            >
              <span className="text-gray-500">Grey Chair</span>
              <span className="font-semibold">$19</span>
            </div>
          ))}
        </ul>
        <div className="mt-2 flex justify-between border-t-2 border-dashed pt-2">
          <span>Total</span>
          <span className="font-semibold">$10</span>
        </div>
        <button
          className="mx-auto mt-5 block w-3/4 rounded-xl bg-blue-500 p-3 text-center text-white
          hover:bg-orange-400 hover:text-black focus:text-teal-200 active:bg-red-500
        "
        >
          Checkout
        </button>
      </div>

      <div className="group overflow-hidden rounded-3xl bg-white shadow-xl">
        <div className="bg-blue-500 p-6 pb-14">
          <span className="text-2xl text-white">Profile</span>
        </div>
        <div className="relative -top-6 rounded-3xl bg-white p-6">
          <div className="relative -top-16 flex items-end justify-between">
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-500">Orders</span>
              <span className="font-medium">340</span>
            </div>
            <div className="h-24 w-24 rounded-full bg-red-400 transition-colors group-hover:bg-yellow-400" />
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-500">Spent</span>
              <span className="font-medium">$340</span>
            </div>
          </div>
          <div className="relative -mt-10 -mb-5 flex flex-col items-center">
            <span className="text-lg font-medium">Kim JongMin</span>
            <span className="text-sm text-gray-500">Korea</span>
          </div>
        </div>
      </div>

      <div className="rounded-3xl bg-white p-6 shadow-xl">
        <div className="mb-5 flex items-center justify-between">
          <span>⬅️</span>
          <div className="space-x-3">
            <span>⭐️ 4.9</span>
            <span className="rounded-md p-2 shadow-xl">💖</span>
          </div>
        </div>
        <div className="mb-5 h-72 bg-zinc-400" />
        <div className="flex flex-col">
          <span className="text-xl font-medium">Swoon Lounge</span>
          <span className="text-xs text-gray-500">Chair</span>
          <div className="mt-3 mb-5 flex items-center justify-between">
            <div className="space-x-2">
              <button className="h-5 w-5 rounded-full bg-indigo-500 ring-indigo-500 ring-offset-2 transition focus:ring-2" />
              <button className="h-5 w-5 rounded-full bg-teal-500 ring-teal-500 ring-offset-2 transition focus:ring-2" />
              <button className="h-5 w-5 rounded-full bg-yellow-500 ring-yellow-500 ring-offset-2 transition focus:ring-2" />
            </div>
            <div className="flex items-center space-x-5">
              <button className=" flex aspect-square w-8 items-center justify-center rounded-lg bg-blue-200 text-xl text-gray-500">
                -
              </button>
              <span>1</span>
              <button className=" flex aspect-square w-8 items-center justify-center rounded-lg bg-blue-200 text-xl text-gray-500">
                +
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-2xl font-medium">$450</span>
            <button className="rounded-lg bg-blue-500 py-2 px-8 text-center text-xs text-white">
              Add to cart
            </button>
          </div>
        </div>
      </div>

      <form className="flex flex-col space-y-2  p-5 ">
        <input
          type="text"
          required
          placeholder="Username"
          className="peer rounded-md border border-gray-400 p-1 "
        />
        <span className="hidden peer-invalid:block peer-invalid:text-red-500">
          This input is invalid
        </span>
        <span className="hidden peer-valid:block peer-valid:text-teal-500">
          Awesome username
        </span>
        <span className="hidden peer-hover:block peer-hover:text-amber-500">
          Hello
        </span>
        <input type="submit" value="Login" className="bg-white" />
      </form>

      <div className="flex flex-col space-y-2  p-5 ">
        <details className="open:bg-blue-300">
          <summary>Food List</summary>
          <span>라면</span>
          <span>우동</span>
        </details>
      </div>

      {/* tailwind는 기본적으로 브러우저의 dark/ light모드를 디폴트값으로 한다. 따라서 토글로 다크모드를 적용 할 경우 config에서 darkMode:"calss"로 바꿔야한다. */}
      <div className="dark">
        <div className="dark:bg-slate-600 dark:text-white">
          <button>DarkMode</button>
        </div>
      </div>
    </div>
  );
};

export default Tailwind;
