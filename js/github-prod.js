class GitHub {
  constructor(userGit) {
    this.client_id = 'your_id';
    this.client_secret = 'your_key';
    this.urlUserProfile = 'https://api.github.com/users/';
    this.userGit = userGit;
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
    this.urlUserRepos = `https://api.github.com/users/${this.userGit}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}`;
  }

  async getUser(user = this.userGit) {
    const profileResponse = await fetch(
      `${this.urlUserProfile}${this.userGit}`,
    );

    const reposResponse = await fetch(`${this.urlUserRepos}`);

    console.log(this.urlUserRepos);
    const profile = await profileResponse.json();
    const repos = await reposResponse.json();

    return {
      profile,
      repos,
    };
  }
}
