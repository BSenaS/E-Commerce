import { useEffect, useState } from "react";
import { CategoryCardList } from "../CategoryCardList";
import { Link, useLocation } from "react-router-dom";
import Clients from "../../Components/Clients";
import { ProductCard } from "../../Components/ProductCard";
import { HiViewGrid } from "react-icons/hi";
import { CiBoxList } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/actions/productAction";

const ProductListPage = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const productListData = useSelector((store) => store.product.productList);
  //-Text inputa kullanıcı tarafından girilen değeri tuttugum state.
  const [filter, setFilter] = useState();
  const [sort, setSort] = useState();
  //Inputa girilen değeri filter stateine set etme.
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };
  //Select seçimini set etme.
  const handleSortChange = (e) => {
    setSort(e.target.value);
  };
  //1.URLYİ DİNAMİK YAZMA
  const queryParams = new URLSearchParams();
  if (filter) queryParams.append("filter", filter);
  if (sort) queryParams.append("sort", sort);
  const queryString = queryParams.toString();
  const fullUrl = queryString
    ? `/shop/products?${queryString}`
    : "/shop/products";

  //2. URL'de search parametreleri değiştiğin de çalışır.(Filter butonu url'i değiştirir.)
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const filterValue = searchParams.get("filter") || "";
    const sortValue = searchParams.get("sort") || "";
    dispatch(fetchProducts(filterValue, sortValue));
  }, [location.search]);

  if (productListData.length < 1) {
    return "Loading....";
  }
  return (
    <div className="w-full">
      <div>
        {/* Sayfanin en üstü */}
        <div className="w-full bg-pbGray md:py-8">
          <div className="max-w-[1440px] mx-auto flex justify-between py-4 md:flex-wrap md:flex-col md:gap-8">
            <div className="flex justify-center ml-6 md:ml-0">
              <h3 className="font-bold text-sBlack text-2xl">Shop</h3>
            </div>
            <div className="flex justify-center gap-2 items-center mr-6 md:mr-0">
              <Link to={"/"} className="font-bold">
                Home
              </Link>
              <span className="text-mute-color ">{">"}</span>
              <Link className="font-bold text-mute-color"> Shop</Link>
            </div>
          </div>
        </div>
        {/* CateGoryCardList kısmı */}
        <div className="w-full bg-pbGray pb-12">
          <CategoryCardList />
        </div>
        <div className="flex justify-between py-3 max-w-[1050px] mx-auto mb-8 flex-wrap md:flex-col md:items-center md:gap-8 md:mb-16">
          <span className="flex font-bold text-primary-gray text-sm items-center">
            Showing all {productListData.products.length} results
          </span>
          <div className="flex justify-center items-center gap-4">
            <span className="text-primary-gray font-bold text-sm">Views:</span>
            <HiViewGrid size={16} />
            <CiBoxList className="text-primary-gray" />
          </div>
          <div className="flex flex-row max-w-[1440px] gap-4">
            <select
              className="flex py-3 max-w-[170px] bg-[#F9F9F9] border-[#DDDDDD] border rounded"
              value={sort}
              onChange={handleSortChange}
            >
              <option value="price:asc">Price Ascending</option>
              <option value="price:desc">Price Descending</option>
              <option value="rating:asc">Rating Ascending</option>
              <option value="rating:desc">Rating Descending</option>
            </select>
            <input
              type="text"
              className="max-w-[170px] bg-[#F9F9F9] border-[#DDDDDD] border rounded"
              value={filter}
              onChange={handleFilterChange}
              placeholder="Search"
            />

            <Link
              to={fullUrl}
              className="flex items-center bg-pBlue px-6 rounded text-white font-bold"
            >
              Filter
            </Link>
          </div>
        </div>
        {/* Burda product carda bir map atılacak */}
        <div className="max-w-[1050px] mx-auto mb-8">
          <div className="flex flex-wrap justify-between mx-2">
            {productListData.products.map((item, index) => (
              <div key={index} className="flex flex-row max-w-60 md:mx-auto">
                <ProductCard data={item} key={index} />
              </div>
            ))}
          </div>
        </div>
        <Clients />
      </div>
    </div>
  );
};

export default ProductListPage;
