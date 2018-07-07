import api from './apiService';

class Session {
  static login(session) {
    return api.post('/auth', session.user);
  }

  static signUp(user) {
    return api.post('/users', user);
  }
}

export default Session;
