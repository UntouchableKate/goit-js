/* eslint-disable consistent-return */
require('core-js/stable');
require('regenerator-runtime/runtime');

const URL = 'http://localhost:3000/notes';

export const getNotes = async () => {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
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
  } catch (error) {
    console.log(error);
  }
};

export const deleteNotes = async (id) => {
  try {
    const options = {
      method: 'DELETE',
    };
    const response = await fetch(`${URL}/${id}`, options);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
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
  } catch (error) {
    console.log(error);
  }
};


module.exports = {
  getNotes, saveNotes, deleteNotes, updateNotes,
};
