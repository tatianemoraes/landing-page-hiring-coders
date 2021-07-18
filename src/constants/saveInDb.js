export function saveInDb(email) {
  const getStorage = localStorage.getItem('emails');
  if(getStorage) {

    const emails = JSON.parse(getStorage);
    
    emails.push(email);

    localStorage.setItem('emails', emails);
  } 
  localStorage.setItem('emails', [{ email }]);
};