# NodeStudy
시작
-- 1. 모듈  
-- 2. global
--    => global 객체의 경우 브라우저 window와 같은 전역 개체이다, window.open 메서드 처럼 global도 생략 가능
-- 3. console
-     => 디버깅용으로 console.log 밖에 사용하지 않았었는데 여러가지가 있다..
-- 4. timer
-- 5. filename
-- 6. module, exports, require
--    => require 는 최상단에 위치할 필요가없음. => 그래도 나중에 사용시 어딘가에 몰아서 정의해 놓는 것이 좋을 듯 하다
--    => 한번 require 한 파일은 require.cache에 저장됨. 매번 x but, 새로 require를 할 경우 require.cache를 제거
-- 7. url
--    => url.parse() 주소
      => url.format() 객체
-- 8. hash
      - 단방향 암호화
       => createHash(알고리즘) : md5, sha1, sha256, sha512 등 사용 => md5, sha1은 취약점 발견 sha512 사용
       => update(문자열)
       => digest(인코딩) : base64, hex, latin1 등 => base64가 대표적 비교적 길이가 짧음
       => sha512도 뚤리면..? => sha3? 
      - 양방향 암호화       

==================================================================================
day04 ~ 패스트캠퍼스 노드 강의 