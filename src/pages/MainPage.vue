<template>
    <q-layout view="lhh lpR lFf">

        <q-header class="bg-white">
            <AppHeader />
        </q-header>

        <q-drawer
            v-model="leftDrawerOpen"
            show-if-above

            :mini="miniState && !overlayState"
            :overlay="overlayState"
            :width="340"

            :breakpoint="500"
            bordered
            class="text-white bg-blue"
        >
            <q-scroll-area class="fit" :horizontal-thumb-style="{ opacity: 0 || ''}">
                <q-list padding>

                    <q-item clickable v-ripple>
                        <q-item-section avatar>
                            <q-icon name="menu" @click="toggleDrawerState" />
                        </q-item-section>

                        <q-item-section>
                            Закрепить меню
                        </q-item-section>
                    </q-item>
                    <q-item clickable v-ripple>
                        <q-item-section avatar>
                            <q-icon name="inbox" />
                        </q-item-section>

                        <q-item-section>
                            Inbox
                        </q-item-section>
                    </q-item>

                    <q-item clickable v-ripple>
                        <q-item-section avatar>
                            <q-icon name="star" />
                        </q-item-section>

                        <q-item-section>
                            Star
                        </q-item-section>
                    </q-item>

                    <q-item clickable v-ripple>
                        <q-item-section avatar>
                            <q-icon name="send" />
                        </q-item-section>

                        <q-item-section>
                            Send
                        </q-item-section>
                    </q-item>

                    <q-item clickable v-ripple>
                        <q-item-section avatar>
                            <q-icon name="drafts" />
                        </q-item-section>

                        <q-item-section>
                            Drafts
                        </q-item-section>
                    </q-item>
                </q-list>
            </q-scroll-area>

            <div class="q-mini-drawer-hide absolute" style="top: 15px; right: 17px">
                <q-btn
                    dense
                    round
                    unelevated
                    color="accent"
                    icon="attach_file"
                    @click="toggleMiniState"
                />
            </div>
        </q-drawer>

        <q-page-container class="page-container">
            <div class="q-px-lg">
                <div class="bg-blue text-white q-my-lg q-px-xl nav-tabs">
                    <q-tabs
                        v-model="tab"
                        dense
                        no-caps
                        align="left"
                        style="height: 56px;"
                        :breakpoint="0"
                    >
                        <q-tab name="tasks" label="Задачи" />
                        <q-tab name="team" label="Команда" />
                        <q-tab name="calendar" label="Календарь" />
                        <q-tab name="marks" label="Оценки" />
                        <q-btn-dropdown
                            color="white"
                            label="Ещё"
                            flat
                            no-caps
                        >
                            <q-list>
                                <q-item
                                    clickable
                                    v-close-popup
                                >
                                    <q-item-section>
                                        <q-item-label>Ещё</q-item-label>
                                    </q-item-section>
                                </q-item>

                                <q-item
                                    clickable
                                    v-close-popup
                                >
                                    <q-item-section>
                                        <q-item-label>Ещё</q-item-label>
                                    </q-item-section>
                                </q-item>

                                <q-item
                                    clickable
                                    v-close-popup
                                >
                                    <q-item-section>
                                        <q-item-label>Ещё</q-item-label>
                                    </q-item-section>
                                </q-item>
                            </q-list>
                        </q-btn-dropdown>
                    </q-tabs>
                </div>
                <div class="row justify-end">
                    <q-input
                        v-model="search"
                        standout
                        color="white"
                        label-color="white"
                        bg-color="blue"
                        label="Поиск"
                        class="rounded-input col-3"
                    >
                        <template v-slot:prepend>
                            <SearchIcon />
                        </template>
                    </q-input>
                </div>
                <div class="full-width page">
                    <h1>Главная страница</h1>
                </div>
            </div>
        </q-page-container>
    </q-layout>
</template>

<script setup lang="ts">
import AppHeader from 'src/components/header/AppHeader.vue'
import { ref } from 'vue'
import SearchIcon from '../assets/icons/SearchIcon.vue'

const tab = ref('tasks')
const leftDrawerOpen = ref(false)
const miniState = ref(true)
const overlayState = ref(false)
const search = ref()

const toggleMiniState = () => {
    miniState.value = !miniState.value
    overlayState.value = false
}

const toggleDrawerState = () => {
    if (overlayState.value) {
        miniState.value = true
        overlayState.value = false
    } else {
        overlayState.value = true
        leftDrawerOpen.value = true
    }
}

</script>
<style scoped lang="scss">
.nav-tabs {
    height: 56px;
    border-radius: 20px;
    font-family: 'Nunito-Regular';
}

.rounded-input {
    font-size: 18px;
    font-weight: 400;
    font-family: 'Nunito-Regular';
}

::v-deep .rounded-input .q-field__control {
  border-radius: 20px !important;
  padding: 0 20px;
}

.page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100% !important;
  flex-direction: column;
}

.page-container {
    height: 100vh;
}
</style>
