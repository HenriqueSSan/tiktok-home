import SearchIcon from '../assets/img/search-icon.svg';

export function $Search() {
  return (
    <form action="">
      <fieldset className="px-2">
        <div className="flex items-center">
          <div className="flex items-center py-3 px-4 bg-gray-100-opacity-12 rounded-full">
            <input
              type="text"
              className="bg-transparent w-[292px] text-gray-100-opacity-90 placeholder:text-[#757575] outline-none"
              placeholder="Pesquisar contas e vídeos"
            />
            <span className="block h-7 -my-[3px] bg-gray-100-opacity-12 w-[1px]"></span>
            <button
              type="button"
              className="pr-3 pl-4 -my-3 -mx-4 -ml-0 py-[11px] rounded-r-full"
            >
              <SearchIcon width={24} height={24} />
            </button>
          </div>
        </div>
      </fieldset>
    </form>
  );
}
