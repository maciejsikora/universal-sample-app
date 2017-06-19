const whoAmI = {
  server: () => {
    return typeof window === 'undefined';
  },
  client: () => {
    return !whoAmI.server();
  }
};

export default whoAmI;
