import multer from 'multer';
import path from 'path';
import crypto = require('crypto');

export default {
  storage: multer.diskStorage({
    destination: path.resolve(__dirname, '..', '..', '..', 'tmp', 'uploads'),
    filename(req, file, call) {
      const hash = crypto.randomBytes(6).toString('hex');
      const fileName = `${hash}-${file.originalname}`;

      call(null, fileName);
    },
  }),
};
