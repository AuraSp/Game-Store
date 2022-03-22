import React, { useState, useEffect } from 'react';
import './Product.css';
import { ref, set, push, getDatabase, get, child, onValue, remove } from "https://www.gstatic.com/firebasejs/9.6.5/firebase-database.js";

const Product = (props) => {

  let [comment, setComment] = useState("");
  let [commentData, setCommentData] = useState([])
  let divComments = []


  console.log(props)
  let product = props.productInfo
  console.log(props.user)

  function leaveComment(e) {
    e.preventDefault();
    if (comment) {
      console.log("test")
      set((push(ref(props.db, "Comments/"))), {
        Game: product.name,
        User: props.user.displayName,
        Comment: comment
      });
      e.target.reset();
      /* props.completeSubmit(<div className='successMessage'>Question Submitted Succesfully!<BsCheckCircle style={!q ? {} : { color: '#af83318e' }} /></div>) */
      setComment('');
    }
  }


  function removeComment(comment) {
    console.log(comment)
    remove(ref(props.db, 'Comments/' + comment));
  }

  function readData() {
    const dataRef = ref(props.db, 'Comments/');
    onValue(dataRef, (snapshot) => {
      const data = snapshot.val();
      setCommentData(data)
    });
  }

  for (const [key, value] of Object.entries(commentData)) {
    console.log(`${key}: ${value.Comment}`);
    divComments.push([value.Comment, value.User, value.Game, key])

  }

  useEffect(() => {
    readData()
  }, [])

  return (
    <div className='productPage'>
      <span className='prodTitle'>{product.name}</span>
      <div className='prodVideoWrap'>
        <video className="prodVideo" controls>
          <source src={product.trailerUrl} type="video/mp4" />
        </video>
      </div>

      <div className='productDesc'>
        <h2>Summary for {product.name}</h2>
        <div className='productSummary'>
          <div className='prodInfoBlock'>
            <div className='prodAbout'>
              <h3>Product Description</h3>
              <p>{product.about}</p>
            </div>
            <div className='prodPrice'>
              <span>Price:&nbsp;</span><p>${product.price}</p><button className='prodBuyBtn' onClick={(e) => { props.addToCart(product.name) }}>Add to cart</button></div>
          </div>
          <div className='productAdditional'>
            <div className='productRequirements'>
              <h3>System requirements</h3>
              <ul>
                <li><span>OS:</span> {product.specs.os}</li>
                <li><span>CPU:</span> {product.specs.cpu}</li>
                <li><span>GPU:</span> {product.specs.gpu}</li>
              </ul>
            </div>
            <div className='prodTags'>
              <h3>Tags</h3>
              <ul>
                {product.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
              <hr></hr>
              <p>In-Game Purchases, Users Interact</p>
            </div>
          </div>
        </div>
      </div>

      <div className='productMedia'>
        <h2>Related Media for {product.name}</h2>
        <div className='productImages'>
          <img src={product.photo2} alt="gamePhoto"></img>
          <img src={product.photo3} alt="gamePhoto"></img>
          <img src={product.photo4} alt="gamePhoto"></img>
        </div>
      </div>
      <div className='productComments'>
        <h2>Comment section</h2>
        <div className='productCommentList'>
          {props.user != 0 &&
            <form onSubmit={(e) => { leaveComment(e) }}>
              <textarea className='productComment' name="" onChange={(e) => { setComment(e.target.value) }} value={comment} id="supportGamesSoftwere2" placeholder='Leave your comment!...'></textarea>
              <button type="submit">Post</button>
            </form>}
          <div>
            {divComments.map((comment) => (
              comment[2] == product.name && <div className='prodComment'>
                <p>{comment[0]}</p><p>Commented By - <b>{comment[1]}</b></p><p>Game - <b>{comment[2]}</b></p> {comment[1] == props.user.displayName && <button type="button" onClick={(e) => { removeComment(comment[3]) }}>Remove</button>}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product