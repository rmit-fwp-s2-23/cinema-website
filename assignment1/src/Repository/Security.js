const SECURITY = "security";

function initSecurity() {
  if (localStorage.getItem(SECURITY) === null) {
    const data = [];
    localStorage.setItem(SECURITY, JSON.stringify(data));
  }
}
function createSecurity(title, user) {
  const timeNow = new Date().getTime();
  const security = JSON.parse(localStorage.getItem(SECURITY));
  let data = {
    writer: user.username,
    title: title,
    timePosting: timeNow,
  };
  if (security.length !== 0) {
    for (const e of security) {
      if (e.title === title && e.writer === user.username) {
        e.timePosting = timeNow;
        localStorage.setItem(SECURITY, JSON.stringify(security));
        return;
      }
      security.push(data);
      localStorage.setItem(SECURITY, JSON.stringify(security));
      return;
    }
  } else {
    security.push(data);
    localStorage.setItem(SECURITY, JSON.stringify(security));
    return;
  }
}

function checkSecurity(title, user) {
  const security = JSON.parse(localStorage.getItem(SECURITY));
  const timeNow = new Date().getTime();
  if (security.length !== 0) {
    for (const e of security) {
      if (e.title === title && e.writer === user.username) {
        const postingTime = new Date(e.timePosting).getTime();
        console.log(postingTime);
        console.log(timeNow);
        const timeDifferenceInSeconds = (timeNow - postingTime) / 1000;
        console.log(timeDifferenceInSeconds);
        if (timeDifferenceInSeconds < 30) {
          return false;
        }
      }
    }
  }
  return true;
}

export { initSecurity, createSecurity, checkSecurity };
