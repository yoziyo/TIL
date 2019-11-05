# gitignore 가 동작하지 않을 때

TIL 글 올릴때 정적 파일은 gh-pages 브런치에만 올라가면 되는데,
master에서 .gitignore가 안먹힐 경우 캐시를 삭제 한 후 진행 하면 됨.

```shell
git rm -r --cached .
git add .
git commit -m ".gitignore is now working"
```

## 참고 사이트
[https://stackoverflow.com/questions/36498234/gitignore-not-ignoring-some-build-files-in-android-library](https://stackoverflow.com/questions/36498234/gitignore-not-ignoring-some-build-files-in-android-library)