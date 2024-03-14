import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchProducts } from "../store/actions/productAction";
const useQuery = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [category, setCategory] = useState();
  const [gender, setGender] = useState();
  const [filterText, setFilterText] = useState("");
  const [filterSort, setFilterSort] = useState("");

  //Sayfa linki yenilendiğin de veya kopyalanıp başka bir tabden açıldığın da, url den parametre sorgusunu yapan fonksiyon.
  const getQueryFromUrl = () => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const categoryParam = urlSearchParams.get("category");
    const filterTextParam = urlSearchParams.get("filter");
    const filterSortParam = urlSearchParams.get("sort");
    const myObject = {
      category: categoryParam || null,
      filter: filterTextParam || null,
      sort: filterSortParam || null,
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
    };
    console.log("category id si : -> ", category, gender);
    dispatch(fetchProducts(myObject));
    const queryParams = new URLSearchParams();
    if (category) queryParams.append("category", category);
    if (filterText) queryParams.append("filter", filterText);
    if (filterSort) queryParams.append("sort", filterSort);
    const queryString = queryParams.toString();
    const fullUrl =
      queryString &&
      `/shop${
        gender && gender === "k" ? "/women" : "/men"
      }/products?${queryString}`;
    // const fullUrl = queryString
    //   ? `/shop/products?${queryString}`
    //   : "/shop/products";
    if (fullUrl) {
      navigate(fullUrl);
    }
  };

  return {
    getQueryData,
    setFilterText,
    setFilterSort,
    getQueryFromUrl,
    filterText,
    filterSort,
  };
};

export default useQuery;
