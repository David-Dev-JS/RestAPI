const { limitCount } = require('../lib/settings');
const { User } = require('./model');
const cron = require("node-cron");

    async function addUser(username, password, apikey) {
        let obj = { username, password, apikey, defaultKey: apikey, premium: [], limit: limitCount };
        User.create(obj);
    }

    async function checkUsername(username) {
        let users = await User.findOne({username: username});
        if(users !== null) {
            return users.username;
        } else {
            return false;
        }
    }

    async function getApikey(id) {
        let users = await User.findOne({_id: id});
        return {apikey: users.apikey, username: users.username};
    }

    async function cekKey(apikey) {
        let db = await User.findOne({apikey: apikey});
        if (db === null) {
            return false;
        } else {
            let isPremium = db.premium.length > 0;
            let status = isPremium ? 'premium' : 'free';
            let limit = isPremium ? 'Infinity' : db.limit;
    
            return {
                apikey: db.apikey,
                status: status,
                limit: limit
            };
        }
    }

    async function lessLimit(apikey, amount) {
        try {
          const user = await User.findOneAndUpdate(
            { apikey: apikey },
            { $inc: { limit: -amount } },
            { new: true }
          );
      
          if (!user) {
            return { error: 'User not found' };
          }
      
          const isPremium = user.premium.length > 0;
          const limit = isPremium ? 'Infinity' : user.limit;
      
          return {
            limit
          };
        } catch (error) {
          console.error('Error decrementing limit:', error);
          return { error: 'Failed to decrement limit' };
        }
      }

  async function resetUserLimits() {
        try {
            const result = await User.updateMany({}, { $set: { limit: limitCount } });
            console.log('User limits reset successfully:', result);
        } catch (error) {
            console.error('Failed to reset user limits:', error);
        }
    }
    
    cron.schedule('0 12 * * *', resetUserLimits, {
        scheduled: true,
        timezone: "Asia/Jakarta"
    });

    module.exports = { addUser, checkUsername, getApikey, cekKey, lessLimit }