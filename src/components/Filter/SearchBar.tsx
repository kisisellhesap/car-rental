import { FC, FormEvent, useState } from "react";
import { makes } from "../../utils/constants";
import ReactSelect from "react-select";
import { useSearchParams } from "react-router-dom";
const SearchBar: FC = () => {
  const [make, setMake] = useState<string>("");
  const [model, setModel] = useState<string>("");

  const [params, setParams] = useSearchParams();
  const options = makes.map((make) => ({ value: make, label: make }));

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (make && model !== "") {
      setParams({
        make,
        model,
      });
    } else if (make && model === "") {
      setParams({
        make,
      });
    }
  };
  return (
    <form
      className="w-full searchbar gap-3 items-center justify-center"
      onSubmit={handleSubmit}
    >
      <div className="searchbar-item  items-end">
        <div className="w-full flex flex-col ">
          <label>Marka</label>
          <ReactSelect
            className="w-full text-black"
            options={options}
            placeholder="Marka Seçiniz .."
            onChange={(e) => setMake(e!.value as string)}
            defaultValue={{
              label: params.get("make"),
              value: params.get("make"),
            }}
          />
        </div>

        <button className="ml-3 cursor-pointer">
          <img src="/search.svg" className="size-[40]" />
        </button>
      </div>

      <div className="searchbar-item">
        <div className="w-full flex flex-col">
          <label> Model</label>
          <div className="flex w-full">
            <div className="absolute ml-3 mt-1">
              <img src="model-icon.png" className="size-[25px]" />
            </div>
            <input
              type="text"
              className="searchbar-input rounded text-black bg-white"
              placeholder="örn:Civic"
              onChange={(e) => setModel(e.target.value)}
              defaultValue={params.get("model") as string}
            />
            <button className="ml-3 cursor-pointer">
              <img src="/search.svg" className="size-[40px]" />
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default SearchBar;
