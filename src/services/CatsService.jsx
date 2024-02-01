import { useHttp } from "../hooks/http.hook";

const useCatsService = () => {
  const { loading, request, error, clearError } = useHttp();

  const _apiBase = "https://api.thecatapi.com/v1/images/";
  // const _apiKey = import.meta.env.VITE_BASE_API_KEY;
  const _apiKey = "live_x6cc8XljbBNFTq4x2Rj7xeAVhNY32OhQrTmLfqJWXm4ghLPwOtawagUWKHczBSbx";
  const _baseOffset = 33;

  const getAllCats = async (offset = _baseOffset) => {
    const res = await request(`${_apiBase}search?limit=15&order=ASC&page=${offset}&api_key=${_apiKey}`);

    return res.map(_transformCharacter);
  };

  const _transformCharacter = (cat) => {
    return {
      id: cat.id,
      thumbnail: cat.url,
      favorite: false,
    };
  };

  return { loading, error, clearError, getAllCats };
};

export default useCatsService;
