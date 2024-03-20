import SearchIcon from "@/components/atoms/icons/SearchIcon";
import Image from "next/image"

const NavBar = ({params, searchParams}) => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl">Duas Page</h1>

        <div className="flex-1 flex justify-end">
					<from >
						<div className="flex bg-white rounded-md p-1 focus-within:ring-1 ring-primary ring-inset">
							<input 
								placeholder="Search by Dua Name"
								className="w-[300px] px-4 py-2.5 text-sm font-normal outline-none placeholder:text-gray-400 bg-transparent"
							/>
							<button type="submit" className="bg-gray-100 self-stretch px-4 rounded-sm">
								<SearchIcon className="stroke-slate-500"/>
							</button>
						</div>
					</from>
				</div>

				<div className="w-[300px] flex justify-end">
					<button className="flex gap-2">
						<Image
							src="https://duaruqyah.com/assets/settings/profile.svg"
							width="45"
							height="45"
							alt="User Icon"
							className="rounded-full"
						/>
						<span className="self-center inline-block border-[6px] border-b-0 border-t-gray-500" />
					</button>
				</div>
      </div>
    </div>
  );
};

export default NavBar;
