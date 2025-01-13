import { Link } from 'react-router-dom';
import React from 'react';
import { Product } from '../Datasets/Products/Final_Test_Product';

export function SearchResults({ results }) {

    return (
        <ul className="search-results">
            {results.length > 0 ? (
                results.map((searchItem, index) => {
                    // Find the product category based on the search item
                    const SelectedProduct = Product.find((product) =>
                        product.Data.some((content) => content.name === searchItem)
                    );

                    const productCategory = SelectedProduct ? SelectedProduct.product : "Unknown";

                    return (
                        <Link key={index} to={`/E-commerce-website/${productCategory}/${searchItem}`}>
                            <li >
                                {searchItem}
                            </li>
                        </Link>
                    );
                })
            ) : (
                <li>No results found</li>
            )}
        </ul>
    );
}
