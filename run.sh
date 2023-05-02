#!/bin/bash
if [ $( docker ps -a | grep foodpool_frontend_app | wc -l ) -gt 0 ]; then
  docker-compose up -d --build
else
  docker-compose up -d
fi