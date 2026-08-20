export default function tabReviews(){
  return (
    <>
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
                                <option value="0" disabled>Rating</option>
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
    
    </>
    
  )
}
