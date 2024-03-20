import Image from "next/image";

const SettingSidebar = () => {
  return (
    <div className="w-[300px] pb-10">
      <div className="bg-white h-full rounded-3xl py-4">
        <h1 className="text-xl text-center py-6">Settings</h1>

				<div className="space-y-4 mx-4 mt-4">
					<div className="group/setting-button">
						<button className="flex items-center gap-5 w-full bg-[#f7f8fa] px-3.5 py-2 rounded-md relative after:absolute after:left-0 after:w-1 after:h-full after:bg-primary after:rounded-l-md after:invisible group-hover/setting-button:after:visible">
							<div className="bg-content-color text-xl p-2.5 rounded-full">
								<Image
									src="https://duaruqyah.com/assets/sidebar/language.svg"
									width="20"
									height="20"
									alt="Nav Icon"
									className="size-5"
								/>
							</div>
							<span className="text-sm text-gray-500 group-hover/setting-button:text-primary group-hover/setting-button:font-medium">
								Language Settings
							</span>
						</button>

						{/* after button action component write here */}
					</div>

					<div className="group/setting-button">
						<button className="flex items-center gap-5 w-full bg-[#f7f8fa] px-3.5 py-2 rounded-md relative after:absolute after:left-0 after:w-1 after:h-full after:bg-primary after:rounded-l-md after:invisible group-hover/setting-button:after:visible">
							<div className="bg-content-color text-xl p-2.5 rounded-full">
								<Image
									src="https://duaruqyah.com/assets/sidebar/general.svg"
									width="20"
									height="20"
									alt="Nav Icon"
									className="size-5"
								/>
							</div>
							<span className="text-sm text-gray-500 group-hover/setting-button:text-primary group-hover/setting-button:font-medium">
								General Settings
							</span>
						</button>

						{/* after button action component write here */}
					</div>

					<div className="group/setting-button">
						<button className="flex items-center gap-5 w-full bg-[#f7f8fa] px-3.5 py-2 rounded-md relative after:absolute after:left-0 after:w-1 after:h-full after:bg-primary after:rounded-l-md after:invisible group-hover/setting-button:after:visible">
							<div className="bg-content-color text-xl p-2.5 rounded-full">
								<Image
									src="https://duaruqyah.com/assets/sidebar/font.svg"
									width="20"
									height="20"
									alt="Nav Icon"
									className="size-5"
								/>
							</div>
							<span className="text-sm text-gray-500 group-hover/setting-button:text-primary group-hover/setting-button:font-medium">
								Font Settings
							</span>
						</button>

						{/* after button action component write here */}
					</div>

					<div className="group/setting-button">
						<button className="flex items-center gap-5 w-full bg-[#f7f8fa] px-3.5 py-2 rounded-md relative after:absolute after:left-0 after:w-1 after:h-full after:bg-primary after:rounded-l-md after:invisible group-hover/setting-button:after:visible">
							<div className="bg-content-color text-xl p-2.5 rounded-full">
								<Image
									src="https://duaruqyah.com/assets/sidebar/font.svg"
									width="20"
									height="20"
									alt="Nav Icon"
									className="size-5"
								/>
							</div>
							<span className="text-sm text-gray-500 group-hover/setting-button:text-primary group-hover/setting-button:font-medium">
								Appearance Settings
							</span>
						</button>

						{/* after button action component write here */}
					</div>
				</div>
      </div>
    </div>
  );
};

export default SettingSidebar;
