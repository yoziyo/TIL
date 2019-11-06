<template>
	<div>
		<div>
			<h1>Today I Learned</h1>

			<div class="container">
				<div class="sub-title">JangHyoJin (yozi)</div>
				<ul>
					<li>
						<a href="javascript:alert('조금만 기다려 주세요 ㅠㅠ')">resume</a>
					</li>
					<li>
						<a href="https://github.com/yoziyo">GitHub</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<style>
@import "https://fonts.googleapis.com/css?family=Do+Hyeon";
.container {
	text-align: right;
}
h1 {
	font-family: "Do Hyeon";
	font-weight: 500;
	border-bottom: 17px solid #5b19de;
	word-break: keep-all;
	font-size: 4rem;
}
.sub-title {
	font-weight: 900;
	font-size: 1.5rem;
}
ul {
	list-style: none;
	line-height: 1.5rem;
}
@media (max-width: 550px) {
	h1 {
		font-size: 3.4rem;
	}
	.sub-title {
		font-size: 1.3rem;
	}
}
@media (max-width: 430px) {
	h1 {
		font-size: 2.4rem;
	}
}
</style>