<template>
  <div class="queue-container">
    <div class="search-box">
      <input
        type="text"
        v-model="searchQuery"
        placeholder="Cari nomor antrean..."
        class="search-input"
      />
      <span class="search-icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      </span>
    </div>
    <div class="table-container">
      <table>
        <thead>
          <tr>
            <th>Nomor Antrean</th>
            <th>Jadwal</th>
            <th>Layanan</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="queue in filteredQueues" :key="queue.id">
            <td>{{ queue.number }}</td>
            <td>{{ queue.date }}</td>
            <td>{{ queue.service }}</td>
            <td>
              <select v-model="queue.status" @change="updateStatus(queue)">
                <option value="waiting">Menunggu</option>
                <option value="serving">Dilayani</option>
                <option value="completed">Selesai</option>
              </select>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'

const props = defineProps({
  queues: {
    type: Array,
    required: true,
  },
  activeTab: {
    type: String,
    default: 'waiting',
  },
})

const emit = defineEmits(['status-updated'])

const searchQuery = ref('')

const filteredQueues = computed(() => {
  let filtered = props.queues.filter((queue) => {
    if (props.activeTab === 'waiting') return queue.status === 'waiting'
    if (props.activeTab === 'serving') return queue.status === 'serving'
    if (props.activeTab === 'completed') return queue.status === 'completed'
    return true
  })

  if (searchQuery.value) {
    filtered = filtered.filter((queue) =>
      queue.number.toLowerCase().includes(searchQuery.value.toLowerCase()),
    )
  }

  return filtered
})

const updateStatus = (queue) => {
  emit('status-updated', queue)
}
</script>

<style scoped>
.queue-container {
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
}

.search-box {
  margin-bottom: 20px;
  position: relative;
  width: 200px;
}

.search-input {
  font-family: poppins;
  width: 100%;
  padding: 8px 16px 8px 40px;
  border: 1px solid #e0e0e0;
  border-radius: 32px;
  font-size: 14px;
  height: 20px;
  transition: all 0.3s ease;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.search-input:focus {
  outline: none;
  border-color: #47aa52;
  box-shadow: 0 0 0 2px rgba(52, 152, 219, 0.2);
}

.search-icon {
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: #7f8c8d;
  pointer-events: none;
}

.table-container {
  overflow-x: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  padding: 12px 15px;
  color: #353535;
  font-family: poppins;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

th {
  background-color: #f8f9fa;
  font-weight: 600;
}

select {
  font-family: poppins;
  padding: 10px 20px;
  border-radius: 4px;
  color: #ffffff;
  background-color: #47aa52;
}
</style>
