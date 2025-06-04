import axios from 'axios'

const API_URL = "https://aroakkweiqkrvcxtpswy.supabase.co/rest/v1/notes"
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFyb2Fra3dlaXFrcnZjeHRwc3d5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkwMTk1NzMsImV4cCI6MjA2NDU5NTU3M30.4TPCFi0O_Krk0viWxMM0lGIiwcjEYZ9AtIirwm2BKss"

const headers = {
    apikey: API_KEY,
    Authorization: `Bearer ${API_KEY}`,
    "Content-Type": "application/json",
}

export const notesAPI = {
    async fetchNotes() {
        const response = await axios.get(API_URL, { headers })
        return response.data
    },

    async createNote(data) {
        const response = await axios.post(API_URL, data, { headers })
        return response.data
    },

    async deleteNote(id) {
        await axios.delete(`${API_URL}?id=eq.${id}`, { headers })
    }
}