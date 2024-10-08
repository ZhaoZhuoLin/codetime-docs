FROM nginx:latest

COPY /home/zzl/codetime /usr/share/nginx/html

# 启动Nginx服务
CMD ["nginx", "-g", "daemon off;"]