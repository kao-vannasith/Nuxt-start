<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <v-card>
      <v-tabs
        color="deep-purple accent-4"
        centered
      >
        <v-tab>1 ເດືອນ</v-tab>
        <v-tab>6 ເດືອນ</v-tab>
        <v-tab>12 ເດືອນ</v-tab>
        <v-tab-item
          v-for="n in 3"
          :key="n"
        >
          <v-container fluid>
            <v-row>
              <v-col
                v-for="i in 3"
                :key="i"
                cols="12"
                md="4"
              >
                <v-img
                  :src="`https://picsum.photos/500/300?image=${i * n * 5 + 10}`"
                  :lazy-src="`https://picsum.photos/10/6?image=${i * n * 5 + 10}`"
                  aspect-ratio="1"
                ></v-img>
              </v-col>
            </v-row>
          </v-container>
        </v-tab-item>
      </v-tabs>
    </v-card>
  </template>
