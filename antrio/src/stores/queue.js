import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'

export const useQueueStore = defineStore('queue', () => {
  const queues = ref([])

  const fetchQueues = async () => {
    try {
      // Replace with Laravel API endpoint
      const response = await axios.get('http://your-laravel-api/api/queues')
      queues.value = response.data
    } catch (error) {
      console.error('Error fetching queues:', error)
      // For demo purposes, we'll use mock data
      queues.value = [
        {
          id: 1,
          number: 'A 001',
          date: '24 - 01 - 2025',
          service: 'Setor/Tratik Tunal',
          status: 'waiting',
        },
        {
          id: 2,
          number: 'A 002',
          date: '24 - 01 - 2025',
          service: 'Transfer & Pembayaran',
          status: 'waiting',
        },
        {
          id: 3,
          number: 'A 003',
          date: '24 - 01 - 2025',
          service: 'Penukaran Uang',
          status: 'waiting',
        },
        {
          id: 4,
          number: 'A 004',
          date: '24 - 01 - 2025',
          service: 'Setor/Tratik Tunal',
          status: 'serving',
        },
        {
          id: 5,
          number: 'A 005',
          date: '24 - 01 - 2025',
          service: 'Penukaran Uang',
          status: 'completed',
        },
      ]
    }
  }

  const updateQueueStatus = async (queue) => {
    try {
      // Replace with your Laravel API endpoint
      await axios.put(`http://your-laravel-api/api/queues/${queue.id}`, {
        status: queue.status,
      })
      // Update local state
      const index = queues.value.findIndex((q) => q.id === queue.id)
      if (index !== -1) {
        queues.value[index] = { ...queue }
      }
    } catch (error) {
      console.error('Error updating queue status:', error)
    }
  }

  return { queues, fetchQueues, updateQueueStatus }
})
