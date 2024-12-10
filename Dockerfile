FROM node:16

# 애플리케이션 디렉토리 설정
WORKDIR /app

# 코드 복사
COPY package*.json ./
RUN npm install
COPY . .

# 애플리케이션 실행
EXPOSE 3000
CMD ["node", "app.js"]

