<template>
  <div class="status-tabs">
    <div class="header">
      <h1>ANTREAN</h1>
    </div>
    <div class="tabs-container">
      <div class="tabs">
        <button
          v-for="tab in tabs"
          :key="tab.id"
          :class="{ active: activeTab === tab.id }"
          @click="setActiveTab(tab.id)"
        >
          {{ tab.label }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
// eslint-disable-next-line no-unused-vars
const props = defineProps({
  activeTab: {
    type: String,
    default: 'waiting',
  },
})

const emit = defineEmits(['tab-change'])

const tabs = [
  { id: 'waiting', label: 'Menunggu' },
  { id: 'serving', label: 'Dilayani' },
  { id: 'completed', label: 'Selesai' },
]

const setActiveTab = (tabId) => {
  emit('tab-change', tabId)
}
</script>

<style scoped>
.status-tabs {
  margin-bottom: 20px;
}

.header h1 {
  font-family: poppins;
  margin: 0 0 40px;
  font-size: 24px;
  color: #47aa52;
}

.tabs-container {
  display: flex;
  justify-content: center; /* Pusatkan tabs horizontal */
}

.tabs {
  display: inline-flex; /* Membuat tabs hanya sebesar kontennya */
  gap: 10px;
  border-bottom: 1px solid #ddd;
  padding-bottom: 10px;
}

.tabs button {
  font-family: poppins;
  padding: 8px 16px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 16px;
  color: #47aa52;
  position: relative;
}

.tabs button.active {
  color: #47aa52;
  font-weight: bold;
}

.tabs button.active::after {
  content: '';
  position: absolute;
  bottom: -11px;
  left: 0;
  width: 100%;
  height: 3px;
  background-color: #47aa52;
}
</style>
