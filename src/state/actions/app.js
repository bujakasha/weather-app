export const APP_READY = 'APP_READY'
export const SET_LOADING = 'SET_LOADING'
export const TOGGLE_INFO_VIEW = 'TOGGLE_INFO_VIEW'

export const setLoading = isLoading => ({
  type: SET_LOADING,
  isLoading,
})

export const setAppReady = () => ({
  type: APP_READY,
})

export const toggleInfo = () => ({
  type: TOGGLE_INFO_VIEW,
})
