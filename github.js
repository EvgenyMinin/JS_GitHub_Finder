class GitHub {
  constructor() {
    this.client_id = "df82aca9333d87564c44";
    this.client_secret = "ff493fa7f0674134ba434cb06243fa7da28e419e";
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();

    return {
      profile
    };
  }
}
