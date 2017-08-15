const sharedFunctions = {
  anyCase: (value) => {
    return new RegExp('^' + value + '$', 'ig');
  },
};

export default sharedFunctions;