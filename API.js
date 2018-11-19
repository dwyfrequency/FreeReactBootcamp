const API = {
  fetchFriends() {
    return new Promise((res, rej) => {
      const friends = [
        { name: "adam", active: true },
        { name: "han", active: true },
        { name: "zach", active: true }
      ];
      setTimeout(() => {
        return res(friends);
      }, 2000);
    });
  }
};
