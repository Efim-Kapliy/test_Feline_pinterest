import { useHttp } from "../hooks/http.hook";

const useCatsService = () => {
  const { loading, request, error, clearError } = useHttp();

  const _apiBase = "https://api.thecatapi.com/v1/images/";
  const _apiKey = import.meta.env.VITE_BASE_API_KEY;
  const _baseOffset = 33;

  const getAllCats = async (offset = _baseOffset) => {
    const res = await request(`${_apiBase}search?limit=15&offset=${offset}&api_key=${_apiKey}`);

    return res.data.results.map(_transformCharacter);
  };

  const getCat = async (id) => {
    const res = await request(`${_apiBase}characters/${id}?${_apiKey}`);

    return _transformCharacter(res.data.results[0]);
  };

  const _transformCharacter = (char) => {
    return {
      id: char.id,
      thumbnail: char.url,
    };
  };

  return { loading, error, clearError, getCat, getAllCats };
};

export default useCatsService;
