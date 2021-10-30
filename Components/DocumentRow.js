import Icon from "@material-tailwind/react/Icon";
function DocumentRow() {
  return (
    <>
      <div className="pb-5">
        <div className="flex items-center rounded-full py-2 pl-2 cursor-pointer transition ease-in-out delay-75  hover:bg-[#e8f1fe]">
          <div className="flex p-1 items-center">
            <Icon name="description" size="2xl" color="blue" />
          </div>
          <p className="flex-grow w-3/5 pl-5 pr-10 text-[#202124]">
            Ritik Chhipa Resume : 2021
          </p>
          <div className="flex w-2/5 justify-center pl-4 pr-4 text-[#686b70]">
            <p className="flex-grow pr-12 text-sm">me</p>
            <p className=" text-sm">26 Sep 2021</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default DocumentRow;
