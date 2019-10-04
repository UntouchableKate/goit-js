

const URL = 'http://localhost:3000/notes';

 const getNotes = () => fetch(URL).then((response) => {
  if (response.ok) {
    return response.json();
  }
  console.log(error);
  )
});

 const saveNotes = (note) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(note),
  };
  return fetch(URL, options).then((response) => {
    if (response.ok) {
      return response.json();
    }
    console.log(error);
  });
};

 const deleteNotes = (id) => {
  const options = {
    method: 'DELETE',
  };
  return fetch(`${URL}/${id}`, options).then((response) => {
    if (response.ok) {
      return response.json();
    }
    console.log(error);
  });
};

 const updateNotes = (id, note) => {
  const options = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(note),
  };
  return fetch(`${URL}/${id}`, options).then((response) => {
    if (response.ok) {
      return response.json();
    }
    console.log(error);
  });
};

module.exports = {
    getNotes, saveNotes, deleteNotes, updateNotes,
  };
