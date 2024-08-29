#!/bin/bash
BUILD_JAR=$(ls /home/ubuntu/action/familing/build/libs/familing-0.0.1-SNAPSHOT.jar)
JAR_NAME=$(basename $BUILD_JAR)

echo "> 현재 시간: $(date)"

echo "> build 파일명: $JAR_NAME"

echo "> build 파일 복사"
DEPLOY_PATH=/home/ubuntu/action/
cp $BUILD_JAR $DEPLOY_PATH

echo "> 현재 실행중인 애플리케이션 pid 확인"
CURRENT_PIDS=$(pgrep -f "java -jar /home/ubuntu/action/$JAR_NAME" | head -n 1)
echo $CURRENT_PIDS

if [ -z "$CURRENT_PIDS" ]
then
  echo "> 현재 구동중인 애플리케이션이 없으므로 종료하지 않습니다."
else
  echo "> kill -9 $CURRENT_PIDS"
  sudo kill -9 $CURRENT_PIDS
  sleep 5
fi

echo "> DEPLOY_JAR 배포" >> /home/ubuntu/action/deploy.log
sudo nohup java -jar $DEPLOY_PATH$JAR_NAME >> /home/ubuntu/deploy.log 2>/home/ubuntu/action/deploy_err.log &
