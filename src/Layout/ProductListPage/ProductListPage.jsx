import { useEffect, useState } from "react";
import { CategoryCardList } from "../CategoryCardList";
import { Link, useLocation } from "react-router-dom";
import Clients from "../../Components/Clients";
import { ProductCard } from "../../Components/ProductCard";
import { HiViewGrid } from "react-icons/hi";
import { CiBoxList } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/actions/productAction";
import useQuery from "../../hooks/useQuery";
import ReactPaginate from "react-paginate";
import ProductPage from "../../Pages/ProductPage";

const ProductListPage = () => {
  const productListData = useSelector((store) => store.product.productList);
  const productTotal = useSelector((store) => store.product.totalProductCount);
  const fetchState = useSelector((store) => store.product.fetchState);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 25;
  //-Text inputa kullanıcı tarafından girilen değeri tuttugum state.
  const {
    getQueryData,
    setFilterText,
    setFilterSort,
    getQueryFromUrl,
    filterText,
    filterSort,
    setPaginationOffSet,
    paginationOffSet,
  } = useQuery();
  //Inputa girilen değeri filter stateine set etme.
  const handleFilterChange = (e) => {
    setFilterText(e.target.value);
  };
  //Select seçimini set etme.
  const handleSortChange = (e) => {
    setFilterSort(e.target.value);
  };

  //Pagination
  //-Gelen ürün sayısı kadar pagination sayısı.
  let totalPageCount = 0;
  if (productTotal <= 25) {
    totalPageCount = 1;
  } else {
    totalPageCount = Math.ceil(productTotal / 25);
  }

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
    const offset = selected * itemsPerPage;
    setPaginationOffSet(offset);
    console.log("Current Page", currentPage);
  };

  const filterProduct = () => {
    getQueryData();
  };

  //2. URL'de search parametreleri değiştiğin de çalışır.(Filter butonu url'i değiştirir.)
  useEffect(() => {
    getQueryFromUrl();
  }, []);

  useEffect(() => {
    getQueryFromUrl();
  }, [window.location.search]);

  useEffect(() => {
    getQueryData();
  }, [paginationOffSet]);

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
            Showing all {productTotal} results
          </span>
          <div className="flex justify-center items-center gap-4">
            <span className="text-primary-gray font-bold text-sm">Views:</span>
            <HiViewGrid size={16} />
            <CiBoxList className="text-primary-gray" />
          </div>
          <div className="flex flex-row max-w-[1440px] gap-4 md:flex-wrap md:w-full md:px-1 md:justify-around">
            <select
              className="flex py-3 max-w-[170px] bg-[#F9F9F9] border-[#DDDDDD] border rounded md:w-20"
              value={filterSort}
              onChange={handleSortChange}
            >
              <option value={""} disabled selected>
                Sort
              </option>
              <option value="price:asc">Price:Asc</option>
              <option value="price:desc">Price:Desc</option>
              <option value="rating:asc">Rating:Asc</option>
              <option value="rating:desc">Rating:Desc</option>
            </select>
            <input
              type="text"
              className="max-w-[170px] bg-[#F9F9F9] border-[#DDDDDD] border rounded md:w-28"
              value={filterText}
              onChange={handleFilterChange}
              placeholder="Search"
            />

            <button
              onClick={filterProduct}
              className="flex items-center bg-pBlue px-6 rounded text-white font-bold"
            >
              Filter
            </button>
          </div>
        </div>
        {/* Burda product carda bir map atılacak */}
        <div className="max-w-[1050px] mx-auto mb-8">
          {fetchState !== "FETCHED" ? (
            <div className="flex mx-auto" role="status">
              <svg
                aria-hidden="true"
                className="w-32 h-32 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
            </div>
          ) : (
            <div className="flex flex-wrap justify-between mx-2">
              {productListData.products.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-row max-w-60 md:mx-auto gap-y-4 shadow-md mb-5"
                >
                  <ProductCard data={item} key={index} />
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="flex max-w-[1440px] justify-center mx-auto">
          <ReactPaginate
            previousLabel={`<<`}
            nextLabel={">>"}
            breakLabel={"..."}
            pageCount={totalPageCount}
            marginPagesDisplayed={3}
            pageRangeDisplayed={3}
            onPageChange={handlePageClick}
            className="flex gap-4 text-pBlue text-lg border"
          />
        </div>
        <Clients />
      </div>
    </div>
  );
};

export default ProductListPage;
