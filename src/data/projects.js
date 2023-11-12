// 이미지 임포트
import WebImage1 from "../images/web-project-1.jpg";
import WebImage2 from "../images/web-project-2.jpg";
import MobileImage1 from "../images/mobile-project-1.jpg";
import MobileImage2 from "../images/mobile-project-2.jpg";
import UIImage1 from "../images/ui-project-1.jpg";
import UIImage2 from "../images/ui-project-2.jpg";

export const projectsData = [
  {
    id: 1,
    title: "Gloddy",
    category: "웹 애플리케이션",
    img: WebImage2,
    ProjectHeader: {
      title: "React Native 개발 - 웹뷰 네비게이션 개선",
      publishDate: "2023.06 ~ 2023.12",
      tags: "Web Application",
    },
  },
  {
    id: 2,
    title: "2023 영암 월출산국화축제",
    category: "Web Application",
    img: MobileImage2,
  },
  {
    id: 3,
    title: "나만의 포트폴리오 개발",
    category: "Web Application",
    img: UIImage1,
  },
  {
    id: 4,
    title: "Atties",
    category: "Mobile Application",
    img: UIImage2,
  },
  {
    id: 5,
    title: "React Social App",
    category: "UI/UX Design",
    img: MobileImage1,
  },
  {
    id: 6,
    title: "Apple Design System",
    category: "Branding",
    img: WebImage1,
  },
];
