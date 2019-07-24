import React from "react";
import axios from "axios";

const apiAuthHandler = axios.create({
  withCredentials: true,
  baseURL: process.env.REACT_APP_BACKEND
});

const AuthContext = React.createContext();

class AuthProvider extends React.Component {
  constructor() {
    super();
    this.state = {
      loginStatus: {},
      user: null
    };
  }

  componentDidMount() {
    this.isLoggedIn();
  }

  get user() {
    return this.state.user;
  }

  updateState(data) {
    const { loginStatus, user } = data;
    this.setState({ loginStatus: loginStatus, user: user });
  }

  isLoggedIn = () => {
    apiAuthHandler
      .get("/login", null)
      .then(serverRes => {
        this.updateState(serverRes.data);
      })
      .catch(serverErr => {
        this.setState({ loginStatus: false });
      });
  };

  login = (clbk, data) => {
    apiAuthHandler
      .post("/login", data)
      .then(async serverRes => {
        await this.updateState(serverRes.data);
        clbk(serverRes.data.loginStatus);
      })
      .catch(serverErr => {
        this.setState({ isLoggedIn: false });
      });
  };

  signout = clbk => {
    apiAuthHandler.post("/signout").then(serverRes => {
      this.setState({ loginStatus: false }, () => clbk(this.isLoggedIn));
    });
  };

  render() {
    return (
      <AuthContext.Provider
        value={{
          user: this.user,
          loginStatus: this.state.loginStatus,
          isLoggedIn: this.isLoggedIn,
          login: this.login,
          signout: this.signout
        }}
      >
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

const AuthConsumer = AuthContext.Consumer;

export { AuthProvider, AuthConsumer };
