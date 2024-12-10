# Node.js 베이스 이미지
FROM node:16

# 애플리케이션 디렉토리 설정
WORKDIR /app

# 필요한 파일 복사
COPY package*.json ./
RUN npm install
COPY . .

# 애플리케이션 실행 포트
EXPOSE 3000

# 애플리케이션 실행 명령
CMD ["npm", "start"]
