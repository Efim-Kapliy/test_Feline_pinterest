import { useHttp } from "../hooks/http.hook";

const useCatsService = () => {
  const { loading, request, error, clearError } = useHttp();

  const _apiBase = "https://api.thecatapi.com/v1/images/";
  const _apiKey = import.meta.env.VITE_BASE_API_KEY;
  const _baseOffset = 33;

  const getAllCats = async (offset = _baseOffset) => {
    const res = await request(`${_apiBase}search?limit=15&offset=${offset}&${_apiKey}`);

    return res.map(_transformCharacter);
  };

  const getCat = async (id) => {
    const res = await request(`${_apiBase}characters/${id}?${_apiKey}`);

    return _transformCharacter(res);
  };

  const _transformCharacter = (cat) => {
    return {
      id: cat.id,
      thumbnail: cat.url,
      favorite: false,
    };
  };

  return { loading, error, clearError, getCat, getAllCats };
};

export default useCatsService;
