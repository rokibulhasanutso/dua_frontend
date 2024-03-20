import { getFetch } from '@/utils/getFetch';
import { db_image_base_url } from '@/utils/api.config';
import { convertUrl } from '@/utils/convertUrl';
import Image from 'next/image';
import Link from 'next/link';
import { smoothJump } from '@/utils/smoothJump';

const CategroySidebar = async ({ params, searchParams }) => {
	const categoryData = await getFetch('cat');
	const subCategoryData = await getFetch(`subcat/cat/${searchParams.cat}`)
	const subCategoryDuaData = await getFetch(`dua/subcat/${searchParams.subcat}`)

	return (
		<div className="bg-white h-full rounded-xl flex flex-col">
			<h2 className="text-base text-white text-center p-4 bg-primary rounded-t-xl">Categories</h2>
			<div className="px-3 pt-4">
				<from>
					<div className="flex items-center w-full bg-white rounded-md p-1 border focus-within:ring-2 ring-primary ring-inset">
						<div className="px-2.5">
							<svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="stroke-slate-500">
								<path d="M21 21L15 15L21 21ZM17 10C17 10.9193 16.8189 11.8295 16.4672 12.6788C16.1154 13.5281 15.5998 14.2997 14.9497 14.9497C14.2997 15.5998 13.5281 16.1154 12.6788 16.4672C11.8295 16.8189 10.9193 17 10 17C9.08075 17 8.1705 16.8189 7.32122 16.4672C6.47194 16.1154 5.70026 15.5998 5.05025 14.9497C4.40024 14.2997 3.88463 13.5281 3.53284 12.6788C3.18106 11.8295 3 10.9193 3 10C3 8.14348 3.7375 6.36301 5.05025 5.05025C6.36301 3.7375 8.14348 3 10 3C11.8565 3 13.637 3.7375 14.9497 5.05025C16.2625 6.36301 17 8.14348 17 10Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
							</svg>
						</div>
						<input placeholder="Search by Categories" className="flex-1 pe-4 py-2 text-sm font-normal outline-none placeholder:text-gray-400 bg-transparent" />
					</div>
				</from>
			</div>

			{/* category section start here */}
			<div className="my-4 overflow-auto">
				{categoryData?.map((data) => (
					<div key={data.id} id={`cat_${data.cat_id}`}>
						{/* category */}
						<Link href={`/duas/${convertUrl(data.cat_name_en)}?cat=${data.cat_id}`}>
							<div className={`flex justify-between items-center p-3 mx-3 my-2 rounded-xl ${data.cat_id === parseInt(searchParams?.cat) ? "bg-content-color" :"hover:bg-content-color" }`}>
								<div className="flex gap-2 items-center">
									<div className="p-3 bg-[#f7f8fa] rounded-lg">
										<Image
											src={`${db_image_base_url}/icon/${data.cat_icon}.svg`}
											alt="Dua type Icon"
											width="32"
											height="32"
											className="size-8 rounded-lg"
										/>
									</div>
									<div className="w-40">
										<h2 className="text-base text-gray-700 font-medium">{data.cat_name_en}</h2>
										<span className="text-xs text-gray-500">Subcategory: {data.no_of_subcat}</span>
									</div>
								</div>
								<div className="self-center flex flex-col items-center ps-3 border-l border-content-color">
									<span className="text-gray-700">{data.no_of_dua}</span>
									<span className="text-xs text-gray-500">Duas</span>
								</div>
							</div>
						</Link>

						{/* sub category */}
						<div className="ml-12 mr-1 border-l-2 border-dotted border-primary text-sm">
							{
								data.cat_id === parseInt(searchParams?.cat) &&
								subCategoryData.map((subCateData) => (
									<div className={`ml-3 my-6 relative after:absolute after:size-2 ${subCateData.subcat_id === parseInt(searchParams?.subcat) ? "after:bg-primary" : "after:bg-slate-500"}  after:-left-[17px] after:top-1.5 after:rounded-full`}>
										<div className="my-2">
											<div>
												<Link href={`/duas/${convertUrl(data.cat_name_en)}?cat=${data.cat_id}&subcat=${subCateData.subcat_id}`}>
													<span className={`font-semibold ${subCateData.subcat_id === parseInt(searchParams?.subcat) ? "text-primary" : "text-slate-500"}`}>{subCateData.subcat_name_en}</span>
												</Link>

												{/* dua item links */}
												{
													subCateData.subcat_id === parseInt(searchParams?.subcat) &&
													subCategoryDuaData.map((duadata) => (
														<div className="mt-2">
															<Link href={`/duas/${convertUrl(data.cat_name_en)}?cat=${data.cat_id}&subcat=${subCateData.subcat_id}&dua=${duadata.dua_id}`}>
																<span className="flex gap-2">
																	<Image
																		src="https://duaruqyah.com/assets/duaarrow.svg"
																		alt="Dua Arrow Icon"
																		width="16"
																		height="44"
																		className="w-4 h-5"
																	/>
																	<span className={duadata.dua_id === parseInt(searchParams?.dua) ? "text-primary" : "text-slate-500"}>{duadata.dua_name_en}</span>
																</span>
															</Link>
														</div>
													))
												}
											</div>
										</div>
									</div>
								))
							}
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default CategroySidebar;