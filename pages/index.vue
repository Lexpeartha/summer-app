<script lang="ts" setup></script>

<template>
  <ion-page>
    <ion-header color="primary">
      <ion-toolbar>
        <ion-buttons slot="secondary">
          <ion-button color="warning" fill="outline">
            Star
            <ion-icon slot="end" :icon="ioniconsStarSharp"></ion-icon>
          </ion-button>
        </ion-buttons>
        <ion-title>Best Nuxt.js tools</ion-title>
        <ion-buttons slot="primary">
          <ion-button color="tetriary-contrast" fill="outline">
            Edit
            <ion-icon slot="end" :icon="ioniconsCreateSharp"></ion-icon>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <!-- List of ionic items -->
      <ion-list>
        <ion-item>
          <ion-text>Nuxt Ionic</ion-text>
        </ion-item>
        <ion-item>
          <ion-text>Nuxt in general, lmao</ion-text>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>
