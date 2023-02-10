import Defination from "components/Defination";
import { error, searchResponse } from "store/dictionary";

export default function () {
  if (error.value) {
    return (
      <span className="mb-2 mt-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        No results found
      </span>
    );
  }

  return (
    <div className="flex flex-col">
      {searchResponse.value.map((res, key) => (
        <div
          key={key}
          className="block my-4 p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 w-full max-w-3xl"
        >
          <div className="flex flex-col w-full">
            <span className="mb-2 capitalize text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {res.word}
            </span>
            <div className="flex flex-col gap-2">
              <span className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                Phonetics
              </span>
              <div className="flex flex-col gap-2">
                {res.phonetics.map((ph, key) => (
                  <audio key={key} controls>
                    <source src={ph.audio} />
                  </audio>
                ))}
              </div>
            </div>
            {res.meanings.map((mn, key) => (
              <div key={key} className="flex flex-col w-full">
                <Defination title="Parts of speech" meaning={mn.partOfSpeech} />
                {mn.definitions.map((df, key) => (
                  <div key={key} className="flex flex-col">
                    <div className="w-11/12 h-0.5 bg-gray-300 mx-auto"></div>
                    <Defination title="Definition" meaning={df.definition} />
                    <Defination
                      title="Example"
                      meaning={df.example ? df.example : "None"}
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
