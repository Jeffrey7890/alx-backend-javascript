import { createUser, uploadPhoto } from './utils';

export default function handleProfileSignup() {
  const promises = [uploadPhoto(), createUser()];
  let ans = '';
  Promise.all(promises)
    .then((results) => {
      ans = `${results[0].body} ${results[1].firstName} ${results[1].lastName}`;
      console.log(ans);
    })
    .catch(() => console.log('Signup system offline'));
}
