import bodyParser from 'body-parser';
import passport from 'passport';
import cors from 'cors';

export default (app) => {
  app.use(cors());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(passport.initialize());
};
