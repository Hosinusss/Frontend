import { useState, useEffect } from "react";
import { Col, Container, Card, Row, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";

export default function Products({ addToCart }) {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('All Categories');
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => setDropdownOpen(prevState => !prevState);

    useEffect(() => {
        // Fetch products from the API
        fetch('http://localhost:9000/api/listing')
            .then(response => response.json())
            .then(data => {
                setProducts(data);
                setFilteredProducts(data);

                // Extract unique categories from the fetched products
                const uniqueCategories = [...new Set(data.map(product => product.category.categoryName))];
                setCategories(uniqueCategories);
            })
            .catch(error => console.error('Error fetching products:', error));
    }, []);

    const filterByCategory = (category) => {
        setSelectedCategory(category);
        if (category === 'All Categories') {
            setFilteredProducts(products);
        } else {
            setFilteredProducts(products.filter(product => product.category.categoryName === category));
        }
    };

    return (
        <>
            <section className="section bg-light" id="products">
                <Container>
                    <Row className="justify-content-center">
                        <div className="col-12">
                            <div className="section-title text-center mb-4 pb-2">
                                <h4 className="title fw-semibold mb-4">Our Products</h4>
                            </div>
                        </div>
                    </Row>

                    <Row className="mb-4">
                        <Col>
                            <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
                                <DropdownToggle caret>
                                    {selectedCategory}
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem onClick={() => filterByCategory('All Categories')}>All Categories</DropdownItem>
                                    {categories.map((category, index) => (
                                        <DropdownItem key={index} onClick={() => filterByCategory(category)}>
                                            {category}
                                        </DropdownItem>
                                    ))}
                                </DropdownMenu>
                            </Dropdown>
                        </Col>
                    </Row>

                    <Row>
                        {filteredProducts.map((item, key) => (
                            <Col lg={3} md={6} className="col-12 mt-4 pt-2" key={key}>
                                <Card className="border-0 shadow">
                                    <div className="p-4 border-bottom border-light">
                                        <h6 className="fw-semibold mb-3 text-uppercase">{item.name}</h6>
                                        {item.image ? (
                                            <img
                                                src={`http://localhost:9000/uploads/images/${item.image}`}
                                                alt={item.name}
                                                className="product-image mb-3"
                                            />
                                        ) : (
                                            <div className="no-image-placeholder mb-3">
                                                No image available
                                            </div>
                                        )}
                                        <p className="text-muted mb-0">{item.description}</p>

                                        <div className="d-flex my-4">
                                            <span className="price h3 fw-semibold mb-0">${item.price}</span>
                                        </div>

                                        <button onClick={() => addToCart(item)} className="btn btn-primary w-100">Add to Cart</button>
                                    </div>

                                    <div className="p-4 features-section">
                                        <h6 className="mb-0">Supplier:</h6>
                                        <ul className="list-unstyled">
                                            <li className="text-muted">{item.supplier ? item.supplier.name : 'Unknown Supplier'}</li>
                                        </ul>
                                    </div>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            <style jsx>{`
                .product-image {
                    width: 100%;
                    height: auto;
                }
                .no-image-placeholder {
                    width: 100%;
                    height: 200px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background-color: #f0f0f0;
                    color: #999;
                }
                .features-section {
                    height: 80px;
                }
                .features-section h6 {
                    margin-bottom: 0;
                }
                .features-section ul {
                    margin-top: 0;
                }
            `}</style>
        </>
    );
}
