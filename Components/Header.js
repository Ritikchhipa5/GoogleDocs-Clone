import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";
function Header() {
  return (
    <div className="sticky top-0 z-50 flex justify-between items-center p-2 px-4 shadow-md">
      <div className="flex items-center">
        <Button
          color="gray"
          buttonType="outline"
          rounded={true}
          iconOnly={true}
          ripple="dark"
          className="h-10 w-10 border-0 "
        >
          <Icon name="menu" size="2xl" />
        </Button>
        <div className="px-2">
          <Icon name="description" size="4xl" color="blue" />
        </div>
        <h1 className="flex text-gray-700 text-2xl">Docs</h1>
      </div>
      <div className=" flex-grow px-8  max-w-screen-md items-center">
        <div className="flex justify-center bg-gray-200 py-3 5 rounded transition duration-500 ease-in-out hover:bg-white shadow  ">
          <div className="flex px-5 items-center">
            <Icon name="search" size="2xl" color="#606368" />
          </div>
          <input
            className="w-full outline-none text-opacity-7 bg-transparent placeholder-opacity-100"
            type="text"
            placeholder="Search"
          />
        </div>
      </div>
      <div className="flex ">
        <Button
          color="gray"
          buttonType="outline"
          rounded={true}
          iconOnly={true}
          ripple="dark"
          className="h-10 w-10 border-0 mr-2"
        >
          <Icon name="apps" size="3xl" />
        </Button>
        <Button
          color="#e5e7ec"
          buttonType="outline"
          rounded={true}
          iconOnly={true}
          ripple="dark"
          buttonType="filled"
          className="h-10 w-10 border-1"
        >
          <img
            src="https://lh3.googleusercontent.com/ogw/ADea4I5hyVKK_h-puNfDTUfbiL9eoTs0nWeKCpV-1oh6dQ=s64-c-mo"
            className="h-8 w-8 rounded-full"
          />
        </Button>
      </div>
    </div>
  );
}

export default Header;
