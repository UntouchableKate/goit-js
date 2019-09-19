import { refs } from '../utils/constants';

const textarea = refs.body;
const input = refs.title;

const postTitle = localStorage.getItem('fb-input');
const postBody = localStorage.getItem('fb-textarea');

if (postTitle || postBody) {
  textarea.value = postBody;
  input.value = postTitle;
}


function storageTextForm() {
  localStorage.setItem('fb-textarea', textarea.value);
  localStorage.setItem('fb-input', input.value);
}

export default storageTextForm;
