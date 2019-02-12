// ** Action Creators **

export const updateSnowboardFormData = snowboardFormData => {
    return {
      type: 'UPDATED_DATA',
      snowboardFormData
    }
  }
  
  export const resetSnowboardForm = () => {
    return {
      type: 'RESET_SNOWBOARD_FORM'
    }
  }