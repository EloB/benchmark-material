export const list = Array.apply(null, {length: 1000}).map((item, index) => index.toString(16));

export const onClick = (message, index) => {
  if (message === 'Bad') {
    return console.log(`Bad ${index}`);
  }
  console.log('Good');
};
