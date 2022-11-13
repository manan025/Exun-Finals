const express = require('express')
const Imap = require('imap');
const {simpleParser} = require('mailparser');
require('dotenv').config()


//global vars
const router = express.Router()

const imapConfig = {
    user: 'vansh@vanshsachdeva.co',
    password: process.env.PASSWORD,
    host: 'imap.porkbun.com',
    port: 993,
    tls: true,
};


//routes
router.get('/', (req, res) => {
    res.send('Mails')
})



const getEmails = async() => {
    try {
      const imap = new Imap(imapConfig);
      imap.once('ready', () => {
        imap.openBox('INBOX', false, () => {
          imap.search(['ALL', ['ON', new Date()]], (err, results) => {
            try{
              var f = imap.fetch(results, {bodies: ''});
            }
            catch (err){
              console.log(err)
              return 'error'
            }
            var arr = []
            f.on('message', msg => {
              msg.on('body', stream => {
                simpleParser(stream, async (err, parsed) => {
                  console.log(parsed.from)
                  arr.push(parsed.from);
                  console.log(arr)
                })
              });
            });
            f.once('error', ex => {
              return Promise.reject(ex);
            });
            f.once('end', () => {
              console.log('Done fetching all messages!');
              imap.end();
              return arr
            });
          });
        });
      });
  
      imap.once('error', err => {
        console.log(err);
      });
  
      imap.once('end', () => {
        console.log('Connection ended');
      });
  
      imap.connect();
    } catch (ex) {
      console.log('an error occurred');
    }
  };
  
router.post('/getmails', (req, res) => {
  try {
    const imap = new Imap(imapConfig);
    imap.once('ready', () => {
      imap.openBox('INBOX', false, () => {
        imap.search(['ALL', ['ON', new Date()]], (err, results) => {
          try{
            var f = imap.fetch(results, {bodies: ''});
          }
          catch (err){
            console.log(err)
            return 'error'
          }
          var arr = []
          f.on('message', msg => {
            msg.on('body', stream => {
              simpleParser(stream, (err, parsed) => {
                console.log(parsed.from)
                arr.push(parsed.from);
                // console.log(arr)
              })
              console.log(arr)
            });
          });
          f.once('error', ex => {
            return Promise.reject(ex);
          });
          f.once('end', () => {
            console.log('Done fetching all messages!');
            imap.end();
            return res.json(arr)
          });
        });
      });
    });

    imap.once('error', err => {
      console.log(err);
    });

    imap.once('end', () => {
      console.log('Connection ended');
    });

    imap.connect();
  } catch (ex) {
    console.log('an error occurred');
  }
})
  
  



module.exports = router