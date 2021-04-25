const http = require('http');
const crypto = require('crypto');

// import firebase from "./firebase";
const firebase = require('firebase');
const cronJob = require('node-cron');
const axios = require('axios');
const mysql = require('mysql');

const config = {
    apiKey: 'AIzaSyDcIRUEKSblScEI1JTL_YVQUr__h2-O0a0',
    authDomain: 'tradingplus-ee6fe.firebaseapp.com',
    databaseURL:
      'https://tradingplus-ee6fe-default-rtdb.europe-west1.firebasedatabase.app',
    projectId: 'tradingplus-ee6fe',
    storageBucket: 'tradingplus-ee6fe.appspot.com',
    messagingSenderId: '119488355341',
    appId: '1:119488355341:web:9e1ec5ea0682434fc14944',
    measurementId: 'G-VQYHKB5TK3',
  };

firebase.initializeApp(config);


const setBalance =  () => {
    firebase.database('/users').get().then((snapshot)=> {
        const users =  snapshot.val();
        // TODO: finished the implement for server worker
        _.map(users, (user, uid)=>{
            user.portfolio.map((portfolio => {
                const currencyName = portfolio.currencyInfo.currency; 
                const currentPrice  = 100
                date = new Date(); 
                firebase.database(`/users/${uid}/portfolio/pnlHistory/${date}`).set({
                    pnl: currentPrice * portfolio.aamount 

                })
            }))

        })


    })


}


const hourCronJob = cronJob.schedule('0 0 */1  * * *', async () => {
    console.log('1 Hour: cronjob -------: '+ new Date() );
    setBalance()
    console.log('1 Hour: cronjob +++++: '+ new Date());
});

// hourCronJob.start();
