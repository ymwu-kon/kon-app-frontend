<template>
    <div class="not-found-container">
        <h1>404 - Page Not Found</h1>
        <p>抱歉，您访问的页面不存在。</p>
        <router-link to="/">返回首页</router-link>
    </div>
</template>

<script setup name="NotFound"></script>

<style scoped>
.not-found-container {
    text-align: center;
    margin-top: 50px;
    color: var(--text-color);
}

h1 {
    font-size: 2.5em;
    margin-bottom: 0.5em;
}

p {
    font-size: 1.2em;
    margin-bottom: 1em;
}

a {
    text-decoration: none;
    color: var(--secondary-color);
    font-weight: bold;
}

a:hover {
    text-decoration: underline;
}
</style>
