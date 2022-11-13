const express = require('express')
const Imap = require('imap');
const {simpleParser} = require('mailparser');


//global vars
const router = express.Router()

const imapConfig = {
    user: 'vansh@vanshsachdeva.co',
    password: 'sample123',
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
            f.on('message', msg => {
              msg.on('body', stream => {
                arr = []
                simpleParser(stream, async (err, parsed) => {
                  console.log(parsed.from)
                  arr.push(parsed.from);
                });
                return arr
              });
              // msg.once('attributes', attrs => {
              //   const {uid} = attrs;
              //   imap.addFlags(uid, ['\\Seen'], () => {
              //     // Mark the email as read after reading it
              //     console.log('Marked as read!');
              //   });
              // });
            });
            f.once('error', ex => {
              return Promise.reject(ex);
            });
            f.once('end', () => {
              console.log('Done fetching all messages!');
              imap.end();
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
  
router.post('/getmails', async (req, res) => {
    mails = await getEmails()
    return res.json({mails: mails})
})
  
  



module.exports = router