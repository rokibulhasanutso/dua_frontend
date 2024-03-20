import Image from 'next/image';
import { db_image_base_url } from '@/utils/api.config';
import { getFetch } from '@/utils/getFetch';

const page = async ({ params, searchParams }) => {
  const duaData = await getFetch(`dua/cat/${searchParams.cat}`);
  const subcatData = await getFetch(`subcat/cat/${searchParams.cat}`);

  return (
    <div className="space-y-4">

      {duaData.map((data) => (

        <div key={data.id} className="p-6 bg-white rounded-xl">
          <div className="flex items-center">
            <Image
              src={`${db_image_base_url}/duacard.svg`}
              width="35"
              height="35"
              alt="Dua Tag"
              className=""
            />
            <h1 className='ms-3 text-base font-medium text-primary'>
              <span>{data.dua_id}.</span>
              <span>{data.dua_name_en}</span>
            </h1>
          </div>

          {data.top_en && <p className="mt-5 text-lg font-normal">{data.top_en}</p>}
          {data.dua_arabic && <p className="mt-8 text-2xl font-normal" dir="rtl">{data.dua_arabic}</p>}
          {data.transliteration_en && <p className="mt-8 text-lg font-normal italic"><span className="font-semibold">Transliteration</span>: {data.transliteration_en}</p>}
          {data.translation_en && <p className="mt-8 text-lg font-normal text-gray-500"><span className="text-black font-medium">Translation</span>: {data.translation_en}</p>}
          {data.refference_en && <p className="mt-8 text-lg font-normal">
            <span className="block text-primary font-medium">Reference:</span>
            <span className="block">{data.refference_en}</span>
          </p>}

          <div className="flex justify-between mt-10">
            <div>
              <Image
                src={`https://duaruqyah.com/assets/others/audiobtn.svg`}
                width="44"
                height="44"
                alt="Audio button"
                className=""
              />
            </div>
            <div className="space-x-8">
              <button>
                <Image
                  src={`https://duaruqyah.com/assets/others/copy.svg`}
                  width="24"
                  height="24"
                  alt="Audio button"
                  className=""
                />
              </button>
              <button>
                <Image
                  src={`https://duaruqyah.com/assets/others/bookmark.svg`}
                  width="24"
                  height="24"
                  alt="Audio button"
                  className=""
                />
              </button>
              <button>
                <Image
                  src={`https://duaruqyah.com/assets/others/plan.svg`}
                  width="24"
                  height="24"
                  alt="Audio button"
                  className=""
                />
              </button>
              <button>
                <Image
                  src={`https://duaruqyah.com/assets/others/share.svg`}
                  width="24"
                  height="24"
                  alt="Audio button"
                  className=""
                />
              </button>
              <button>
                <Image
                  src={`https://duaruqyah.com/assets/others/report.svg`}
                  width="24"
                  height="24"
                  alt="Audio button"
                  className=""
                />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default page;
