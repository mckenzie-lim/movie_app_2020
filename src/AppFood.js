// import React from 'react';
// import PropTypes from 'prop-types';

// const foodILike = [
//   {
//     id:1,
//     name: "Kimchi", 
//     image: "https://www.bgw.kr/wp-content/uploads/2019/12/%EC%88%98%EC%9E%85%EA%B9%80%EC%B9%98.png",
//     rating: 5
//   },
//   {
//     id:2,
//     name: "Samgyeopsal", 
//     image: "https://newsimg.hankookilbo.com/cms/articlerelease/2020/06/11/202006111362061920_7.jpg",
//     rating: 4.9
//   },
//   {
//     id:3,
//     name: "Bibimbap", 
//     image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Dolsot-bibimbap.jpg/1280px-Dolsot-bibimbap.jpg",
//     rating: 4.8
//   },
//   {
//     id:4,
//     name: "Bulgogi", 
//     image: "http://img4.tmon.kr/cdn3/deals/2020/04/27/3455335334/original_3455335334_front_20a3d_1587970761production.jpg",
//     rating: 4.7
//   },
//   {
//     id:5,
//     name: "Backban", 
//     image: "http://cdn.ppomppu.co.kr/zboard/data3/2013/0814/m_1376489957_8445fec5fd978d66084867b0d89164b5.jpg",
//     rating: 4.6
//   }

// ]

// // function renderFood(dish)
// // {
// //   return <Food name={dish.name} picture={dish.image}/>;
// // }

// function Food({name, picture, rating})
// {
//   return <div>
//     <h2>I like {name}</h2>
//     <h4>{rating}/5.0</h4>
//     <img src={picture} alt={name}/>
//     </div>;
// }

// Food.propTypes = 
// {
//   name: PropTypes.string.isRequired,
//   picture: PropTypes.string.isRequired,
//   rating: PropTypes.number.isRequired
// }; 

// function App() 
// {
//   return (
//   /*<div className="App">{console.log(foodILike.map(renderFood))}{foodILike.map(renderFood)}</div>*/
//   <div className="App">{foodILike.map(dish => (
//     <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />
//   ))}</div>

//   );
// }

// export default App;
