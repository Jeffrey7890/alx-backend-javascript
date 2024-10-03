export default function handleResponseFromAPI(promise) {
  promise.then(() => {
    console.log('Got a response from the API');
  }).catch(() => new Error());
  return Promise.resolve({ status: 200, body: 'success' });
}
