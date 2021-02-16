// import React, { useState} from 'react';
import React from 'react';s
import ReactDOM from 'react-dom';
import axios from 'axios';
import Options from './components/Options.jsx'
import Typography from '@material-ui/core/Typography';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // products: [
      // {
      //   category: 'Cleanser',
      //   item: 'Tatcha Cleansing Oil',
      //   size: 'Full',
      //   status: 'Opened',
      //   price: 48,
      //   purchase_date: '2018-08-27',
      //   expiration_date: '2020-08-27',
      //   repurchase: true,
      //   notes: 'Favorite oil based cleanser',
      //   favorites: true,
      // },
      // {
      //   category: 'Cleanser',
      //   item: 'Youth To The People Cleanser',
      //   size: 'Full',
      //   status: 'Opened',
      //   price: 35,
      //   purchase_date: '2019-03-05',
      //   expiration_date: '2021-03-05',
      //   repurchase: true,
      //   notes: 'Love the pump on the bottle; decent job cleansing',
      //   favorites: false,
      // },
      // {
      //   category: 'Essence',
      //   item: 'SKII Essence',
      //   size: 'Full',
      //   status: 'Opened',
      //   price: 199,
      //   purchase_date: '2019-10-10',
      //   expiration_date: '2021-10-10',
      //   repurchase: true,
      //   notes: 'Favorite essence!!',
      //   favorites: true,
      // },
      // {
      //   category: 'Serum',
      //   item: 'The Ordinary Hyaluronic Acid',
      //   size: 'Full',
      //   status: 'Opened',
      //   price: 13,
      //   purchase_date: '2018-11-30',
      //   expiration_date: '2020-11-30',
      //   repurchase: false,
      //   notes: 'Meh. Consistency was goopy; didn\'t see any results',
      //   favorites: false,
      // }],
      products: [],
      options: ['Current Products', 'Favorites', 'Repurchase List', 'Wish List', 'To Buy', 'Alerts'],
      skincareItemCategories: ['Cleansers', 'Exfoliators', 'Toners', 'Essences', 'Serums', 'Oils', 'Sheet Masks', 'Eye Creams', 'Moisturizers', 'Sunscreens'],
      wishList: ['La Mer Moisturizer', 'La Mer Eye Cream', 'Luna Retinol Sleeping Night Oil'],
      alerts: [
        {
          body: 'Good Morning! Don\'t forget to apply your sunscreen today :)',
          time: 900,
          // 0 23 * * * or is it 0 23 * * * * ???
          frequency: 'daily',
        },
        {
          body: 'Time to clean up & get ready for bed! Remember to do your nighttime routine and get enough beauty sleep so your skin will glow tomorrow <3',
          time: 2300,
          // 0 23 * * * or is it 0 23 * * * * ???
          frequency: 'daily',
        },
        {
          body: 'Use a sheet mask tonight for an extra boost of hydration',
          time: 2300,
          // 0 23 * * 1,3,6 *
          frequency: 'weekly on Monday, Wednesday, Satuday',
        },
        {
          body: 'Tatcha cleansing oil expiring in one month! Make sure to use it all up before 8/27/20!',
          time: 2300,
          // 0 23 27 7 * 2020
          frequency: 'once on 7/27/20',
        },
        {
          body: 'Youth to the People cleanser expiring in one month! Make sure to use it all up before 3/5/21!',
          time: 2300,
          // 0 23 5 2 * 2021
          frequency: 'once on 2/5/21',
        },
        {
          body: 'SKII Essence expiring in one month! Make sure to use it all up before 10/10/21!',
          time: 2300,
          // 0 23 10 9 * 2021
          frequency: 'once on 9/10/21',
        },
        // {
        //   body: 'The Ordinary Hyaluronic Acid expiring in one month! Make sure to use it all up before 11/30/20!',
        //   time: 2300,
        //   // 0 23 30 10 * 2020
        //   frequency: 'once on 10/30/20',
        // },
      ]
    }
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd(state, data) {
    if (state === 'Alerts') {
      this.setState((prevState) => ({
        alerts: prevState.push(data)
      }));
    } else {
      this.setState((prevState) => ({
        products: prevState.push(data)
      }));
    }
  }

   componentDidMount() {
    axios.get('/products')
      .then(({ data }) => {
        this.setState({
          products: data,
          // alerts: data.alerts
        });
      })
      .catch((err) => {
        console.log('err', err);
      })
  }

  render () {
    return (
    <div style={{padding: 15}}>
      {/* <h1>Skincare Inventory Tracker</h1> */}
      <Typography gutterBottom variant="h3" style={{color: 'green'}}component="h3">Skincare Inventory Tracker</Typography>
      <Options options={this.state.options} products={this.state.products} categories={this.state.skincareItemCategories} alerts={this.state.alerts} wishlist={this.state.wishList} handleAdd={this.handleAdd}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));