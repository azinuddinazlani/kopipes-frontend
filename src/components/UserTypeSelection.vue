<template>
    <div class="wrapper">
        <div class="login-container">
            <h1 class="title">To get started, which best describes your current situation?</h1>
            <div class="options">
                <!-- Option 1 -->
                <div class="option-card">
                    <div class="illustration">
                        <img src="@/img/login-employer.svg" alt="I'm hiring illustration" />
                    </div>
                    <button class="btn">I'm hiring</button>
                </div>
                <!-- Option 2 -->
                <div class="option-card">
                    <div class="illustration">
                        <img src="@/img/login-candidate.svg" alt="I'm looking for jobs illustration" />
                    </div>
                    <button class="btn">I'm looking for jobs</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
// Script placeholder
</script>

<style lang="scss" scoped>
.wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: #fef6f9;
    padding: 2rem;
}

.login-container {
    text-align: center;
    width: 100%;
    max-width: 900px;
}

.title {
    font-size: 1.5rem;
    margin-bottom: 2rem;
    color: #333;
}

.options {
    display: flex;
    justify-content: center;
    gap: 2rem;
}

.option-card {
    background: white;
    border-radius: 20px;
    /* Slightly larger border radius */
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    padding: 2.5rem;
    /* Slightly increased padding */
    width: 100%;
    max-width: 450px;
    /* Increased box size */
    text-align: center;
    transition: transform 0.2s ease, background-color 0.3s ease;
}

.option-card:hover {
    transform: translateY(-5px);
    background: linear-gradient(135deg, #FFE4F8, #FDC5BB);
    /* Gradient on hover */
}

.illustration {
    margin-bottom: 1rem;
}

.illustration img {
    max-width: 100%;
    height: auto;
    border-radius: 16px;
}

.btn {
    background-color: #000;
    color: #fff;
    border: none;
    border-radius: 8px;
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.btn:hover {
    background-color: #333;
}
</style>
