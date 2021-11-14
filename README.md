# YT-Downloader

![yt-downloader](https://user-images.githubusercontent.com/57078565/141660604-9fb41a17-7448-4f29-927c-5c292466dc19.jpg)

An application that allows to download music from YouTube.

In project used:
- typescript
- react
- ytdl-core
- express.js
- sequelize
- pusher
- jsonwebtoken
- bcypt
- nodemailer
# How to run
```
1. Import 'yt-downloader-v2.sql' file to database
2. Go to 'backend' folder
3. Type 'npm install'
4. When install is done, create .env file, with example content:
	-ACCESS_TOKEN -> your access token. You can generate this with use this site: https://passwordsgenerator.net/sha256-hash-generator/
	-EMAIL_TOKEN -> your email token. You can generate this with use this site: https://passwordsgenerator.net/sha256-hash-generator/
	-APP_ID -> pusher data
	-APP_KEY -> pusher data
	-SECRET -> pusher data
	-CLUSTER -> pusher data
	-USER_MAILER -> your gmail account
	-PASS_MAILER -> password to gmail 
	-RESET_PASSWORD_TOKEN -> your reset password token. You can generate this with use this site: https://passwordsgenerator.net/sha256-hash-generator/
5. Type 'npm run dev'
6. Go to 'frontend' folder
7. Type 'npm install'
8. When install is done, create .env file, with example content:
	-REACT_APP_NODE_ENV = development
	-REACT_APP_KEY -> pusher data
	-REACT_APP_CLUSTER -> pusher data
10. Type 'npm run dev'
```

Now, you can log in. 
Email is: admin@admin.com
Password id: Admin!23
