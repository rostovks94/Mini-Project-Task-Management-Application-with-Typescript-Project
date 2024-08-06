import auth0 from '../auth0-config';

export const login = async () => {
  await auth0.loginWithRedirect();
};

export const logout = () => {
  auth0.logout({
    logoutParams: { returnTo: window.location.origin },
  });
};

export const handleAuthCallback = async () => {
  const query = window.location.search;
  if (query.includes('code=')) {
    await auth0.handleRedirectCallback();
    const user = await auth0.getUser();
    if (user) {
      window.location.replace('/dashboard'); 
    } else {
      window.location.replace('/login'); 
    }
    return user;
  } else {
    console.error('No query params available for parsing.');
  }
};