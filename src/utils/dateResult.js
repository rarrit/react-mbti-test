export const getFormattedTime = (time) => {
  const currentDate = new Date();
  const targetDate = new Date(time);
  
  // 날짜 부분만 추출 (YYYY-MM-DD)
  const year = targetDate.getFullYear();
  const month = String(targetDate.getMonth() + 1).padStart(2, '0');
  const day = String(targetDate.getDate()).padStart(2, '0');
  const formattedDate = `${year}-${month}-${day}`;

  // 현재 시간과의 차이 계산
  const timeDifference = currentDate - targetDate; // 밀리초 단위
  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);

  // 시간 차이에 따른 출력
  let timeAgo = '';
  if (seconds < 60) {
    timeAgo = `${seconds}초 전`;
  } else if (minutes < 60) {
    timeAgo = `${minutes}분 전`;
  } else if (hours < 24) {
    timeAgo = `${hours}시간 전`;
  } else {
    timeAgo = formattedDate;
  }

  return timeAgo;
}