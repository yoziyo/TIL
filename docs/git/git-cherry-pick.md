# cherry-pick

만약 develop에 작업 하였으나, hotfix로 배포해야 할 경우
보통의 나 라면 기존 작업 내역을 돌리고 hotfix를 따서 새로 작업 했으나
해당 커밋만 가져오는 방법이 cherry-pick

1. *git log* 를 통해 가져올 커밋 내역을 체크 (ex: f602fb49328857977d5ffe1e4f79c92b5f122448)
2. 작업할 feature 혹은 hotfix를 만듬
	1. *git flow hot fix start 1.40.16*
	2. *git checkout hotfix/1.40.16*
3. 해당 feature 혹은 hotfix 에서  원하는 커밋을 가져오기
	1. *git cherry-pick f602fb49328857977d5ffe1e4f79c92b5f122448*
4. *git status* 를 통해 동일하게 진행
