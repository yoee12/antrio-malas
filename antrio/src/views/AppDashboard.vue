<template>
    <div class="dashboard">
      <StatusTabs 
        :active-tab="activeTab" 
        @tab-change="handleTabChange" 
      />
      <QueueTable 
        :queues="filteredQueues" 
        :active-tab="activeTab"
        @status-updated="handleStatusUpdate"
      />
    </div>
  </template>
  
  <script setup>
  import { ref, computed, onMounted } from 'vue'
  import StatusTabs from '@/components/StatusTabs.vue'
  import QueueTable from '@/components/QueueTable.vue'
  import { useQueueStore } from '@/stores/queue'
  
  const queueStore = useQueueStore()
  const activeTab = ref('waiting')
  
  onMounted(async () => {
    await queueStore.fetchQueues()
  })
  
  const filteredQueues = computed(() => {
    return queueStore.queues
  })
  
  const handleTabChange = (tabId) => {
    activeTab.value = tabId
  }
  
  const handleStatusUpdate = async (queue) => {
    await queueStore.updateQueueStatus(queue)
  }
  </script>
  
  <style scoped>
  .dashboard {
    padding: 20px;
  }
  </style>