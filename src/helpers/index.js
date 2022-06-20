function formatDateNow(){
  const timeElapsed = Date.now();
  const today = new Date(timeElapsed);
  return today.toDateString();
}

export {formatDateNow};