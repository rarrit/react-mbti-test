import ESTJ_IMG from "@/assets/img/mbti/i-estj.jpeg";
import ESTP_IMG from "@/assets/img/mbti/i-estp.jpg";
import ESFJ_IMG from "@/assets/img/mbti/i-esfj.jpeg";
import ESFP_IMG from "@/assets/img/mbti/i-esfp.webp";

import ENFJ_IMG from "@/assets/img/mbti/i-enfj.png";
import ENFP_IMG from "@/assets/img/mbti/i-enfp.jpg";
import ENTJ_IMG from "@/assets/img/mbti/i-entj.jpg";
import ENTP_IMG from "@/assets/img/mbti/i-entp.jpg";

import ISTJ_IMG from "@/assets/img/mbti/i-istj.jpg";
import ISTP_IMG from "@/assets/img/mbti/i-istp.jpeg";
import ISFJ_IMG from "@/assets/img/mbti/i-isfj.jpg";
import ISFP_IMG from "@/assets/img/mbti/i-isfp.jpeg";

import INFJ_IMG from "@/assets/img/mbti/i-infj.jpg";
import INFP_IMG from "@/assets/img/mbti/i-infp.jpg";
import INTJ_IMG from "@/assets/img/mbti/i-intj.jpg";
import INTP_IMG from "@/assets/img/mbti/i-intp.jpeg";

export const getMbtiImg = (mbti) => {
  switch (mbti) {
    case "ESTJ":
      return ESTJ_IMG;
    case "ESTP" :
      return ESTP_IMG;
    case "ESFJ" :
      return ESFJ_IMG;
    case "ESFP" :
      return ESFP_IMG;

    case "ENFJ" :
      return ENFJ_IMG;
    case "ENFP" :
      return ENFP_IMG;
    case "ENTJ" :
      return ENTJ_IMG;
    case "ENTP" :
      return ENTP_IMG;

    case "ISTJ" :
      return ISTJ_IMG;
    case "ISTP" :
      return ISTP_IMG;
    case "ISFJ" :
      return ISFJ_IMG;
    case "ISFP" :
      return ISFP_IMG;

    case "INFJ" :
      return INFJ_IMG;
    case "INFP" :
      return INFP_IMG;
    case "INTJ" :
      return INTJ_IMG;
    case "INTP" :
      return INTP_IMG;
      

    default:
      return "엥 에러인듯 알려줘요!";
  }
}