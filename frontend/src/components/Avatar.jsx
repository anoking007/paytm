export function Avatar({ username,Uname }) {
  return (
    <>
      <div className="flex ">
        <div className=" relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
          <span className=" font-medium text-gray-600 dark:text-gray-300">
            {username[0].toUpperCase()}
          </span>
        </div>
        <div className="text-xl mx-2">{Uname}</div>
      </div>
    </>
  );
}
