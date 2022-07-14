<template>
  <div class="loading">
    <div class="loading-icon">
      <svg
        width="100"
        height="100"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="50"
          cy="50"
          r="40"
          fill="none"
          stroke-width="5"
          stroke-linecap="round"
          stroke-dasharray="1, 200"
          stroke-dashoffset="0"
          stroke="#fff"
          transform="rotate(0 50 50)"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            calcMode="linear"
            values="0 50 50;360 50 50"
            keyTimes="0;1"
            dur="1s"
            begin="0s"
            repeatCount="indefinite"
          ></animateTransform>
        </circle>
      </svg>
    </div>
  </div>
</template>
<script setup></script>
<style scoped></style>
