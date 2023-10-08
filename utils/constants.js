const {
  NODE_ENV,
  JWT_SECRET,
  DATA_BASE = 'mongodb://localhost:27017/bitfilmsdb',
} = process.env;

const secretKey = NODE_ENV === 'production' ? JWT_SECRET : 'secret-key';

const addressMongoDB = NODE_ENV === 'production' ? DATA_BASE : 'mongodb://localhost:27017/bitfilmsdb';

module.exports = {
  addressMongoDB,
  secretKey,
};