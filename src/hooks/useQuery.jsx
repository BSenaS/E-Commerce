import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchProducts } from "../store/actions/productAction";
const useQuery = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [filterText, setFilterText] = useState("");
  const [filterSort, setFilterSort] = useState("");
  const [paginationLimit, setPaginationLimit] = useState(25);
  const [paginationOffSet, setPaginationOffSet] = useState(0);
  //Sayfa linki yenilendiğin de veya kopyalanıp başka bir tabden açıldığın da, url den parametre sorgusunu yapan fonksiyon.
  const getQueryFromUrl = () => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const categoryParam = urlSearchParams.get("category");
    const filterTextParam = urlSearchParams.get("filter");
    const filterSortParam = urlSearchParams.get("sort");
    const paginationLimitParam = urlSearchParams.get("limit");
    const paginationOffSetParam = urlSearchParams.get("offset");
    const myObject = {
      category: categoryParam || null,
      filter: filterTextParam || null,
      sort: filterSortParam || null,
      limit: paginationLimitParam || null,
      offset: paginationOffSetParam || null,
    };
    dispatch(fetchProducts(myObject));
  };

  //Filter actionu tetiklendiğin de çalışan fonsk, gerekli url parametreleri eklenir ve dispatch atılır.
  //Sorun 1. category card ve dropdown objelerine tıklandığın da gidilmesi gereken urlye yönlendirme olmuyor? lakin fetch işlemi yapılıyor...
  const getQueryData = (category, gender) => {
    const myObject = {
      category: category || null,
      filter: filterText || null,
      sort: filterSort || null,
      limit: paginationLimit || null,
      offset: paginationOffSet || null,
    };
    console.log("category id si : -> ", category, gender);
    dispatch(fetchProducts(myObject));
    const queryParams = new URLSearchParams();
    if (category) queryParams.append("category", category);
    if (filterText) queryParams.append("filter", filterText);
    if (filterSort) queryParams.append("sort", filterSort);
    // if (paginationLimit) queryParams.append("limit", paginationLimit);
    if (paginationOffSet) queryParams.append("offset", paginationOffSet);
    const queryString = queryParams.toString();
    let fullUrl = "";
    if (queryString) {
      if (gender && gender === "k") {
        fullUrl = `/shop/women/products?${queryString}`;
      } else if (gender && gender === "e") {
        fullUrl = `/shop/men/products?${queryString}`;
      } else {
        fullUrl = `/shop/products?${queryString}`;
      }
      if (fullUrl) {
        navigate(fullUrl);
      }
    }
  };

  return {
    getQueryData,
    setFilterText,
    setFilterSort,
    getQueryFromUrl,
    filterText,
    filterSort,
    setPaginationOffSet,
    paginationLimit,
    paginationOffSet,
  };
};

export default useQuery;
