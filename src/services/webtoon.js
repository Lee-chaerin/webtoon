import { axiosInstance } from '../utils/api';

export const WebtoonAPIList = {
  getAllWebtoon: async() => await axiosInstance.get('all'),

  getNaverWebtoon: async() => await axiosInstance.get('naver'),
  getKakaoWebtoon: async() => await axiosInstance.get('kakao'),
  getKakaopageWebtoon: async() => await axiosInstance.get('kakao-page'),

  getAllMon: async() => await axiosInstance.get('all/week?day=0'),
  getAllTue: async() => await axiosInstance.get('all/week?day=1'),
  getAllWed: async() => await axiosInstance.get('all/week?day=2'),
  getAllThu: async() => await axiosInstance.get('all/week?day=3'),
  getAllFri: async() => await axiosInstance.get('all/week?day=4'),
  getAllSat: async() => await axiosInstance.get('all/week?day=5'),
  getAllSun: async() => await axiosInstance.get('all/week?day=6'),

  getSearchWebtoon: async() => await axiosInstance.get('search?keyword='),  //검색(뒤에 검색하는법 알아오기)

  // 채린 숙제 : 위의 함수 처럼 나머지 api들도 작업해주세요.

  // 만든것 : 플랫폼별, 요일별, 검색 / 플랫폼별 요일, 연재중, 연재완료(3개 지원선배한테 만드는거 맞는지 물어보기)
}