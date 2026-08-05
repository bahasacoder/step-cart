"use client"
import { useState } from "react";
import Image from "next/image";
export default function AllProductsPage() {
  const [quantity, setQuantity] = useState(5);
  const [selectedOption, setSelectedOption] = useState("option2");

  return (
    <div>
       <section className="relative block p-[140px]">
          <div className="container max-w-6xl flex p-8 m-auto">
            <div className="row w-full relative">
              <div className="col-sm-6 float-left w-full md:w-[50%]"><a className="gallery" href="/assets/images/shop/product-7.jpg"><Image src="/assets/images/shop/product-7.jpg" alt="Single Product Image"  width={100} height={100}/></a>
                <ul className="product-gallery">
                  <li><a className="gallery" href="/assets/images/shop/product-8.jpg"></a><Image src="/assets/images/shop/product-8.jpg" alt="Single Product" width={100} height={100}/></li>
                  <li><a className="gallery" href="/assets/images/shop/product-9.jpg"></a><Image src="/assets/images/shop/product-9.jpg" alt="Single Product"  width={100} height={100}/></li>
                  <li><a className="gallery" href="/assets/images/shop/product-10.jpg"></a><Image src="/assets/images/shop/product-10.jpg" alt="Single Product"  width={100} height={100}/></li>
                </ul>
              </div>
              <div className="col-sm-6 float-left w-full md:w-[50%]">
                <div className="row">
                  <div className="col-sm-12">
                    <h1 className="product-title font-alt">Accessories Pack</h1>
                  </div>
                </div>
                <div className="row mb-20">
                  <div className="col-sm-12"><span><i className="fa fa-star star"></i></span><span><i className="fa fa-star star"></i></span><span><i className="fa fa-star star"></i></span><span><i className="fa fa-star star"></i></span><span><i className="fa fa-star star-off"></i></span><a className="open-tab section-scroll" href="#reviews">-2customer reviews</a>
                  </div>
                </div>
                <div className="row mb-20">
                  <div className="col-sm-12">
                    <div className="price font-alt"><span className="amount">£20.00</span></div>
                  </div>
                </div>
                <div className="row mb-20">
                  <div className="col-sm-12">
                    <div className="description">
                      <p>The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.</p>
                    </div>
                  </div>
                </div>
                <div className="row mb-20">
                  <div className="col-sm-4 mb-sm-20">
                    <input className="form-control input-lg" type="number" name="" value={quantity} onChange={(e) => setQuantity(parseInt(e.target.value))} max="40" min="1" required />
                  </div>
                  <div className="col-sm-8"><a className="btn btn-lg btn-block btn-round btn-b" href="#">Add To Cart</a></div>
                </div>
                <div className="row mb-20">
                  <div className="col-sm-12">
                    <div className="product_meta">Categories:<a href="#"> Man, </a><a href="#">Clothing, </a><a href="#">T-shirts</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-70">
              <div className="col-sm-12">
                <ul className="nav nav-tabs font-alt" role="tablist">
                  <li className="active"><a href="#description" data-toggle="tab" aria-expanded="true"><span className="icon-tools-2"></span>Description</a></li>
                  <li className=""><a href="#data-sheet" data-toggle="tab" aria-expanded="false"><span className="icon-tools-2"></span>Data sheet</a></li>
                  <li className=""><a href="#reviews" data-toggle="tab" aria-expanded="false"><span className="icon-tools-2"></span>Reviews (2)</a></li>
                </ul>
                <div className="tab-content">
                  <div className="tab-pane active" id="description">
                    <p>Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words. If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages.</p>
                    <p>The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.</p>
                  </div>
                  <div className="tab-pane" id="data-sheet">
                    <table className="table table-striped ds-table table-responsive">
                      <tbody>
                        <tr>
                          <th>Title</th>
                          <th>Info</th>
                        </tr>
                        <tr>
                          <td>Compositions</td>
                          <td>Jeans</td>
                        </tr>
                        <tr>
                          <td>Size</td>
                          <td>44, 46, 48</td>
                        </tr>
                        <tr>
                          <td>Color</td>
                          <td>Black</td>
                        </tr>
                        <tr>
                          <td>Brand</td>
                          <td>Somebrand</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="tab-pane" id="reviews">
                    <div className="comments reviews">
                      <div className="comment clearfix">
                        <div className="comment-avatar"><Image src="/assets/images/shop/avatar-1.jpg" alt="avatar" width={100} height={100} /></div>
                        <div className="comment-content clearfix">
                          <div className="comment-author font-alt"><a href="#">John Doe</a></div>
                          <div className="comment-body">
                            <p>The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The European languages are members of the same family. Their separate existence is a myth.</p>
                          </div>
                          <div className="comment-meta font-alt">Today, 14:55 -<span><i className="fa fa-star star"></i></span><span><i className="fa fa-star star"></i></span><span><i className="fa fa-star star"></i></span><span><i className="fa fa-star star"></i></span><span><i className="fa fa-star star-off"></i></span>
                          </div>
                        </div>
                      </div>
                      <div className="comment clearfix">
                        <div className="comment-avatar"><Image src="/assets/images/shop/avatar-2.jpg" alt="avatar" width={100} height={100} /></div>
                        <div className="comment-content clearfix">
                          <div className="comment-author font-alt"><a href="#">MarkStone</a></div>
                          <div className="comment-body">
                            <p>Europe uses the same vocabulary. The European languages are members of the same family. Their separate existence is a myth.</p>
                          </div>
                          <div className="comment-meta font-alt">Today, 14:59 -<span><i className="fa fa-star star"></i></span><span><i className="fa fa-star star"></i></span><span><i className="fa fa-star star"></i></span><span><i className="fa fa-star star-off"></i></span><span><i className="fa fa-star star-off"></i></span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="comment-form mt-30">
                      <h4 className="comment-form-title font-alt">Add review</h4>
                      <form method="post">
                        <div className="row">
                          <div className="col-sm-4">
                            <div className="form-group">
                              <label className="sr-only" htmlFor="name">Name</label>
                              <input className="form-control" id="name" type="text" name="name" placeholder="Name" />
                            </div>
                          </div>
                          <div className="col-sm-4">
                            <div className="form-group">
                              <label className="sr-only" htmlFor="email">Email</label>
                              <input className="form-control" id="email" type="text" name="email" placeholder="E-mail" />
                            </div>
                          </div>
                          <div className="col-sm-4">
                            <div className="form-group">
                              <select value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)} className="form-control">
                                <option selected disabled>Rating</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-sm-12">
                            <div className="form-group">
                              <textarea className="form-control" id="" name="" rows={4} placeholder="Review"></textarea>
                            </div>
                          </div>
                          <div className="col-sm-12">
                            <button className="btn btn-round btn-d" type="submit">Submit Review</button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div id="divider" className="divider divider-center block p-[2rem]">
          <div className="max-w-[42rem] m-auto inline">
              <div className="flex m-0 p-0 text-center justify-center items-center">
                <div className="w-full m-0 p-0 border border-gray-300"></div>
                  <i className="fa fa-star-o">*</i>
                <div className="w-full m-0 p-0 border border-rose-300"></div>
              </div>
          </div>
        
        </div>
    </div>
  )
}
