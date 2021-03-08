import React, {useEffect}  from 'react';
import Category from '../../components/others/Category'
import ProductCard from '../../components/product/ProductCard'
import {useDispatch, useSelector} from 'react-redux';
import {fetchProductByPage, productByCategoryPage} from './../../actions/product'
import Pagination from "react-js-pagination";
import {useParams, useHistory} from 'react-router-dom'; 
// import axios from 'axios';

const ShopWrap = () => {
 const {PRODUCTCOUNT, ALLPRODUCT, CATEGORYNAME} = useSelector(state=>state);
    const dispatch=useDispatch();
    const {categoryName} = useParams();
    const history = useHistory();
    const pageCount = new URLSearchParams(window.location.search).get('page');

    const handlePageChange = (pageNumber) => {
        if(CATEGORYNAME !==null){
            dispatch(productByCategoryPage(categoryName,pageNumber));
        }else{
            dispatch(fetchProductByPage(pageNumber));
        }
       
    }

    useEffect(()=>{
        if(CATEGORYNAME !==null){
            dispatch(productByCategoryPage(categoryName,pageCount));
        }else{
            dispatch(fetchProductByPage(pageCount));
        }
    },[pageCount, CATEGORYNAME, categoryName, dispatch])


      /**
 * TODO: Pagination
 *@version 1.0.0
 * @author [Brijesh Kushwaha]
 */


  const handlePageChange5 = (pageNumber) => {
    handlePageChange(pageNumber);
    let currentUrlParams = new URLSearchParams(window.location.search);
    currentUrlParams.set('page', pageNumber);
    history.push(window.location.pathname + "?" + currentUrlParams.toString());
  };


    return (
        <section>
                <div className="row">
                    <div className="col-md-3">
                        <div className="category">
                        <h3>Category</h3>
                        <hr/>
                           <Category />
                        </div>
                    </div>
                    <div className="col-md-9">
                        <div className="product-list">
                        <div className="row">

                        {ALLPRODUCT && ALLPRODUCT.length>0 ?

                            ALLPRODUCT.map((product, index)=>{
                                return(
                                    <ProductCard product={product} key={index} grid={true}/>
                                )
                            }):null}

                        </div>


                        <div className="pagination-custom">

                            <Pagination
                            // hideDisabled={true}
                            hideNavigation={true}
                            activePage={parseInt(pageCount)}
                            itemsCountPerPage={3}
                            totalItemsCount={PRODUCTCOUNT}
                            pageRangeDisplayed={4}
                            onChange={handlePageChange5}
                            />
                        </div>
     
                        </div>
                    </div>
                </div>
            </section>
    )
}

export default ShopWrap
