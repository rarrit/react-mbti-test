export const getMbtiImg = (mbti) => {
  switch (mbti) {
    case "ESTP" :
      return "/src/assets/img/mbti/i-estp.jpg";
    case "ESTJ":
      return "/src/assets/img/mbti/i-estj.jpeg";
    case "ESFP" :
      return "/src/assets/img/mbti/i-esfp.jpg";
    case "ESFJ" :
      return "/src/assets/img/mbti/i-esfj.jpeg";
    case "ENFP" :
      return "/src/assets/img/mbti/i-enfp.jpg";
    case "ENFJ" :
      return "/src/assets/img/mbti/i-enfj.png";
    case "ENTP" :
      return "/src/assets/img/mbti/i-entp.jpg";
    case "ENTJ" :
      return "/src/assets/img/mbti/i-entj.jpg";
    case "ISTP" :
      return "/src/assets/img/mbti/i-istp.jpeg";
    case "ISFP" :
      return "/src/assets/img/mbti/i-isfp.jpeg";
    case "INFP" :
      return "/src/assets/img/mbti/i-infp.jpg";
    case "INTP" :
      return "/src/assets/img/mbti/i-intp.jpeg";
    case "INFJ" :
      return "/src/assets/img/mbti/i-infj.jpg";
    case "ISTJ" :
      return "/src/assets/img/mbti/i-istj.jpg";
    case "ISFJ" :
      return "/src/assets/img/mbti/i-isfj.jpg";
    default:
      return "엥 에러인듯 알려줘요!";
  }
}