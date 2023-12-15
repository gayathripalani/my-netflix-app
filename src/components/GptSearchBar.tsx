import { useSelector } from 'react-redux';
import lang from '../utils/languageConstants'

const GptSearchBar = () => {
  const langKey = useSelector((state) => state.config.lang);
  return (
    <div className='pt-[35%] flex justify-center'>
        <form className='w-full bg-black grid grid-cols-12'>
            <input type="text" className="p-4 m-4 col-6" placeholder={lang[langKey].gptSearchPlaceholder} />
            <button className="p-4 m-4 bg-red-700 text-white rounded">{lang[langKey].search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar