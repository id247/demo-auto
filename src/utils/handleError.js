import history from 'myHistory';

export const handleError = e => {
  if (!e) return;

  if (e.response && e.response.status === 404) {
    history.replace('/404');
  } else {
    console.error(e);
  }
};

export default handleError;
