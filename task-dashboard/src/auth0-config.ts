import { Auth0Client } from '@auth0/auth0-spa-js';

const auth0 = new Auth0Client({
  domain: 'dev-5bfrbb7a8jmmd6xv.us.auth0.com',
  clientId: '97OoNczaaG6tDbuGPO2YODZ2puB9OHme',
  authorizationParams: {
    redirect_uri: window.location.origin + '/callback' 
  }
});

export default auth0;