# MongoDB 공식 이미지 사용
FROM mongo:latest

# 환경 변수 설정
ENV MONGO_INITDB_ROOT_USERNAME=root
ENV MONGO_INITDB_ROOT_PASSWORD=1234
ENV MONGO_INITDB_DATABASE=familing

# 초기 데이터베이스 및 사용자 설정을 위한 스크립트 복사
COPY ./init-mongo.js /docker-entrypoint-initdb.d/

# 포트 노출
EXPOSE 27017