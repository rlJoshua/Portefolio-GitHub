import React, {Component} from "react";
import config from './config'
import Search from "./Search";
import ProjectList from "./ProjectList";
import User from "./User";

class App extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            user : null,
            repositories : [],
            fork: false,
            error: null
        };

        this.toggleFork = this.toggleFork.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const data = new FormData(e.target);
        const pseudo = data.get('pseudo');

        this.fetchAllData(pseudo);
    }

    toggleFork() {
        this.setState(
            (state) => ({ fork: !state.fork })
        )
    }

    async fetchAllData(pseudo) {
        const user = await this.fetchUsers(pseudo);

        if (user.message) {
            this.setState({
                user: null,
                repositories: [],
                error: user.message
            });
        }
        else {
            const repositories = await this.fetchRepositories(user.login);

            this.setState({
                user: user,
                repositories: repositories,
                error: null
            });
        }
    }

    async fetchUsers(user) {
        return await fetch(`${config.api}/${user}`).then(res => res.json());
    }

    async fetchRepositories(user) {
        return await fetch(`${config.api}/${user}/${config.repos}`).then(res => res.json());
    }

    render() {
        const {user, repositories, error, fork} = this.state;

        const repositoriesFilter = repositories.filter(el => el.fork === false);

        return (
          <div className="content">
              <div className="col-md-12 pt-5 pb-3 d-flex banner">
                  <Search
                      handleSubmit={this.handleSubmit}
                      message={error}
                      toggleFork={this.toggleFork}
                      fork={fork}
                  />
                  <User
                      user={user}
                  />
              </div>
              <ProjectList
                  repositories={fork ? repositoriesFilter : repositories}
              />
          </div>
        );
    }
}

export default App;
