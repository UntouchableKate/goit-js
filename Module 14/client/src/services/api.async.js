import 'core-js/stable';
import 'regenerator-runtime/runtime';

const URL = 'http://localhost:3000/notes';

export const getNotes = async () => {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Error while fetching' + `${response.statusText}`);
  }
};

export const saveNotes = async (note) => {
  try {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(note),
    };
    const response = await fetch(URL, options);
    const data = await response.json();
    return data;
  } catch (error) { throw new Error('Error while fetching' + `${response.statusText}`); }
};

export const deleteNotes = async (id) => {
  try {
    const options = {
      method: 'DELETE',
    };
    const response = await fetch(`${URL}/${id}`, options);
    const data = await response.json();
    return data;
  } catch (error) { throw new Error('Error while fetching' + `${response.statusText}`); }
};

export const updateNotes = async (id, note) => {
  try {
    const options = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(note),
    };
    const response = await fetch(`${URL}/${id}`, options);
    const data = await response.json();
    return data;
  } catch (error) { throw new Error('Error while fetching' + `${response.statusText}`); }
};
