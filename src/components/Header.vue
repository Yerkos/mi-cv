<template>
  <div>
    <nav class="header">
      <div class="container">
        <div class="brand-container" @click="navigate('/')">
          <img
            class="brand-container-img"
            src="../assets/logopage.webp"
            alt=""
          />
          <div class="brand-container-span">
            <span>Aitor Ramirez</span>
            <span class="brand-container-span-sec">Frontend Developer</span>
          </div>
        </div>
        <div class="brand-container">
          <a
            href="https://github.com/Yerkos"
            class="brand-container-icons"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path
                d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21"
              ></path>
            </svg>
          </a>

          <a
            href="https://www.linkedin.com/in/aitor-ramirez-galvan-11abb240b/"
            class="brand-container-icons"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path
                d="M8 11v5m0-8v.01M12 16v-5m4 0v2.5a2.5 2.5 0 0 1-5 0M3 7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4z"
              ></path>
            </svg>
          </a>

          <div @click="$emit('toggleDark')" class="brand-container-button">
            <svg
              class="icon-sun"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M8 12a4 4 0 1 0 8 0a4 4 0 1 0-8 0"></path>
              <path
                d="M3 12h1m8-9v1m8 8h1m-9 8v1m-6.4-15.4.7.7m12.1-.7-.7.7m0 11.4.7.7m-12.1-.7-.7.7"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { navigate } from "@/router/routing";
</script>
